import type { DayKey } from "@/data/business";
import { hours } from "@/data/business";

const order: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function parseTimeToMinutes(t: string): number {
  // accepts "11:00 AM" / "1:00 AM" / "2:00 AM"
  const m = t.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return 0;
  let h = parseInt(m[1], 10);
  const mins = parseInt(m[2], 10);
  const mer = m[3].toUpperCase();
  if (mer === "PM" && h !== 12) h += 12;
  if (mer === "AM" && h === 12) h = 0;
  return h * 60 + mins;
}

function formatHourMinute(mins: number): string {
  let h = Math.floor(mins / 60);
  const m = mins % 60;
  const mer = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return m === 0 ? `${h}${mer}` : `${h}:${String(m).padStart(2, "0")}${mer}`;
}

export type OpenStatus = {
  isOpen: boolean;
  /** Human label: "Open Now" or "Opens at 11AM" */
  label: string;
  /** Just the close time when open, e.g. "1AM" — for hero subhead "Open until 1AM" */
  closesAt?: string;
};

/**
 * Compute open/closed status from the user's local clock.
 *
 * Hours span midnight (e.g. Friday 11AM–2AM Saturday). To handle that,
 * a day is considered "open" if EITHER:
 *   - now is between today's open and today's close (when close is later
 *     than open, same calendar day), OR
 *   - the previous day's hours bleed into today (close < open, after midnight).
 */
export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const todayKey = order[now.getDay()];
  const yesterdayKey = order[(now.getDay() + 6) % 7];

  const minutesNow = now.getHours() * 60 + now.getMinutes();

  // Check yesterday's spillover (e.g. it's 12:30 AM Saturday, Friday's
  // hours close at 2 AM Saturday → still open).
  const yest = hours[yesterdayKey];
  const yClose = parseTimeToMinutes(yest.close);
  const yOpen = parseTimeToMinutes(yest.open);
  const yCrosses = yClose <= yOpen; // close earlier than open ⇒ next-day close
  if (yCrosses && minutesNow < yClose) {
    return {
      isOpen: true,
      label: "Open Now",
      closesAt: formatHourMinute(yClose),
    };
  }

  // Today's window.
  const today = hours[todayKey];
  const tOpen = parseTimeToMinutes(today.open);
  const tClose = parseTimeToMinutes(today.close);
  const tCrosses = tClose <= tOpen;

  if (minutesNow >= tOpen) {
    // open this evening
    return {
      isOpen: true,
      label: "Open Now",
      closesAt: tCrosses
        ? formatHourMinute(tClose) // close time after midnight, shown as "1AM"
        : formatHourMinute(tClose),
    };
  }

  // Closed for now — opens later today.
  return {
    isOpen: false,
    label: `Opens at ${formatHourMinute(tOpen)}`,
  };
}

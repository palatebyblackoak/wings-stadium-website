import type { DayKey } from "@/data/business";

const order: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function todayKey(date = new Date()): DayKey {
  return order[date.getDay()];
}

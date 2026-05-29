"use client";

import { useState } from "react";
import { SectionTag } from "./SectionTag";

type State = "idle" | "loading" | "ok" | "err";

export function WingsClubSignup() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (hp) return; // bot trap — silently drop
    setState("loading");
    setMsg(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "wings-club" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState("err");
        setMsg(data?.error ?? "Something went wrong. Try again in a sec.");
        return;
      }
      setState("ok");
      setMsg(data?.message ?? "You're in. Watch your inbox.");
      setEmail("");
    } catch {
      setState("err");
      setMsg("Couldn't reach the server. Check your connection.");
    }
  }

  return (
    <section
      aria-labelledby="wings-club-heading"
      className="relative overflow-hidden rounded-2xl border border-red-brand/40 bg-red-brand/[0.06] p-6 sm:p-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7">
          <SectionTag size="md" color="red" tilt={-1.5}>
            The Wings Club
          </SectionTag>
          <h2
            id="wings-club-heading"
            className="heading-stack text-white text-4xl sm:text-6xl mt-5"
          >
            Specials. Straight to your inbox.
          </h2>
          <p className="mt-4 font-body text-white/80 max-w-xl">
            One email a week. The night's lineup, the drink that's $5, the
            game we're loudest for. No spam, unsubscribe anytime.
          </p>
        </div>

        <div className="lg:col-span-5">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3"
            noValidate
          >
            <label htmlFor="wings-club-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="wings-club-email"
                type="email"
                inputMode="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={state === "loading" || state === "ok"}
                className="flex-1 rounded-md bg-black/40 border border-white/15 text-white placeholder-white/40 px-4 py-3 font-body text-base focus:outline-none focus:border-red-brand focus:ring-2 focus:ring-red-brand/40 disabled:opacity-60"
              />
              {/* honeypot — hidden from real users, visible to bots */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                aria-hidden
                className="hidden"
                name="company"
              />
              <button
                type="submit"
                disabled={state === "loading" || state === "ok"}
                className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md bg-heat text-ink px-6 py-3 text-base hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === "loading" ? "Signing up…" : state === "ok" ? "You're In" : "Sign Me Up"}
              </button>
            </div>
            {msg && (
              <p
                role="status"
                className={`font-body text-sm ${
                  state === "err" ? "text-red-brand" : "text-yellow-brand"
                }`}
              >
                {msg}
              </p>
            )}
            <p className="font-body text-xs text-white/50">
              By signing up you agree to receive promotional emails from The
              Wings Stadium. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

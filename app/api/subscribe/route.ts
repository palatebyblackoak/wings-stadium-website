import { NextResponse } from "next/server";

export const runtime = "edge";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Body = { email?: unknown; source?: unknown };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const source = typeof body.source === "string" ? body.source : "site";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const klaviyoListId = process.env.KLAVIYO_LIST_ID;
  const klaviyoKey = process.env.KLAVIYO_PRIVATE_KEY;

  // If Klaviyo is configured, relay the subscription. Otherwise log the
  // signup server-side and confirm success to the user — the form keeps
  // working before a provider is connected.
  if (klaviyoListId && klaviyoKey) {
    try {
      const r = await fetch(
        "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            revision: "2024-10-15",
            Authorization: `Klaviyo-API-Key ${klaviyoKey}`,
          },
          body: JSON.stringify({
            data: {
              type: "profile-subscription-bulk-create-job",
              attributes: {
                profiles: {
                  data: [
                    {
                      type: "profile",
                      attributes: {
                        email,
                        subscriptions: {
                          email: { marketing: { consent: "SUBSCRIBED" } },
                        },
                      },
                    },
                  ],
                },
                custom_source: source,
              },
              relationships: {
                list: { data: { type: "list", id: klaviyoListId } },
              },
            },
          }),
        },
      );
      if (!r.ok) {
        const text = await r.text();
        console.error("[subscribe] klaviyo error", r.status, text);
        return NextResponse.json(
          { error: "Couldn't sign you up. Please try again or DM us on Instagram." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("[subscribe] klaviyo fetch failed", err);
      return NextResponse.json(
        { error: "Network hiccup. Try again in a moment." },
        { status: 502 },
      );
    }
  } else {
    // No provider wired yet — log so signups aren't lost during the gap
    // between deploying the form and connecting Klaviyo.
    console.log("[subscribe] (no provider) email=%s source=%s", email, source);
  }

  return NextResponse.json({
    ok: true,
    message: "You're in. Watch your inbox for the next lineup.",
  });
}

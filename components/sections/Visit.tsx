import { business, hours } from "@/data/business";

export function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <header>
        <div className="font-label text-[10px] sm:text-xs tracking-[0.35em] text-red-brand">
          VISIT
        </div>
        <h2
          id="visit-heading"
          className="heading-stack text-white text-[clamp(40px,8vw,120px)] mt-3"
        >
          {business.address.street}, {business.address.city}.
        </h2>
        <p className="mt-5 font-body text-base sm:text-lg text-white/80">
          Open every day. Late on Fridays and Saturdays.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* LEFT — hours + contact */}
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="font-label text-[10px] tracking-[0.3em] text-yellow-brand">
              HOURS
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {Object.values(hours).map((d) => (
                <li
                  key={d.label}
                  className="flex items-baseline justify-between gap-3 text-white/85"
                >
                  <span className="font-display tracking-wider">
                    {d.label}
                  </span>
                  <span className="font-body text-white/65">
                    {d.open} – {d.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="font-label text-[10px] tracking-[0.3em] text-yellow-brand">
              CONTACT
            </div>
            <address className="not-italic mt-3 text-sm space-y-2">
              <div className="text-white">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region}{" "}
                {business.address.postal}
              </div>
              <a
                href={`tel:${business.phoneE164}`}
                className="block text-white hover:text-red-brand"
              >
                {business.phone}
              </a>
            </address>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md px-5 py-3 text-sm text-white hover:brightness-110 transition"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--red) 0%, var(--orange) 100%)",
                }}
              >
                Get Directions
              </a>
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md border-2 border-white/80 text-white px-5 py-3 text-sm hover:bg-white hover:text-ink transition"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — map */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 overflow-hidden bg-black min-h-[360px]">
          <iframe
            src={business.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 360 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Wings Stadium on Google Maps"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

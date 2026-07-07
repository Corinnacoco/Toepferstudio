export interface Market {
  id: string;
  name: string;
  date: string;
  endDate?: string;
  city: string;
  address: string;
  description: string;
  openingHours: string;
  type: string;
  past?: boolean;
}

const markets: Market[] = [
  {
    id: "markt-01",
    name: "Lorem Ipsum Dolor",
    date: "19. Juli 2025",
    city: "Stadt A",
    address: "Lorem-Platz 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    openingHours: "Sa 9–18 Uhr, So 10–17 Uhr",
    type: "Lorem",
    past: false,
  },
  {
    id: "markt-02",
    name: "Consectetur Adipiscing",
    date: "2. August 2025",
    endDate: "3. August 2025",
    city: "Stadt B",
    address: "Ipsum-Straße 5",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    openingHours: "Sa & So 10–18 Uhr",
    type: "Ipsum",
    past: false,
  },
  {
    id: "markt-03",
    name: "Sed Do Eiusmod Tempor",
    date: "13. September 2025",
    endDate: "14. September 2025",
    city: "Stadt C",
    address: "Dolor-Markt 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    openingHours: "Sa 8–17 Uhr, So 10–15 Uhr",
    type: "Dolor",
    past: false,
  },
  {
    id: "markt-04",
    name: "Magna Aliqua Veniam",
    date: "6. Dezember 2025",
    endDate: "7. Dezember 2025",
    city: "Im Atelier",
    address: "Musterstraße 14",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.",
    openingHours: "Sa & So 11–18 Uhr",
    type: "Studio",
    past: false,
  },
  {
    id: "markt-05",
    name: "Quis Nostrud Exercitation",
    date: "22. März 2025",
    city: "Stadt D",
    address: "Amet-Halle 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit consequuntur magni dolores ratione.",
    openingHours: "Sa 10–19 Uhr, So 10–17 Uhr",
    type: "Messe",
    past: true,
  },
];

export default function Markets() {
  const upcoming = markets.filter(m => !m.past);
  const past = markets.filter(m => m.past);

  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* Header */}
      <section style={{ backgroundColor: "var(--card)", borderBottom: "1px solid var(--border)", padding: "5rem 2rem 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Termine
          </p>
          <h1 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, marginBottom: "1.25rem" }}>
            Märkte & Messen
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--muted-foreground)", maxWidth: 560, lineHeight: 1.75 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.5rem", fontWeight: 600, marginBottom: "2.5rem" }}>
            Kommende Termine
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
            {upcoming.map(market => (
              <article
                key={market.id}
                style={{ backgroundColor: "var(--background)", padding: "2.5rem 2rem", display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem", alignItems: "start", transition: "background-color 0.2s" }}
                className="market-article"
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--card)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--background)")}
              >
                <div>
                  <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.125rem", fontWeight: 600, color: "var(--primary)", marginBottom: "0.25rem" }}>{market.date}</p>
                  {market.endDate && <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>bis {market.endDate}</p>}
                  <span style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", padding: "0.15rem 0.5rem", border: "1px solid var(--accent)" }}>
                    {market.type}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.375rem", fontWeight: 600, marginBottom: "0.25rem" }}>{market.name}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.875rem" }}>{market.city} · {market.address}</p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--muted-foreground)", marginBottom: "0.875rem" }}>{market.description}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--foreground)", fontWeight: 500 }}>🕐 {market.openingHours}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", padding: "4rem 2rem 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: "2rem" }}>
            Vergangene Märkte
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
            {past.map(market => (
              <div key={market.id} style={{ backgroundColor: "var(--card)", padding: "1.25rem 2rem", display: "grid", gridTemplateColumns: "180px 1fr", gap: "2rem", opacity: 0.7 }} className="market-article">
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{market.date}</p>
                <div>
                  <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.15rem" }}>{market.name}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>{market.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .market-article { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </div>
  );
}

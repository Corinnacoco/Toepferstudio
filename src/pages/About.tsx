export default function About() {
  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "70vh",
          borderBottom: "1px solid var(--border)",
        }}
        className="about-hero"
      >
        <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", maxHeight: 700 }}>
          <img
            src="/atelier-2.jpg"
            alt="Das Töpferatelier"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(0.85)" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 4rem" }} className="about-hero-text">
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
            Über mich
          </p>
          <h1 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "2rem" }}>
            Lorem ipsum,<br />
            dolor sit amet.
          </h1>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "7rem 2rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, marginBottom: "2rem" }}>
            Lorem ipsum dolor sit
          </h2>
          <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "var(--muted-foreground)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum.</p>
          </div>
        </div>
      </section>

      {/* Studio photos */}
      <section style={{ backgroundColor: "var(--card)", padding: "5rem 2rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "2.5rem" }}>
            Das Atelier
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "auto auto", gap: "4px" }} className="studio-gallery">
            <div style={{ gridRow: "1 / 3", backgroundColor: "var(--secondary)", overflow: "hidden", maxHeight: 520 }}>
              <img src="/atelier-3.jpg" alt="Eingang Atelier" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "saturate(0.85)" }} />
            </div>
            <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", aspectRatio: "1" }}>
              <img src="/atelier-1.jpg" alt="Raum mit Holzofen" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(0.8)" }} />
            </div>
            <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", aspectRatio: "1" }}>
              <img src="/atelier-5.jpg" alt="Küche und Keramiklampen" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "saturate(0.8)" }} />
            </div>
            <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", aspectRatio: "16/9" }}>
              <img src="/atelier-4.jpg" alt="Werkstatt mit Drehscheibe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(0.8)" }} />
            </div>
            <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", aspectRatio: "16/9" }}>
              <img src="/atelier-2.jpg" alt="Atelier Durchblick" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", filter: "saturate(0.8)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, marginBottom: "4rem" }}>
            Lorem ipsum dolor
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
            {[
              { title: "Lorem ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna." },
              { title: "Dolor sit amet", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis." },
              { title: "Consectetur", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint." },
              { title: "Adipiscing elit", body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed." },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: "var(--background)", padding: "2.5rem 2rem" }}>
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.875rem" }}>{title}</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--muted-foreground)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-hero { grid-template-columns: 1fr !important; min-height: auto !important; }
          .about-hero-text { padding: 3.5rem 1.5rem !important; }
          .studio-gallery { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .studio-gallery > div:first-child { grid-row: auto !important; }
        }
      `}</style>
    </div>
  );
}

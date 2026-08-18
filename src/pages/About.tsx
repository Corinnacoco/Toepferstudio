import { useAtelier } from "../data/atelier";

export default function About() {
  const atelier = useAtelier();
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
            Hallo,<br />
            ich bin Julia.
          </h1>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>
            Ich habe eine Leidenschaft für Keramik. Bis 2022 machte ich meine Ausbildung an der Berufsfachschule für Keramik in Landshut. Dort lernte ich die ganze Vielfalt des Keramikhandwerks kennen: das Drehen an der Töpferscheibe, verschiedene Techniken des Formenbaus, die Herstellung von Gipsformen und unterschiedliche Dekortechniken.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}>
            Heute mache ich hauptsächlich Gebrauchskeramik wie Tassen, Teller und Schüsseln und teile mein Wissen in Töpferkursen.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "7rem 2rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, marginBottom: "2rem" }}>
            Mein Weg zur Keramik
          </h2>
          <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "var(--muted-foreground)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p>Schon früh hat mich das Töpfern nicht mehr losgelassen. Während meines Freiwilligen Sozialen Jahres in Israel (2016) half ich in einer Werkstatt für Menschen mit Behinderung in der Keramikwerkstatt mit. Es war eine prägende Erfahrung, die entscheidend für meinen Entschluss war, die Ausbildung zur Keramikerin zu machen.</p>
            <p>Nach der Ausbildung in Landshut zog es mich zurück in meine Heimat Baden-Württemberg. Dort hatte ich zunächst eine kleine Werkstatt im Keller meiner Wohnung in Filderstadt, später konnte ich eine Werkstatt in Stuttgart mitnutzen.</p>
            <p>Eine Reise in die Türkei 2025 hat mich besonders inspiriert: Dort durfte ich eine Töpferei erleben und an Drehscheiben ganz ohne Strom arbeiten. Es war ein sehr besonderes Erlebnis, das mir gezeigt hat, wie ursprünglich dieses Handwerk sein kann.</p>
            <p>Nun entsteht ein Gemeinschaftsatelier in Landau, mit dem Verkauf meiner Stücke und Töpferkursen. Ich freue mich sehr über euren Besuch in meinem Atelier und darauf, mein Wissen in einem Kurs mit euch teilen zu dürfen.</p>
          </div>
        </div>
      </section>

      {/* Atelier: Besuch & Öffnungszeiten (aus Sanity) */}
      {atelier && (
        <section style={{ padding: "5rem 2rem 4rem", backgroundColor: "var(--card)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="atelier-info-grid">
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5E87A1", marginBottom: "1rem" }}>
                Besuch
              </p>
              <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, marginBottom: "1.5rem" }}>
                Das Atelier
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--muted-foreground)" }}>
                {atelier.description}
              </p>
              {atelier.note && (
                <p style={{ marginTop: "1.25rem", fontSize: "0.9375rem", fontStyle: "italic", color: "var(--primary)" }}>
                  {atelier.note}
                </p>
              )}
            </div>
            <div style={{ backgroundColor: "#E9F0F5", border: "1px solid #B9CEDC", borderRadius: "2.5rem 1.5rem 3rem 1.25rem", padding: "2.5rem 2rem", alignSelf: "start" }}>
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>Adresse</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--muted-foreground)", marginBottom: "1.75rem" }}>{atelier.address}</p>
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>Öffnungszeiten</h3>
              <div>
                {atelier.openingHours.split("\n").filter(Boolean).map((line) => (
                  <p key={line} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--muted-foreground)" }}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: "var(--card)", padding: "0 2rem 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5E87A1", marginBottom: "2.5rem" }}>
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
            Was mich ausmacht
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Handwerk", body: "Fundierte Ausbildung an der Berufsfachschule für Keramik in Landshut: vom Drehen an der Scheibe über Formenbau und Gipsformen bis zu Dekortechniken.", radius: "3rem 1.25rem 2.5rem 1.5rem" },
              { title: "Gebrauchskeramik", body: "Ich mache Keramik für den Alltag: Tassen, Teller und Schüsseln, die benutzt werden wollen, schön und praktisch zugleich.", radius: "1.5rem 3rem 1.25rem 2.75rem" },
              { title: "Kurse", body: "Mein Wissen teile ich gerne weiter. In meinen Töpferkursen könnt ihr das Handwerk selbst erleben und eure eigenen Stücke gestalten.", radius: "2.75rem 1.5rem 3rem 1.25rem" },
              { title: "Atelier in Landau", body: "Im entstehenden Gemeinschaftsatelier in Landau findet ihr meine Stücke zum Verkauf, und mich, wenn ihr vorbeischauen möchtet.", radius: "1.25rem 2.5rem 1.5rem 3rem" },
            ].map(({ title, body, radius }) => (
              <div key={title} style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: radius, padding: "2.75rem 2.25rem" }}>
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
          .atelier-info-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}

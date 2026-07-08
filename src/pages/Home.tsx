import { Link } from "react-router-dom";
import { useCourses } from "../data/courses";
import { useMarkets } from "../data/markets";

export default function Home() {
  const courses = useCourses() ?? [];
  const featured = courses.slice(0, 3);
  const upcomingMarkets = (useMarkets() ?? []).filter(m => !m.past).slice(0, 3);

  return (
    <div>
      {/* Hero — split layout */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "88vh",
          borderBottom: "1px solid var(--border)",
        }}
        className="hero-grid"
      >
        {/* Text side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 3rem",
            maxWidth: 600,
            margin: "0 auto",
          }}
          className="hero-text"
        >
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
            Kunst & Handwerk · Landau
          </p>
          <h1
            style={{
              fontFamily: "Aboreto, Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: "1.75rem",
              letterSpacing: "0.02em",
            }}
          >
            Aus Ton<br />
            entsteht<br />
            Alltag.
          </h1>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--muted-foreground)", maxWidth: 380, marginBottom: "2.5rem" }}>
            Wie schön, dass du meine Website gefunden hast! Hier findest du Aktuelles zu Kursen, Workshops und Märkten. Außerdem teile ich in Blog-Beiträgen Inspirationsquellen und Gedanken.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              to="/kurse"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Kurse entdecken
            </Link>
            <Link
              to="/about"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              Über mich
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div style={{ overflow: "hidden", backgroundColor: "var(--secondary)" }} className="hero-image">
          <img
            src="/atelier-5.jpg"
            alt="Atelier mit Holztresen und Keramiklampen"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", filter: "saturate(0.85)" }}
          />
        </div>
      </section>

      {/* Intro strip */}

      {/* Kurse — schlichte Liste */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600 }}>
              Aktuelle Kurse
            </h2>
            <Link to="/kurse" style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--primary)", borderBottom: "1px solid var(--primary)", paddingBottom: "0.15rem" }}>
              Alle ansehen →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {featured.map((course) => (
              <div
                key={course.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "8.5rem 1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "padding-left 0.2s",
                }}
                className="kurs-row"
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "1rem")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
              >
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.125rem", fontWeight: 600, color: "var(--primary)" }}>{course.date.replace(/\.\s*\d{4}$/, "")}</p>
                <div>
                  <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.25rem", fontWeight: 600 }}>{course.title}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{course.duration} · max. {course.maxParticipants} Pers.</p>
                </div>
                <a
                  href={`mailto:hallo@beispiel.de?subject=Anmeldung: ${encodeURIComponent(course.title)}`}
                  style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", whiteSpace: "nowrap", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
                >
                  Anmelden →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser — teal background, image bleeds out */}
      <section
        style={{
          backgroundColor: "#8EB1C7",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            minHeight: 520,
          }}
          className="about-home-grid"
        >
          <div style={{ padding: "6rem 4rem 6rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>
              Über mich
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Hallo,<br />ich bin Julia
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", maxWidth: 440, marginBottom: "2.5rem" }}>
              Ich habe eine Leidenschaft für Keramik und mache hauptsächlich Gebrauchskeramik
              wie Tassen, Teller und Schüsseln. In Landau entsteht gerade ein Gemeinschaftsatelier,
              mit dem Verkauf meiner Stücke und Töpferkursen. Ich freue mich auf euren Besuch!
            </p>
            <Link
              to="/about"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              Mehr über mich
            </Link>
          </div>

          {/* Image panel — bleeds to edge */}
          <div style={{ overflow: "hidden", backgroundColor: "#2d607a" }}>
            <img
              src="/atelier-5.jpg"
              alt="Atelier mit Holztresen und Keramiklampen"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "saturate(0.8) brightness(0.75)", mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </section>

      {/* Markets teaser — loose list */}
      <section style={{ padding: "7rem 2rem", backgroundColor: "var(--background)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600 }}>
              Nächste Märkte
            </h2>
            <Link to="/maerkte" style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--primary)", borderBottom: "1px solid var(--primary)", paddingBottom: "0.15rem" }}>
              Alle Termine →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {upcomingMarkets.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "8.5rem 1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid var(--border)",
                  marginLeft: 0,
                  transition: "padding-left 0.2s",
                }}
                className="market-home-row"
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "1rem")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
              >
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.125rem", fontWeight: 600, color: "var(--primary)" }}>{m.date}</p>
                <div>
                  <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.25rem", fontWeight: 600 }}>{m.name}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{m.city}</p>
                </div>
                <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8EB1C7", whiteSpace: "nowrap" }}>Kommt bald</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-text { padding: 4rem 1.5rem !important; margin: 0 !important; max-width: 100% !important; }
          .hero-image { min-height: 55vw !important; }
          .course-card { grid-template-columns: 1fr !important; margin-left: 0 !important; margin-right: 0 !important; }
          .course-card > div { order: unset !important; min-height: 180px !important; }
          .about-home-grid { grid-template-columns: 1fr !important; }
          .about-home-grid > div:last-child { min-height: 260px; }
        }
        @media (max-width: 600px) {
          .market-home-row { grid-template-columns: 1fr !important; gap: 0.25rem !important; }
        }
      `}</style>
    </div>
  );
}

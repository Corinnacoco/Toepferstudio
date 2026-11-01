import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCourses, categories } from "../data/courses";

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const courses = useCourses() ?? [];
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || courses.length === 0) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
  }, [hash, courses]);

  const filtered = activeCategory === "Alle"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* Page header */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "5rem 2rem 4rem",
          backgroundColor: "var(--card)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Termine
          </p>
          <h1
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              marginBottom: "1.25rem",
            }}
          >
            Kurse
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--muted-foreground)", maxWidth: 560, lineHeight: 1.75 }}>
            In kleinen Gruppen teile ich mein Wissen über Ton und Techniken mit euch.
            Ich biete sowohl Drehkurse und Handaufbaukurse an, für Anfängerinnen und
            Anfänger ebenso wie für Fortgeschrittene. Ich freue mich auf euch!
          </p>
        </div>
      </section>

      {/* Registration info */}
      <section
        style={{
          backgroundColor: "var(--secondary)",
          borderBottom: "1px solid var(--border)",
          padding: "1.25rem 2rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>
            📩 <strong>Anmeldung</strong>: einfach per Mail an{" "}
            <a
              href="mailto:hello@julspottery.de"
              style={{ color: "var(--primary)", fontWeight: 500 }}
            >
              hello@julspottery.de
            </a>
            {" "}mit dem gewünschten Kurs
          </span>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: "2.5rem 2rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.4rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)",
                  backgroundColor: activeCategory === cat ? "var(--primary)" : "transparent",
                  color: activeCategory === cat ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width course list */}
      <section style={{ padding: "3rem 2rem 6rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="w-full md:w-3/4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            {filtered.map(course => (
              <article
                key={course.id}
                id={`kurs-${course.id}`}
                style={{
                  scrollMarginTop: "7rem",
                  backgroundColor: "var(--background)",
                  padding: "2rem 0 0",
                  borderTop: "1px solid var(--border)",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Level tag */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      padding: "0.2rem 0.6rem",
                      border: "1px solid var(--accent)",
                    }}
                  >
                    {course.level}
                  </span>
                  {course.spotsLeft <= 2 && (
                    <span style={{ fontSize: "0.7rem", fontWeight: 500, color: "var(--primary)", letterSpacing: "0.06em" }}>
                      Nur noch {course.spotsLeft} Platz{course.spotsLeft === 1 ? "" : ""}!
                    </span>
                  )}
                </div>

                <h2
                  style={{
                    fontFamily: "Fraunces, Georgia, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                    flex: "0 0 auto",
                  }}
                >
                  {course.title}
                </h2>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.65,
                    overflowWrap: "anywhere",
                    marginBottom: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}
                >
                  {(course.longDescription || course.description || "")
                    .trim()
                    .split(/\r?\n[\t ]*\r?\n(?:[\t ]*\r?\n)*/)
                    .filter(Boolean)
                    .map((paragraph, index) => (
                      <p key={index} style={{ margin: 0, whiteSpace: "pre-line" }}>
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>

                {/* Meta grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                    gap: "0.625rem 1.25rem",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "0.875rem",
                    marginBottom: "1rem",
                    fontSize: "0.8125rem",
                  }}
                >
                  <div>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Datum</p>
                    <p style={{ fontWeight: 500 }}>{course.date}</p>
                  </div>
                  <div>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Dauer</p>
                    <p style={{ fontWeight: 500 }}>{course.duration}</p>
                  </div>
                  <div>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Gruppe</p>
                    <p style={{ fontWeight: 500 }}>max. {course.maxParticipants} Personen</p>
                  </div>
                  <div>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Preis</p>
                    <p style={{ fontWeight: 600, color: "var(--primary)" }}>€ {course.price}</p>
                  </div>
                </div>

                <a
                  href={`mailto:hello@julspottery.de?subject=Anmeldung: ${encodeURIComponent(course.title)}&body=Hallo,%0A%0Aich möchte mich gerne für den Kurs "${encodeURIComponent(course.title)}" am ${encodeURIComponent(course.date)} anmelden.%0A%0AMein Name: %0A%0AVielen Dank!`}
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    maxWidth: "100%",
                    textAlign: "center",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Jetzt per Mail anmelden
                </a>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--muted-foreground)" }}>
              <p>Keine Kurse in dieser Kategorie geplant.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
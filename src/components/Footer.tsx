import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--card)",
        padding: "3rem 2rem 2rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Lorem & Ipsum
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            Lorem ipsum dolor sit amet.<br />
            Consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Seiten
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { to: "/about", label: "Über mich" },
              { to: "/kurse", label: "Kurse" },
              { to: "/maerkte", label: "Märkte" },
              { to: "/blog", label: "Blog" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Kontakt
          </p>
          <a
            href="mailto:hallo@beispiel.de"
            style={{ fontSize: "0.875rem", color: "var(--primary)", display: "block", marginBottom: "0.5rem" }}
          >
            hallo@beispiel.de
          </a>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "2.5rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} Lorem & Ipsum
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </footer>
  );
}

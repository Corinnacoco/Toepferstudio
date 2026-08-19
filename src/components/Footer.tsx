import { useAtelier } from "../data/atelier";

export default function Footer() {
  const atelier = useAtelier();
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
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
            Juls Pottery
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            Keramik · Kurse · Atelier
          </p>
        </div>

        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Kontakt
          </p>
          <a
            href="mailto:hallo@juls-pottery.de"
            style={{ fontSize: "0.875rem", color: "var(--primary)", display: "block", marginBottom: "0.5rem" }}
          >
            hallo@juls-pottery.de
          </a>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
            {atelier ? atelier.address : "Pfortengasse 10, 76829 Landau"}
          </p>
          {atelier && atelier.openingHours.split("\n").filter(Boolean).map((line) => (
            <p key={line} style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>{line}</p>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "2.5rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} Juls Pottery
        </p>
      </div>
    </footer>
  );
}

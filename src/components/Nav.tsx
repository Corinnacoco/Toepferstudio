import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Start" },
  { to: "/about", label: "Über mich" },
  { to: "/kurse", label: "Kurse" },
  { to: "/maerkte", label: "Märkte" },
  { to: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--background)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <NavLink
          to="/"
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: "1.375rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--foreground)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--primary)", flexShrink: 0 }} />
          Juls Pottery
        </NavLink>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map(({ to, label }) => {
            const active = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: active ? 500 : 400,
                  letterSpacing: "0.02em",
                  color: active ? "var(--primary)" : "var(--muted-foreground)",
                  transition: "color 0.2s",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--foreground)",
          }}
          aria-label="Menü öffnen"
        >
          <span style={{ display: "block", width: 24, height: 1.5, background: "currentColor", marginBottom: 6, transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 1.5, background: "currentColor", marginBottom: 6, opacity: open ? 0 : 1, transition: "all 0.2s" }} />
          <span style={{ display: "block", width: 24, height: 1.5, background: "currentColor", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--background)",
            padding: "1.5rem 2rem 2rem",
          }}
        >
          {links.map(({ to, label }) => {
            const active = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  fontFamily: "Fraunces, Georgia, serif",
                  fontSize: "1.25rem",
                  color: active ? "var(--primary)" : "var(--foreground)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}

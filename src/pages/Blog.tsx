import { Link } from "react-router-dom";
import { usePosts } from "../data/blog";

export default function Blog() {
  const posts = usePosts() ?? [];
  const [featured, ...rest] = posts;

  if (!featured) {
    return (
      <div style={{ padding: "8rem 2rem", textAlign: "center", backgroundColor: "var(--background)", minHeight: "60vh" }}>
        <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.5rem", color: "var(--muted-foreground)" }}>
          Noch keine Beiträge vorhanden.
        </p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* Header */}
      <section
        style={{
          backgroundColor: "var(--card)",
          borderBottom: "1px solid var(--border)",
          padding: "5rem 2rem 4rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Notizen aus dem Atelier
          </p>
          <h1
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
            }}
          >
            Blog
          </h1>
        </div>
      </section>

      {/* Featured post */}
      <section style={{ padding: "5rem 2rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Link
            to={`/blog/${featured.slug}`}
            style={{ display: "block", textDecoration: "none" }}
          >
            <article
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                border: "1px solid var(--border)",
                overflow: "hidden",
                marginBottom: "5rem",
                transition: "box-shadow 0.25s",
              }}
              className="featured-post"
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(42,31,20,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", minHeight: 360 }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.8)", transition: "transform 0.5s" }}
                  className="featured-img"
                />
              </div>
              <div
                style={{
                  padding: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "var(--background)",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", padding: "0.2rem 0.6rem", border: "1px solid var(--accent)" }}>
                    {featured.category}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>{featured.readingTime} Lesezeit</span>
                </div>
                <h2
                  style={{
                    fontFamily: "Fraunces, Georgia, serif",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                    color: "var(--foreground)",
                  }}
                >
                  {featured.title}
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
                  {featured.excerpt}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>{featured.date}</p>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {rest.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                <article
                  style={{
                    backgroundColor: "var(--background)",
                    transition: "background-color 0.2s",
                    height: "100%",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--card)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--background)")}
                >
                  <div style={{ backgroundColor: "var(--secondary)", overflow: "hidden", aspectRatio: "16/9" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.8)" }}
                    />
                  </div>
                  <div style={{ padding: "1.75rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "center" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)" }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{post.readingTime}</span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "Fraunces, Georgia, serif",
                        fontSize: "1.1875rem",
                        fontWeight: 600,
                        lineHeight: 1.25,
                        marginBottom: "0.75rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>
                      {post.excerpt}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .featured-post { grid-template-columns: 1fr !important; }
          .featured-post > div:first-child { min-height: 240px !important; }
        }
      `}</style>
    </div>
  );
}

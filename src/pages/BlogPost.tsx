import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.5rem", color: "var(--muted-foreground)" }}>
          Beitrag nicht gefunden.
        </p>
        <Link to="/blog" style={{ color: "var(--primary)", marginTop: "1.5rem", display: "inline-block", fontSize: "0.875rem", fontWeight: 500 }}>
          ← Zurück zum Blog
        </Link>
      </div>
    );
  }

  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* Hero image */}
      <div
        style={{
          width: "100%",
          maxHeight: 500,
          overflow: "hidden",
          backgroundColor: "var(--secondary)",
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", maxHeight: 500, filter: "saturate(0.8)" }}
        />
      </div>

      {/* Article */}
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        <Link
          to="/blog"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            display: "inline-block",
            marginBottom: "2.5rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
        >
          ← Alle Beiträge
        </Link>

        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", alignItems: "center" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", padding: "0.2rem 0.6rem", border: "1px solid var(--accent)" }}>
            {post.category}
          </span>
          <span style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>{post.date}</span>
          <span style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>· {post.readingTime} Lesezeit</span>
        </div>

        <h1
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
            fontStyle: "italic",
            borderLeft: "3px solid var(--primary)",
            paddingLeft: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.85,
            color: "var(--foreground)",
          }}
        >
          {post.body.split("\n\n").map((paragraph, i) => (
            <p key={i} style={{ marginBottom: "1.5rem" }}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--card)",
            padding: "4rem 2rem 5rem",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "2rem",
              }}
            >
              Weitere Beiträge
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1px",
                backgroundColor: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {otherPosts.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <article
                    style={{
                      backgroundColor: "var(--card)",
                      padding: "1.75rem",
                      transition: "background-color 0.2s",
                      height: "100%",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--background)")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--card)")}
                  >
                    <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "0.75rem" }}>
                      {p.category}
                    </span>
                    <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.25, marginBottom: "0.5rem", color: "var(--foreground)" }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>{p.date}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

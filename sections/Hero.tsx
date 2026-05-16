"use client"

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section
            id="home"
            style={{
                padding: "64px 48px",
                borderBottom: "1px solid #1a1a1a",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            {/* Availability badge */}
            <div
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#1a2a0a",
                    border: "1px solid #2a4a10",
                    borderRadius: "100px",
                    padding: "6px 14px",
                    marginBottom: "32px",
                    width: "fit-content",
                }}
            >
                <span
                    style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#c8f65d",
                        display: "inline-block",
                        animation: "pulse 2s infinite",
                    }}
                />
                <span style={{ fontSize: "12px", color: "#c8f65d" }}>
                    Open to opportunities
                </span>
            </div>

            {/* Headline */}
            <h1
                style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "clamp(40px, 6vw, 72px)",
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: "-2px",
                    marginBottom: "24px",
                    maxWidth: "700px",
                }}
            >
                Backend dev,{" "}
                <br />
                upskilling to <span style={{ color: "#c8f65d" }}>full frontend.</span>
            </h1>

            {/* Subtext — tells your story */}
            <p
                style={{
                    color: "#666",
                    fontSize: "16px",
                    lineHeight: 1.8,
                    maxWidth: "460px",
                    marginBottom: "40px",
                }}
            >
                I've spent years managing backends for mobile apps and websites. Now I'm
                bringing that systems thinking to the frontend — learning React and
                building real things along the way.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <button
                    onClick={scrollToProjects}
                    style={{
                        background: "#c8f65d",
                        color: "#000",
                        border: "none",
                        padding: "14px 32px",
                        borderRadius: "100px",
                        fontWeight: 600,
                        fontSize: "14px",
                        cursor: "pointer",
                        fontFamily: "DM Sans, sans-serif",
                    }}
                >
                    See What I'm Building ↓
                </button>


                <a
                    href="/contact"
                    style={{
                        color: "#666",
                        fontSize: "14px",
                        textDecoration: "none",
                        borderBottom: "1px solid #333",
                        paddingBottom: "2px",
                    }}
                >
                    Get in touch →
                </a>
            </div>

            {/* Skills pills — shows both worlds */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "40px",
                }}
            >
                {[
                    { label: "Node.js", type: "backend" },
                    { label: "Firestore", type: "backend" },
                    { label: "JavaScript", type: "backend" },
                    { label: "React", type: "frontend" },
                    { label: "Next.js", type: "frontend" },
                    { label: "TypeScript", type: "frontend" },
                ].map((skill) => (
                    <span
                        key={skill.label}
                        style={{
                            padding: "6px 14px",
                            borderRadius: "100px",
                            fontSize: "12px",
                            background: skill.type === "frontend" ? "#1a2a0a" : "#1a1a1a",
                            color: skill.type === "frontend" ? "#c8f65d" : "#555",
                            border: `1px solid ${skill.type === "frontend" ? "#2a4a10" : "#2a2a2a"}`,
                        }}
                    >
                        {skill.label}
                    </span>
                ))}
            </div>

            {/* Stats */}
            <><div
                style={{
                    display: "flex",
                    gap: "40px",
                    marginTop: "64px",
                    paddingTop: "40px",
                    borderTop: "1px solid #1a1a1a",
                }}
            >
                {[
                    { num: "3+", label: "Years Backend Exp." },
                    { num: "3+", label: "Apps Shipped" },
                    { num: "∞", label: "Still Learning" },
                ].map((stat) => (
                    <div key={stat.label}>
                        <p
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "28px",
                                fontWeight: 800,
                                color: "#c8f65d",
                                lineHeight: 1,
                            }}
                        >
                            {stat.num}
                        </p>
                        <p style={{ color: "#555", fontSize: "12px", marginTop: "6px" }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div><style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style></>
        </section >
    )
}
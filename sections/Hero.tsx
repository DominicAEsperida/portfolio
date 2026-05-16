"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()

        const fontSize = 14
        const chars = "01アイウエオカキクケコ{}[]()<>/\\|=+-*&^%$#@!~"
        let drops: number[] = Array(Math.floor(canvas.width / fontSize)).fill(1)

        const draw = () => {
            ctx.fillStyle = "rgba(13, 13, 13, 0.05)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)]
                const y = drops[i] * fontSize
                const progress = y / canvas.height
                ctx.font = `${fontSize}px monospace`
                ctx.fillStyle =
                    progress < 0.3 ? "#c8f65d" : progress < 0.6 ? "#2a4a10" : "#1a2a08"
                ctx.fillText(char, i * fontSize, y)

                if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
                drops[i]++
            }
        }

        const interval = setInterval(draw, 50)

        const handleResize = () => {
            resize()
            drops = Array(Math.floor(canvas.width / fontSize)).fill(1)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            clearInterval(interval)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="hero-section">

            {/* Matrix canvas — true full background */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.35,
                    zIndex: 0,
                }}
            />

            {/* Gradient overlay — fades left side so text is readable */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(to right, rgba(13,13,13,1) 0%, rgba(13,13,13,0.92) 40%, rgba(13,13,13,0.4) 70%, rgba(13,13,13,0.1) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Bottom fade so it blends into the next section */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "120px",
                    background:
                        "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div className="hero-content">

                {/* Badge */}
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
                        Open to frontend opportunities
                    </span>
                </div>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "clamp(36px, 4.5vw, 64px)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-2px",
                        marginBottom: "24px",
                    }}
                >
                    Backend dev,
                    <br />
                    learning to{" "}
                    <span style={{ color: "#c8f65d" }}>make pixels behave.</span>
                </h1>

                {/* Subtext */}
                <p
                    style={{
                        color: "#888",
                        fontSize: "15px",
                        lineHeight: 1.8,
                        maxWidth: "420px",
                        marginBottom: "40px",
                    }}
                >
                    I've spent years managing backends for mobile apps and websites. Now
                    I'm bringing that systems thinking to the frontend — learning React
                    and building real things along the way.
                </p>

                {/* CTA */}
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        flexWrap: "wrap",
                        marginBottom: "40px",
                    }}
                >
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

                {/* Skill pills */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "48px",
                    }}
                >
                    {[
                        { label: "Node.js", type: "backend" },
                        { label: "Firebase", type: "backend" },
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
                                background:
                                    skill.type === "frontend" ? "#1a2a0a" : "#1a1a1a",
                                color: skill.type === "frontend" ? "#c8f65d" : "#555",
                                border: `1px solid ${skill.type === "frontend" ? "#2a4a10" : "#2a2a2a"
                                    }`,
                            }}
                        >
                            {skill.label}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="stats-row">
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
                            <p
                                style={{ color: "#555", fontSize: "12px", marginTop: "6px" }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
        </section>
    )
}
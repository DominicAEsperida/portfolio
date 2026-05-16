import Link from "next/link"
import AnimateIn from "@/components/AnimateIn"

const services = [
    {
        id: 1,
        title: "Frontend Development",
        description:
            "Building responsive, modern web interfaces using React and Next.js. Focused on clean code, smooth user experiences, and pixel-perfect implementation of designs.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
        icon: "🖥️",
    },
    {
        id: 2,
        title: "Backend Development",
        description:
            "Developing robust server-side applications and APIs. Experienced in building scalable backend systems, handling authentication, and managing databases for web and mobile applications.",
        skills: ["Laravel", "PHP", "REST APIs", "MySQL", "Google Firebase"],
        icon: "⚙️",
    },
    {
        id: 3,
        title: "Mobile App Development",
        description:
            "Creating cross-platform mobile applications for Android using Flutter. Delivered real-world apps with clean UI, Firebase integration, and smooth performance.",
        skills: ["Flutter", "Dart", "Google Firebase", "Cross-platform"],
        icon: "📱",
    },
]

const highlights = [
    { num: "3+", label: "Years of Experience" },
    { num: "3+", label: "Projects Delivered" },
    { num: "2", label: "Platforms (Web & Mobile)" },
]

export default function Services() {
    return (
        <div style={{ padding: "64px 48px" }}>

            {/* Header */}
            <AnimateIn direction="up" delay={0}>
                <p
                    style={{
                        fontSize: "11px",
                        color: "#444",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                    }}
                >
                    What I Do
                </p>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.1}>
                <h2
                    style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "32px",
                        fontWeight: 800,
                        letterSpacing: "-1px",
                        marginBottom: "8px",
                    }}
                >
                    Services I offer.
                </h2>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.2}>
                <p
                    style={{
                        color: "#666",
                        fontSize: "15px",
                        marginBottom: "56px",
                        maxWidth: "480px",
                        lineHeight: 1.7,
                    }}
                >
                    From backend systems to mobile apps — I bring a full-stack mindset to
                    every project I work on.
                </p>
            </AnimateIn>

            {/* Highlights */}
            <AnimateIn direction="up" delay={0.2}>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "16px",
                        marginBottom: "56px",
                        paddingBottom: "56px",
                        borderBottom: "1px solid #1a1a1a",
                    }}
                >
                    {highlights.map((h) => (
                        <div
                            key={h.label}
                            className="stat-card"
                            style={{
                                background: "#141414",
                                border: "1px solid #1e1e1e",
                                borderRadius: "12px",
                                padding: "20px 28px",
                                flex: 1,
                                minWidth: "140px",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "Syne, sans-serif",
                                    fontSize: "28px",
                                    fontWeight: 800,
                                    color: "#c8f65d",
                                    lineHeight: 1,
                                }}
                            >
                                {h.num}
                            </p>
                            <p style={{ color: "#555", fontSize: "12px", marginTop: "6px" }}>
                                {h.label}
                            </p>
                        </div>
                    ))}
                </div>
            </AnimateIn>

            {/* Service cards */}
            <AnimateIn direction="up" delay={0.3}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginBottom: "64px",
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="stat-card"
                            style={{
                                background: "#141414",
                                border: "1px solid #1e1e1e",
                                borderRadius: "16px",
                                padding: "32px",
                            }}
                        >
                            {/* Inner grid — icon/title left, description right */}
                            <div className="service-card-grid">
                                {/* Left */}
                                <div>
                                    <div style={{ fontSize: "32px", marginBottom: "16px" }}>
                                        {service.icon}
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "11px",
                                            color: "#444",
                                            letterSpacing: "2px",
                                            textTransform: "uppercase",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        0{index + 1}
                                    </p>
                                    <h3
                                        style={{
                                            fontFamily: "Syne, sans-serif",
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Right */}
                                <div>
                                    <p
                                        style={{
                                            color: "#666",
                                            fontSize: "14px",
                                            lineHeight: 1.8,
                                            marginBottom: "24px",
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        {service.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                style={{
                                                    padding: "6px 14px",
                                                    borderRadius: "100px",
                                                    fontSize: "12px",
                                                    background: "#1a1a1a",
                                                    color: "#888",
                                                    border: "1px solid #2a2a2a",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn direction="up" delay={0}>
                < div
                    className="cta-row"
                    style={{
                        background: "#141414",
                        border: "1px solid #1e1e1e",
                        borderRadius: "16px",
                        padding: "48px 40px",
                    }}
                >
                    <div>
                        <h3
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "24px",
                                fontWeight: 800,
                                marginBottom: "8px",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            Got a project in mind?
                        </h3>
                        <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>
                            Whether it's a web app, mobile app, or backend system — let's talk
                            about what you need.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        style={{
                            background: "#c8f65d",
                            color: "#000",
                            padding: "14px 32px",
                            borderRadius: "100px",
                            fontWeight: 600,
                            fontSize: "14px",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Let's talk →
                    </Link>
                </div>
            </AnimateIn>

        </div >
    )
}
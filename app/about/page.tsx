import Image from "next/image"

const backendSkills = [
    "Laravel",
    "Google Firebase",
    "Flutter",
    "Dart",
    "JavaScript",
    "PHP",
]

const frontendSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "TypeScript",
]

export default function About() {
    return (
        <div style={{ padding: "64px 48px" }}>

            {/* Section label */}
            <p
                style={{
                    fontSize: "11px",
                    color: "#444",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                }}
            >
                About Me
            </p>

            <h2
                style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "32px",
                    fontWeight: 800,
                    letterSpacing: "-1px",
                    marginBottom: "48px",
                }}
            >
                The person behind the code.
            </h2>

            {/* Top section — photo + bio */}
            <div className="about-grid">

                {/* Profile photo */}
                <div>
                    <div
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "16px",
                            overflow: "hidden",
                            border: "1px solid #1e1e1e",
                        }}
                    >
                        <Image
                            src="/images/profile.jpg"
                            alt="Emmanuel Dominic A. Esperida"
                            width={200}
                            height={200}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                    </div>

                    {/* Location badge */}
                    <div
                        style={{
                            marginTop: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                        }}
                    >
                        <span style={{ color: "#c8f65d", fontSize: "12px" }}>📍</span>
                        <span style={{ color: "#555", fontSize: "12px" }}>
                            San Fernando, Camarines Sur, PH
                        </span>
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <h3
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontSize: "22px",
                            fontWeight: 700,
                            marginBottom: "4px",
                        }}
                    >
                        Emmanuel Dominic A. Esperida
                    </h3>
                    <p style={{ color: "#c8f65d", fontSize: "13px", marginBottom: "20px" }}>
                        Backend Developer → Frontend Explorer
                    </p>

                    <p
                        style={{
                            color: "#666",
                            fontSize: "15px",
                            lineHeight: 1.9,
                            marginBottom: "16px",
                        }}
                    >
                        Motivated and detail-driven Information Technology graduate with
                        practical experience in software and mobile application development.
                        Proficient in multiple programming languages, project collaboration,
                        software testing, debugging, and quality assurance and information
                        security practices.
                    </p>

                    <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.9 }}>
                        With a solid backend foundation, I'm now expanding into frontend
                        development — learning React and Next.js, and building real projects
                        along the way to bridge both worlds.
                    </p>
                </div>
            </div>

            {/* Skills section */}
            <div className="skills-grid">

                {/* Backend */}
                <div>
                    <p
                        style={{
                            fontSize: "11px",
                            color: "#444",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "16px",
                        }}
                    >
                        Backend & Mobile
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {backendSkills.map((skill) => (
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

                {/* Frontend */}
                <div>
                    <p
                        style={{
                            fontSize: "11px",
                            color: "#444",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "16px",
                        }}
                    >
                        Frontend — Currently Learning
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {frontendSkills.map((skill) => (
                            <span
                                key={skill}
                                style={{
                                    padding: "6px 14px",
                                    borderRadius: "100px",
                                    fontSize: "12px",
                                    background: "#1a2a0a",
                                    color: "#c8f65d",
                                    border: "1px solid #2a4a10",
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "64px" }}>
                <p
                    style={{
                        fontSize: "11px",
                        color: "#444",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "24px",
                    }}
                >
                    Education
                </p>

                <div
                    style={{
                        background: "#141414",
                        border: "1px solid #1e1e1e",
                        borderRadius: "16px",
                        padding: "24px 28px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "16px",
                    }}
                >
                    <div>
                        <h4
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "16px",
                                fontWeight: 700,
                                marginBottom: "6px",
                            }}
                        >
                            Ateneo de Naga University
                        </h4>
                        <p style={{ color: "#666", fontSize: "13px" }}>
                            Bachelor of Science in Information Technology
                        </p>
                    </div>

                    <div style={{ textAlign: "right" }}>
                        <span
                            style={{
                                display: "inline-block",
                                padding: "4px 12px",
                                background: "#1a2a0a",
                                border: "1px solid #2a4a10",
                                borderRadius: "100px",
                                fontSize: "11px",
                                color: "#c8f65d",
                                marginBottom: "6px",
                            }}
                        >
                            Honorable Mention
                        </span>
                        <p style={{ color: "#555", fontSize: "12px" }}>Graduated 2025</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div
                className="cta-row"
                style={{
                    background: "#141414",
                    border: "1px solid #1e1e1e",
                    borderRadius: "16px",
                    padding: "40px",
                }}
            >
                <div>
                    <h3
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontSize: "22px",
                            fontWeight: 800,
                            marginBottom: "8px",
                        }}
                    >
                        Let's work together.
                    </h3>
                    <p style={{ color: "#666", fontSize: "14px" }}>
                        Open to frontend roles, collaborations, and freelance projects.
                    </p>
                </div>

                <a
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
                    Get in touch →
                </a>
            </div>

        </div>
    )
}
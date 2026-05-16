import Image from "next/image"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

const stats = [
    { num: "3", label: "Projects Built" },
    { num: "2", label: "Mobile Apps" },
    { num: "1", label: "Web App" },
]

export default function Projects() {
    return (
        <div style={{ padding: "64px 48px" }}>

            {/* Header */}
            <p
                style={{
                    fontSize: "11px",
                    color: "#444",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                }}
            >
                My Work
            </p>
            <h2
                style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "32px",
                    fontWeight: 800,
                    letterSpacing: "-1px",
                    marginBottom: "8px",
                }}
            >
                Things I've built.
            </h2>
            <p
                style={{
                    color: "#666",
                    fontSize: "15px",
                    marginBottom: "36px",
                    maxWidth: "480px",
                    lineHeight: 1.7,
                }}
            >
                A mix of mobile apps and web systems — built with real users in mind
                and shipped as part of academic and personal projects.
            </p>

            {/* Stats row */}
            <div
                style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "10px",
                    paddingBottom: "36px",
                    borderBottom: "1px solid #1a1a1a",
                }}
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            background: "#141414",
                            border: "1px solid #1e1e1e",
                            borderRadius: "12px",
                            padding: "20px 28px",
                            minWidth: "120px",
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
                            {stat.num}
                        </p>
                        <p style={{ color: "#555", fontSize: "12px", marginTop: "6px" }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Projects grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
                    gap: "15px",
                    marginBottom: "50px",
                }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* CTA */}
            <div
                style={{
                    background: "#141414",
                    border: "1px solid #1e1e1e",
                    borderRadius: "16px",
                    padding: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
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
                        Got a project in mind?
                    </h3>
                    <p style={{ color: "#666", fontSize: "14px" }}>
                        I'm open to collaborations, freelance work, and new opportunities.
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
                    Let's talk →
                </a>
            </div>

        </div>
    )
}
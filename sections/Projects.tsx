import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                padding: "64px 48px",
                borderBottom: "1px solid #1a1a1a",
                width: "100%",        // ← add this
                boxSizing: "border-box", // ← add this
            }}
        >
            {/* Section header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "40px",
                    width: "100%",
                }}
            >
                <div>
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
                        }}
                    >
                        Selected Projects
                    </h2>
                </div>

                <a
                    href="/projects"
                    style={{
                        color: "#666",
                        fontSize: "13px",
                        textDecoration: "none",
                        borderBottom: "1px solid #333",
                        paddingBottom: "2px",
                        whiteSpace: "nowrap",
                    }}
                >
                    View all →
                </a>
            </div>

            {/* Project cards grid */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section >
    )
}
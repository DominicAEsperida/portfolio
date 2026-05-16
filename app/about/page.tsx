import Image from "next/image"
import AnimateIn from "@/components/AnimateIn"

const backendSkills = [
    "Laravel", "Google Firebase", "Flutter", "Dart", "JavaScript", "PHP",
]

const frontendSkills = [
    "React", "Next.js", "Tailwind CSS", "HTML", "TypeScript",
]

const experiences = [
    {
        company: "PNP-ACG Camarines Sur Provincial Cyber Response Team",
        role: "Cybersecurity Intern",
        location: "Naga City, Camarines Sur",
        duration: "February 2025 – May 2025",
        bullets: [
            "Performed account recovery and resolved user access issues",
            "Provided technical support for cybersecurity incidents and online fraud cases",
            "Conducted basic network configuration and troubleshooting",
            "Assisted in digital evidence collection and documentation",
            "Applied basic ethical hacking techniques for system assessment",
        ],
    },
    {
        company: "MDRRMO LGU San Fernando",
        role: "MDRRMO Staff",
        location: "San Fernando, Camarines Sur",
        duration: "June 2020 – December 2023",
        bullets: [
            "Performed administrative and IT support tasks including data entry and email management",
            "Maintained accurate records and organized documentation systems",
            "Assisted in improving workflow efficiency and data handling processes",
            "Collaborated with team members to meet operational deadlines",
        ],
    },
]

const certificates = [
    {
        title: "Certified Data Center Technician (CDCT)",
        issuer: "East West International Educational Specialists",
        date: "Nov 2024",
        link: "https://www.credly.com/badges/095e1932-b028-4193-8901-416c59d2c071/linked_in_profile",
    },
    {
        title: "Cyber Threat Management",
        issuer: "Cisco",
        date: "Oct 2025",
        link: "https://www.credly.com/badges/e74e7252-32a1-4f7a-958b-fdf53d3171bf/linked_in_profile",
    },
    {
        title: "Smartbooks and Power BI — Smartbooks Advance with Analytics",
        issuer: "FIT Academy",
        date: "Jun 2024",
        link: "",
    },
    {
        title: "SAP Business One — Database Management System for IT",
        issuer: "FIT Academy",
        date: "Oct 2022",
        link: "",
    },
    {
        title: "Ateneo Computer Programming Competition — Freshmen Edition",
        issuer: "Ateneo de Naga University",
        date: "Dec 2021",
        link: "",
    },
]

export default function About() {
    return (
        <div style={{ padding: "64px 48px" }}>

            {/* Section label */}
            <AnimateIn direction="up">
                <p style={{
                    fontSize: "11px", color: "#444", letterSpacing: "3px",
                    textTransform: "uppercase", marginBottom: "8px",
                }}>
                    About Me
                </p>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.1}>
                <h2 style={{
                    fontFamily: "Syne, sans-serif", fontSize: "32px",
                    fontWeight: 800, letterSpacing: "-1px", marginBottom: "48px",
                }}>
                    The person behind the code.
                </h2>
            </AnimateIn>

            {/* Photo + Bio */}
            <AnimateIn direction="up" delay={0.2}>
                <div className="about-grid">
                    <div>
                        <div style={{
                            width: "200px", height: "200px", borderRadius: "16px",
                            overflow: "hidden", border: "1px solid #1e1e1e",
                        }}>
                            <Image
                                src="/images/profile-pic.jpg"
                                alt="Emmanuel Dominic A. Esperida"
                                width={200} height={200}
                                style={{ objectFit: "cover", objectPosition: "50% 10%", width: "100%", height: "100%" }}
                            />
                        </div>
                        <div style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                            <span style={{ color: "#c8f65d", fontSize: "12px" }}>📍</span>
                            <span style={{ color: "#555", fontSize: "12px" }}>
                                San Fernando, Camarines Sur, PH
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 style={{
                            fontFamily: "Syne, sans-serif", fontSize: "22px",
                            fontWeight: 700, marginBottom: "4px",
                        }}>
                            Emmanuel Dominic A. Esperida
                        </h3>
                        <p style={{ color: "#c8f65d", fontSize: "13px", marginBottom: "20px" }}>
                            Backend Developer → Frontend Explorer
                        </p>
                        <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>
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
            </AnimateIn>

            {/* Skills */}
            <AnimateIn direction="up" delay={0.1}>
                <div className="skills-grid">
                    <div>
                        <p style={{
                            fontSize: "11px", color: "#444", letterSpacing: "3px",
                            textTransform: "uppercase", marginBottom: "16px",
                        }}>
                            Backend & Mobile
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {backendSkills.map((skill) => (
                                <span key={skill} style={{
                                    padding: "6px 14px", borderRadius: "100px", fontSize: "12px",
                                    background: "#1a1a1a", color: "#888", border: "1px solid #2a2a2a",
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p style={{
                            fontSize: "11px", color: "#444", letterSpacing: "3px",
                            textTransform: "uppercase", marginBottom: "16px",
                        }}>
                            Frontend — Currently Learning
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {frontendSkills.map((skill) => (
                                <span key={skill} style={{
                                    padding: "6px 14px", borderRadius: "100px", fontSize: "12px",
                                    background: "#1a2a0a", color: "#c8f65d", border: "1px solid #2a4a10",
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimateIn>

            {/* Work Experience */}
            <AnimateIn direction="up" delay={0.1}>
                <div style={{ marginBottom: "64px" }}>
                    <p style={{
                        fontSize: "11px", color: "#444", letterSpacing: "3px",
                        textTransform: "uppercase", marginBottom: "24px",
                    }}>
                        Work Experience
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {experiences.map((exp) => (
                            <div key={exp.company} style={{
                                background: "#141414", border: "1px solid #1e1e1e",
                                borderRadius: "16px", padding: "28px 32px",
                            }}>
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignItems: "start", flexWrap: "wrap", gap: "8px",
                                    marginBottom: "16px",
                                }}>
                                    <div>
                                        <h4 style={{
                                            fontFamily: "Syne, sans-serif", fontSize: "16px",
                                            fontWeight: 700, marginBottom: "4px",
                                        }}>
                                            {exp.role}
                                        </h4>
                                        <p style={{ color: "#c8f65d", fontSize: "13px" }}>{exp.company}</p>
                                        <p style={{ color: "#555", fontSize: "12px", marginTop: "2px" }}>{exp.location}</p>
                                    </div>
                                    <span style={{
                                        padding: "4px 12px", borderRadius: "100px", fontSize: "11px",
                                        background: "#1a1a1a", color: "#666", border: "1px solid #2a2a2a",
                                        whiteSpace: "nowrap",
                                    }}>
                                        {exp.duration}
                                    </span>
                                </div>

                                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                                            <span style={{ color: "#c8f65d", marginTop: "2px", flexShrink: 0 }}>→</span>
                                            <span style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimateIn>

            {/* Education */}
            <AnimateIn direction="up" delay={0.1}>
                <div style={{ marginBottom: "64px" }}>
                    <p style={{
                        fontSize: "11px", color: "#444", letterSpacing: "3px",
                        textTransform: "uppercase", marginBottom: "24px",
                    }}>
                        Education
                    </p>
                    <div style={{
                        background: "#141414", border: "1px solid #1e1e1e",
                        borderRadius: "16px", padding: "24px 28px", display: "flex",
                        justifyContent: "space-between", alignItems: "center",
                        flexWrap: "wrap", gap: "16px",
                    }}>
                        <div>
                            <h4 style={{
                                fontFamily: "Syne, sans-serif", fontSize: "16px",
                                fontWeight: 700, marginBottom: "6px",
                            }}>
                                Ateneo de Naga University
                            </h4>
                            <p style={{ color: "#666", fontSize: "13px" }}>
                                Bachelor of Science in Information Technology
                            </p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <span style={{
                                display: "inline-block", padding: "4px 12px", background: "#1a2a0a",
                                border: "1px solid #2a4a10", borderRadius: "100px",
                                fontSize: "11px", color: "#c8f65d", marginBottom: "8px",
                            }}>
                                Honorable Mention
                            </span>
                            <p style={{ color: "#555", fontSize: "12px", marginRight: "3px" }}>Graduated 2025</p>
                        </div>
                    </div>
                </div>
            </AnimateIn>

            {/* Certificates */}
            <AnimateIn direction="up" delay={0.1}>
                <div style={{ marginBottom: "64px" }}>
                    <p style={{
                        fontSize: "11px", color: "#444", letterSpacing: "3px",
                        textTransform: "uppercase", marginBottom: "24px",
                    }}>
                        Licenses & Certifications
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {certificates.map((cert) => (
                            <div key={cert.title} style={{
                                background: "#141414", border: "1px solid #1e1e1e",
                                borderRadius: "12px", padding: "20px 24px", display: "flex",
                                justifyContent: "space-between", alignItems: "center",
                                flexWrap: "wrap", gap: "12px",
                            }}>
                                <div>
                                    <h4 style={{
                                        fontFamily: "Syne, sans-serif", fontSize: "14px",
                                        fontWeight: 600, marginBottom: "4px",
                                    }}>
                                        {cert.title}
                                    </h4>
                                    <p style={{ color: "#555", fontSize: "12px" }}>
                                        {cert.issuer} · {cert.date}
                                    </p>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: "6px 16px", borderRadius: "100px", fontSize: "12px",
                                            background: "#1a1a1a", color: "#888", border: "1px solid #2a2a2a",
                                            textDecoration: "none", whiteSpace: "nowrap",
                                        }}
                                    >
                                        View credential →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </AnimateIn>
            {/* CTA */}
            <AnimateIn direction="up" delay={0.1}>
                <div className="cta-row" style={{
                    background: "#141414", border: "1px solid #1e1e1e",
                    borderRadius: "16px", padding: "40px",
                }}>
                    <div>
                        <h3 style={{
                            fontFamily: "Syne, sans-serif", fontSize: "22px",
                            fontWeight: 800, marginBottom: "8px",
                        }}>
                            Let's work together.
                        </h3>
                        <p style={{ color: "#666", fontSize: "14px" }}>
                            Open to frontend roles, collaborations, and freelance projects.
                        </p>
                    </div>
                    <a
                        href="/contact"
                        style={{
                            background: "#c8f65d", color: "#000", padding: "14px 32px",
                            borderRadius: "100px", fontWeight: 600, fontSize: "14px",
                            textDecoration: "none", whiteSpace: "nowrap",
                        }}
                    >
                        Get in touch →
                    </a>
                </div>
            </AnimateIn>

        </div>
    )
}
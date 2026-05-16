"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="sidebar"
        // style={{
        //     width: "220px",
        //     minWidth: "220px",
        //     minHeight: "100vh",
        //     background: "#111",
        //     borderRight: "1px solid #1a1a1a",
        //     padding: "32px 20px",
        //     display: "flex",
        //     flexDirection: "column",
        //     position: "sticky",
        //     top: 0,
        //     height: "100vh",
        // }}
        >
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={30}
                    height={15}
                    style={{ objectFit: "contain", marginBottom: "30px" }}
                />
            </Link>

            {/* Nav Links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                padding: "10px 14px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                background: isActive ? "#1e1e1e" : "transparent",
                                color: isActive ? "#f0f0f0" : "#666",
                                transition: "all 0.2s",
                            }}
                        >
                            {isActive && (
                                <span
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "#c8f65d",
                                        flexShrink: 0,
                                    }}
                                />
                            )}
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom section */}
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Social links */}
                <div style={{ display: "flex", gap: "10px" }}>
                    <a
                        href="https://github.com/DominicAEsperida"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            flex: 1,
                            padding: "10px",
                            background: "#1a1a1a",
                            border: "1px solid #2a2a2a",
                            borderRadius: "8px",
                            color: "#666",
                            textDecoration: "none",
                            fontSize: "12px",
                            textAlign: "center",
                            transition: "all 0.2s",
                        }}
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/emmanuel-dominic-esperida-81a480311/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            flex: 1,
                            padding: "10px",
                            background: "#1a1a1a",
                            border: "1px solid #2a2a2a",
                            borderRadius: "8px",
                            color: "#666",
                            textDecoration: "none",
                            fontSize: "12px",
                            textAlign: "center",
                            transition: "all 0.2s",
                        }}
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Available badge */}
                <div
                    style={{
                        background: "#1a2a0a",
                        border: "1px solid #2a4a10",
                        borderRadius: "10px",
                        padding: "14px",
                    }}
                >
                    <p style={{ color: "#c8f65d", fontSize: "13px", fontWeight: 500 }}>
                        ✦ Available for work
                    </p>
                    <p style={{ color: "#556644", fontSize: "11px", marginTop: "4px" }}>
                        Open to frontend roles
                    </p>
                </div>

            </div >
        </aside >
    )
}
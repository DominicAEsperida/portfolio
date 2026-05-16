"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
]

export default function Sidebar() {
    const pathname = usePathname()
    const [hoveredLink, setHoveredLink] = useState(null)
    const [logoHovered, setLogoHovered] = useState(false)

    return (
        <aside className="sidebar">

            {/* Logo with glow */}
            <Link
                href="/"
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
                style={{
                    display: "inline-block",
                    marginBottom: "30px",
                    transition: "filter 0.3s",
                    filter: logoHovered
                        ? "drop-shadow(0 0 12px #c8f65d) drop-shadow(0 0 24px #c8f65d88)"
                        : "none",
                }}
            >
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={40}
                    height={20}
                    style={{ objectFit: "contain" }}
                />
            </Link>

            {/* Nav Links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    const isHovered = hoveredLink === link.href

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoveredLink(link.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                                padding: "10px 14px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                transition: "all 0.2s",
                                background: isActive
                                    ? "#1e1e1e"
                                    : isHovered
                                        ? "#191919"
                                        : "transparent",
                                color: isActive
                                    ? "#f0f0f0"
                                    : isHovered
                                        ? "#ccc"
                                        : "#666",
                            }}
                        >
                            <span
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    background: "#c8f65d",
                                    flexShrink: 0,
                                    opacity: isActive ? 1 : isHovered ? 0.4 : 0,
                                    transition: "opacity 0.2s",
                                }}
                            />
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom section */}
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Social links */}
                <div style={{ display: "flex", gap: "10px" }}>
                    {[
                        { label: "GitHub", href: "https://github.com/DominicAEsperida" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-dominic-esperida-81a480311/" },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#222"
                                e.currentTarget.style.color = "#aaa"
                                e.currentTarget.style.borderColor = "#444"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#1a1a1a"
                                e.currentTarget.style.color = "#666"
                                e.currentTarget.style.borderColor = "#2a2a2a"
                            }}
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
                            {social.label}
                        </a>
                    ))}
                </div>

                {/* Available badge */}
                <div style={{
                    background: "#1a2a0a",
                    border: "1px solid #2a4a10",
                    borderRadius: "10px",
                    padding: "14px",
                }}>
                    <p style={{ color: "#c8f65d", fontSize: "13px", fontWeight: 500 }}>
                        ✦ Available for work
                    </p>
                    <p style={{ color: "#556644", fontSize: "11px", marginTop: "4px" }}>
                        Open to frontend roles
                    </p>
                </div>
            </div>
        </aside>
    )
}
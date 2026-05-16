"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
]

export default function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <nav
            style={{
                display: "none",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                background: "#111",
                borderBottom: "1px solid #1a1a1a",
                padding: "16px 24px",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            className="mobile-nav"
        >
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={60}
                    height={30}
                    style={{ objectFit: "contain" }}
                />
            </Link>

            {/* Hamburger */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    background: "none",
                    border: "1px solid #2a2a2a",
                    borderRadius: "8px",
                    color: "#fff",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                {open ? "✕" : "☰"}
            </button>

            {/* Dropdown menu */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "#111",
                        borderBottom: "1px solid #1a1a1a",
                        padding: "16px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{
                                padding: "12px 0",
                                color: "#888",
                                textDecoration: "none",
                                fontSize: "15px",
                                borderBottom: "1px solid #1a1a1a",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}
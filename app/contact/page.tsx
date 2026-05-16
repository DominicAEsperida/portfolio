"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_5zgw2f9"
const TEMPLATE_ID = "template_mwjnurd"
const PUBLIC_KEY = "_4jDUQu0rcAkaB3zi"

const contactInfo = [
    {
        label: "Email",
        value: "edesperida27@gmail.com",
        href: "mailto:edesperida27@gmail.com",
    },
    {
        label: "GitHub",
        value: "DominicAEsperida",
        href: "https://github.com/DominicAEsperida",
    },
    {
        label: "LinkedIn",
        value: "Emmanuel Dominic Esperida",
        href: "https://www.linkedin.com/in/emmanuel-dominic-esperida-81a480311/",
    },
]

export default function Contact() {
    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        message: "",
    })
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()

        if (!form.from_name || !form.from_email || !form.message) {
            alert("Please fill in all fields.")
            return
        }

        setStatus("sending")

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            setStatus("success")
            setForm({ from_name: "", from_email: "", message: "" })
        } catch {
            setStatus("error")
        }
    }

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
                Contact
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
                Let's build something together.
            </h2>
            <p style={{ color: "#666", fontSize: "15px", marginBottom: "48px" }}>
                Open to frontend roles, freelance projects, and collaborations.
            </p>

            {/* Main grid */}
            <div className="contact-grid">

                {/* Left — contact info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {contactInfo.map((info) => (
                        <a
                            key={info.label}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#141414",
                                border: "1px solid #1e1e1e",
                                borderRadius: "12px",
                                padding: "18px 20px",
                                textDecoration: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                                transition: "border-color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.borderColor = "#333")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.borderColor = "#1e1e1e")
                            }
                        >
                            <span
                                style={{
                                    fontSize: "11px",
                                    color: "#444",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {info.label}
                            </span>
                            <span style={{ color: "#c8f65d", fontSize: "13px" }}>
                                {info.value} →
                            </span>
                        </a>
                    ))}

                    {/* Availability note */}
                    <div
                        style={{
                            background: "#1a2a0a",
                            border: "1px solid #2a4a10",
                            borderRadius: "12px",
                            padding: "18px 20px",
                            marginTop: "4px",
                        }}
                    >
                        <p style={{ color: "#c8f65d", fontSize: "13px", fontWeight: 500 }}>
                            ✦ Currently available
                        </p>
                        <p style={{ color: "#556644", fontSize: "12px", marginTop: "4px", lineHeight: 1.6 }}>
                            Open to frontend roles, freelance work, and interesting collaborations.
                        </p>
                    </div>
                </div>

                {/* Right — contact form */}
                <div
                    style={{
                        background: "#141414",
                        border: "1px solid #1e1e1e",
                        borderRadius: "16px",
                        padding: "32px",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                        {/* Name */}
                        <div>
                            <label
                                style={{
                                    fontSize: "11px",
                                    color: "#444",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    display: "block",
                                    marginBottom: "8px",
                                }}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                value={form.from_name}
                                onChange={handleChange}
                                placeholder="Your name"
                                style={{
                                    width: "100%",
                                    background: "#0d0d0d",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: "8px",
                                    padding: "12px 16px",
                                    color: "#f0f0f0",
                                    fontSize: "14px",
                                    outline: "none",
                                    fontFamily: "DM Sans, sans-serif",
                                }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                style={{
                                    fontSize: "11px",
                                    color: "#444",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    display: "block",
                                    marginBottom: "8px",
                                }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                value={form.from_email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                style={{
                                    width: "100%",
                                    background: "#0d0d0d",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: "8px",
                                    padding: "12px 16px",
                                    color: "#f0f0f0",
                                    fontSize: "14px",
                                    outline: "none",
                                    fontFamily: "DM Sans, sans-serif",
                                }}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                style={{
                                    fontSize: "11px",
                                    color: "#444",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    display: "block",
                                    marginBottom: "8px",
                                }}
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or opportunity..."
                                rows={5}
                                style={{
                                    width: "100%",
                                    background: "#0d0d0d",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: "8px",
                                    padding: "12px 16px",
                                    color: "#f0f0f0",
                                    fontSize: "14px",
                                    outline: "none",
                                    resize: "vertical",
                                    fontFamily: "DM Sans, sans-serif",
                                    lineHeight: 1.7,
                                }}
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            onClick={handleSubmit}
                            disabled={status === "sending"}
                            style={{
                                background: status === "success" ? "#1a2a0a" : "#c8f65d",
                                color: status === "success" ? "#c8f65d" : "#000",
                                border: status === "success" ? "1px solid #2a4a10" : "none",
                                padding: "14px 32px",
                                borderRadius: "100px",
                                fontWeight: 600,
                                fontSize: "14px",
                                cursor: status === "sending" ? "not-allowed" : "pointer",
                                fontFamily: "DM Sans, sans-serif",
                                opacity: status === "sending" ? 0.7 : 1,
                                transition: "all 0.2s",
                            }}
                        >
                            {status === "idle" && "Send Message →"}
                            {status === "sending" && "Sending..."}
                            {status === "success" && "✓ Message Sent!"}
                            {status === "error" && "Failed — Try Again"}
                        </button>

                        {/* Error message */}
                        {status === "error" && (
                            <p style={{ color: "#e74c3c", fontSize: "12px", textAlign: "center" }}>
                                Something went wrong. Please email me directly at edesperida27@gmail.com
                            </p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
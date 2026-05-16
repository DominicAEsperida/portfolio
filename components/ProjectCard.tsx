"use client"

import { useState } from "react"
import Image from "next/image"
import { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
    const [activeImage, setActiveImage] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalImage, setModalImage] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)

    return (
        <>
            {/* Card */}
            <div
                onClick={() => { setModalOpen(true); setModalImage(activeImage) }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    background: "#141414",
                    border: "1px solid #1e1e1e",
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.2s, transform 0.2s",
                    borderColor: hovered ? "#333" : "#1e1e1e",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                }}
            >
                {/* Image gallery */}
                <div style={{ position: "relative", height: "220px", background: "#0d0d0d" }}>
                    <Image
                        src={project.images[activeImage]}
                        alt={`${project.title} screenshot ${activeImage + 1}`}
                        fill
                        style={{ objectFit: "cover", transition: "opacity 0.3s" }}
                    />

                    {/* Hover overlay */}
                    {hovered && (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(0,0,0,0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span
                                style={{
                                    background: "#c8f65d",
                                    color: "#000",
                                    padding: "8px 20px",
                                    borderRadius: "100px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                }}
                            >
                                View Details
                            </span>
                        </div>
                    )}

                    {/* Dot indicators */}
                    {project.images.length > 1 && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: "12px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                gap: "6px",
                                zIndex: 10,
                            }}
                        >
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setActiveImage(i) }}
                                    style={{
                                        width: i === activeImage ? "20px" : "6px",
                                        height: "6px",
                                        borderRadius: "100px",
                                        border: "none",
                                        background: i === activeImage ? "#c8f65d" : "#444",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Card body */}
                <div style={{ padding: "20px 24px" }}>
                    <h3
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#f0f0f0",
                            marginBottom: "10px",
                        }}
                    >
                        {project.title}
                    </h3>
                    <p
                        style={{
                            color: "#666",
                            fontSize: "13px",
                            lineHeight: 1.7,
                            marginBottom: "16px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: "4px 12px",
                                    borderRadius: "100px",
                                    fontSize: "11px",
                                    background: "#1a1a1a",
                                    color: "#888",
                                    border: "1px solid #2a2a2a",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div
                    onClick={() => setModalOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.85)",
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "#141414",
                            border: "1px solid #2a2a2a",
                            borderRadius: "20px",
                            width: "100%",
                            maxWidth: "720px",
                            maxHeight: "90vh",
                            overflowY: "auto",
                        }}
                    >
                        {/* Modal image — clickable to open lightbox */}
                        <div
                            onClick={() => setLightboxOpen(true)}
                            style={{
                                position: "relative",
                                height: "320px",
                                background: "#0d0d0d",
                                borderRadius: "20px 20px 0 0",
                                overflow: "hidden",
                                cursor: "zoom-in",
                            }}
                        >
                            <Image
                                src={project.images[modalImage]}
                                alt={`${project.title} screenshot ${modalImage + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                            />

                            {/* Close button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setModalOpen(false) }}
                                style={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "16px",
                                    background: "rgba(0,0,0,0.6)",
                                    border: "1px solid #333",
                                    borderRadius: "100px",
                                    color: "#fff",
                                    width: "36px",
                                    height: "36px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                ✕
                            </button>

                            {/* Zoom hint */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "16px",
                                    left: "16px",
                                    background: "rgba(0,0,0,0.6)",
                                    border: "1px solid #333",
                                    borderRadius: "100px",
                                    padding: "4px 12px",
                                    fontSize: "11px",
                                    color: "#aaa",
                                }}
                            >
                                🔍 Click to zoom
                            </div>

                            {/* Image navigation */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setModalImage((prev) =>
                                                prev === 0 ? project.images.length - 1 : prev - 1
                                            )
                                        }}
                                        style={{
                                            position: "absolute",
                                            left: "16px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            background: "rgba(0,0,0,0.6)",
                                            border: "1px solid #333",
                                            borderRadius: "100px",
                                            color: "#fff",
                                            width: "36px",
                                            height: "36px",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setModalImage((prev) =>
                                                prev === project.images.length - 1 ? 0 : prev + 1
                                            )
                                        }}
                                        style={{
                                            position: "absolute",
                                            right: "16px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            background: "rgba(0,0,0,0.6)",
                                            border: "1px solid #333",
                                            borderRadius: "100px",
                                            color: "#fff",
                                            width: "36px",
                                            height: "36px",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        →
                                    </button>

                                    {/* Image counter */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "16px",
                                            right: "16px",
                                            background: "rgba(0,0,0,0.6)",
                                            border: "1px solid #333",
                                            borderRadius: "100px",
                                            padding: "4px 12px",
                                            fontSize: "11px",
                                            color: "#fff",
                                        }}
                                    >
                                        {modalImage + 1} / {project.images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Modal body */}
                        <div style={{ padding: "32px" }}>

                            {/* Title */}
                            <h3
                                style={{
                                    fontFamily: "Syne, sans-serif",
                                    fontSize: "24px",
                                    fontWeight: 800,
                                    marginBottom: "12px",
                                    letterSpacing: "-0.5px",
                                }}
                            >
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    color: "#666",
                                    fontSize: "14px",
                                    lineHeight: 1.8,
                                    marginBottom: "24px",
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Tags */}
                            <p
                                style={{
                                    fontSize: "11px",
                                    color: "#444",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    marginBottom: "12px",
                                }}
                            >
                                Tech Stack
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                    marginBottom: "28px",
                                }}
                            >
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "6px 14px",
                                            borderRadius: "100px",
                                            fontSize: "12px",
                                            background: "#1a2a0a",
                                            color: "#c8f65d",
                                            border: "1px solid #2a4a10",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "12px",
                                    paddingTop: "24px",
                                    borderTop: "1px solid #1e1e1e",
                                }}
                            >
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            flex: 1,
                                            padding: "12px",
                                            background: "#1a1a1a",
                                            border: "1px solid #2a2a2a",
                                            borderRadius: "8px",
                                            color: "#888",
                                            textDecoration: "none",
                                            fontSize: "13px",
                                            textAlign: "center",
                                        }}
                                    >
                                        GitHub →
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            flex: 1,
                                            padding: "12px",
                                            background: "#c8f65d",
                                            border: "none",
                                            borderRadius: "8px",
                                            color: "#000",
                                            textDecoration: "none",
                                            fontSize: "13px",
                                            textAlign: "center",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Live Site ↗
                                    </a>
                                )}
                                {!project.github && !project.live && (
                                    <p style={{ fontSize: "13px", color: "#444" }}>
                                        Private / Not deployed
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    onClick={() => setLightboxOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.95)",
                        zIndex: 2000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        cursor: "zoom-out",
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setLightboxOpen(false)}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid #333",
                            borderRadius: "100px",
                            color: "#fff",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            fontSize: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2001,
                        }}
                    >
                        ✕
                    </button>

                    {/* Prev button */}
                    {project.images.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setModalImage((prev) =>
                                    prev === 0 ? project.images.length - 1 : prev - 1
                                )
                            }}
                            style={{
                                position: "absolute",
                                left: "20px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "rgba(255,255,255,0.1)",
                                border: "1px solid #333",
                                borderRadius: "100px",
                                color: "#fff",
                                width: "44px",
                                height: "44px",
                                cursor: "pointer",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 2001,
                            }}
                        >
                            ←
                        </button>
                    )}

                    {/* Full image */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: "1000px",
                            maxHeight: "85vh",
                            borderRadius: "12px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={project.images[modalImage]}
                            alt={`${project.title} fullscreen ${modalImage + 1}`}
                            width={1000}
                            height={700}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "85vh",
                                objectFit: "contain",
                                borderRadius: "12px",
                            }}
                        />
                    </div>

                    {/* Next button */}
                    {project.images.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setModalImage((prev) =>
                                    prev === project.images.length - 1 ? 0 : prev + 1
                                )
                            }}
                            style={{
                                position: "absolute",
                                right: "20px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "rgba(255,255,255,0.1)",
                                border: "1px solid #333",
                                borderRadius: "100px",
                                color: "#fff",
                                width: "44px",
                                height: "44px",
                                cursor: "pointer",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 2001,
                            }}
                        >
                            →
                        </button>
                    )}

                    {/* Image counter */}
                    {project.images.length > 1 && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                background: "rgba(0,0,0,0.6)",
                                border: "1px solid #333",
                                borderRadius: "100px",
                                padding: "6px 16px",
                                fontSize: "12px",
                                color: "#fff",
                            }}
                        >
                            {modalImage + 1} / {project.images.length}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
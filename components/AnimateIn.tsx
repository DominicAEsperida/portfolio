"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
    children: React.ReactNode
    delay?: number
    direction?: "up" | "left" | "right" | "none"
}

export default function AnimateIn({
    children,
    delay = 0,
    direction = "up",
}: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    const directions = {
        up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
        left: { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
        right: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
        none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={directions[direction]}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{ overflow: "visible" }}
        >
            {children}
        </motion.div>
    )
}
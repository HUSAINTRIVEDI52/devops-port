"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block">
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Outer Ring / Brackets */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0,
                    borderColor: isHovering ? "rgba(168, 85, 247, 0.8)" : "rgba(6, 182, 212, 0.5)", // Cyan to Purple
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8,
                }}
            >
                {/* Decorative corners for "target" look */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-400" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-400" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400" />
            </motion.div>
        </div>
    );
}

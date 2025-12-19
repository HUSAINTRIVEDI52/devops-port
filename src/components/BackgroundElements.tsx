"use client";

import { motion } from "framer-motion";

export default function BackgroundElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Hexagon 1 */}
            <motion.div
                className="absolute top-20 left-[10%] w-24 h-24 border border-cyan-500/20 rounded-xl rotate-12"
                animate={{
                    y: [0, -20, 0],
                    rotate: [12, 45, 12],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Hexagon 2 */}
            <motion.div
                className="absolute bottom-40 right-[10%] w-32 h-32 border border-purple-500/20 rounded-full"
                animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Code Snippet Effect */}
            <div className="absolute top-40 right-[20%] font-mono text-xs text-cyan-500/10 hidden md:block">
                <div>const future = "loading...";</div>
                <div>await initSystem();</div>
            </div>

            {/* Grid Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
    );
}

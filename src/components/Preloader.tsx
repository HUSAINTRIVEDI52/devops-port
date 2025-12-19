"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("");
    const [currentLine, setCurrentLine] = useState(0);

    const lines = [
        "INITIALIZING CORE SYSTEMS...",
        "ESTABLISHING SECURE CONNECTION...",
        "ACCESS GRANTED"
    ];

    useEffect(() => {
        if (currentLine >= lines.length) {
            setTimeout(() => setIsLoading(false), 500);
            return;
        }

        let charIndex = 0;
        const interval = setInterval(() => {
            if (charIndex <= lines[currentLine].length) {
                setText(lines[currentLine].substring(0, charIndex));
                charIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentLine(prev => prev + 1);
                    setText("");
                }, 100);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [currentLine]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 bg-black z-[100] flex items-center justify-center font-mono"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="text-cyan-400 text-xl md:text-2xl">
                        <span className="mr-2">&gt;</span>
                        {text}
                        <span className="animate-pulse">_</span>
                    </div>

                    <div className="absolute bottom-10 right-10 text-xs text-gray-500">
                        SYSTEM_BOOT_SEQUENCE_V.2.0
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

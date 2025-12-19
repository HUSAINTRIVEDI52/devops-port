"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
    "AWS", "Docker", "Kubernetes", "Terraform", "Python",
    "PostgreSQL", "MongoDB", "GraphQL", "CI/CD"
];

export default function TechStack() {
    return (
        <div className="w-full overflow-hidden py-10 opacity-70">
            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{
                    x: "-50%",
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40,
                }}
                style={{ width: "max-content" }}
            >
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="px-6 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-mono text-sm tracking-wider backdrop-blur-sm"
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

const certifications = [
    {
        title: "DevOps and Cloud Certificate",
        issuer: "Physics Wallah",
        date: "June 2025 - Jan 2026",
        desc: "Comprehensive training in DevOps practices and Cloud technologies.",
        tags: ["DevOps", "Cloud", "Physics Wallah"],
        color: "from-purple-600 to-blue-600",
        image: null, // Placeholder will be used
    },
    {
        title: "AWS Cloud Workshop",
        issuer: "AWS",
        date: "Completed",
        desc: "Intensive 40+ hours workshop covering core AWS services and architecture.",
        tags: ["AWS", "Cloud Computing", "Workshop"],
        color: "from-orange-500 to-yellow-500",
        image: "/certificates/aws-workshop.png",
    },
    {
        title: "DevOps and Cloud Workshop",
        issuer: "GeeksforGeeks",
        date: "Completed",
        desc: "Practical workshop on DevOps methodologies and cloud deployment strategies.",
        tags: ["DevOps", "Cloud", "GeeksforGeeks"],
        color: "from-green-500 to-emerald-500",
        image: "/certificates/gfg-workshop.png",
    },
    {
        title: "AI Automation Internship",
        issuer: "Urban Parents",
        date: "15 Days",
        desc: "Internship focused on AI automation solutions and implementation.",
        tags: ["AI", "Automation", "Internship"],
        color: "from-blue-500 to-cyan-500",
        image: "/certificates/urban-parents-internship.png",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center gap-2 text-cyan-400 mb-4 font-mono text-sm tracking-widest">
                            <span className="text-2xl">&gt;_</span>
                            <span>CREDENTIALS</span>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono mb-4 tracking-tighter">
                            &lt;CERTIFICATIONS/&gt;
                        </h2>
                        <p className="text-gray-500 font-mono tracking-widest text-sm">
                            VERIFIED_CREDENTIALS()...
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all flex flex-col md:flex-row"
                        >
                            {/* Certificate Image or Placeholder */}
                            <div className={`relative h-48 md:h-auto md:w-2/5 overflow-hidden ${!cert.image ? `bg-gradient-to-br ${cert.color}` : ''}`}>
                                {cert.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center p-6 text-center">
                                        <span className="text-2xl font-bold text-white opacity-50">{cert.issuer}</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 md:w-3/5 flex flex-col justify-center">
                                <div className="mb-2">
                                    <span className="text-xs font-mono text-cyan-400">{cert.date}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {cert.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    {cert.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {cert.tags.map((tag, j) => (
                                        <span key={j} className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

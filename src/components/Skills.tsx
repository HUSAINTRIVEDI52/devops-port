"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Cloud & DevOps",
        skills: ["AWS (EC2, S3, VPC)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Ansible", "Terraform"],
        color: "cyan",
    },
    {
        title: "Programming & Scripting",
        skills: ["Python", "C", "C++", "Bash Scripting", "JavaScript", "HTML5/CSS3"],
        color: "purple",
    },
    {
        title: "Tools & Platforms",
        skills: ["Git/GitHub", "Linux (Ubuntu)", "MySQL", "VS Code", "Postman"],
        color: "pink",
    },
    {
        title: "AI & Automation",
        skills: ["LLM Integration", "Prompt Engineering", "Automated Workflows", "Vibe Coding", "Documentation"],
        color: "green",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

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
                            <span>TECH_ARSENAL</span>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono mb-4 tracking-tighter glitch" data-text="<SKILLS/>">
                            &lt;SKILLS/&gt;
                        </h2>
                        <p className="text-gray-500 font-mono tracking-widest text-sm">
                            SCANNING_CAPABILITIES()...
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                        >
                            <h4 className={`text-xl font-bold mb-6 text-${category.color}-400`}>
                                {category.title}
                            </h4>
                            <ul className="space-y-3">
                                {category.skills.map((skill, j) => (
                                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <span className={`w-1.5 h-1.5 rounded-full bg-${category.color}-400`} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

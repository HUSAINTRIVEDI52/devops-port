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
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-mono text-purple-400 mb-2">02. SKILLS & EXPERTISE</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        My Technical <span className="text-cyan-400">Arsenal</span>
                    </h3>
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

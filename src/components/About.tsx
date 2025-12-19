"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Terminal, Cpu } from "lucide-react";

const specialties = [
    {
        icon: Cloud,
        title: "Cloud Computing",
        desc: "Architecting and deploying scalable infrastructure on AWS using EC2, S3, IAM, and VPC.",
    },
    {
        icon: Server,
        title: "DevOps & CI/CD",
        desc: "Automating workflows with Jenkins, GitHub Actions, Docker, and Kubernetes for efficient delivery.",
    },
    {
        icon: Terminal,
        title: "Infrastructure as Code",
        desc: "Provisioning and managing infrastructure using Ansible and Terraform for consistency.",
    },
    {
        icon: Cpu,
        title: "AI & Automation",
        desc: "Leveraging LLMs and AI tools to accelerate development, documentation, and operational workflows.",
    },
];

const skills = [
    { name: "Cloud & DevOps (AWS, Docker, K8s)", level: 80 },
    { name: "Automation & IaC (Ansible, Terraform)", level: 75 },
    { name: "Vibe Coding & AI Tools", level: 70 },
    { name: "Linux Administration", level: 80 },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-black relative">
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
                            <span>SYSTEM_PROFILE</span>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono mb-4 tracking-tighter">
                            &lt;ABOUT_ME/&gt;
                        </h2>
                        <p className="text-gray-500 font-mono tracking-widest text-sm">
                            WHO_I_AM.LOADING()...
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Specialties */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {specialties.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                    <item.icon className="text-cyan-400" size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Proficiency & Mission */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h4 className="text-xl font-bold text-white mb-6">Technology Proficiency</h4>
                            <div className="space-y-6">
                                {skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                                            <span className="text-sm font-mono text-cyan-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20"
                        >
                            <h4 className="text-lg font-bold text-white mb-3">My Mission</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. I strive to deliver code that is not just functional, but also elegant and maintainable.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

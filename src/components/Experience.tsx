"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "DevOps Intern",
        company: "Radixweb",
        location: "Ahmedabad, India",
        duration: "Jan 2025 - Apr 2025",
        type: "Internship",
        description: "Gained hands-on experience in DevOps practices, cloud infrastructure, and automation.",
        responsibilities: [
            "Worked with AWS services including EC2, S3, VPC, and IAM for cloud infrastructure management",
            "Implemented CI/CD pipelines using Jenkins and GitHub Actions for automated deployments",
            "Containerized applications using Docker and managed orchestration with Kubernetes",
            "Automated infrastructure provisioning using Terraform and configuration management with Ansible",
            "Collaborated with development teams to streamline deployment processes and improve system reliability",
            "Monitored system performance and implemented logging solutions for better observability"
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "GitHub Actions", "Linux"],
        color: "from-cyan-500 to-blue-600",
    },
    {
        role: "AI Automation Intern",
        company: "Urban Parents",
        location: "Remote",
        duration: "15 Days",
        type: "Internship",
        description: "Focused on AI-driven automation solutions and implementation.",
        responsibilities: [
            "Developed AI-powered automation workflows to streamline business processes",
            "Integrated LLM APIs for intelligent task automation",
            "Created documentation and training materials for AI tools",
            "Collaborated with team to identify automation opportunities"
        ],
        technologies: ["Python", "LLM APIs", "Automation", "AI Tools"],
        color: "from-purple-500 to-pink-600",
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

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
                            <span>WORK_HISTORY</span>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono mb-4 tracking-tighter glitch" data-text="<EXPERIENCE/>">
                            &lt;EXPERIENCE/&gt;
                        </h2>
                        <p className="text-gray-500 font-mono tracking-widest text-sm">
                            LOADING_CAREER_PATH()...
                        </p>
                    </div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group relative bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all"
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                                            <Briefcase className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-lg text-gray-300 font-semibold">{exp.company}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                                        <Calendar size={16} className="text-cyan-400" />
                                        {exp.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                                        <MapPin size={16} className="text-purple-400" />
                                        {exp.location}
                                    </div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                                        <span className="text-xs font-mono text-cyan-400">{exp.type}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Responsibilities */}
                            <div className="mb-6">
                                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">Key Responsibilities:</h4>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <span className="text-cyan-400 mt-1">▹</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, j) => (
                                        <span key={j} className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
                                            {tech}
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

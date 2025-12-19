"use client";

import { motion } from "framer-motion";


const projects = [
    {
        title: "AWS Infrastructure Automation",
        desc: "Automated provisioning of scalable AWS infrastructure (EC2, VPC, S3) using Terraform and Ansible.",
        tags: ["AWS", "Terraform", "Ansible"],
        color: "from-orange-500 to-yellow-500",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop", // Cloud/Data Center
    },
    {
        title: "CI/CD Pipeline Orchestration",
        desc: "Designed and implemented a robust CI/CD pipeline using Jenkins and GitHub Actions for automated testing and deployment.",
        tags: ["Jenkins", "GitHub Actions", "Docker"],
        color: "from-blue-500 to-cyan-500",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // Code/Matrix
    },
    {
        title: "Containerized Microservices",
        desc: "Deployed and managed microservices architecture using Docker containers and Kubernetes orchestration.",
        tags: ["Docker", "Kubernetes", "Microservices"],
        color: "from-blue-600 to-indigo-500",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop", // Containers
    },
    {
        title: "AI-Powered Documentation Bot",
        desc: "Built a documentation assistant using LLMs to automate code documentation and explanation.",
        tags: ["Python", "LLM", "Automation"],
        color: "from-green-500 to-emerald-500",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop", // AI/Robot
    },
    {
        title: "Server Monitoring Dashboard",
        desc: "Real-time server monitoring solution using Prometheus and Grafana for performance metrics.",
        tags: ["Prometheus", "Grafana", "Linux"],
        color: "from-purple-500 to-pink-500",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Dashboard
    },
    {
        title: "Secure Cloud Storage",
        desc: "Implemented a secure file storage system on AWS S3 with strict IAM policies and encryption.",
        tags: ["AWS S3", "IAM", "Security"],
        color: "from-red-500 to-orange-500",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop", // Security/Lock
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-black relative">
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
                            <span>WORK_LOG</span>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono mb-4 tracking-tighter glitch" data-text="<PROJECTS/>">
                            &lt;PROJECTS/&gt;
                        </h2>
                        <p className="text-gray-500 font-mono tracking-widest text-sm">
                            LOADING_WORK()...
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, j) => (
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

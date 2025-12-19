"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import BackgroundElements from "./BackgroundElements";
import TechStack from "./TechStack";

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Cloud Engineer", "DevOps Enthusiast", "AI Automation Expert", "BCA Student"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, words]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 pb-32 relative overflow-hidden">
            <BackgroundElements />
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-500/10">
                            <span className="text-cyan-400 font-mono text-sm">👋 HELLO WORLD</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                                Husain
                            </span>
                        </h1>
                        <h2 className="text-xl md:text-3xl text-gray-300 mb-8 font-light h-10">
                            I'm a <span className="font-mono text-cyan-400">{text}</span>
                            <span className="animate-pulse text-cyan-400">|</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
                            I specialize in Cloud Computing, DevOps, and AI-driven automation. I combine practical cloud engineering skills with modern AI-assisted development to deliver scalable, efficient, and production-ready solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="#projects"
                                className="group px-6 md:px-8 py-3 bg-white text-black font-bold rounded-full text-sm md:text-base flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300"
                            >
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/resume"
                                className="px-6 md:px-8 py-3 border border-white/20 text-white font-bold rounded-full text-sm md:text-base flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                            >
                                View Resume
                                <Download size={18} />
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm w-full md:w-auto">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-cyan-400 shrink-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="https://github.com/husaintrivedi52.png"
                                        alt="GitHub Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-gray-400 font-mono truncate">CHECK OUT MY CODE</p>
                                    <Link href="https://github.com/husaintrivedi52" target="_blank" className="text-white font-bold hover:text-cyan-400 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                                        <span className="truncate">github.com/husaintrivedi52</span> <ExternalLink size={12} className="shrink-0" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <a href="https://github.com/husaintrivedi52" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/husaintrivedi52" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/techs.helps/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                                <Instagram size={24} />
                            </a>
                            <a href="mailto:husaintrivedi@zohomail.in" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block flex justify-center items-center"
                    >
                        <div className="relative w-[400px] h-[400px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-[20px] opacity-50 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://github.com/husaintrivedi52.png"
                                    alt="Husain Trivedi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack Marquee */}
                <div className="mt-20">
                    <TechStack />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowRight className="transform rotate-90 text-cyan-400" size={20} />
                </motion.div>
            </motion.div>
        </section >
    );
}

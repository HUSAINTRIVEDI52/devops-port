"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import Link from "next/link";



export default function InstagramFeed() {
    return (
        <section id="instagram" className="py-20 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex items-center gap-2 text-pink-500 mb-4 font-mono text-sm tracking-widest">
                            <Instagram size={16} />
                            <span>SOCIAL_FEED</span>
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-mono mb-4 tracking-tighter glitch" data-text="<INSTAGRAM/>">
                            &lt;INSTAGRAM/&gt;
                        </h2>
                        <p className="text-gray-500 font-mono tracking-widest text-sm uppercase mb-6">
                            FOLLOW_THE_JOURNEY()...
                        </p>
                        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                            Empowering the tech community with daily insights. Follow along for expert tutorials, productivity hacks, and the latest trends in software development and automation.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <a
                            href="https://www.instagram.com/techs.helps/"
                            target="_blank"
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white overflow-hidden shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_40px_rgba(219,39,119,0.5)] transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12" />
                            <span className="relative flex items-center gap-2">
                                <Instagram size={20} />
                                Follow @techs.helps
                                <ExternalLink size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}

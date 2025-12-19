import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Clock, Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-cyan-400 text-2xl font-bold">&gt;_</span>
                            <Link href="/" className="text-2xl font-bold font-mono tracking-tighter text-white">
                                HUSAIN<span className="text-cyan-400"> TRIVEDI</span>
                            </Link>
                        </div>
                        <p className="text-xs font-mono text-gray-500 mb-6">
                            SYSTEM_STATUS: OPERATIONAL
                        </p>

                        <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
                            Combining cloud engineering with AI-assisted development to deliver scalable solutions.
                        </p>

                        <div className="flex items-center gap-4 text-xs font-mono text-cyan-400 mb-6">
                            <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>LOCAL_TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-400">
                                <Zap size={14} />
                                <span>ACTIVE</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-green-400 font-bold text-lg">99.9%</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Uptime</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-cyan-400 font-bold text-lg">1000+</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Commits</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-orange-400 font-bold text-lg">∞</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Coffee</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono font-bold text-white mb-4">NAVIGATION</h3>
                        <ul className="space-y-2">
                            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono font-bold text-white mb-4">CONNECT</h3>
                        <div className="flex gap-4">
                            <Link href="https://github.com/husaintrivedi52" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="https://linkedin.com/in/husaintrivedi52" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/techs.helps/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="mailto:husaintrivedi@zohomail.in" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-mono">
                        © {new Date().getFullYear()} Husain Trivedi. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs font-mono">
                        DESIGNED & BUILT BY HUSAIN
                    </p>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-mono tracking-tighter mb-4 block">
                            HUSAIN<span className="text-cyan-400"> TRIVEDI</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Combining cloud engineering with AI-assisted development to deliver scalable solutions.
                        </p>
                        <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-green-400">AVAILABLE FOR WORK</span>
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
                            <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Twitter size={20} />
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

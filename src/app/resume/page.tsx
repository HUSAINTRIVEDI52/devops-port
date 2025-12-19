"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Portfolio
                    </Link>

                    <a
                        href="https://docs.google.com/document/d/1VdBshrPxILrdN6G5zmMvdA-33l0sizJX-4Utpjd8esY/export?format=pdf"
                        className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-full flex items-center gap-2 hover:bg-cyan-400 transition-colors"
                    >
                        Download PDF
                        <Download size={18} />
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[80vh] bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                >
                    <iframe
                        src="https://docs.google.com/document/d/1VdBshrPxILrdN6G5zmMvdA-33l0sizJX-4Utpjd8esY/preview"
                        className="w-full h-full border-none"
                        title="Resume Preview"
                    />
                </motion.div>
            </div>
        </div>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-16 md:px-16 md:py-24 text-center shadow-2xl"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Let's build something amazing together. Whether you need a new website, a mobile app, or a custom software solution, we have the expertise to make it happen.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg shadow-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
                                >
                                    Start a Project
                                </motion.button>
                            </Link>
                            <Link href="/quote">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    Get a Free Quote <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

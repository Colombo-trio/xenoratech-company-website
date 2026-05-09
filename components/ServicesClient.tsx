"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceProps {
    index: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

export function ServiceCard({ index, icon, title, description, link }: ServiceProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-8 rounded-2xl transition-all duration-500 group glow-subtle overflow-hidden"
        >
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {description}
            </p>
            <Link
                href={link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300"
            >
                Learn more <span className="ml-2">→</span>
            </Link>
        </motion.div>
    );
}

export function ServicesHeader() {
    return (
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
                Our Expertise
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
                We deliver cutting-edge digital solutions to help your business thrive in the modern world.
            </motion.p>
        </div>
    );
}

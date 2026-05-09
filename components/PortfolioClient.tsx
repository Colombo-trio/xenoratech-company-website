"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
    index: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

export function ProjectCard({ index, title, category, image, description }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer glass-card p-4 rounded-3xl transition-all duration-500"
        >
            <div className="relative h-[250px] md:h-[280px] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="space-y-2 px-2 pb-2">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export function PortfolioHeader() {
    return (
        <div className="text-center mb-16">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm block mb-2"
            >
                Our Work
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
                Featured Projects
            </motion.h2>
        </div>
    );
}

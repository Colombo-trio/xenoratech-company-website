"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "A full-featured online store with payment integration and inventory management.",
    },
    {
        title: "FinTech Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Real-time financial data visualization for a leading banking application.",
    },
    {
        title: "Healthcare App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Patient management system connecting doctors and patients seamlessly.",
    },
];

export default function PortfolioPreview() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm"
                        >
                            Our Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4"
                        >
                            Featured Projects
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/portfolio"
                            className="hidden md:inline-flex items-center px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-900 dark:text-white font-medium"
                        >
                            View All Projects <span className="ml-2">→</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-900 dark:text-white font-medium"
                    >
                        View All Projects <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

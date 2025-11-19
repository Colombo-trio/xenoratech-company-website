"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Rocket } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <Globe className="w-8 h-8 text-blue-500" />,
        title: "Web Development",
        description: "High-performance websites built with modern technologies for maximum speed and SEO.",
        link: "/services/web-development",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-purple-500" />,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that provide seamless user experiences.",
        link: "/services/mobile-apps",
    },
    {
        icon: <Code className="w-8 h-8 text-green-500" />,
        title: "Custom Software",
        description: "Tailored software solutions to automate your business processes and boost efficiency.",
        link: "/services/custom-software",
    },
    {
        icon: <Rocket className="w-8 h-8 text-orange-500" />,
        title: "Digital Marketing",
        description: "Strategic marketing campaigns to grow your brand and reach your target audience.",
        link: "/services/digital-marketing",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
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
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        We deliver cutting-edge digital solutions to help your business thrive in the modern world.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={service.link}
                                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                            >
                                Learn more <span className="ml-2">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

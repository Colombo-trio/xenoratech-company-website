"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Completed Projects", value: "10+", suffix: "" },
    { label: "Years of Experience", value: "5+", suffix: "" },
    { label: "Client Satisfaction", value: "100", suffix: "%" },
    { label: "Global Clients", value: "20+", suffix: "" },
];

const Counter = ({ value, suffix }: { value: string, suffix: string }) => {
    // Extract number for animation if possible, otherwise just display string
    // For simplicity in this preview, we'll animate the opacity/y
    return (
        <span className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
            {value}{suffix}
        </span>
    );
};

export default function StatsSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
                                className="mb-2"
                            >
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </motion.div>
                            <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

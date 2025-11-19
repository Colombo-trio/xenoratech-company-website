"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Layout, Layers, DollarSign, Users, Headphones } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Fast Delivery",
        description: "We prioritize efficiency without compromising quality, ensuring your project launches on time.",
    },
    {
        icon: <Layout className="w-6 h-6 text-pink-500" />,
        title: "Pixel-perfect UI",
        description: "Every detail matters. We craft stunning interfaces that look amazing on all devices.",
    },
    {
        icon: <Layers className="w-6 h-6 text-blue-500" />,
        title: "Scalable Architecture",
        description: "Built for growth. Our solutions can handle increased traffic and new features effortlessly.",
    },
    {
        icon: <DollarSign className="w-6 h-6 text-green-500" />,
        title: "Affordable Pricing",
        description: "Premium quality services at competitive rates, tailored to fit your budget.",
    },
    {
        icon: <Users className="w-6 h-6 text-purple-500" />,
        title: "Experienced Developers",
        description: "A team of seasoned experts dedicated to bringing your vision to life with clean code.",
    },
    {
        icon: <Headphones className="w-6 h-6 text-red-500" />,
        title: "24/7 Support",
        description: "We're always here for you. Get round-the-clock assistance whenever you need it.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 text-lg"
                    >
                        We combine technical expertise with creative innovation to deliver results that exceed expectations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900 transition-colors"
                        >
                            <div className="w-12 h-12 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

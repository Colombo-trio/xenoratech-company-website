"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on complexity. A standard website usually takes 2-4 weeks, while complex web applications may take 8-12 weeks. We provide a detailed timeline during the initial consultation.",
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer various maintenance and support packages to keep your website secure, up-to-date, and performing optimally after launch.",
    },
    {
        question: "What technologies do you use?",
        answer: "We specialize in modern tech stacks including React, Next.js, Node.js, and TailwindCSS. We choose the best tools for your specific project requirements.",
    },
    {
        question: "Can you help with SEO?",
        answer: "Absolutely. All our websites are built with SEO best practices in mind, including semantic HTML, fast loading speeds, and mobile responsiveness.",
    },
    {
        question: "What is your pricing structure?",
        answer: "We offer both fixed-price project quotes and hourly rates depending on the nature of the work. Contact us for a free custom quote tailored to your needs.",
    },
    {
        question: "Do I own the code after the project is done?",
        answer: "Yes, once the final payment is made, you have full ownership of the source code and intellectual property of your project.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Everything you need to know about working with us.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-900 dark:text-white pr-8">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

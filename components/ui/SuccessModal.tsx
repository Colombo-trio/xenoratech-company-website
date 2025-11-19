"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Message Sent!
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Thank you for reaching out. We've received your message and will get back to you shortly.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

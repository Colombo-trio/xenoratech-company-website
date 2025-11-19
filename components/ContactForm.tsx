"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { toast } from "react-hot-toast";
import Script from "next/script";
import SuccessModal from "@/components/ui/SuccessModal";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            // Execute ReCAPTCHA
            // @ts-ignore
            const token = await window.grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                { action: "submit" }
            );

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, token }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            setShowSuccessModal(true);
            reset();
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error(error);
            toast.error(error instanceof Error ? error.message : "Failed to send message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="lazyOnload"
            />

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            {...register("name")}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.name
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                            placeholder="john@example.com"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Phone <span className="text-gray-400 text-xs">(Optional)</span>
                        </label>
                        <input
                            id="phone"
                            {...register("phone")}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.phone
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                            placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="subject"
                            {...register("subject")}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.subject
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                            placeholder="Project Inquiry"
                        />
                        {errors.subject && (
                            <p className="text-sm text-red-500">{errors.subject.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none ${errors.message
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-200 dark:border-gray-700"
                            }`}
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </>
    );
}

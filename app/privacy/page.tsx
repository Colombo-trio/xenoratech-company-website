"use client";

import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Welcome to Voxicore ("we," "our," or "us"). We are committed to
                            protecting your personal information and your right to privacy.
                            This Privacy Policy explains how we collect, use, disclose, and
                            safeguard your information when you visit our website and use our
                            services. By accessing or using our services, you signify that you
                            have read, understood, and agree to our collection, storage, use,
                            and disclosure of your personal information as described in this
                            Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            2. Information We Collect
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            We collect information that you strictly provide to us directly.
                            We do not collect any personal information automatically or through
                            cookies/tracking technologies without your consent.
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>
                                <strong>Personal Data:</strong> Personally identifiable
                                information, such as your name, email address, and telephone
                                number, that you voluntarily give to us when you choose to
                                participate in various activities related to the Application,
                                such as filling out contact forms.
                            </li>
                            <li>
                                <strong>Derivative Data:</strong> Information our servers
                                automatically collect when you access the Site, such as your IP
                                address, your browser type, your operating system, your access
                                times, and the pages you have viewed directly before and after
                                accessing the Site.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Having accurate information about you permits us to provide you
                            with a smooth, efficient, and customized experience. Specifically,
                            we may use information collected about you via the Site to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Respond to your inquiries and support needs.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            <li>Notify you of updates to the Site.</li>
                            <li>Request feedback and contact you about your use of the Site.</li>
                            <li>Resolve disputes and troubleshoot problems.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            4. Data Security
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            5. Contact Us
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            If you have questions or comments about this Privacy Policy, please
                            contact us at:
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                            <p className="text-slate-900 dark:text-white font-medium">
                                Voxicore
                            </p>
                            <p className="text-slate-600 dark:text-slate-400">
                                Email: contact@voxicore.com
                            </p>
                            <p className="text-slate-600 dark:text-slate-400">
                                Phone: +94 71 303 1383
                            </p>
                            <p className="text-slate-600 dark:text-slate-400">
                                Location: Sri Lanka
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

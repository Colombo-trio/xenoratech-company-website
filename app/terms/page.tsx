"use client";

import React from "react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Terms of Service
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            1. Agreement to Terms
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            These Terms of Service constitute a legally binding agreement made
                            between you, whether personally or on behalf of an entity ("you")
                            and Voxicore ("we," "us," or "our"), concerning your access to
                            and use of the Voxicore website as well as any other media form,
                            media channel, mobile website or mobile application related,
                            linked, or otherwise connected thereto (collectively, the "Site").
                            You agree that by accessing the Site, you have read, understood,
                            and agreed to be bound by all of these Terms of Service. If you do
                            not agree with all of these Terms of Service, then you are
                            expressly prohibited from using the Site and you must discontinue
                            use immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            2. Intellectual Property Rights
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Unless otherwise indicated, the Site is our proprietary property
                            and all source code, databases, functionality, software, website
                            designs, audio, video, text, photographs, and graphics on the Site
                            (collectively, the "Content") and the trademarks, service marks,
                            and logos contained therein (the "Marks") are owned or controlled
                            by us or licensed to us, and are protected by copyright and
                            trademark laws and various other intellectual property rights and
                            unfair competition laws.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            The Content and the Marks are provided on the Site "AS IS" for
                            your information and personal use only. Except as expressly
                            provided in these Terms of Service, no part of the Site and no
                            Content or Marks may be copied, reproduced, aggregated,
                            republished, uploaded, posted, publicly displayed, encoded,
                            translated, transmitted, distributed, sold, licensed, or otherwise
                            exploited for any commercial purpose whatsoever, without our
                            express prior written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            3. User Representations
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>
                                You have the legal capacity and you agree to comply with these
                                Terms of Service;
                            </li>
                            <li>
                                You are not a minor in the jurisdiction in which you reside;
                            </li>
                            <li>
                                You will not access the Site through automated or non-human
                                means, whether through a bot, script, or otherwise;
                            </li>
                            <li>
                                You will not use the Site for any illegal or unauthorized
                                purpose;
                            </li>
                            <li>
                                Your use of the Site will not violate any applicable law or
                                regulation.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            4. Prohibited Activities
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            You may not access or use the Site for any purpose other than that
                            for which we make the Site available. The Site may not be used in
                            connection with any commercial endeavors except those that are
                            specifically endorsed or approved by us. As a user of the site,
                            you agree not to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>
                                Systematically retrieve data or other content from the Site to
                                create or compile, directly or indirectly, a collection,
                                compilation, database, or directory without written permission
                                from us.
                            </li>
                            <li>
                                Trick, defraud, or mislead us and other users, especially in any
                                attempt to learn sensitive account information such as user
                                passwords.
                            </li>
                            <li>
                                Circumvent, disable, or otherwise interfere with security-related
                                features of the Site.
                            </li>
                            <li>
                                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                                the Site.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            5. Limitation of Liability
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            In no event will we or our directors, employees, or agents be
                            liable to you or any third party for any direct, indirect,
                            consequential, exemplary, incidental, special, or punitive damages,
                            including lost profit, lost revenue, loss of data, or other damages
                            arising from your use of the site, even if we have been advised of
                            the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            6. Governing Law
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            These Terms shall be governed by and defined following the laws of
                            Sri Lanka. Voxicore and yourself irrevocably consent that the
                            courts of Sri Lanka shall have exclusive jurisdiction to resolve
                            any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            7. Contact Us
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            In order to resolve a complaint regarding the Site or to receive
                            further information regarding use of the Site, please contact us
                            at:
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

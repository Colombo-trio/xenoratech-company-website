"use client";

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log(formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 sm:py-32 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Let's Build the <br /> <span className="gradient-text">Future Together</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
              Have a project in mind or just want to explore possibilities? We're here to talk. Schedule a free consultation call with our experts.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-xl p-8 shadow-2xl">
            {isSubmitted ? (
                <div className="text-center py-12">
                    <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Thank you!</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Your message has been sent. We'll be in touch shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Full Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-800 dark:text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email Address</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-800 dark:text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Message</label>
                    <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-800 dark:text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                    Schedule a Call
                    </button>
                </div>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
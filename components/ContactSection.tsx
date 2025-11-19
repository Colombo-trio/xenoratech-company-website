"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                Let's Build the <br /> <span className="gradient-text">Future Together</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Have a project in mind or want to explore possibilities? We're ready to talk.
                Get in touch with XenoraTech anytime.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full text-cyan-600 dark:text-cyan-400">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+94 71 303 1383</p>
                  <p className="text-gray-600 dark:text-gray-400">+94 77 879 7936</p>
                  <p className="text-gray-600 dark:text-gray-400">+94 76 674 0067</p>

                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-purple-500/20 dark:bg-purple-500/10 rounded-full text-purple-600 dark:text-purple-400">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">contact@voxicore.com</p>
                </div>
              </div>

              {/* Address */}
              {/* <div className="flex items-center space-x-4 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-green-500/20 dark:bg-green-500/10 rounded-full text-green-600 dark:text-green-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    No. 21, Tech Valley Road, Colombo 07, Sri Lanka
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-xl p-8 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/voxicore.digital", label: "Facebook", hoverColor: "#1877F2" },
    { icon: Instagram, href: "https://www.instagram.com/voxicore.digital/", label: "Instagram", hoverColor: "#E1306C" },
  ];

  const footerLinks = {
    company: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Gradient Overlays - Only visible in dark mode */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400" />
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none hidden dark:block" />
      <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none hidden dark:block" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Voxicore
              </h2>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              Voxicore builds modern, scalable, and intelligent digital experiences for brands that want to innovate and grow.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: social.hoverColor, borderColor: social.hoverColor }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 group">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">info.voxicore@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 group">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">+94 71 303 1383</span>
                  <span className="group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">+94 77 879 7936</span>
                  <span className="group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">+94 76 674 0067</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 group">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                  Sri Lanka
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500 dark:text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} Voxicore. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</Link>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "./icons/icons";
import { useTheme } from "@/components/theme/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Theme from context instead of props
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const navLinkClasses =
    "text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300";

  const activeNavLinkClasses = "gradient-text font-semibold";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/50 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold gradient-text">
          VOXICORE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={pathname === link.path ? activeNavLinkClasses : navLinkClasses}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/80 backdrop-blur-md pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-6 py-2 ${
                pathname === link.path
                  ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10"
                  : "text-gray-700 dark:text-gray-300 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-slate-200 dark:border-slate-700/50 mx-6 my-2"></div>

          {/* Theme toggle (mobile) */}
          <div className="px-6 flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Switch Theme</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Contact button (mobile) */}
          <div className="px-6 mt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 w-full text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300 text-center block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

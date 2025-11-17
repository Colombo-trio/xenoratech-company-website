"use client";

import React, { useEffect, useState } from "react";

interface HeroSectionProps {
  scrollToContact: () => void;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    // Run ONLY on client → hydration safe
    const generatedParticles = Array.from({ length: 30 }).map(() => ({
      // CSS Variables for animation
      ["--x-start" as any]: `${Math.random() * 100}vw`,
      ["--y-start" as any]: `${Math.random() * 100}vh`,
      ["--x-end" as any]: `${Math.random() * 100}vw`,
      ["--y-end" as any]: `${Math.random() * 100}vh`,
      ["--scale-start" as any]: Math.random() * 0.5 + 0.2,
      ["--scale-end" as any]: Math.random() * 0.5 + 0.2,

      // Animation settings
      animationDuration: `${Math.random() * 15 + 10}s`,
      animationDelay: `${Math.random() * -25}s`,

      // Particle size & color
      width: `${Math.floor(Math.random() * 3 + 1)}px`,
      height: `${Math.floor(Math.random() * 3 + 1)}px`,
      background: Math.random() > 0.5 ? "#38bdf8" : "#a78bfa",
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Large blurs */}
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-[15%] right-[5%] w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-float-reverse opacity-50"></div>

      {/* Dynamic particles */}
      <div className="particles">
        {particles.map((style, i) => (
          <div key={i} className="particle" style={style}></div>
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 px-6">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Innovate. Build. Scale with <br />
          <span className="gradient-text">Colombo Trio Digital.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          We craft bespoke digital solutions that drive growth, efficiency, and
          success in the modern tech landscape.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20"
          >
            Schedule a Call
          </button>

          <a
            href="#portfolio"
            className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-8 py-3 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
          >
            See Our Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

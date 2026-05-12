"use client";

import React, { useState, useCallback, useEffect } from 'react';
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    quote: "Voxicore transformed our business with a stunning e-commerce platform. Their attention to detail and understanding of our brand 'VibeWear' was exceptional. Highly recommended for anyone looking to take their business online.",
    name: 'Nishantha Pushpakumara',
    title: 'Owner, Eagle Fashion (vibewear.lk)',
    rating: 5,
  },
  {
    quote: "The AI solution they developed has streamlined our operations and boosted efficiency by over 40%. Highly recommended!",
    name: 'Rohan De Silva',
    title: 'COO, Quantum Solutions',
    rating: 5,
  },
  {
    quote: "An incredibly professional and creative team. They delivered our mobile app on time and exceeded all our expectations.",
    name: 'Sanya Fernando',
    title: 'Founder, ConnectMe',
    rating: 5,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-400 dark:text-gray-600'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
    ))}
  </div>
);

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 p-8 md:p-12 shadow-lg">
          <div className="absolute top-8 left-8 text-6xl text-cyan-500/20 dark:text-cyan-500/30 font-serif">“</div>
          <div className="relative text-center">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 min-h-[100px]">{currentTestimonial.quote}</p>
            <div className="flex flex-col items-center">
              <StarRating rating={currentTestimonial.rating} />
              <p className="font-bold text-gray-900 dark:text-white mt-4">{currentTestimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{currentTestimonial.title}</p>
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-gray-800 dark:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-gray-800 dark:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import type { PortfolioItem } from '@/types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'AI-Powered Analytics Dashboard', category: 'Web App', imageUrl: 'https://picsum.photos/seed/project1/600/400' },
  { id: 2, title: 'Smart Home IoT Controller', category: 'IoT', imageUrl: 'https://picsum.photos/seed/project2/600/400' },
  { id: 3, title: 'E-Commerce Mobile App', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/project3/600/400' },
  { id: 4, title: 'Fintech Solution Platform', category: 'Web App', imageUrl: 'https://picsum.photos/seed/project4/600/400' },
  { id: 5, title: 'Health & Fitness Tracker', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/project5/600/400' },
  { id: 6, title: 'Logistics Automation System', category: 'AI Solutions', imageUrl: 'https://picsum.photos/seed/project6/600/400' },
];

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <p className="text-sm font-semibold text-cyan-400">{item.category}</p>
      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Take a look at some of the innovative solutions we’ve delivered for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
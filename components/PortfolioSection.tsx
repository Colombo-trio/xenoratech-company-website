
import React, { useState } from 'react';
import type { PortfolioItem } from '@/types';
import PortfolioModal from './PortfolioModal';

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'AI-Powered Analytics Dashboard', 
    category: 'Web App', 
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    images: [
      'https://picsum.photos/seed/project1/800/600',
      'https://picsum.photos/seed/project1-2/800/600',
      'https://picsum.photos/seed/project1-3/800/600'
    ],
    description: 'A comprehensive analytics dashboard powered by artificial intelligence to provide real-time insights and predictive modeling for business growth.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
    previewLink: 'https://example.com/project1'
  },
  { 
    id: 2, 
    title: 'Smart Home IoT Controller', 
    category: 'IoT', 
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    images: [
      'https://picsum.photos/seed/project2/800/600',
      'https://picsum.photos/seed/project2-2/800/600'
    ],
    description: 'An intuitive mobile application for controlling smart home devices, featuring voice command integration and automated routines.',
    technologies: ['Flutter', 'Node.js', 'MQTT', 'Firebase'],
    previewLink: 'https://example.com/project2'
  },
  { 
    id: 3, 
    title: 'E-Commerce Mobile App', 
    category: 'Mobile App', 
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    images: [
      'https://picsum.photos/seed/project3/800/600',
      'https://picsum.photos/seed/project3-2/800/600',
      'https://picsum.photos/seed/project3-3/800/600'
    ],
    description: 'A seamless e-commerce experience with AR product visualization, secure payment gateways, and personalized recommendations.',
    technologies: ['React Native', 'Redux', 'Stripe', 'Node.js'],
    previewLink: 'https://example.com/project3'
  },
  { 
    id: 4, 
    title: 'Fintech Solution Platform', 
    category: 'Web App', 
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    images: [
      'https://picsum.photos/seed/project4/800/600',
      'https://picsum.photos/seed/project4-2/800/600'
    ],
    description: 'A secure and scalable fintech platform offering digital banking services, investment tracking, and blockchain-based transactions.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    previewLink: 'https://example.com/project4'
  },
  { 
    id: 5, 
    title: 'Health & Fitness Tracker', 
    category: 'Mobile App', 
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    images: [
      'https://picsum.photos/seed/project5/800/600',
      'https://picsum.photos/seed/project5-2/800/600'
    ],
    description: 'A holistic health tracking app that monitors vital signs, tracks workouts, and provides personalized nutrition plans.',
    technologies: ['Swift', 'HealthKit', 'Firebase', 'Express'],
    previewLink: 'https://example.com/project5'
  },
  { 
    id: 6, 
    title: 'The Naturalist Sri Lanka', 
    category: 'AI Solutions', 
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    images: [
      'https://picsum.photos/seed/project6/800/600',
      'https://picsum.photos/seed/project6-2/800/600'
    ],
    description: 'An automated logistics system optimizing route planning, inventory management, and fleet tracking using advanced algorithms.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MongoDB'],
    previewLink: 'https://example.com/project6'
  },
  { 
    id: 7, 
    title: 'Chat with Funds', 
    category: 'Website', 
    imageUrl: '/images/portfolio/chatwithfunds/Main.png',
    images: [
      '/images/portfolio/chatwithfunds/1.png',
      '/images/portfolio/chatwithfunds/2.png',
      '/images/portfolio/chatwithfunds/3.png',
      '/images/portfolio/chatwithfunds/4.png'
    ],
    description: 'Explore a wide range of verified funding options available for nonprofits, small businesses, startups, and individuals - all from reliable foundations and government programs.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    previewLink: 'https://chatwithfunds.com'
  },
  { 
    id: 8, 
    title: 'The Naturalist Sri Lanka', 
    category: 'Website', 
    imageUrl: '/images/portfolio/tnsl/Main.png',
    images: [
      '/images/portfolio/tnsl/1.png',
      '/images/portfolio/tnsl/2.png',
      '/images/portfolio/tnsl/3.png',
      '/images/portfolio/tnsl/4.png'
    ],
    description: 'An automated logistics system optimizing route planning, inventory management, and fleet tracking using advanced algorithms.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    previewLink: 'https://tnaturalistsl.netlify.app/'
  },
  {
  id: 9,
  title: 'EchoSense: Urban Sound Classifier',
  category: 'Machine Learning & AI',
  imageUrl: '/images/portfolio/echosense/Main.png',
    images: [
      '/images/portfolio/echosense/1.png',
    ],
  description: 'An end-to-end audio classification system capable of identifying 50 distinct urban sounds with 68.75% accuracy. Features a production-ready microservice architecture with a Dockerized FastAPI backend and an interactive Streamlit frontend, overcoming complex deployment challenges like GPU/CPU mismatch and read-only filesystem caching.',
  technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Streamlit', 'Librosa'],
  previewLink: 'https://huggingface.co/spaces/HHaaraa/echosense'
}
];

const PortfolioCard: React.FC<{ item: PortfolioItem; onClick: (item: PortfolioItem) => void }> = ({ item, onClick }) => (
  <div 
    className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
    onClick={() => onClick(item)}
  >
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <p className="text-sm font-semibold text-cyan-400">{item.category}</p>
      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
            <PortfolioCard 
              key={item.id} 
              item={item} 
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <PortfolioModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
};

export default PortfolioSection;
import React from 'react';
import { WebDevIcon, MobileDevIcon, AIIcon, IoTIcon } from './icons/icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  moreDetails: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, moreDetails }) => (
  <div className="group relative p-8 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:-translate-y-2 shadow-sm hover:shadow-xl min-h-[300px] flex flex-col">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative">
      <div className="mb-4 text-cyan-500 dark:text-cyan-400">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <ul className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700/50">
          {moreDetails.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <span className="mr-2 mt-1 text-cyan-500">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <WebDevIcon />,
      title: 'Web App Development',
      description: 'Building responsive, high-performance web applications with modern frameworks for a seamless user experience.',
      moreDetails: [
        'Custom web applications with React, Vue, or Angular',
        'Progressive Web Apps (PWAs)',
        'E-commerce platforms and payment integration',
        'Content Management Systems (CMS)',
        'API development and integration',
        'Performance optimization and SEO'
      ]
    },
    {
      icon: <MobileDevIcon />,
      title: 'Mobile App Development',
      description: 'Creating intuitive and engaging native and cross-platform mobile apps for iOS and Android devices.',
      moreDetails: [
        'Native iOS apps (Swift/SwiftUI)',
        'Native Android apps (Kotlin/Jetpack Compose)',
        'Cross-platform apps with React Native or Flutter',
        'App Store and Play Store deployment',
        'Push notifications and real-time updates',
        'Offline-first mobile applications'
      ]
    },
    {
      icon: <AIIcon />,
      title: 'AI Solutions',
      description: 'Leveraging machine learning and AI to build intelligent systems that automate processes and provide data-driven insights.',
      moreDetails: [
        'Custom chatbots and conversational AI',
        'Machine learning model development and training',
        'Natural Language Processing (NLP) solutions',
        'Computer vision and image recognition',
        'Data engineering and pipeline automation',
        'Interactive data visualization dashboards',
        'Predictive analytics and forecasting'
      ]
    },
    {
      icon: <IoTIcon />,
      title: 'IoT Integrations',
      description: 'Connecting physical devices to the digital world, enabling smart automation and real-time data collection.',
      moreDetails: [
        'Smart home and building automation',
        'Industrial IoT sensor networks',
        'Real-time monitoring dashboards',
        'Device firmware development',
        'Cloud-based IoT platforms (AWS IoT, Azure IoT)',
        'MQTT and IoT protocol integration',
        'Edge computing solutions'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our expertise spans across the full spectrum of modern digital product development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
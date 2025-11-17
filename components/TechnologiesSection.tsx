import React from 'react';
import { ReactIcon, NestJSIcon, MongoDBIcon, AWSIcon, TensorFlowIcon } from './icons/icons';

const TechIcon: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="group flex flex-col items-center justify-center gap-2 p-4 bg-slate-200 dark:bg-slate-800/50 rounded-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="h-12 w-12 text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors duration-300 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
  </div>
);

const TechnologiesSection: React.FC = () => {
  const technologies = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'NestJS', icon: <NestJSIcon /> },
    { name: 'MongoDB', icon: <MongoDBIcon /> },
    { name: 'AWS', icon: <AWSIcon /> },
    { name: 'TensorFlow', icon: <TensorFlowIcon /> },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {technologies.map(tech => (
            <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
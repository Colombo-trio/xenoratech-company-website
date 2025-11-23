import React from 'react';
import { motion } from 'framer-motion';
import {
  ReactIcon, AngularIcon, NextJSIcon,
  NodeJSIcon, NestJSIcon, JavaIcon, SpringBootIcon, PythonIcon,
  AndroidIcon,
  MongoDBIcon, MySQLIcon, PostgreSQLIcon,
  AWSIcon, VercelIcon
} from './icons/icons';

const TechIcon: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="group flex flex-col items-center justify-center gap-2 p-4 bg-slate-200 dark:bg-slate-800/50 rounded-lg transition-transform duration-300 hover:-translate-y-2"
  >
    <div className="h-12 w-12 text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors duration-300 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
  </motion.div>
);

const TechnologiesSection: React.FC = () => {
  const technologies = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Angular', icon: <AngularIcon /> },
    { name: 'Next.js', icon: <NextJSIcon /> },
    { name: 'Node.js', icon: <NodeJSIcon /> },
    { name: 'NestJS', icon: <NestJSIcon /> },
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'Spring Boot', icon: <SpringBootIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Android', icon: <AndroidIcon /> },
    { name: 'MongoDB', icon: <MongoDBIcon /> },
    { name: 'MySQL', icon: <MySQLIcon /> },
    { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
    { name: 'AWS', icon: <AWSIcon /> },
    { name: 'Vercel', icon: <VercelIcon /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Our <span className="gradient-text">Technology Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We use cutting-edge technologies to build robust and scalable solutions.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 max-w-full mx-auto"
        >
          {technologies.map(tech => (
            <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
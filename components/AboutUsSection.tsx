import React from 'react';
import { VisionIcon, MissionIcon, TeamIcon } from './icons/icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1">{children}</p>
    </div>
  </div>
);

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Pioneering Digital <span className="gradient-text">Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are a collective of creators, thinkers, and innovators dedicated to pushing the boundaries of technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur-xl opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/techteam/800/600" 
              alt="Colombo Trio Digital Team" 
              className="relative rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            <InfoCard icon={<MissionIcon />} title="Our Mission">
              To empower businesses with transformative digital solutions that are scalable, secure, and user-centric, fostering growth in a competitive landscape.
            </InfoCard>
            <InfoCard icon={<VisionIcon />} title="Our Vision">
              To be a leading technology partner in Sri Lanka and beyond, renowned for our innovation, quality, and commitment to client success.
            </InfoCard>
            <InfoCard icon={<TeamIcon />} title="Our Team">
               Our strength lies in our diverse team of experts, passionate about technology and driven by a shared goal of delivering outstanding results.
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
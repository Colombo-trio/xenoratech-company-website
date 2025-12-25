import React from 'react';
import { VisionIcon, MissionIcon, TeamIcon } from './icons/icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="flex items-start space-x-4">
    {/* Icon Container */}
    <div className="flex-shrink-0 w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md shadow-cyan-500/20 dark:shadow-cyan-400/20">
      {icon}
    </div>

    {/* Text */}
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{children}</p>
    </div>
  </div>
);

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 dark:bg-purple-600/10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Illuminating the <span className="gradient-text">Future of Technology</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            At Voxicore, we build digital experiences that resonate—powered by clarity, precision engineering, and purposeful innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur-xl opacity-20"></div>
            <img
              src="/images/about/about.png"
              alt="Voxicore Team"
              className="relative rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          {/* Information Cards */}
          <div className="space-y-8">
            <InfoCard icon={<MissionIcon />} title="Our Mission">
              To create high-quality, future-ready digital solutions that empower businesses through clarity, innovation,
              and precise engineering—technology that illuminates possibilities instead of complicating them.
            </InfoCard>

            <InfoCard icon={<VisionIcon />} title="Our Vision">
              To become a global leader in next-generation software, shaping a world where technology carries identity,
              purpose, and brilliance—bright enough to move industries forward.
            </InfoCard>

            <InfoCard icon={<TeamIcon />} title="Our Story">
              The name Voxicore combines "Vox" (voice) and "Core" (essence). We believe in giving a powerful voice to the
              core ideas that drive your business forward. We blend clarity and identity into every product we create.
            </InfoCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;

import React from 'react';

const teamMembers = [
  {
    name: "Janaka Prasad",
    role: "Developer",
    image: "/images/about/Janaka.jpg",
    bio: "Passionate about full-stack architectures and building scalable, high-performance web applications."
  },
  {
    name: "Nipun Lakshitha",
    role: "Developer",
    image: "/images/about/Nipun.jpeg",
    bio: "Dedicated to crafting seamless user experiences and optimizing backend efficiency for robust solutions."
  },
  {
    name: "Hasitha Hirushan",
    role: "Developer",
    image: "/images/about/Hasitha.jpeg",
    bio: "Innovative problem solver specializing in modern frontend technologies and interactive design systems."
  },

];

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => (
  <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/40 hover:to-purple-600/40 transition-all duration-300">
    <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl m-[1px] z-0"></div>
    <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">
      <div className="w-32 h-32 mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-full relative border-2 border-white dark:border-slate-800"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
      <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-3">{member.role}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Innovators</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The brilliant minds behind Voxicore, dedicated to illuminating the path to the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

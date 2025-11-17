import React from 'react';
import { TwitterIcon, LinkedInIcon, GithubIcon } from './icons/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Colombo Trio Digital. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <TwitterIcon />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <LinkedInIcon />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
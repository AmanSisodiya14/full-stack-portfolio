import React from 'react';
import { SOCIAL_LINKS, EDUCATION_DATA } from '../constants';
import { Mail, Linkedin, Github, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">Let's Connect</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
            I'm currently open to new backend opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-bold text-zinc-900 dark:text-white hover:underline decoration-2 underline-offset-4 break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5 md:w-8 md:h-8" />
            {SOCIAL_LINKS.email}
          </a>

          <div className="flex gap-6 mt-12">
            <a
              href={SOCIAL_LINKS.linkedin}
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </a>
          </div>
        </div>

        {/* Education & Info Column */}
        <div className="flex flex-col justify-between">
           <div>
             <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-6">Education</h3>
             <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{EDUCATION_DATA.university}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{EDUCATION_DATA.degree}</p>
                  <p className="text-sm text-zinc-500 mt-1">{EDUCATION_DATA.year}</p>
                </div>
             </div>
           </div>

           <div className="mt-12 md:mt-0">
             <p className="text-zinc-400 dark:text-zinc-600 text-sm">
               © {new Date().getFullYear()} Aman Sisodiya. Backend Engineer.
             </p>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

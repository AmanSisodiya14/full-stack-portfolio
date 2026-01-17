import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Server, Zap, Shield, Cpu, Code, Layers } from 'lucide-react';

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-zinc-900 dark:text-white">
          TECHNICAL <br /> EXPERTISE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:[grid-auto-rows:1fr] gap-6">
          
          {/* Custom Backend Engineering Card - Spans 2x2 */}
          <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 hover:shadow-lg flex flex-col">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Backend Engineering</h3>
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-3 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                        <Zap size={14} className="text-amber-500" /> Scalability
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-1">500K+</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Daily Kafka messages</div>
                </div>
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-3 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                         <Cpu size={14} className="text-blue-500" /> Optimization
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-1">40% Faster</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Response times via Redis</div>
                </div>
            </div>

            {/* Categorized Skills */}
            <div className="flex flex-col gap-6 mt-auto">
                {/* Core */}
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider">
                        <Code size={14} /> Core Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['Java (Collections, OOPs)', 'Spring Boot', 'Spring Data JPA'].map(skill => (
                             <span key={skill} className="px-3 py-1.5 text-sm font-medium rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                             {skill}
                           </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Architecture */}
                    <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider">
                            <Layers size={14} /> Architecture
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {['Microservices', 'REST API Design', 'Secure API Dev'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm font-medium rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>

                    {/* Security */}
                    <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider">
                            <Shield size={14} /> Security
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 text-sm font-medium rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                                JWT Auth & Authorization
                            </span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Remaining Cards from Data */}
          {SKILLS_DATA.map((category) => (
            <div
              key={category.title}
              className="group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-lg md:col-span-1 flex flex-col"
            >
              <div className="mb-6 p-3 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

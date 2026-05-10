import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const experience = [
    {
        year: 'Feb 2026 - May 2026',
        role: 'Technical Product Evangelist Intern',
        company: 'Odyssey Technologies',
        description: 'Conducted client demos, closed implementations for Scope Global School and BCS & Co, and led trials for Techfruits.',
        type: 'Intern',
        icon: <Code size={20} />
    },
    {
        year: 'Mar 2024 - Jan 2026',
        role: 'Part-time Faculty (Software)',
        company: 'Apollo Computer Education',
        description: 'Trained 50+ students in programming fundamentals and advanced development concepts (C, C++, Python, Java, SQL, MERN).',
        type: 'work',
        icon: <Brain size={20} />
    },
    {
        year: 'Nov 2023 - Jan 2024',
        role: 'Website Manager / Part-time Employee',
        company: 'Octopus Consulting Services',
        description: 'Managed website content, improved SEO, handled social media platforms, and generated leads via multiple channels.',
        type: 'work',
        icon: <Briefcase size={20} />
    },
];

import { Brain } from 'lucide-react'; // Import missing icon

const TimelineItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative flex items-center justify-between w-full mb-12 md:mb-8 flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
        {/* Connection Link for Desktop */}
        <div className="hidden md:block order-1 w-5/12" />

        {/* Timeline Dot */}
        <div className="hidden md:flex z-20 items-center md:order-1 bg-white dark:bg-background border-2 border-primary-blue rounded-full w-10 h-10 justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] md:relative md:left-auto md:translate-x-0">
            <span className="text-primary-blue">{item.icon}</span>
        </div>

        {/* Card Content */}
        <div className={`md:order-1 w-full md:w-5/12 ml-0 rounded-2xl bg-white dark:bg-black/40 backdrop-blur-xl p-6 border border-slate-200 dark:border-white/10 border-l-4 ${item.type === 'work' ? 'border-l-primary-violet' : 'border-l-primary-indigo'} shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300`}>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 dark:text-white">{item.role}</h3>
            <h4 className="font-code text-xs md:text-sm text-primary-blue mb-2">{item.company}</h4>
            <span className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded inline-block mb-3">{item.year}</span>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
        </div>
    </motion.div>
);

const Timeline = () => {
    return (
        <section id="experience" className="min-h-screen py-20 px-4 relative overflow-hidden">
            {/* Background Particles (Simplified) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute bg-white rounded-full w-1 h-1" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }} />
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-violet">
                        Experience
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-violet mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Vertical Line - Positioned left on mobile, center on desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue/40 via-primary-violet/40 to-transparent dark:from-white/10 dark:via-white/10 dark:to-transparent rounded-full" />

                <div className="relative">
                    {experience.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;

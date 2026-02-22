import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const experience = [
    {
        year: '2024-2026',
        role: 'Software Faculty',
        company: 'Apollo Computer Education',
        description: 'Technical Faculty for the MSA program, lecturing on a 10+ language stack from C++ to Full-Stack development.',
        type: 'work',
        icon: <Brain size={20} />
    },
    {
        year: '2023',
        role: 'Website Manager',
        company: 'Octopus Consulting Services',
        description: 'Built and managed the company’s entire web infrastructure from the ground up.',
        type: 'work',
        icon: <Briefcase size={20} />
    },
    {
        year: '2026',
        role: 'Technical Product Evangelist Intern',
        company: 'Odyssey Technologies Ltd',
        description: 'Communicating the technical architecture and core value of software solutions through live, deep-dive technical pitches.',
        type: 'Intern',
        icon: <Code size={20} />
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
        <div className="hidden md:flex z-20 items-center md:order-1 bg-background border-2 border-primary-cyan rounded-full w-10 h-10 justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] md:relative md:left-auto md:translate-x-0">
            <span className="text-primary-cyan">{item.icon}</span>
        </div>

        {/* Card Content */}
        <div className={`md:order-1 w-full md:w-5/12 ml-0 glass-panel bg-white/[0.12] md:bg-white/10 p-6 border-l-4 ${item.type === 'work' ? 'border-l-primary-purple' : 'border-l-primary-pink'} hover:bg-white/10 transition-colors`}>
            <h3 className="font-bold text-lg md:text-xl text-white">{item.role}</h3>
            <h4 className="font-code text-xs md:text-sm text-primary-cyan mb-2">{item.company}</h4>
            <span className="text-[10px] md:text-xs text-gray-400 bg-white/5 px-2 py-1 rounded inline-block mb-3">{item.year}</span>
            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
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
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-pink">
                        Experience
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-cyan to-primary-pink mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Vertical Line - Positioned left on mobile, center on desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10" />

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

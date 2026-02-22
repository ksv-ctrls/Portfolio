import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
    {
        title: "Hackathon Winner 2026",
        organization: "Code-a-thon",
        description: "Secured 1st place in the SDG innovation for SDG4-Quality Education'.",
        project_title: "'CareerLens'.",
        icon: <Trophy size={32} className="text-primary-pink" />
    },
    {
        title: "Hackathon Winner 2025",
        organization: "MGRDS Hackathon",
        description: "Secured 1st place in the edutainment domain.",
        project_title: "'Gamified Environmental Education app'.",
        icon: <Award size={32} className="text-primary-cyan" />
    },
    {
        title: "Organising chair awards",
        organization: "Dr. MGR University",
        description: "Organised, managed and hosted multiple events on and off campus'.",
        icon: <Star size={32} className="text-primary-purple" />
    },
    {
        title: "ISR Award",
        organization: "Dr. MGR University",
        description: "Recognized for contributions to social and institutional development.",
        icon: <Medal size={32} className="text-primary-green" />
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="min-h-screen py-20 px-4 relative flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-cyan">
                        Honors & Awards
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-purple to-primary-cyan mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.5)" }}
                            className="glass-panel p-6 flex flex-col items-center text-center group border hover:border-primary-purple/50 transition-all duration-300"
                        >
                            <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-pink transition-colors">{item.title}</h3>
                            <h4 className="text-sm font-code text-gray-400 mb-4">{item.organization}</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

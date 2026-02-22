import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Brain, Terminal, Layers } from 'lucide-react';

const skillsData = [
    {
        category: 'AI & Tools',
        icon: <Brain className="w-6 h-6 text-primary-pink" />,
        skills: ['Python', 'Multi-Agent API Integration', 'LangChain', 'TensorFlow', 'PowerBI']
    },
    {
        category: 'Web Development',
        icon: <Globe className="w-6 h-6 text-primary-cyan" />,
        skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JavaScript']
    },
    {
        category: 'Programming Core',
        icon: <Cpu className="w-6 h-6 text-primary-purple" />,
        skills: ['C++', 'Java', 'C#', 'SQL', 'C']
    },
    {
        category: 'Development Tools',
        icon: <Terminal className="w-6 h-6 text-slate-400" />,
        skills: ['Git & GitHub', 'Docker', 'Vercel', 'API Integration', 'VS Code']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-20 px-4 relative flex flex-col items-center justify-center">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-purple">
                    Skills
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary-cyan to-primary-purple mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* Unified Skills Box */}
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12 border border-white/10 relative overflow-hidden"
                >
                    {/* Background Decorative Element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-cyan/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
                        {skillsData.map((category, catIdx) => (
                            <div key={catIdx} className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-code font-bold text-sm tracking-widest text-white uppercase">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <motion.span
                                            key={skillIdx}
                                            whileHover={{ scale: 1.05, color: '#22d3ee' }}
                                            className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs font-code text-gray-400 cursor-default transition-colors hover:border-primary-cyan/30"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>


                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary-pink/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default Skills;

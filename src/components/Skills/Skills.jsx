import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Brain, Terminal, Layers } from 'lucide-react';
import SpotlightCard from '../UI/SpotlightCard/SpotlightCard';

const themes = {
    indigo: {
        bg: "bg-indigo-500/10",
        text: "text-indigo-500",
        border: "border-indigo-500/30 hover:border-indigo-500",
        spotlight: "rgba(99, 102, 241, 0.15)",
        glow: "shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] dark:hover:shadow-none"
    },
    pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-500",
        border: "border-pink-500/30 hover:border-pink-500",
        spotlight: "rgba(236, 72, 153, 0.15)",
        glow: "shadow-[0_0_30px_rgba(236,72,153,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(236,72,153,0.4)] dark:hover:shadow-none"
    },
    teal: {
        bg: "bg-teal-500/10",
        text: "text-teal-500",
        border: "border-teal-500/30 hover:border-teal-500",
        spotlight: "rgba(20, 185, 129, 0.15)",
        glow: "shadow-[0_0_30px_rgba(20,185,129,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(20,185,129,0.4)] dark:hover:shadow-none"
    },
    blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        border: "border-blue-500/30 hover:border-blue-500",
        spotlight: "rgba(59, 130, 246, 0.15)",
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(59,130,246,0.4)] dark:hover:shadow-none"
    }
};

const skillsData = [
    {
        category: 'Programming & Development',
        icon: Cpu,
        theme: themes.teal,
        skills: ['Python', 'Java', 'C', 'C++', 'C#', 'MERN Stack', 'React.js', 'Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
        category: 'Data & Analytics',
        icon: Database,
        theme: themes.pink,
        skills: ['MySQL', 'MongoDB', 'SQL', 'Power BI', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
        category: 'AI & Tools',
        icon: Brain,
        theme: themes.indigo,
        skills: ['Generative AI', 'RAG-based Systems', 'LLM Integration', 'Multi-Agent APIs', 'LangChain', 'TensorFlow', 'Playwright', 'Docker']
    },
    {
        category: 'Other Skills & Tools',
        icon: Terminal,
        theme: themes.blue,
        skills: ['Python-SQL Connectivity', 'JDBC', 'JSP', 'Git & GitHub', 'Vercel', 'VS Code', 'API Integration']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 relative flex flex-col items-center justify-center">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-violet">
                    Skills
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-violet mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skillsData.map((category, catIdx) => {
                        const Icon = category.icon;
                        const theme = category.theme;
                        
                        return (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                                className="h-full"
                            >
                                <SpotlightCard 
                                    className={`h-full rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-xl flex flex-col transition-shadow ${theme.glow}`}
                                    spotlightColor={theme.spotlight}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-2 ${theme.bg} rounded-xl shrink-0`}>
                                            <Icon className={theme.text} size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">{category.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className={`px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-md text-xs font-code text-slate-600 dark:text-gray-300 transition-colors duration-300 ${theme.border} hover:bg-black/10 dark:hover:bg-white/10 cursor-default`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary-indigo/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
};

export default Skills;

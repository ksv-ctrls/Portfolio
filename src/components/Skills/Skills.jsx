import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Brain, Terminal } from 'lucide-react';
import SpotlightCard from '../UI/SpotlightCard/SpotlightCard';

const themes = {
    programming: { // Deep Plum #24113F & Burgundy #7A1722
        iconBg: "bg-[#7A1722] text-[#F7F1EB]",
        iconColor: "#E7C9C9",
        title: "text-[#FCF9F5]",
        cardBg: "bg-[#24113F]",
        border: "border-[#E7C9C9]/40",
        tag: "bg-[#7A1722]/60 text-[#FCF9F5] border-[#E7C9C9]/30 hover:border-[#E7C9C9]",
        spotlight: "rgba(231, 201, 201, 0.25)",
        glow: "shadow-[0_12px_36px_rgba(36,17,63,0.35)]"
    },
    data: { // Dusty Rose #E7C9C9 & Warm Neutral #FCF9F5
        iconBg: "bg-[#7A1722] text-[#F7F1EB]",
        iconColor: "#FCF9F5",
        title: "text-[#211E20]",
        cardBg: "bg-[#E7C9C9]/40",
        border: "border-[#E7C9C9]",
        tag: "bg-[#FCF9F5] text-[#211E20] border-[#E8DFD8] hover:border-[#7A1722]",
        spotlight: "rgba(122, 23, 34, 0.2)",
        glow: "shadow-[0_10px_30px_rgba(231,201,201,0.3)]"
    },
    ai: { // Deep Burgundy #7A1722
        iconBg: "bg-[#24113F] text-[#F7F1EB]",
        iconColor: "#D2AF6D",
        title: "text-[#FCF9F5]",
        cardBg: "bg-[#7A1722]",
        border: "border-[#E7C9C9]/40",
        tag: "bg-[#24113F]/60 text-[#FCF9F5] border-[#E7C9C9]/30 hover:border-[#D2AF6D]",
        spotlight: "rgba(210, 175, 109, 0.25)",
        glow: "shadow-[0_12px_36px_rgba(122,23,34,0.4)]"
    },
    tools: { // Muted Blue #8EABC8 & Warm Neutral #FCF9F5
        iconBg: "bg-[#7A1722] text-[#F7F1EB]",
        iconColor: "#8EABC8",
        title: "text-[#211E20]",
        cardBg: "bg-[#8EABC8]/25",
        border: "border-[#8EABC8]/60",
        tag: "bg-[#FCF9F5] text-[#211E20] border-[#E8DFD8] hover:border-[#8EABC8]",
        spotlight: "rgba(142, 171, 200, 0.25)",
        glow: "shadow-[0_10px_30px_rgba(142,171,200,0.25)]"
    }
};

const skillsData = [
    {
        category: 'Languages & Core CS',
        icon: Cpu,
        theme: themes.programming,
        skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'Data Structures & Algorithms', 'System Design', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks']
    },
    {
        category: 'Full-Stack Development',
        icon: Database,
        theme: themes.data,
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'FastAPI', 'Next.js', 'GraphQL', 'WebSockets', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
        category: 'AI & Machine Learning',
        icon: Brain,
        theme: themes.ai,
        skills: ['Machine Learning', 'NLP', 'LangChain', 'LangGraph', 'Retrieval Augmented Generation', 'Multi-Agent Systems', 'LLM Integration', 'OpenAI', 'Gemini', 'Prompt Engineering', 'LLM Fine-Tuning', 'LoRA', 'Scikit-learn', 'FAISS', 'Pinecone', 'HuggingFace', 'Transformers', 'Microservices']
    },
    {
        category: 'Cloud, Tools & DevOps',
        icon: Terminal,
        theme: themes.tools,
        skills: ['AWS', 'EC2', 'S3', 'Lambda', 'Docker', 'Git', 'GitHub', 'CI/CD', 'PostgreSQL', 'SQLite', 'Playwright', 'Redis', 'Agile/Scrum']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 relative flex flex-col items-center justify-center">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <span className="text-xs font-code tracking-widest text-[#7A1722] uppercase font-bold">TECHNICAL MATRIX</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#211E20] tracking-tight mt-2">
                    Skills &amp; Capabilities
                </h2>
                <div className="h-1 w-20 bg-[#7A1722] mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillsData.map((category, catIdx) => {
                        const IconComponent = category.icon;
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
                                    className={`h-full rounded-2xl ${theme.cardBg} border ${theme.border} p-6 flex flex-col transition-all duration-300 ${theme.glow}`}
                                    spotlightColor={theme.spotlight}
                                >
                                    <div className="flex items-center gap-3.5 mb-6">
                                        {/* High-Contrast Explicitly Rendered Icon Container */}
                                        <div className={`p-3 ${theme.iconBg} rounded-xl shrink-0 flex items-center justify-center shadow-xs z-10`}>
                                            <IconComponent size={22} style={{ color: theme.iconColor }} />
                                        </div>
                                        <h3 className={`text-lg font-bold ${theme.title} leading-tight`}>{category.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className={`px-3 py-1.5 border rounded-md text-xs font-code font-semibold transition-colors duration-300 ${theme.tag} cursor-default`}
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
        </section>
    );
};

export default Skills;

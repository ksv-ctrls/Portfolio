import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Heart } from 'lucide-react';
import SpotlightCard from '../UI/SpotlightCard/SpotlightCard';

const hackathonAchievements = [
    "1st Place – National-Level Hackathon (₹10,000 Prize) at New Prince College",
    "Best Project Award – MAHSA University Malaysia Hackathon (CareerLens)",
    "Bronze Award – MAHSA University Malaysia Hackathon (Degree level)",
    "1st Place – Department Data Science Hackathon",
    "Multiple intercollegiate wins across technical & non-technical events"
];

const leadershipAchievements = [
    "Outstanding Coordination – TechVistra ’25 (National-Level Symposium)",
    "Event Coordinator – SDG Ethios (Planning and execution)",
    "Badge Holder – Data Science Association"
];

const researchAchievements = [
    "Research Contributor – Indian Knowledge Systems (IKS) Initiative",
    "Official Certification for ISR (Institutional Social Responsibility) initiatives",
    "Conducted AI & Data Science sessions at Shenoy Nagar Corporation School & Faith Home Orphanage"
];

const themes = {
    indigo: {
        bg: "bg-indigo-500/10",
        text: "text-indigo-500",
        border: "border-indigo-500/30 group-hover:border-indigo-500",
        line: "from-indigo-500/40 via-indigo-500/20",
        shadow: "group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
    },
    pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-500",
        border: "border-pink-500/30 group-hover:border-pink-500",
        line: "from-pink-500/40 via-pink-500/20",
        shadow: "group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]"
    },
    teal: {
        bg: "bg-teal-500/10",
        text: "text-teal-500",
        border: "border-teal-500/30 group-hover:border-teal-500",
        line: "from-teal-500/40 via-teal-500/20",
        shadow: "group-hover:shadow-[0_0_10px_rgba(20,185,129,0.5)]"
    }
};

const GlowingTimeline = ({ items, theme }) => (
    <div className="relative pl-10 mt-4">
        {/* Vertical Line */}
        <div className={`absolute left-[19px] top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b ${theme.line} to-transparent`} />
        
        <div className="flex flex-col gap-4">
            {items.map((text, i) => (
                <div key={i} className="relative group">
                    {/* Glowing Node */}
                    <div className={`absolute -left-[32px] top-0 flex items-center justify-center w-6 h-6 rounded-md bg-white/50 dark:bg-white/10 border ${theme.border} ${theme.shadow} backdrop-blur-sm transition-all duration-300 z-10`}>
                        <span className={`text-[10px] font-code font-bold ${theme.text}`}>0{i + 1}</span>
                    </div>
                    {/* Text */}
                    <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

const Achievements = () => {
    return (
        <section id="achievements" className="py-16 px-4 relative flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-violet to-primary-blue">
                        Honors & Awards
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-violet to-primary-blue mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Big Spotlight Card: Hackathons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2 lg:col-span-2"
                    >
                        <SpotlightCard 
                            className="h-full rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] dark:hover:shadow-none transition-shadow" 
                            spotlightColor="rgba(99, 102, 241, 0.15)"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`p-2 ${themes.indigo.bg} rounded-xl`}>
                                    <Trophy className={themes.indigo.text} size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Hackathons & Innovation</h3>
                            </div>
                            <GlowingTimeline items={hackathonAchievements} theme={themes.indigo} />
                        </SpotlightCard>
                    </motion.div>

                    {/* Small Spotlight Card: Leadership */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 lg:col-span-1"
                    >
                        <SpotlightCard 
                            className="h-full rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(236,72,153,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(236,72,153,0.4)] dark:hover:shadow-none transition-shadow" 
                            spotlightColor="rgba(236, 72, 153, 0.15)"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`p-2 ${themes.pink.bg} rounded-xl`}>
                                    <Star className={themes.pink.text} size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Leadership</h3>
                            </div>
                            <GlowingTimeline items={leadershipAchievements} theme={themes.pink} />
                        </SpotlightCard>
                    </motion.div>

                    {/* Wide Spotlight Card: Social Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-1 lg:col-span-3"
                    >
                        <SpotlightCard 
                            className="h-full rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(20,185,129,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(20,185,129,0.4)] dark:hover:shadow-none transition-shadow" 
                            spotlightColor="rgba(20, 185, 129, 0.15)"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`p-2 ${themes.teal.bg} rounded-xl`}>
                                    <Heart className={themes.teal.text} size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Research & Social Impact</h3>
                            </div>
                            <GlowingTimeline items={researchAchievements} theme={themes.teal} />
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

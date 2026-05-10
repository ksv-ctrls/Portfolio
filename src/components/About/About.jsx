import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Coffee, GraduationCap } from 'lucide-react';
import GlareHover from '../UI/GlareHover/GlareHover';

import profileImage from '../../assets/profile_new.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="h-full"
                >

                    <div className="p-6 md:p-10 rounded-2xl bg-white dark:bg-black/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 relative overflow-hidden space-y-8 h-full shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] dark:hover:shadow-none transition-shadow duration-300">
                        {/* Background Decorative Element */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-violet/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-violet">
                                About me
                            </h2>
                            <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                I am a passionate <span className="text-blue-600 dark:text-blue-400">MERN Stack Developer</span> and <span className="text-indigo-600 dark:text-indigo-400">GenAI Enthusiast</span> dedicated to building intelligent, user-centric applications. My journey is fueled by a curiosity for how artificial intelligence can transform the way we interact with technology.
                            </p>
                        </div>

                        <div className="glass-panel p-4 border-l-2 border-primary-teal text-left bg-black/5 dark:bg-white/5 relative z-10">
                            <GraduationCap className="text-primary-teal mb-2" size={24} />
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-1 text-sm md:text-base">B.Tech - CSE (Data Science & Artificial Intelligence)</h3>
                                    <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-code">Dr. M.G.R. Educational and Research Institute</p>
                                </div>
                                <div className="text-left md:text-right flex flex-row md:flex-col items-center md:items-end flex-shrink-0 gap-2 md:gap-1">
                                    <span className="text-[10px] md:text-xs font-code bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-blue-600 dark:text-blue-400 whitespace-nowrap">2023-2027</span>
                                    <span className="text-xs md:text-sm font-bold text-teal-600 dark:text-teal-400 whitespace-nowrap">CGPA: 8.8</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 relative z-10">
                            <div className="p-4 border-l-2 border-primary-blue bg-black/5 dark:bg-white/5 rounded-r-lg">
                                <Target className="text-primary-blue mb-2" size={24} />
                                <h3 className="font-bold text-slate-800 dark:text-white mb-1">My Mission</h3>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400">To create seamless digital experiences that leverage AI to solve real-world problems.</p>
                            </div>
                            <div className="p-4 border-l-2 border-primary-violet text-left bg-black/5 dark:bg-white/5 rounded-r-lg">
                                <Coffee className="text-primary-violet mb-2" size={24} />
                                <h3 className="font-bold text-slate-800 dark:text-white mb-1">My Approach</h3>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400">Focusing on clean code, scalable architecture, and continuous learning.</p>
                            </div>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center h-full"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative group z-10 w-full h-full flex items-center justify-center py-8 lg:py-0">
                        <GlareHover
                            className="w-[280px] md:w-[400px] lg:w-full lg:h-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary-blue/20 via-primary-violet/20 to-primary-indigo/20 border border-black/10 dark:border-white/10 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                            glareColor="#ffffff"
                            glareOpacity={0.8}
                            glareAngle={-45}
                            glareSize={300}
                        >
                            <img
                                src={profileImage}
                                alt="Kalaa Sri Varshini"
                                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Removed the fading overlay to keep the image 100% clear */}

                            {/* Decorative Frames - Responsive sizing */}
                            <div className="absolute top-2 left-2 w-12 h-16 md:w-24 md:h-32 border-t-4 border-l-4 border-primary-blue rounded-tl-2xl opacity-50 pointer-events-none" />
                            <div className="absolute bottom-2 right-2 w-12 h-16 md:w-24 md:h-32 border-b-4 border-r-4 border-primary-violet rounded-br-2xl opacity-50 pointer-events-none" />
                        </GlareHover>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

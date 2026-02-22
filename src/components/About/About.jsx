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

                    <div className="glass-panel p-6 md:p-10 border border-white/10 relative overflow-hidden space-y-8 h-full">
                        {/* Background Decorative Element */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-purple">
                                About me
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                I am a passionate <span className="text-primary-cyan">MERN Stack Developer</span> and <span className="text-primary-pink">GenAI Enthusiast</span> dedicated to building intelligent, user-centric applications. My journey is fueled by a curiosity for how artificial intelligence can transform the way we interact with technology.
                            </p>
                        </div>

                        <div className="glass-panel p-4 border-l-2 border-primary-green text-left bg-white/5 relative z-10">
                            <GraduationCap className="text-primary-green mb-2" size={24} />
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                <div>
                                    <h3 className="font-bold text-white mb-1 text-sm md:text-base">B.Tech - CSE (Data Science & Artificial Intelligence)</h3>
                                    <p className="text-xs md:text-sm text-primary-cyan font-code">Dr. M.G.R. Educational and Research Institute</p>
                                </div>
                                <div className="text-left md:text-right flex flex-row md:flex-col items-center md:items-end flex-shrink-0 gap-2 md:gap-1">
                                    <span className="text-[10px] md:text-xs font-code bg-white/5 px-2 py-1 rounded text-primary-pink whitespace-nowrap">2023-2027</span>
                                    <span className="text-xs md:text-sm font-bold text-primary-green whitespace-nowrap">CGPA: 8.9</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 relative z-10">
                            <div className="p-4 border-l-2 border-primary-cyan bg-white/5 rounded-r-lg">
                                <Target className="text-primary-cyan mb-2" size={24} />
                                <h3 className="font-bold text-white mb-1">My Mission</h3>
                                <p className="text-xs md:text-sm text-gray-400">To create seamless digital experiences that leverage AI to solve real-world problems.</p>
                            </div>
                            <div className="p-4 border-l-2 border-primary-purple text-left bg-white/5 rounded-r-lg">
                                <Coffee className="text-primary-purple mb-2" size={24} />
                                <h3 className="font-bold text-white mb-1">My Approach</h3>
                                <p className="text-xs md:text-sm text-gray-400">Focusing on clean code, scalable architecture, and continuous learning.</p>
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-cyan/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative group z-10 w-full h-full flex items-center justify-center py-8 lg:py-0">
                        <GlareHover
                            className="w-[280px] md:w-[400px] lg:w-full lg:h-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary-cyan/20 via-primary-purple/20 to-primary-pink/20 border border-white/10 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                            glareColor="#ffffff"
                            glareOpacity={0.8}
                            glareAngle={-45}
                            glareSize={300}
                        >
                            <img
                                src={profileImage}
                                alt="Kalaa Sri Varshini"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />

                            {/* Decorative Frames - Responsive sizing */}
                            <div className="absolute top-2 left-2 w-12 h-16 md:w-24 md:h-32 border-t-4 border-l-4 border-primary-cyan rounded-tl-2xl opacity-50 pointer-events-none" />
                            <div className="absolute bottom-2 right-2 w-12 h-16 md:w-24 md:h-32 border-b-4 border-r-4 border-primary-purple rounded-br-2xl opacity-50 pointer-events-none" />
                        </GlareHover>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

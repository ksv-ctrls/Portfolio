import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Coffee, GraduationCap, Sparkles } from 'lucide-react';
import GlareHover from '../UI/GlareHover/GlareHover';
import profileImage from '../../assets/profile_new.jpg';

const About = () => {
    const [cardHovered, setCardHovered] = useState(false);

    return (
        <section id="about" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* ── LEFT: Portrait Image with Offset Frame ───────────── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 relative flex items-center justify-center"
                >
                    <div className="relative group w-full max-w-[340px] lg:max-w-none aspect-[4/5] mx-auto">
                        {/* Offset frame in Soft Rose + Lavender */}
                        <div className="absolute -inset-3 bg-[#F0DCD9] rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-[#E7C9C7]" />
                        <div className="absolute inset-0 bg-[#C9B8D8]/40 rounded-2xl translate-x-2 translate-y-2 border border-[#E8DFD8]" />

                        <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#E8DFD8] bg-[#FCF9F5] shadow-md z-10">
                            <GlareHover
                                className="w-full h-full"
                                glareColor="#F7F1EB"
                                glareOpacity={0.55}
                                glareAngle={-45}
                                glareSize={300}
                            >
                                <img
                                    src={profileImage}
                                    alt="Kalaa Sri Varshini"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Primary Burgundy signature line */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#7A1822]" />
                            </GlareHover>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: About Card — Rich dark surface ────────────── */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7"
                >
                    {/*
                      Main card: Deep Burgundy dark surface (#4A0E18) in normal state.
                      On hover: transitions to a richer/darker burgundy (#3A080F) with
                      a deep coloured shadow — burgundy ambient light expanding outward.
                    */}
                    <div
                        onMouseEnter={() => setCardHovered(true)}
                        onMouseLeave={() => setCardHovered(false)}
                        style={{
                            backgroundColor: cardHovered ? '#3A080F' : '#4A0E18',
                            border: `1.5px solid ${cardHovered ? '#7A1822' : '#5A1220'}`,
                            boxShadow: cardHovered
                                ? '0 32px 72px rgba(122,24,34,0.52), 0 12px 32px rgba(90,16,24,0.38), 0 0 80px rgba(74,14,24,0.20)'
                                : '0 16px 44px rgba(74,14,24,0.30), 0 6px 20px rgba(122,24,34,0.20)',
                            transform: cardHovered ? 'translateY(-5px)' : 'translateY(0)',
                            transition: [
                                'background-color 320ms ease',
                                'border-color 320ms ease',
                                'box-shadow 320ms ease',
                                'transform 320ms cubic-bezier(0.25,1,0.5,1)',
                            ].join(', '),
                            borderRadius: '20px',
                            padding: '36px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        {/* ── Heading area ─────────────────────────────────── */}
                        <div>
                            <span
                                style={{
                                    fontSize: '10px',
                                    fontFamily: "'Source Code Pro', monospace",
                                    letterSpacing: '0.14em',
                                    color: '#E7C9C7',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                }}
                            >
                                ABOUT ME
                            </span>
                            <h2
                                style={{
                                    fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                                    fontWeight: 800,
                                    color: '#FCF9F5',
                                    letterSpacing: '-0.03em',
                                    marginTop: '8px',
                                    marginBottom: '10px',
                                    lineHeight: 1.2,
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                Full-Stack Developer | AI/ML Engineer | Software Engineering
                            </h2>
                            <p
                                style={{
                                    fontSize: '14px',
                                    lineHeight: 1.7,
                                    color: 'rgba(252,249,245,0.80)',
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                Full-Stack Developer and AI/ML Engineer with experience building production-grade web applications, AI-powered systems, and developer tools. Delivered solutions across industry projects, government-funded research, and award-winning competitions using React, Next.js, FastAPI, AWS, and LLM technologies. Proven ability to design, build, and deploy scalable software from concept to production.
                            </p>
                        </div>

                        {/* ── BLOCK 1: Education — Soft Rose + Burgundy ──── */}
                        <div
                            style={{
                                backgroundColor: '#F0DCD9',
                                border: '1px solid #E7C9C7',
                                borderRadius: '14px',
                                padding: '18px 20px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <GraduationCap size={20} color="#7A1822" />
                                <span
                                    style={{
                                        fontWeight: 700,
                                        color: '#7A1822',
                                        fontSize: '13px',
                                        fontFamily: "'Space Grotesk', sans-serif",
                                    }}
                                >
                                    B.Tech - Computer Science Engineering (AI &amp; Data Science)
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '12px',
                                        fontFamily: "'Source Code Pro', monospace",
                                        fontWeight: 700,
                                        color: 'rgba(33,28,29,0.85)',
                                    }}
                                >
                                    Dr. MGR Educational and Research Institute, Chennai
                                </p>
                                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontFamily: "'Source Code Pro', monospace",
                                            background: '#FCF9F5',
                                            padding: '3px 10px',
                                            borderRadius: '6px',
                                            color: '#7A1822',
                                            fontWeight: 700,
                                            border: '1px solid #E7C9C7',
                                        }}
                                    >
                                        2023 - 2027
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontFamily: "'Source Code Pro', monospace",
                                            background: '#D5B36A',
                                            padding: '3px 10px',
                                            borderRadius: '6px',
                                            color: '#FCF9F5',
                                            fontWeight: 700,
                                        }}
                                    >
                                        CGPA: 8.8 / 10
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ── BLOCK 2 & 3: Mission + Technical ─────────────── */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>

                            {/* BLOCK 2: Mission — Solid Dark Plum */}
                            <div
                                style={{
                                    backgroundColor: '#24112F',
                                    border: '1px solid rgba(201,184,216,0.25)',
                                    borderRadius: '14px',
                                    padding: '18px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Target size={18} color="#C9B8D8" />
                                    <span style={{ fontWeight: 700, color: '#FCF9F5', fontSize: '13px', fontFamily: "'Space Grotesk', sans-serif" }}>
                                        My Mission
                                    </span>
                                </div>
                                <p style={{ fontSize: '11.5px', color: 'rgba(252,249,245,0.80)', lineHeight: 1.6 }}>
                                    To create seamless digital experiences that leverage AI to solve real-world challenges.
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        paddingTop: '8px',
                                        borderTop: '1px solid rgba(201,184,216,0.20)',
                                        fontSize: '10px',
                                        fontFamily: "'Source Code Pro', monospace",
                                        color: '#C9B8D8',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        fontWeight: 600,
                                    }}
                                >
                                    <Sparkles size={11} />
                                    AI Innovation Driven
                                </div>
                            </div>

                            {/* BLOCK 3: Technical Identity — Solid Soft Blue */}
                            <div
                                style={{
                                    backgroundColor: '#D9E4EF',
                                    border: '1px solid rgba(155,182,211,0.50)',
                                    borderRadius: '14px',
                                    padding: '18px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Coffee size={18} color="#7A1822" />
                                    <span style={{ fontWeight: 700, color: '#211C1D', fontSize: '13px', fontFamily: "'Space Grotesk', sans-serif" }}>
                                        My Approach
                                    </span>
                                </div>
                                <p style={{ fontSize: '11.5px', color: 'rgba(33,28,29,0.80)', lineHeight: 1.6 }}>
                                    Focusing on clean code, scalable architecture, dynamic interfaces, and continuous learning.
                                </p>
                                <div
                                    style={{
                                        paddingTop: '8px',
                                        borderTop: '1px solid rgba(155,182,211,0.35)',
                                        fontSize: '10px',
                                        fontFamily: "'Source Code Pro', monospace",
                                        color: '#7A1822',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Full Stack Excellence
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

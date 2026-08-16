import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Each achievement has a clearly visible colored background in NORMAL state
 * (not plain cream/white), and transitions to a solid saturated colour on hover.
 *
 * normalBg  — visibly tinted but sophisticated normal-state background
 * hoverBg   — solid, saturated hover background
 * hoverText — contrast text for hover state
 * hoverShadow — deep coloured shadow using the card's own accent family
 */
const achievementsList = [
    {
        num: '01',
        title: 'INTERNATIONAL BEST PROJECT AWARD',
        event: 'International Best Project Award + Bronze Prize',
        org: 'MAHSA University, Malaysia — Degree Level International',
        prize: 'CareerLens AI Project',
        category: 'International Win',
        accentColor: '#7A1822',
        normalBg: '#F2D8D6',
        normalText: '#7A1822',
        normalBorder: '#E7C9C7',
        hoverBg: '#7A1822',
        hoverText: '#FCF9F5',
        hoverBorder: '#5A1018',
        hoverShadow: '0 26px 58px rgba(122,24,34,0.42), 0 10px 26px rgba(122,24,34,0.28)',
    },
    {
        num: '02',
        title: '1ST PLACE — NATIONAL-LEVEL HACKATHON',
        event: '1st Place — National-Level Hackathon',
        org: 'New Prince College',
        prize: '₹10,000 Cash Prize',
        category: 'Hackathon',
        accentColor: '#24112F',
        normalBg: '#D4C5DD',
        normalText: '#24112F',
        normalBorder: '#C9B8D8',
        hoverBg: '#24112F',
        hoverText: '#FCF9F5',
        hoverBorder: '#1A0B24',
        hoverShadow: '0 26px 58px rgba(36,17,47,0.44), 0 10px 26px rgba(36,17,47,0.28)',
    },
    {
        num: '03',
        title: '1ST PLACE — INTERCOLLEGIATE DATA SCIENCE HACKATHON',
        event: '1st Place — Intercollegiate Data Science Hackathon',
        org: 'Dr. M.G.R. Educational and Research Institute',
        prize: 'Top Honor',
        category: 'Data Science',
        accentColor: '#B8954C',
        normalBg: '#EED9AE',
        normalText: '#8A6E28',
        normalBorder: '#D5B36A',
        hoverBg: '#D5B36A',
        hoverText: '#211C1D',
        hoverBorder: '#B8954C',
        hoverShadow: '0 26px 58px rgba(213,179,106,0.44), 0 10px 26px rgba(184,149,76,0.30)',
    },
    {
        num: '04',
        title: 'NATIONAL COORDINATOR — TECHVISTRA \'25',
        event: "National Coordinator — TechVistra '25",
        org: 'National-Level Symposium · CSE & Data Science Dept',
        prize: 'Leadership Recognition',
        category: 'Leadership',
        accentColor: '#7A1822',
        normalBg: '#F2D8D6',
        normalText: '#7A1822',
        normalBorder: '#E7C9C7',
        hoverBg: '#7A1822',
        hoverText: '#FCF9F5',
        hoverBorder: '#5A1018',
        hoverShadow: '0 26px 58px rgba(122,24,34,0.42), 0 10px 26px rgba(122,24,34,0.28)',
    },
    {
        num: '05',
        title: 'RESEARCH CONTRIBUTOR',
        event: 'Research Contributor — Govt. of India IKS Initiative',
        org: 'AI-Powered Gamified Learning Platform',
        prize: 'Institutional Certification',
        category: 'Research',
        accentColor: '#24112F',
        normalBg: '#D4C5DD',
        normalText: '#24112F',
        normalBorder: '#C9B8D8',
        hoverBg: '#24112F',
        hoverText: '#FCF9F5',
        hoverBorder: '#1A0B24',
        hoverShadow: '0 26px 58px rgba(36,17,47,0.44), 0 10px 26px rgba(36,17,47,0.28)',
    },
    {
        num: '06',
        title: 'AI & DATA SCIENCE OUTREACH',
        event: 'Conducted AI & Data Science Sessions',
        org: 'ISR Initiative — Schools & Orphanages',
        prize: 'Community Impact',
        category: 'Social Impact',
        accentColor: '#B8954C',
        normalBg: '#EED9AE',
        normalText: '#8A6E28',
        normalBorder: '#D5B36A',
        hoverBg: '#D5B36A',
        hoverText: '#211C1D',
        hoverBorder: '#B8954C',
        hoverShadow: '0 26px 58px rgba(213,179,106,0.44), 0 10px 26px rgba(184,149,76,0.30)',
    },
    {
        num: '07',
        title: 'INTERCOLLEGIATE CHAMPION',
        event: 'Multiple Technical & Non-Technical Wins',
        org: 'Various Academic & Tech Institutions',
        prize: 'Symposium Awards',
        category: 'Competitions',
        accentColor: '#7A1822',
        normalBg: '#F2D8D6',
        normalText: '#7A1822',
        normalBorder: '#E7C9C7',
        hoverBg: '#7A1822',
        hoverText: '#FCF9F5',
        hoverBorder: '#5A1018',
        hoverShadow: '0 26px 58px rgba(122,24,34,0.42), 0 10px 26px rgba(122,24,34,0.28)',
    },
    {
        num: '08',
        title: 'DSA BADGE HOLDER',
        event: 'Official Data Science Association Member',
        org: 'Data Science Association',
        prize: 'Honorary Member',
        category: 'Certifications',
        accentColor: '#24112F',
        normalBg: '#D4C5DD',
        normalText: '#24112F',
        normalBorder: '#C9B8D8',
        hoverBg: '#24112F',
        hoverText: '#FCF9F5',
        hoverBorder: '#1A0B24',
        hoverShadow: '0 26px 58px rgba(36,17,47,0.44), 0 10px 26px rgba(36,17,47,0.28)',
    },
];

const AchievementRow = ({ item, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered ? item.hoverBg : item.normalBg,
                borderBottom: `1px solid ${hovered ? item.hoverBorder : item.normalBorder}`,
                boxShadow: hovered ? item.hoverShadow : 'none',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: [
                    'background-color 280ms ease',
                    'color 280ms ease',
                    'box-shadow 280ms ease',
                    'transform 280ms cubic-bezier(0.25,1,0.5,1)',
                    'border-color 280ms ease',
                ].join(', '),
                position: 'relative',
                zIndex: hovered ? 2 : 1,
            }}
            className="py-7 px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center cursor-default"
        >
            {/* Number Stamp */}
            <div className="md:col-span-2 flex items-center">
                <span
                    className="text-2xl md:text-3xl font-black font-code"
                    style={{
                        color: hovered ? item.hoverText : item.normalText,
                        transition: 'color 280ms ease',
                    }}
                >
                    {item.num}
                </span>
            </div>

            {/* Award Title & Category */}
            <div className="md:col-span-5">
                <span
                    className="text-[10px] font-code tracking-wider uppercase block mb-1 font-bold"
                    style={{
                        color: hovered ? `${item.hoverText}CC` : item.normalText,
                        transition: 'color 280ms ease',
                    }}
                >
                    {item.category}
                </span>
                <h3
                    className="text-xl md:text-2xl font-bold tracking-tight"
                    style={{
                        color: hovered ? item.hoverText : '#211C1D',
                        transition: 'color 280ms ease',
                    }}
                >
                    {item.title}
                </h3>
            </div>

            {/* Event & Org */}
            <div className="md:col-span-3">
                <p
                    className="text-sm font-semibold"
                    style={{
                        color: hovered ? item.hoverText : '#211C1D',
                        transition: 'color 280ms ease',
                    }}
                >
                    {item.event}
                </p>
                <p
                    className="text-xs mt-0.5"
                    style={{
                        color: hovered ? `${item.hoverText}AA` : '#70676A',
                        transition: 'color 280ms ease',
                    }}
                >
                    {item.org}
                </p>
            </div>

            {/* Prize Badge */}
            <div className="md:col-span-2 md:text-right">
                <span
                    className="inline-block text-xs font-code font-bold px-3 py-1.5 rounded-lg border"
                    style={{
                        backgroundColor: hovered
                            ? `${item.hoverText}20`
                            : `${item.accentColor}20`,
                        borderColor: hovered ? `${item.hoverText}50` : item.normalBorder,
                        color: hovered ? item.hoverText : item.normalText,
                        transition: 'background-color 280ms ease, border-color 280ms ease, color 280ms ease',
                    }}
                >
                    {item.prize}
                </span>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 px-4 relative flex items-center justify-center">
            <div className="max-w-5xl w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-code tracking-widest text-[#D5B36A] uppercase font-bold">
                        HONORS & RECOGNITION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#211C1D] tracking-tight mt-2">
                        Wall of Wins
                    </h2>
                    <div className="h-1 w-20 bg-[#7A1822] mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Achievement Rows */}
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{ border: '1px solid #E8DFD8' }}
                >
                    {achievementsList.map((item, index) => (
                        <AchievementRow key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

import React from 'react';
import { MinimalistHero } from '../UI/MinimalistHero/MinimalistHero';
import portraitImg from '../../assets/1000221159.png';

/* ─── smooth scroll helper ──────────────────────────────────── */
const goto = (id) => {
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

/* ─── local nav links ───────────────────────────────────────── */
const navLinks = [
    { label: 'HOME',       href: '#home',       onClick: (e) => { e.preventDefault(); goto('home'); } },
    { label: 'ABOUT',      href: '#about',      onClick: (e) => { e.preventDefault(); goto('about'); } },
    { label: 'EXPERIENCE', href: '#experience', onClick: (e) => { e.preventDefault(); goto('experience'); } },
    { label: 'PROJECTS',   href: '#projects',   onClick: (e) => { e.preventDefault(); goto('projects'); } },
];

/* ─── left-side visual hierarchy content ─────────────────────── */
const mainTextContent = (
    <div className="space-y-5 text-left">
        <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground uppercase leading-none">
                KALAA SRI
            </h1>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-burgundy uppercase leading-none">
                VARSHINI
            </h1>
        </div>
        <div className="space-y-0.5 text-xs font-bold tracking-widest text-foreground/50 uppercase font-code">
            <p>AI / ML ENGINEER</p>
            <p>FULL STACK DEVELOPER</p>
        </div>
        <div className="w-16 h-[2.5px] bg-burgundy"></div>
        <p className="text-sm leading-relaxed text-foreground/80 max-w-xs font-medium">
            Building intelligent digital experiences with AI, ML, GenAI and full-stack technology.
        </p>
    </div>
);

const Hero = () => (
    <MinimalistHero
        logoText="KSV."
        navLinks={navLinks}
        mainText={mainTextContent}
        readMoreHref="#contact"
        readMoreLabel="GET IN TOUCH →"
        imageSrc={portraitImg}
        imageAlt="Kalaa Sri Varshini — AI/ML Engineer & Full Stack Developer"
        overlayText={{
            part1: 'BUILD',
            part2: 'INTELLIGENT',
            part3: 'SOLUTIONS',
        }}
        footerLeft="AI / ML ENGINEER  ·  FULL STACK DEVELOPER"
        locationText="Chennai, India"
    />
);

export default Hero;

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiZap, FiBookOpen, FiCpu, FiStar, FiCloud, FiMessageSquare } from 'react-icons/fi';
import Carousel from './Carousel';

const projects = [
    {
        id: 1,
        title: "CareerLens AI",
        category: "Generative AI",
        description: "An AI-powered career assistant that uses Playwright for intelligent web scraping and LLMs to analyze job markets and resumes.",
        tech: ["MERN Stack", "Playwright", "PDF-Parse", "LLM APIs"],
        icon: <FiBriefcase className="carousel-icon" />
    },
    {
        id: 2,
        title: "Conversation RAG Bot",
        category: "AI & NLP",
        description: "An intelligent retrieval-augmented generation bot designed for high-precision, context-aware conversations using LangChain and Vector databases.",
        tech: ["Python", "LangChain", "OpenAI", "FAISS / ChromaDB"],
        icon: <FiMessageSquare className="carousel-icon" />
    },
    {
        id: 3,
        title: "QuizSync",
        category: "Real-time Web",
        description: "A synchronized real-time quiz platform using Socket.io for instant interaction between multiple clients and a central server.",
        tech: ["React", "Socket.io", "MySQL", "Node.js"],
        icon: <FiZap className="carousel-icon" />
    },
    {
        id: 4,
        title: "Gamified Learning Platform",
        category: "Education Tech",
        description: "A comprehensive environmental learning platform featuring gamified lessons and interactive dashboards to promote eco-awareness.",
        tech: ["HTML5", "CSS3", "JavaScript", "Animation APIs"],
        icon: <FiBookOpen className="carousel-icon" />
    },
    {
        id: 5,
        title: "Mesh Analysis Calculator",
        category: "EEE Core Tech",
        description: "A specialized circuit analysis tool for performing mesh analysis in electrical engineering, featuring a custom calculation engine.",
        tech: ["Vanilla JS", "HTML5", "CSS3"],
        icon: <FiCpu className="carousel-icon" />
    },
    {
        id: 6,
        title: "Trending Surprise Site",
        category: "Micro Web Exp",
        description: "A miniature, high-impact greeting and surprise web experience designed with trending UI patterns and interactive elements.",
        tech: ["HTML5", "CSS3", "JavaScript", "Micro-animations"],
        icon: <FiStar className="carousel-icon" />
    },
    {
        id: 7,
        title: "Car Renting Web App",
        category: "IBM Cloud Project",
        description: "A demo car rental platform showcasing cloud-ready architecture, featuring dynamic car listings and booking interfaces.",
        tech: ["HTML5", "CSS3", "JavaScript", "Cloud Logic"],
        icon: <FiCloud className="carousel-icon" />
    }
];

const Projects = () => {
    const wrapperRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(340);

    useEffect(() => {
        const updateWidth = () => {
            if (wrapperRef.current) {
                const w = wrapperRef.current.offsetWidth;
                // Clamp: mobile uses nearly full width, desktop caps at 900px
                setCarouselWidth(Math.min(w, 900));
            }
        };
        updateWidth();
        const ro = new ResizeObserver(updateWidth);
        if (wrapperRef.current) ro.observe(wrapperRef.current);
        return () => ro.disconnect();
    }, []);

    // Card height scales with width: wider = shorter ratio, narrower = taller
    const carouselHeight = carouselWidth >= 700 ? 420 : carouselWidth >= 480 ? 480 : 520;

    return (
        <section id="projects" className="min-h-screen py-20 px-4 relative flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(15,23,42,0.8),rgba(2,6,23,1)),url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed -z-20 opacity-20" />

            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-pink to-primary-purple">
                        Projects
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-pink to-primary-purple mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 font-code text-xs mt-4 tracking-widest">SWIPE TO EXPLORE</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                    ref={wrapperRef}
                >
                    <div style={{ height: `${carouselHeight}px`, position: 'relative' }}>
                        <Carousel
                            items={projects}
                            baseWidth={carouselWidth}
                            autoplay={true}
                            autoplayDelay={3500}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

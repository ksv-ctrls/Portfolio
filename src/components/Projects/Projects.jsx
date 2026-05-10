import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiZap, FiBookOpen, FiCpu, FiStar, FiCloud, FiMessageSquare } from 'react-icons/fi';
import Carousel from './Carousel';

const projects = [
    {
        id: 1,
        title: "CareerLens",
        category: "AI Career Analyzer",
        description: "An AI platform to assess career readiness and recommend relevant opportunities.",
        details: [
            "Built an automated data pipeline using Playwright to scrape real-time job listings.",
            "Containerized backend REST APIs with Docker for scalable, dynamic data synchronization."
        ],
        tech: ["MERN", "API Integration", "Playwright", "Docker"],
        icon: <FiBriefcase className="carousel-icon" />
    },
    {
        id: 2,
        title: "IKS Edutainment",
        category: "RAG & ML",
        description: "A gamified learning platform integrating RAG architecture to enhance contextual content generation.",
        details: [
            "Engineered backend retrieval pipelines to combine domain knowledge with AI outputs.",
            "Implemented ML-based personalization to adapt content delivery based on user progress."
        ],
        tech: ["MERN Stack", "RAG", "Machine Learning"],
        icon: <FiMessageSquare className="carousel-icon" />
    },
    {
        id: 3,
        title: "Gamified Education App",
        category: "LLM Integration",
        description: "An interactive learning platform leveraging LLMs for dynamic question generation.",
        details: [
            "Designed prompt engineering strategies to deliver context-aware hints and feedback.",
            "Implemented real-time user behavior tracking to dynamically adjust learning paths."
        ],
        tech: ["MERN Stack", "LLM", "Prompt Engineering"],
        icon: <FiBookOpen className="carousel-icon" />
    },
    {
        id: 4,
        title: "Conversation RAG Bot",
        category: "AI & NLP",
        description: "An intelligent retrieval-augmented generation bot designed for high-precision conversations.",
        details: [
            "Integrated LangChain and OpenAI to deliver accurate, context-aware AI responses.",
            "Utilized FAISS and ChromaDB vector databases for highly efficient knowledge retrieval."
        ],
        tech: ["Python", "LangChain", "OpenAI", "FAISS", "ChromaDB"],
        icon: <FiMessageSquare className="carousel-icon" />
    },
    {
        id: 5,
        title: "Trackify",
        category: "Expense Management",
        description: "A scalable full-stack expense tracking application supporting real-time CRUD operations.",
        details: [
            "Designed RESTful APIs for secure transaction management and analytics processing.",
            "Optimized MongoDB queries to power interactive dashboards for expense visualization."
        ],
        tech: ["MERN Stack", "REST APIs", "MongoDB"],
        icon: <FiZap className="carousel-icon" />
    },
    {
        id: 6,
        title: "QuizSync",
        category: "Real-time Web",
        description: "A synchronized real-time quiz platform using Socket.io for instant interaction.",
        details: [
            "Developed a seamless platform for real-time interaction between multiple clients.",
            "Engineered a central Node.js server handling low-latency event broadcasting."
        ],
        tech: ["React", "Socket.io", "MySQL", "Node.js"],
        icon: <FiZap className="carousel-icon" />
    },
    {
        id: 7,
        title: "RentWidUs",
        category: "Vehicle Rental",
        description: "A cloud-enabled rental platform with booking workflows and availability tracking.",
        details: [
            "Designed robust backend scheduling logic to seamlessly handle booking conflicts.",
            "Implemented secure authentication and a responsive frontend for vehicle browsing."
        ],
        tech: ["Full Stack", "Cloud Deployment"],
        icon: <FiCloud className="carousel-icon" />
    },
    {
        id: 8,
        title: "Spell Corrector",
        category: "NLP App",
        description: "A GUI-based spell correction tool using edit distance algorithms and tokenization.",
        details: [
            "Implemented dictionary-based validation to significantly improve correction accuracy.",
            "Built an interactive Tkinter interface for real-time user input and fast feedback."
        ],
        tech: ["Python", "Tkinter", "NLP"],
        icon: <FiCpu className="carousel-icon" />
    },
    {
        id: 9,
        title: "Car Renting Web App",
        category: "IBM Cloud Project",
        description: "A demo car rental platform showcasing a robust cloud-ready architecture.",
        details: [
            "Developed dynamic car listings and intuitive booking interfaces.",
            "Focused on building a responsive UI optimized for scalable cloud deployment."
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Cloud Logic"],
        icon: <FiCloud className="carousel-icon" />
    },
    {
        id: 10,
        title: "Sudoku Solver",
        category: "Algorithm Implementation",
        description: "A Sudoku solver using backtracking and constraint satisfaction algorithms.",
        details: [
            "Designed modular logic for grid validation, constraint checking, and recursive solving.",
            "Optimized algorithm efficiency to handle dynamic inputs and automated generation."
        ],
        tech: ["Java", "Backtracking", "Algorithms"],
        icon: <FiStar className="carousel-icon" />
    },
    {
        id: 11,
        title: "Mesh Analysis Calculator",
        category: "EEE Core Tech",
        description: "A specialized circuit analysis tool for performing mesh analysis in electrical engineering.",
        details: [
            "Built a custom calculation engine to process complex electrical grid inputs.",
            "Designed an intuitive interface for engineers to quickly analyze circuit states."
        ],
        tech: ["Vanilla JS", "HTML5", "CSS3"],
        icon: <FiCpu className="carousel-icon" />
    },
    {
        id: 12,
        title: "Trending Surprise Site",
        category: "Micro Web Exp",
        description: "A miniature, high-impact greeting and surprise web experience.",
        details: [
            "Engineered with modern, trending UI patterns to maximize user engagement.",
            "Implemented smooth micro-animations and interactive elements using Vanilla JS."
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Micro-animations"],
        icon: <FiStar className="carousel-icon" />
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
    const carouselHeight = carouselWidth >= 700 ? 460 : carouselWidth >= 480 ? 520 : 560;

    return (
        <section id="projects" className="py-10 px-4 relative flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-indigo to-primary-violet">
                        Projects
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-indigo to-primary-violet mx-auto mt-4 rounded-full" />
                    <p className="text-slate-500 dark:text-gray-400 font-code text-xs mt-4 tracking-widest">SWIPE TO EXPLORE</p>
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

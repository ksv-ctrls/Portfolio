import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carousel from './Carousel';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "CareerLens",
        category: "AI Career Readiness Analyzer",
        description: "Built a Dockerized Playwright scraping agent aggregating 500+ job listings daily, with external API enrichment and automated deduplication.",
        details: [
            "Best Project Award + Bronze Prize - MAHSA University, Malaysia (International, Degree Level) & Hackathon Winner Award.",
            "Delivered a React dashboard with real-time role-match scoring and AI-driven skills-gap analysis on a containerized microservice backend."
        ],
        tech: ["MERN Stack", "Python", "Playwright", "Docker", "REST APIs"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#7A1822",
        cardBg: "#FCF9F5",
        textColor: "#211C1D"
    },
    {
        id: 2,
        title: "Autonomous Desktop AI Assistant",
        category: "AI Automation",
        description: "Designed a voice-enabled LangGraph multi-agent system for task decomposition and tool orchestration, automating 10+ multi-step desktop workflows via Whisper STT/TTS.",
        details: [
            "Built OS-level automation for file operations and browser control with cross-session memory persistence using PostgreSQL."
        ],
        tech: ["Python", "FastAPI", "LangGraph", "Whisper", "OpenAI API", "PostgreSQL"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#D5B36A",
        cardBg: "#D9E4EF",
        textColor: "#211C1D"
    },
    {
        id: 3,
        title: "Conversational RAG Knowledge Assistant",
        category: "AI & NLP",
        description: "Architected a LangChain RAG pipeline with FAISS/Pinecone semantic search and source citation, achieving <2s average response latency.",
        details: [
            "Experimented with LoRA fine-tuning on Llama-3 for domain adaptation, reducing hallucination rate on internal test set by 18%.",
            "Built a React chat interface with streaming responses and document upload supporting 10K+ token context windows."
        ],
        tech: ["LangChain", "FAISS", "Pinecone", "OpenAI API", "React", "Node.js"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#24112F",
        cardBg: "#C9B8D8",
        textColor: "#211C1D"
    },
    {
        id: 4,
        title: "IKS Edutainment Platform",
        category: "RAG & ML",
        description: "Built a gamified learning platform with RAG-powered content delivery and Scikit-learn models for personalized learning paths, architected for 1,000+ concurrent learners.",
        details: [
            "Govt. of India IKS Initiative — Research Contributor.",
            "Designed modular retrieval algorithms for content generation."
        ],
        tech: ["MERN Stack", "Python", "Scikit-learn", "RAG"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#7A1822",
        cardBg: "#F0DCD9",
        textColor: "#211C1D"
    },
    {
        id: 5,
        title: "EcoQuest AI",
        category: "Gamified Sustainability Platform",
        description: "Built a full-stack gamified education platform with JWT authentication, RBAC, and rate limiting across 15+ learning modules.",
        details: [
            "Integrated Gemini AI for adaptive content generation, boosting engagement via real-time personalized challenges."
        ],
        tech: ["MERN Stack", "Gemini API", "JWT", "RBAC"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#D5B36A",
        cardBg: "#FCF9F5",
        textColor: "#211C1D"
    },
    {
        id: 6,
        title: "Gamified Education App",
        category: "LLM Integration",
        description: "Developed an interactive learning system integrating LLMs for adaptive and engaging user experiences.",
        details: [
            "Designed prompt engineering strategies to deliver context-aware hints and feedback."
        ],
        tech: ["MERN Stack", "LLM Integration"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#9BB6D3",
        cardBg: "#D9E4EF",
        textColor: "#211C1D"
    },
    {
        id: 7,
        title: "Trackify",
        category: "Expense Tracker",
        description: "Built a full-stack expense tracking app with real-time data handling and user-friendly dashboards.",
        details: [
            "Designed RESTful APIs for secure transaction management and analytics processing."
        ],
        tech: ["MERN Stack"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#24112F",
        cardBg: "#C9B8D8",
        textColor: "#211C1D"
    },
    {
        id: 8,
        title: "QuizSync",
        category: "Real-time Web",
        description: "A synchronized real-time quiz platform using Socket.io for instant interaction.",
        details: [
            "Developed a seamless platform for real-time interaction between multiple clients."
        ],
        tech: ["React", "Socket.io", "MySQL", "Node.js"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#7A1822",
        cardBg: "#F0DCD9",
        textColor: "#211C1D"
    },
    {
        id: 9,
        title: "RentWidUs",
        category: "Vehicle Rental System",
        description: "Developed a cloud-based rental platform with booking management and user interaction features.",
        details: [
            "Designed scheduling logic to seamlessly handle vehicle booking conflicts."
        ],
        tech: ["Full Stack", "Cloud"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#7A1822",
        cardBg: "#FCF9F5",
        textColor: "#211C1D"
    },
    {
        id: 10,
        title: "Spell Corrector",
        category: "NLP App",
        description: "Created a GUI-based NLP application for real-time text correction.",
        details: [
            "Implemented dictionary-based validation to improve spell correction lookup."
        ],
        tech: ["Python", "Tkinter"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#24112F",
        cardBg: "#D9E4EF",
        textColor: "#211C1D"
    },
    {
        id: 11,
        title: "Sudoku Game",
        category: "Java Logic Game",
        description: "Implemented a logic-based Sudoku game using core Java concepts.",
        details: [
            "Optimized recursive backtracking search algorithms for instant puzzle solving."
        ],
        tech: ["Java"],
        github: "https://github.com/ksv-ctrls",
        accentColor: "#D5B36A",
        cardBg: "#FCF9F5",
        textColor: "#211C1D"
    }
];

// Pixels scrolled per project transition
const PX_PER_STEP = 320;

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);
    const sectionRef = useRef(null);

    /*
      syncIndex must handle BOTH numeric calls (from ScrollTrigger) AND
      function-form calls (from Carousel arrow buttons: prev => prev + 1).
      Passing a function to Math.max/min produces NaN → zIndex becomes NaN.
    */
    const syncIndex = (idxOrFn) => {
        setActiveIndex(prev => {
            const raw = typeof idxOrFn === 'function' ? idxOrFn(prev) : idxOrFn;
            const clamped = Math.max(0, Math.min(Math.round(raw), projects.length - 1));
            activeIndexRef.current = clamped;
            return clamped;
        });
    };

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) return;

        // Extra scroll distance — (n-1) transitions between n projects
        const extraScroll = (projects.length - 1) * PX_PER_STEP;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',          // pin when section top hits viewport top
                end: `+=${extraScroll}`,   // release after all projects scrolled
                pin: true,
                pinSpacing: true,          // GSAP adds spacer div after pinned element
                anticipatePin: 1,
                onUpdate: (self) => {
                    const raw = self.progress * (projects.length - 1);
                    const idx = Math.min(Math.round(raw), projects.length - 1);
                    if (idx !== activeIndexRef.current) syncIndex(idx);
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        /*
          Section must fill the full viewport so GSAP pins it correctly.
          We use flexbox to split the available height between header and carousel.
          overflow:visible is critical — the 3D carousel extends outside its stage.
        */
        <section
            id="projects"
            ref={sectionRef}
            style={{
                /*
                  100vh guarantees GSAP pins the full viewport.
                  Small vertical padding — the card is 460px tall, the header is
                  ~110px; together ~570px. On tiny screens (< 640px) the CSS
                  variables reduce card size. We do NOT use justify-content:center
                  here because GSAP pin keeps the section at top:0, so centering
                  via flexbox already works. The key is keeping padding small so
                  the total content height stays inside 100vh.
                */
                height: '100vh',
                minHeight: '600px',
                overflow: 'visible',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                boxSizing: 'border-box',
            }}
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '16px', flexShrink: 0 }}
            >
                <span
                    style={{
                        fontSize: '10px',
                        fontFamily: "'Source Code Pro', monospace",
                        letterSpacing: '0.14em',
                        color: '#7A1822',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                    }}
                >
                    PROJECT ARCHIVE
                </span>
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 800,
                        color: '#211C1D',
                        letterSpacing: '-0.03em',
                        marginTop: '6px',
                        marginBottom: '12px',
                        lineHeight: 1.1,
                        fontFamily: "'Space Grotesk', sans-serif",
                    }}
                >
                    Featured Projects
                </h2>
                <div
                    style={{
                        height: '4px',
                        width: '72px',
                        background: '#7A1822',
                        borderRadius: '9999px',
                        margin: '0 auto 10px',
                    }}
                />
                <p
                    style={{
                        fontFamily: "'Source Code Pro', monospace",
                        fontSize: '10px',
                        color: '#70676A',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                    }}
                >
                    {activeIndex + 1}&nbsp;/&nbsp;{projects.length} &nbsp;·&nbsp; scroll or use arrows
                </p>
            </motion.div>

            {/*
              Carousel outer shell.
              overflow:visible must propagate — 3D cards extend beyond their stage.
              The shell just needs to be wide enough to house the carousel wrapper.
            */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '1100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'visible',
                    flexShrink: 0,
                    padding: '0 40px',   /* horizontal room for nav arrows */
                    boxSizing: 'border-box',
                }}
            >
                <Carousel
                    items={projects}
                    activeIndex={activeIndex}
                    setActiveIndex={syncIndex}
                    autoplay={false}
                />
            </div>
        </section>
    );
}

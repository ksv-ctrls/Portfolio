import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carousel.css';

export default function Carousel({
    items = [],
    activeIndex = 0,
    setActiveIndex,
    autoplay = false,
    autoplayDelay = 4000,
    pauseOnHover = true
}) {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    const handleNext = () => {
        if (setActiveIndex) {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }
    };

    const handlePrev = () => {
        if (setActiveIndex) {
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    // Autoplay Timer (Only if enabled)
    useEffect(() => {
        if (!autoplay || items.length <= 1) return;
        if (pauseOnHover && isHovered) return;

        const timer = setInterval(() => {
            handleNext();
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, pauseOnHover, items.length]);

    // Trackpad / Wheel Handler with debounce to prevent accidental fast skipping
    const lastWheelTime = useRef(0);
    const handleWheel = (e) => {
        const now = Date.now();
        if (now - lastWheelTime.current < 400) return;

        if (Math.abs(e.deltaY) > 25 || Math.abs(e.deltaX) > 25) {
            if (e.deltaY > 0 || e.deltaX > 0) {
                handleNext();
            } else {
                handlePrev();
            }
            lastWheelTime.current = now;
        }
    };

    return (
        <div 
            ref={containerRef}
            className="depth-carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onWheel={handleWheel}
        >
            {/* 3D Depth Stage */}
            <div className="depth-stage">
                <AnimatePresence initial={false}>
                    {items.map((item, index) => {
                        // Calculate offset distance relative to current activeIndex
                        let offset = index - activeIndex;

                        // Wrap index for circular loop calculation
                        if (offset < -Math.floor(items.length / 2)) {
                            offset += items.length;
                        } else if (offset > Math.floor(items.length / 2)) {
                            offset -= items.length;
                        }

                        // Visibility window (-2 to +2)
                        const absOffset = Math.abs(offset);
                        if (absOffset > 2) return null;

                        const numString = String(item.id || index + 1).padStart(2, '0');
                        const githubUrl = item.github || 'https://github.com/ksv-ctrls';
                        const accentColor = item.accentColor || '#7A1822';
                        const cardBg = item.cardBg || '#FCF9F5';
                        const textColor = item.textColor || '#211C1D';

                        // Authentic 3D Depth Transformations
                        const translateX = offset * 270; // Lateral spread
                        const translateZ = -absOffset * 190; // Depth Z-axis displacement
                        const rotateY = offset * -26; // Tilt angle
                        const scale = 1 - absOffset * 0.14; // Scale falloff
                        const opacity = 1 - absOffset * 0.35; // Brightness / Blur opacity falloff
                        const zIndex = 10 - absOffset; // Layer stacking

                        return (
                            <motion.div
                                key={item.id || index}
                                className={`depth-card-item ${offset === 0 ? 'is-active' : ''}`}
                                initial={false}
                                animate={{
                                    x: translateX,
                                    z: translateZ,
                                    rotateY: rotateY,
                                    scale: scale,
                                    opacity: opacity,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 28,
                                }}
                                style={{
                                    zIndex: zIndex,
                                    transformStyle: 'preserve-3d',
                                    backgroundColor: cardBg,
                                    color: textColor,
                                    borderColor: offset === 0 ? accentColor : '#E8DFD8'
                                }}
                                onClick={() => setActiveIndex && setActiveIndex(index)}
                            >
                                {/* Header Stamp */}
                                <div className="depth-card-header">
                                    <span className="depth-num" style={{ color: accentColor }}>{numString}</span>
                                    <span 
                                        className="depth-category" 
                                        style={{ 
                                            backgroundColor: `${accentColor}18`, 
                                            color: accentColor, 
                                            borderColor: `${accentColor}40` 
                                        }}
                                    >
                                        {item.category}
                                    </span>
                                </div>

                                {/* Content Body */}
                                <div className="depth-card-body">
                                    <h3 className="depth-title" style={{ color: textColor }}>{item.title}</h3>
                                    <p className="depth-description">{item.description}</p>

                                    {item.details && (
                                        <ul className="depth-details">
                                            {item.details.map((detail, dIdx) => (
                                                <li key={dIdx}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Card Footer & GitHub Primary Link */}
                                <div className="depth-card-footer" style={{ borderColor: `${accentColor}30` }}>
                                    <div className="depth-tech-stack">
                                        {item.tech?.map((t, tIdx) => (
                                            <span 
                                                key={tIdx} 
                                                className="depth-tech-pill"
                                                style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}30`, color: textColor }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="depth-github-btn group"
                                        style={{ backgroundColor: accentColor, color: '#FCF9F5' }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FiGithub size={16} />
                                        <span>View GitHub →</span>
                                        <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={handlePrev} 
                className="depth-nav-btn prev-btn" 
                aria-label="Previous Project"
            >
                <FiChevronLeft size={22} />
            </button>
            <button 
                onClick={handleNext} 
                className="depth-nav-btn next-btn" 
                aria-label="Next Project"
            >
                <FiChevronRight size={22} />
            </button>

            {/* Dot Indicators */}
            <div className="depth-indicators">
                {items.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex && setActiveIndex(idx)}
                        className={`depth-dot ${activeIndex === idx ? 'active' : ''}`}
                        style={{
                            backgroundColor: activeIndex === idx ? (items[idx]?.accentColor || '#7A1822') : '#E8DFD8'
                        }}
                        aria-label={`Go to project ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Each experience item carries:
 *   accentColor  — primary brand accent for this role
 *   darkAccent   — deeper shade for hover border
 *   hoverShadow  — coloured shadow for the card
 *   badgeStyle   — responsibility tag colours
 */
const experience = [
    {
        year: 'Feb 2026 – May 2026',
        role: 'Product Intern - Cybersecurity',
        company: 'Odyssey Technologies, Chennai',
        description:
            'xorkeeSign – DSC-Based Email Security: Tested 15+ security workflows, identified 20+ critical defects, and reduced defect escapes by 30%, accelerating release by 2 weeks.',
        responsibilities: [
            'Email Security',
            'Test Sprints',
            'Agile Sprints',
            'Stakeholder Demos'
        ],
        accentColor: '#7A1822',
        darkAccent: '#5A1018',
        hoverShadow:
            '0 22px 55px rgba(122,24,34,0.38), 0 8px 22px rgba(122,24,34,0.22)',
        badgeBg: '#F0DCD9',
        badgeText: '#7A1822',
        badgeBorder: '#E7C9C7',
    },

    {
        year: 'Dec 2025 – Present',
        role: 'Founder & Full-Stack Developer',
        company: 'ZeroLag StudioZ',
        description:
            'ZeroLag Studioz: Founded and operate a freelance studio, delivering 10+ production MERN apps with CI/CD and Docker, serving 5 repeat clients.',
        responsibilities: [
            'System Design',
            'MERN Stack',
            'CI/CD Pipelines',
            'Cloud Deployment'
        ],
        accentColor: '#D5B36A',
        darkAccent: '#B8954C',
        hoverShadow:
            '0 22px 55px rgba(213,179,106,0.38), 0 8px 22px rgba(184,149,76,0.22)',
        badgeBg: '#FCF9F5',
        badgeText: '#8A6E28',
        badgeBorder: '#D5B36A',
    },

    {
        year: 'Mar 2024 – Jan 2026',
        role: 'Technical Instructor - Programming & Full-Stack Development',
        company: 'Apollo Computer Education',
        description:
            'Designed a project based software engineering curriculum and taught 75+ learners across Python, Java, C/C++, SQL, DSA, APIs, and Full-Stack Development.',
        responsibilities: [
            'Curriculum Design',
            'Full-Stack Training',
            'DSA & System Design',
            'Student Mentoring'
        ],
        accentColor: '#6C8DAE',
        darkAccent: '#4E7393',
        hoverShadow:
            '0 22px 55px rgba(108,141,174,0.38), 0 8px 22px rgba(108,141,174,0.22)',
        badgeBg: '#D9E4EF',
        badgeText: '#211C1D',
        badgeBorder: 'rgba(155,182,211,0.5)',
    },

    {
        year: 'Nov 2023 – Feb 2024',
        role: 'Website Developer',
        company: 'Octopus Consulting Services, Chennai',
        description:
            'Developed a responsive MERN website with REST APIs, CMS, and SEO, using Google Analytics to optimize 3 high-bounce pages and improve user engagement.',
        responsibilities: [
            'MERN Stack',
            'CMS Integration',
            'SEO Optimization',
            'Google Analytics'
        ],
        accentColor: '#24112F',
        darkAccent: '#1A0B24',
        hoverShadow:
            '0 22px 55px rgba(36,17,47,0.38), 0 8px 22px rgba(36,17,47,0.22)',
        badgeBg: '#C9B8D8',
        badgeText: '#24112F',
        badgeBorder: 'rgba(201,184,216,0.7)',
    },
];


/* ============================================================
   INDIVIDUAL TIMELINE CARD
   Typography intentionally matched closer to ProjectCard
============================================================ */

const TimelineCard = ({ item, isLeft }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="
                timeline-card
                rounded-xl
                bg-[#FCF9F5]
                p-5
                md:p-6
            "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                border: `1.5px solid ${hovered
                        ? item.darkAccent
                        : `${item.accentColor}55`
                    }`,

                boxShadow: hovered
                    ? item.hoverShadow
                    : '0 6px 20px rgba(33,28,29,0.06)',

                transform: hovered
                    ? 'translateY(-5px) scale(1.012)'
                    : 'translateY(0) scale(1)',

                transition:
                    'border-color 300ms ease, box-shadow 300ms ease, transform 300ms cubic-bezier(0.25,1,0.5,1)',
            }}
        >

            {/* =================================================
                DATE
            ================================================= */}
            <span
                className="
                    inline-block
                    text-[10px]
                    font-code
                    font-bold
                    tracking-wider
                    uppercase
                    mb-2.5
                    px-2
                    py-1
                    rounded-md
                    border
                "
                style={{
                    backgroundColor: `${item.accentColor}12`,
                    borderColor: `${item.accentColor}45`,
                    color: item.accentColor,
                }}
            >
                {item.year}
            </span>


            {/* =================================================
                ROLE
            ================================================= */}
            <h3
                className="
                    font-bold
                    text-lg
                    md:text-[18px]
                    leading-tight
                    text-[#211C1D]
                    mb-1.5
                "
            >
                {item.role}
            </h3>


            {/* =================================================
                COMPANY
            ================================================= */}
            <p
                className="
                    font-code
                    text-xs
                    font-bold
                    mb-3
                    leading-relaxed
                "
                style={{
                    color: item.accentColor,
                }}
            >
                {item.company}
            </p>


            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
                className="
                    text-[#70676A]
                    text-xs
                    leading-relaxed
                    mb-4
                "
            >
                {item.description}
            </p>


            {/* =================================================
                RESPONSIBILITY TAGS
            ================================================= */}
            <div
                className={`
                    flex
                    flex-wrap
                    gap-1.5
                    pt-3
                    border-t
                    border-[#E8DFD8]

                    ${isLeft
                        ? 'md:justify-end'
                        : 'md:justify-start'
                    }
                `}
            >
                {item.responsibilities.map((resp, rIdx) => (
                    <span
                        key={rIdx}
                        className="
                            text-[10px]
                            font-code
                            px-2
                            py-1
                            rounded-md
                            font-semibold
                            border
                            leading-none
                        "
                        style={{
                            backgroundColor: item.badgeBg,
                            color: item.badgeText,
                            borderColor: item.badgeBorder,
                        }}
                    >
                        {resp}
                    </span>
                ))}
            </div>

        </div>
    );
};


/* ============================================================
   TIMELINE
============================================================ */

const Timeline = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const prefersReducedMotion = window
            .matchMedia('(prefers-reduced-motion: reduce)')
            .matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {

            /* =================================================
               PROGRESSIVE SPINE REVEAL
            ================================================= */

            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    {
                        scaleY: 0,
                    },
                    {
                        scaleY: 1,
                        transformOrigin: 'top center',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 65%',
                            end: 'bottom 80%',
                            scrub: 0.6,
                        },
                    }
                );
            }


            /* =================================================
               CARD + DOT ANIMATIONS
            ================================================= */

            itemsRef.current.forEach((item, index) => {

                if (!item) return;

                const card =
                    item.querySelector('.timeline-card');

                const dot =
                    item.querySelector('.timeline-dot');

                const isLeft = index % 2 === 0;


                /* DOT */

                if (dot) {
                    gsap.fromTo(
                        dot,
                        {
                            scale: 0,
                            opacity: 0,
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.45,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: item,
                                start: 'top 88%',
                                toggleActions:
                                    'play none none reverse',
                            },
                        }
                    );
                }


                /* CARD */

                if (card) {
                    gsap.fromTo(
                        card,
                        {
                            x: isLeft ? -52 : 52,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.75,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: item,
                                start: 'top 88%',
                                toggleActions:
                                    'play none none reverse',
                            },
                        }
                    );
                }

            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);


    return (
        <section
            id="experience"
            ref={sectionRef}
            className="
                py-20
                px-4
                relative
                overflow-visible
            "
        >

            <div
                className="
                    max-w-5xl
                    mx-auto
                    relative
                "
            >

                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div
                    className="
                        text-center
                        mb-14
                    "
                >

                    <span
                        className="
                            text-xs
                            font-code
                            tracking-widest
                            text-[#7A1822]
                            uppercase
                            font-bold
                        "
                    >
                        CAREER JOURNEY
                    </span>

                    <h2
                        className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#211C1D]
                            tracking-tight
                            mt-2
                        "
                    >
                        Experience
                    </h2>

                    <div
                        className="
                            h-1
                            w-16
                            bg-[#7A1822]
                            mx-auto
                            mt-4
                            rounded-full
                        "
                    />

                </div>


                {/* =================================================
                    ALTERNATING TIMELINE
                ================================================= */}

                <div className="relative">

                    {/* =================================================
                        DESKTOP CENTER SPINE
                    ================================================= */}

                    <div
                        className="
                            hidden
                            md:block
                            absolute
                            left-1/2
                            top-0
                            bottom-0
                            -translate-x-1/2
                            w-0.5
                            bg-[#E8DFD8]
                        "
                    >

                        <div
                            ref={lineRef}
                            className="
                                w-full
                                h-full
                                bg-[#7A1822]
                                origin-top
                            "
                        />

                    </div>


                    {/* =================================================
                        MOBILE SPINE
                    ================================================= */}

                    <div
                        className="
                            md:hidden
                            absolute
                            left-4
                            top-0
                            bottom-0
                            w-0.5
                            bg-[#7A1822]/25
                        "
                    />


                    {/* =================================================
                        EXPERIENCE ITEMS
                    ================================================= */}

                    <div
                        className="
                            space-y-10
                            md:space-y-12
                        "
                    >

                        {experience.map((item, index) => {

                            const isLeft =
                                index % 2 === 0;

                            return (

                                <div
                                    key={index}
                                    ref={(el) =>
                                        (itemsRef.current[index] = el)
                                    }
                                    className={`
                                        relative
                                        flex
                                        items-start
                                        w-full

                                        ${isLeft
                                            ? 'md:flex-row'
                                            : 'md:flex-row-reverse'
                                        }

                                        flex-col
                                    `}
                                >

                                    {/* =================================================
                                        CARD SIDE
                                    ================================================= */}

                                    <div
                                        className={`
                                            w-full
                                            md:w-5/12
                                            pl-12
                                            md:pl-0

                                            ${isLeft
                                                ? 'md:pr-8 md:text-right'
                                                : 'md:pl-8 md:text-left'
                                            }
                                        `}
                                    >

                                        <TimelineCard
                                            item={item}
                                            isLeft={isLeft}
                                        />

                                    </div>


                                    {/* =================================================
                                        CENTER DOT
                                    ================================================= */}

                                    <div
                                        className="
                                            absolute
                                            left-4
                                            md:left-1/2
                                            top-7
                                            md:-translate-x-1/2
                                            z-10
                                        "
                                    >

                                        <div
                                            className="
                                                timeline-dot
                                                w-4
                                                h-4
                                                rounded-full
                                                border-[3px]
                                                border-[#F7F1EB]
                                                shadow-md
                                            "
                                            style={{
                                                backgroundColor:
                                                    item.accentColor,
                                            }}
                                        />

                                    </div>


                                    {/* =================================================
                                        OPPOSITE SIDE SPACER
                                    ================================================= */}

                                    <div
                                        className="
                                            hidden
                                            md:block
                                            w-5/12
                                        "
                                    />

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Timeline;
import React, { useState } from 'react';
import { Menu, X, Cpu, Code, User, Briefcase, Mail, Zap, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from '../UI/GooeyNav/GooeyNav';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // Show main navbar when user scrolls past ~75% of the first viewport (Hero section)
            if (window.scrollY > window.innerHeight * 0.75) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'HOME', icon: <Cpu size={14} />, href: '#home' },
        { label: 'ABOUT', icon: <User size={14} />, href: '#about' },
        { label: 'EXPERIENCE', icon: <Briefcase size={14} />, href: '#experience' },
        { label: 'PROJECTS', icon: <Code size={14} />, href: '#projects' },
        { label: 'SKILLS', icon: <Zap size={14} />, href: '#skills' },
        { label: 'ACHIEVEMENTS', icon: <Trophy size={14} />, href: '#achievements' },
        { label: 'CONTACT', icon: <Mail size={14} />, href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');

        if (targetId === 'home') {
            // HOME always scrolls to very top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: visible ? 0 : -100, x: '-50%', opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 z-50 w-[98%] max-w-6xl rounded-2xl border border-[#E8DFD8] bg-[#FCF9F5]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(122,23,34,0.06)]"
        >
            <div className="mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-14">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <span className="font-grotesk font-bold text-sm lg:text-base tracking-widest text-[#7A1722] group-hover:text-[#24113F] transition-colors duration-300">
                            PORTFOLIO
                        </span>
                    </div>

                    <div className="hidden md:flex items-center">
                        <div className="ml-2 lg:ml-4">
                            <GooeyNav items={navItems} />
                        </div>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden gap-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#6F6868] hover:text-[#7A1722] hover:bg-[#E7C9C9]/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F7F1EB] focus:ring-[#7A1722]"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-[#E8DFD8] bg-[#FCF9F5] backdrop-blur-xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-[#6F6868] hover:text-[#7A1722] hover:bg-[#E7C9C9]/40 block px-3 py-2 rounded-md text-base font-medium font-code flex items-center gap-3"
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

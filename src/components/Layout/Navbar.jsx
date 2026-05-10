import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Code, User, Briefcase, Mail, Zap, Trophy, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from '../UI/GooeyNav/GooeyNav';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Initialize theme on mount
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const navItems = [
        { label: 'HOME', icon: <Cpu size={14} />, href: '#welcome' },
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
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-6xl z-50 rounded-2xl border border-white/10 dark:border-white/10 border-slate-300 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div className="mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-14">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <span className="font-grotesk font-bold text-sm lg:text-base tracking-wider text-primary-blue group-hover:text-primary-indigo transition-colors duration-300">
                            PORTFOLIO <span className="text-primary-indigo group-hover:text-primary-blue transition-colors duration-300 hidden sm:inline"></span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center">
                        <div className="ml-2 lg:ml-4 mr-4">
                            <GooeyNav items={navItems} />
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 dark:focus:ring-offset-gray-800 focus:ring-slate-400 dark:focus:ring-white"
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
                        className="md:hidden border-b border-white/10 bg-white/95 dark:bg-background/95 backdrop-blur-xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-slate-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium font-code flex items-center gap-3"
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

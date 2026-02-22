import React, { useState } from 'react';
import { Menu, X, Cpu, Code, User, Briefcase, Mail, Zap, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'HOME', icon: <Cpu size={18} />, href: '#welcome' },
        { name: 'ABOUT', icon: <User size={18} />, href: '#about' },
        { name: 'EXPERIENCE', icon: <Briefcase size={18} />, href: '#experience' },
        { name: 'PROJECTS', icon: <Code size={18} />, href: '#projects' },
        { name: 'SKILLS', icon: <Zap size={18} />, href: '#skills' },
        { name: 'ACHIEVEMENTS', icon: <Trophy size={18} />, href: '#achievements' },
        { name: 'CONTACT', icon: <Mail size={18} />, href: '#contact-info' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-6xl z-50 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div className="mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-14">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <span className="font-grotesk font-bold text-sm lg:text-base tracking-wider text-primary-cyan group-hover:text-primary-pink transition-colors duration-300">
                            PORTFOLIO <span className="text-primary-pink group-hover:text-primary-cyan transition-colors duration-300">[<span className="text-[10px] lg:text-xs mx-0.5">GET TO KNOW ME</span>]</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-2 lg:ml-6 flex items-baseline space-x-0.5 lg:space-x-2 xl:space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative group px-1.5 lg:px-2 py-1 text-[9px] lg:text-[11px] xl:text-xs font-medium font-code text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <span className="flex items-center gap-1">
                                        {item.name}
                                    </span>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-pink to-primary-cyan group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                        className="md:hidden border-b border-white/10 bg-background/95 backdrop-blur-xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium font-code flex items-center gap-3"
                                >
                                    {item.icon}
                                    {item.name}
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

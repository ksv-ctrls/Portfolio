import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal, Layers, Database, Atom, Globe, Lock, Workflow } from 'lucide-react';

const FloatingIcons = () => {
    const icons = [
        { Icon: Code2, color: 'text-primary-cyan/10', size: 24 },
        { Icon: Terminal, color: 'text-primary-pink/10', size: 20 },
        { Icon: Cpu, color: 'text-primary-cyan/10', size: 28 },
        { Icon: Layers, color: 'text-primary-pink/10', size: 22 },
        { Icon: Database, color: 'text-primary-cyan/10', size: 20 },
        { Icon: Atom, color: 'text-primary-pink/10', size: 26 },
        { Icon: Globe, color: 'text-primary-cyan/10', size: 24 },
        { Icon: Lock, color: 'text-primary-pink/10', size: 18 },
        { Icon: Workflow, color: 'text-primary-cyan/10', size: 22 },
        { Icon: Code2, color: 'text-primary-pink/10', size: 20 },
        { Icon: Terminal, color: 'text-primary-cyan/10', size: 24 },
        { Icon: Cpu, color: 'text-primary-pink/10', size: 22 },
    ];

    // Fixed random positions so they don't jump on re-render
    const positions = [
        { top: '10%', left: '15%' },
        { top: '25%', right: '10%' },
        { top: '40%', left: '5%' },
        { top: '15%', left: '80%' },
        { top: '60%', left: '20%' },
        { top: '75%', right: '15%' },
        { top: '85%', left: '10%' },
        { top: '50%', right: '25%' },
        { top: '10%', left: '45%' },
        { top: '90%', right: '40%' },
        { top: '35%', left: '35%' },
        { top: '65%', right: '5%' },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {icons.map((item, index) => {
                const pos = positions[index];
                // Hide every 3rd icon on mobile for less clutter
                const mobileHide = index % 3 === 0 ? 'hidden md:block' : 'block';

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y: [0, Math.sin(index) * 20, 0],
                            x: [0, Math.cos(index) * 20, 0],
                            rotate: [0, index % 2 === 0 ? 10 : -10, 0]
                        }}
                        transition={{
                            duration: 10 + (index % 5),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                        }}
                        style={{
                            position: 'absolute',
                            ...pos
                        }}
                        className={`${item.color} ${mobileHide}`}
                    >
                        <item.Icon size={item.size} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default FloatingIcons;

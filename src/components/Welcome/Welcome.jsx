import React from 'react';
import { motion } from 'framer-motion';
import TextType from './TextType';

const Welcome = () => {
    return (
        <section id="welcome" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white drop-shadow-2xl md:whitespace-nowrap">
                        <TextType
                            text={["Let’s walk through my world together..", "Myself, Kalaa Sri Varshini"]}
                            typingSpeed={70}
                            pauseDuration={3000}
                            showCursor={false}
                            loop={false}
                            vanish={true}
                        />
                    </h1>
                    <h2 className="text-base md:text-xl lg:text-2xl text-primary-cyan font-code font-bold tracking-widest flex items-center justify-center gap-4">
                        <TextType
                            text={["I AM A DEVELOPER", "I AM A DESIGNER", "I AM CREATIVE"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            loop={false}
                            showCursor={false}
                            vanish={true}
                        />
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Welcome;

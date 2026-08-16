import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '../UI/BlurText';

const Welcome = () => {
    return (
        <section id="welcome" className="flex flex-col items-center justify-center relative w-full pt-10 pb-4">
            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div className="flex justify-center">
                        <BlurText
                            text="Let’s walk through my world together.."
                            delay={200}
                            animateBy="words"
                            direction="top"
                            className="text-xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#211D1D] drop-shadow-xs md:whitespace-nowrap font-grotesk"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Welcome;

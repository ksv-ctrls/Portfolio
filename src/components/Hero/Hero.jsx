import { motion } from 'framer-motion';
import TextType from '../Welcome/TextType';
import BlurText from '../UI/Animations/BlurText';

const Hero = () => {
    return (
        <div className="relative -mt-16 md:-mt-20 z-20 mx-auto px-4 transition-all duration-500 mb-8 max-w-7xl flex justify-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative pointer-events-auto bg-white/[0.01] md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-white/10 md:border-none rounded-none p-5 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.3)] md:shadow-none overflow-hidden w-[380px] md:w-[500px] h-[220px] md:h-[280px] flex flex-col justify-center"
            >
                {/* Background Glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 md:opacity-0">
                    <motion.div
                        animate={{
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-10 -left-10 w-32 h-32 bg-primary-pink/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary-cyan/10 rounded-full blur-2xl"
                    />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-x-2 mb-1.5">
                        <BlurText
                            text="Kalaa Sri"
                            delay={150}
                            animateBy="letters"
                            direction="top"
                            className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
                        />
                        <BlurText
                            text="Varshini"
                            delay={150}
                            animateBy="letters"
                            direction="bottom"
                            className="text-3xl md:text-5xl font-bold text-[#0891b2] tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
                        />
                    </div>

                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary-cyan/90 bg-primary-cyan/40 backdrop-blur-md text-white text-sm md:text-base font-code font-bold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        Heads up on KSV
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg md:text-xl font-bold text-white opacity-95 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                            I am a
                        </h2>
                        <div className="text-xl md:text-3xl font-bold text-primary-pink h-[1.4em] flex items-center">
                            <TextType
                                text={[
                                    "Full Stack Developer (MERN)",
                                    "Gen AI Programmer",
                                    "UI/UX Designer",
                                    "Machine Learning Engineer"
                                ]}
                                typingSpeed={60}
                                pauseDuration={2000}
                                loop={true}
                                showCursor={true}
                                cursorCharacter="_"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

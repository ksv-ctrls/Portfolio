import { motion } from 'framer-motion';
import TextType from '../Welcome/TextType';
import BlurText from '../UI/Animations/BlurText';
import { FileText, Download } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative z-20 mx-auto px-4 transition-all duration-500 mb-8 max-w-7xl flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative pointer-events-auto bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden w-[90vw] md:w-[800px] lg:w-[1000px] min-h-[250px] md:min-h-[350px] flex flex-col justify-center items-center text-center"
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
                        className="absolute -top-10 -left-10 w-32 h-32 bg-primary-indigo/10 rounded-full blur-2xl"
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
                        className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary-blue/10 rounded-full blur-2xl"
                    />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-center gap-x-2 mb-2">
                        <BlurText
                            text="Kalaa Sri"
                            delay={150}
                            animateBy="letters"
                            direction="top"
                            className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
                        />
                        <BlurText
                            text="Varshini"
                            delay={150}
                            animateBy="letters"
                            direction="bottom"
                            className="text-3xl md:text-5xl font-bold text-primary-blue tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0)]"
                        />
                    </div>



                    <div className="space-y-2">
                        <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white opacity-95 drop-shadow-sm dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                            I am a
                        </h2>
                        <div className="text-xl md:text-3xl font-bold text-primary-indigo h-[1.4em] flex items-center justify-center">
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

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
                        >
                            <FileText size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                            View Resume
                        </a>
                        <a
                            href="/cv.pdf"
                            download
                            className="group flex items-center gap-2 px-6 py-3 border-2 border-indigo-500/50 text-indigo-700 dark:text-indigo-300 rounded-full font-semibold hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 hover:scale-105 transition-all duration-300"
                        >
                            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                            Download CV
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

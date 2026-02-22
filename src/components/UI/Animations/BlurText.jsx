import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({
    text = '',
    delay = 200,
    duration = 0.4,
    animateBy = 'letters', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    className = '',
    onAnimationComplete,
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            setInView(true);
        }
    }, [isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: delay / 1000,
            },
        },
    };

    const itemVariants = {
        hidden: {
            filter: 'blur(10px)',
            opacity: 0,
            y: direction === 'top' ? -20 : 20,
        },
        visible: {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
            },
        },
    };

    return (
        <motion.p
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onAnimationComplete={onAnimationComplete}
            className={`inline-block ${className}`}
        >
            {elements.map((el, i) => (
                <motion.span
                    key={i}
                    variants={itemVariants}
                    className="inline-block"
                >
                    {el === ' ' ? '\u00A0' : el}
                    {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default BlurText;

import React from 'react';
import FloatingIcons from './FloatingIcons';

const Background = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-background overflow-hidden">
            {/* Project-wide Floating Icons */}
            <FloatingIcons />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

            {/* Scanlines handled by global CSS, but we can add an extra overlay here */}
            <div className="scanline" />

            {/* Radial Gradient Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
            <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-primary-purple/20 blur-[140px]" />
            <div className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-primary-cyan/20 blur-[140px]" />
        </div>
    );
};

export default Background;

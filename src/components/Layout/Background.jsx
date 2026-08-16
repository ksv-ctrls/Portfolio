import React from 'react';
import FloatingIcons from './FloatingIcons';

const Background = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#F7F1EB] overflow-hidden">
            {/* Project-wide Floating Icons */}
            <FloatingIcons />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(232,223,216,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,223,216,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

            {/* Scanline */}
            <div className="scanline" />

            {/* Radial Gradient Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#F7F1EB]/40 to-[#F7F1EB] pointer-events-none" />
            <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-[#E7C9C9]/25 blur-[140px]" />
            <div className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-[#E8DFD8]/30 blur-[140px]" />
        </div>
    );
};

export default Background;

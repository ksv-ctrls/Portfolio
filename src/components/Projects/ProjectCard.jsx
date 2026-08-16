import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4D0E13] to-[#C8A49F] opacity-40 group-hover:opacity-100 transition duration-500 blur rounded-xl" />
            <div className="relative h-full bg-[#160029] border border-[#C8A49F]/30 rounded-xl p-6 overflow-hidden flex flex-col transition-colors duration-300 shadow-lg">

                {/* Scanning Animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8A49F] opacity-0 group-hover:opacity-100 pointer-events-none" />

                {/* Header */}
                <div className="mb-4">
                    <span className="text-xs font-code text-[#C8A49F] border border-[#C8A49F]/40 bg-[#4D0E13]/40 px-2.5 py-1 rounded">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2.5 text-[#F4EEE8] group-hover:text-[#C8A49F] transition-colors">
                        {project.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-[#E5C5C1] text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs text-[#F4EEE8] bg-[#4D0E13]/60 border border-[#C8A49F]/30 px-2 py-1 rounded font-code">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

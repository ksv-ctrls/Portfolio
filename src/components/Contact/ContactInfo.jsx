import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactInfo = () => {
    const contacts = [
        { icon: <Mail size={20} />, label: 'Email', value: 'kalaasrivarshini@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kalaasrivarshini@gmail.com' },
        { icon: <Github size={20} />, label: 'GitHub', value: 'github.com/ksv-ctrls', href: 'https://github.com/ksv-ctrls' },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'KalaaSriVarshini-linkedin', href: 'https://www.linkedin.com/in/kalaa-sri-varshini-6a50ba313?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
        { icon: <MapPin size={20} />, label: 'Location', value: 'Chennai, India', href: '#' },
    ];

    return (
        <section id="contact-info" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink mb-12"
                >
                    Get in Touch
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target={contact.href !== '#' ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 flex flex-col items-center gap-4 hover:border-primary-cyan/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary-cyan group-hover:scale-110 transition-transform">
                                {contact.icon}
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-code text-gray-500 uppercase tracking-widest mb-1">{contact.label}</p>
                                <div className="relative inline-block">
                                    <p className="text-sm font-medium text-white group-hover:text-primary-cyan transition-colors truncate max-w-full">
                                        {contact.value}
                                    </p>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-primary-cyan to-primary-purple transition-all duration-300 rounded-full" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;

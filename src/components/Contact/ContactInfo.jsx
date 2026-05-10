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
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue via-primary-violet to-primary-indigo mb-12"
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
                            className="p-6 rounded-2xl bg-white dark:bg-black/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex flex-col items-center gap-4 shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-none hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] dark:hover:shadow-none transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform">
                                {contact.icon}
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-code text-gray-500 uppercase tracking-widest mb-1">{contact.label}</p>
                                <div className="relative inline-block">
                                    <p className="text-sm font-medium text-slate-800 dark:text-white group-hover:text-primary-blue transition-colors truncate max-w-full">
                                        {contact.value}
                                    </p>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-primary-blue to-primary-violet transition-all duration-300 rounded-full" />
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

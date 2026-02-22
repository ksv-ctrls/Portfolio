import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const DataCollector = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, submitted, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'submitting') return;

        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('submitted');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error sending message: ", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-4 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-primary-purple/10 pointer-events-none" />

            <div className="max-w-4xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6">
                            Drop your Contact
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                            Have a <span className="text-primary-pink">question</span> or a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-purple font-semibold">project in mind?</span> Drop your contact info here.
                            <br className="hidden md:block" /><br className="hidden md:block" />
                            Lets start our journey together.
                        </p>

                        <div className="flex flex-col gap-4 font-code text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                                <span>STATUS: OPEN FOR WORK</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-purple rounded-full animate-pulse" />
                                <span>LOCATION: CHENNAI INDIA (REMOTE ENABLED)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 border border-white/10 relative"
                >


                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-code text-gray-400">NAME</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary-cyan focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                                    placeholder="Enter Name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-code text-gray-400">EMAIL</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary-cyan focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                                    placeholder="email@domain.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-code text-gray-400">MESSAGE</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-gray-500" size={18} />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-background/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary-cyan focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all resize-none"
                                    placeholder="Leave your message..."
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting' || status === 'submitted'}
                            className={`w-full group relative overflow-hidden font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2
                                ${status === 'submitted' ? 'bg-primary-green/20 border-primary-green text-primary-green' :
                                    status === 'error' ? 'bg-red-500/20 border-red-500 text-red-500' :
                                        'bg-primary-cyan/10 hover:bg-primary-cyan/20 border border-primary-cyan text-primary-cyan'}`}
                        >
                            <AnimatePresence mode="wait">
                                {status === 'submitting' ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Loader2 className="animate-spin" size={18} />
                                        SENDING...
                                    </motion.div>
                                ) : status === 'submitted' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <CheckCircle size={18} />
                                        SENT SUCCESSFULLY!
                                    </motion.div>
                                ) : status === 'error' ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <AlertCircle size={18} />
                                        FAILED TO SEND
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="idle"
                                        className="flex items-center gap-2"
                                    >
                                        SEND <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default DataCollector;

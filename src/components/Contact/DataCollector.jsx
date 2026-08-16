import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

const DataCollector = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'submitting') return;

        setStatus('submitting');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/contact`, {
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
        <section id="contact" className="py-20 px-4 flex items-center justify-center relative">
            <div className="max-w-4xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-1 text-xs font-code tracking-widest text-[#7A1822] uppercase font-bold bg-[#7A1822]/10 px-3 py-1 rounded-full border border-[#7A1822]/20 mb-3">
                            <Sparkles size={12} />
                            DIRECT MESSAGE
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#211C1D] tracking-tight mt-1 mb-6">
                            Drop a Line
                        </h2>
                        <p className="text-[#70676A] text-base md:text-lg mb-8 leading-relaxed font-medium">
                            Have a <span className="text-[#7A1822] font-bold">question</span> or a <span className="text-[#24112F] font-bold">project in mind?</span> Drop your contact info here.
                            <br className="hidden md:block" /><br className="hidden md:block" />
                            Let’s start our journey together.
                        </p>

                        <div className="flex flex-col gap-4 font-code text-sm">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-[#7A1822] rounded-full animate-pulse" />
                                <span className="tracking-widest font-bold text-[#7A1822]">STATUS: OPEN FOR WORK</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-[#9BB6D3] rounded-full animate-pulse" />
                                <span className="tracking-widest font-bold text-[#9BB6D3]">LOCATION: CHENNAI, INDIA (REMOTE)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-[#D5B36A] rounded-full animate-pulse" />
                                <span className="tracking-widest font-bold text-[#D5B36A]">AVAILABILITY: IMMEDIATE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Elevated Form Card — Warm White #FCF9F5 block with Layered Depth Shadow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-[#FCF9F5] border border-[#E8DFD8] rounded-2xl relative shadow-[0_24px_60px_rgba(33,28,29,0.14),0_8px_24px_rgba(90,16,24,0.08)] hover:border-[#7A1822]/40 transition-all duration-300"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-code tracking-wider text-[#7A1822] font-bold">NAME</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-[#9BB6D3]" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#F7F1EB] border border-[#E8DFD8] rounded-lg py-2.5 pl-10 pr-4 text-[#211C1D] placeholder:text-[#70676A]/50 focus:outline-none focus:border-[#7A1822] focus:ring-1 focus:ring-[#7A1822] transition-all font-grotesk"
                                    placeholder="Enter Name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-code tracking-wider text-[#7A1822] font-bold">EMAIL</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-[#9BB6D3]" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#F7F1EB] border border-[#E8DFD8] rounded-lg py-2.5 pl-10 pr-4 text-[#211C1D] placeholder:text-[#70676A]/50 focus:outline-none focus:border-[#7A1822] focus:ring-1 focus:ring-[#7A1822] transition-all font-grotesk"
                                    placeholder="email@domain.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-code tracking-wider text-[#7A1822] font-bold">MESSAGE</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-[#9BB6D3]" size={18} />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-[#F7F1EB] border border-[#E8DFD8] rounded-lg py-2.5 pl-10 pr-4 text-[#211C1D] placeholder:text-[#70676A]/50 focus:outline-none focus:border-[#7A1822] focus:ring-1 focus:ring-[#7A1822] transition-all resize-none font-grotesk"
                                    placeholder="Leave your message..."
                                    required
                                />
                            </div>
                        </div>

                        {/* Primary CTA Button: Primary Burgundy fill, Cream text */}
                        <button
                            type="submit"
                            disabled={status === 'submitting' || status === 'submitted'}
                            className={`w-full group relative overflow-hidden font-bold py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-code
                                ${status === 'submitted' ? 'bg-[#E7C9C7] border border-[#E8DFD8] text-[#7A1822]' :
                                    status === 'error' ? 'bg-red-500/20 border border-red-500 text-red-500' :
                                        'bg-[#7A1822] hover:bg-[#5A1018] text-[#F7F1EB] shadow-md hover:shadow-lg'}`}
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
                                        SEND <Send size={16} className="group-hover:translate-x-1 transition-transform" />
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

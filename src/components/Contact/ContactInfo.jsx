import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';

const contacts = [
    {
        icon: Mail,
        label: 'Email',
        value: 'kalaasrivarshini@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kalaasrivarshini@gmail.com',
        // Normal state: Warm White card with Burgundy icon badge
        normalBg: '#FCF9F5',
        normalBorder: '#E8DFD8',
        iconBg: '#7A1822',
        accentColor: '#7A1822',
        // Hover: Soft Rose surface, Deep Burgundy border/icon, Burgundy shadow
        hoverBg: '#F0DCD9',
        hoverBorder: '#7A1822',
        hoverIconBg: '#5A1018',
        hoverShadow: '0 24px 55px rgba(122,24,34,0.36), 0 8px 22px rgba(122,24,34,0.22)',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/ksv-ctrls',
        href: 'https://github.com/ksv-ctrls',
        // Normal state
        normalBg: '#FCF9F5',
        normalBorder: '#E8DFD8',
        iconBg: '#24112F',
        accentColor: '#24112F',
        // Hover: Lavender surface, Dark Plum border/icon, Plum shadow
        hoverBg: '#EAE3F0',
        hoverBorder: '#24112F',
        hoverIconBg: '#1A0B24',
        hoverShadow: '0 24px 55px rgba(36,17,47,0.38), 0 8px 22px rgba(36,17,47,0.22)',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'KalaaSriVarshini',
        href: 'https://www.linkedin.com/in/kalaa-sri-varshini-6a50ba313',
        // Normal state
        normalBg: '#FCF9F5',
        normalBorder: '#E8DFD8',
        iconBg: '#6C8DAE',
        accentColor: '#6C8DAE',
        // Hover: Soft Blue surface, Muted Blue border/icon, Blue shadow
        hoverBg: '#D9E4EF',
        hoverBorder: '#6C8DAE',
        hoverIconBg: '#4E7393',
        hoverShadow: '0 24px 55px rgba(108,141,174,0.38), 0 8px 22px rgba(108,141,174,0.22)',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Chennai, India',
        href: '#',
        // Normal state
        normalBg: '#FCF9F5',
        normalBorder: '#E8DFD8',
        iconBg: '#B8954C',
        accentColor: '#B8954C',
        // Hover: Warm Gold tint surface, Gold border, Gold shadow
        hoverBg: '#EED9AE',
        hoverBorder: '#D5B36A',
        hoverIconBg: '#9C7830',
        hoverShadow: '0 24px 55px rgba(213,179,106,0.40), 0 8px 22px rgba(184,149,76,0.24)',
    },
];

const ContactCard = ({ contact, index }) => {
    const [hovered, setHovered] = useState(false);
    const IconComp = contact.icon;

    return (
        <motion.a
            href={contact.href}
            target={contact.href !== '#' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                padding: '28px 20px',
                borderRadius: '20px',
                textDecoration: 'none',
                backgroundColor: hovered ? contact.hoverBg : contact.normalBg,
                border: `1.5px solid ${hovered ? contact.hoverBorder : contact.normalBorder}`,
                boxShadow: hovered ? contact.hoverShadow : '0 4px 16px rgba(33,28,29,0.06)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: [
                    'background-color 280ms ease',
                    'border-color 280ms ease',
                    'box-shadow 280ms ease',
                    'transform 280ms cubic-bezier(0.25,1,0.5,1)',
                ].join(', '),
            }}
        >
            {/* Icon Badge */}
            <div
                style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: hovered ? contact.hoverIconBg : contact.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FCF9F5',
                    transform: hovered ? 'scale(1.12)' : 'scale(1)',
                    transition: 'background-color 280ms ease, transform 280ms cubic-bezier(0.25,1,0.5,1)',
                    flexShrink: 0,
                }}
            >
                <IconComp size={22} />
            </div>

            {/* Label & Value */}
            <div style={{ textAlign: 'center' }}>
                <p
                    style={{
                        fontSize: '10px',
                        fontFamily: "'Source Code Pro', monospace",
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: hovered ? contact.hoverBorder : contact.accentColor,
                        marginBottom: '4px',
                        transition: 'color 280ms ease',
                    }}
                >
                    {contact.label}
                </p>
                <p
                    style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#211C1D',
                        fontFamily: "'Space Grotesk', sans-serif",
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '160px',
                    }}
                >
                    {contact.value}
                </p>
                {/* Underline grow on hover */}
                <div
                    style={{
                        height: '2px',
                        marginTop: '4px',
                        borderRadius: '9999px',
                        backgroundColor: contact.hoverBorder,
                        width: hovered ? '100%' : '0%',
                        transition: 'width 280ms ease',
                        maxWidth: '160px',
                        margin: '4px auto 0',
                    }}
                />
            </div>
        </motion.a>
    );
};

const ContactInfo = () => {
    return (
        <section id="contact-info" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Large Editorial Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="inline-flex items-center gap-1.5 text-xs font-code tracking-widest text-[#D5B36A] uppercase font-bold bg-[#D5B36A]/15 px-3 py-1 rounded-full border border-[#D5B36A]/30 mb-4 block w-fit mx-auto">
                        <Sparkles size={12} />
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#211C1D] tracking-tight leading-none">
                        LET'S BUILD <br />
                        <span className="text-[#7A1822]">SOMETHING</span> <br />
                        <span className="text-[#24112F]">INTERESTING.</span>
                    </h2>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact, index) => (
                        <ContactCard key={index} contact={contact} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;

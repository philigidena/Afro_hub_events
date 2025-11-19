import React from 'react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'Instagram', icon: '📸', url: '#' },
        { name: 'Twitter', icon: '🐦', url: '#' },
        { name: 'LinkedIn', icon: '💼', url: '#' },
    ];

    const quickLinks = [
        { name: 'About Us', url: '#about' },
        { name: 'Events', url: '#events' },
        { name: 'Categories', url: '#categories' },
        { name: 'Testimonials', url: '#testimonials' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
        <footer id="contact" className="relative bg-gradient-to-b from-black to-brand-dark text-white overflow-hidden">
            {/* Adinkra Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footer-adinkra" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            {/* Nkyinkyim - "Twisting" symbol representing adaptability */}
                            <path d="M 20 40 Q 30 20, 40 40 Q 50 60, 60 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-gold" />
                            <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-adinkra)" />
                </svg>
            </div>

            {/* Wave Divider with Kente-inspired pattern */}
            <div className="relative">
                <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path d="M0,60 Q300,90 600,60 T1200,60 L1200,0 L0,0 Z" fill="url(#wave-gradient)" />
                    <path d="M0,40 Q300,70 600,40 T1200,40 L1200,0 L0,0 Z" fill="url(#wave-gradient)" opacity="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <a href="#home" className="flex items-center gap-4 mb-6 group">
                            <div className="relative">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-brand-gold/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <img
                                    src="/Logo.png"
                                    alt="Afro Hub Events"
                                    className="h-16 w-auto relative z-10 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div>
                                <span className="font-display font-bold text-3xl tracking-widest text-white group-hover:text-brand-gold transition-colors duration-300">
                                    AFRO HUB
                                </span>
                                {/* Kente-inspired underline */}
                                <div className="flex gap-1 mt-1">
                                    <div className="h-1 flex-1 bg-brand-gold" />
                                    <div className="h-1 flex-1 bg-brand-gold/60" />
                                    <div className="h-1 flex-1 bg-brand-gold/30" />
                                </div>
                            </div>
                        </a>

                        <p className="font-body text-gray-400 leading-relaxed mb-6 max-w-md">
                            Celebrating African heritage through premier cultural events that connect communities and create lasting memories.
                        </p>

                        {/* Social Links with African-inspired frames */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    className="group relative w-12 h-12 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    {/* Outer frame */}
                                    <div className="absolute inset-0 border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300" />

                                    {/* Inner decorative corners */}
                                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Background */}
                                    <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/20 transition-colors duration-300" />

                                    {/* Icon */}
                                    <span className="relative z-10">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-brand-gold mb-6 tracking-wider relative">
                            QUICK LINKS
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-gold" />
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.url}
                                        className="font-body text-gray-400 hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"
                                    >
                                        {/* Adinkra-inspired bullet */}
                                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 16 16">
                                            <rect x="6" y="6" width="4" height="4" fill="currentColor" className="text-brand-gold" transform="rotate(45 8 8)" />
                                        </svg>
                                        <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-brand-gold mb-6 tracking-wider relative">
                            CONTACT
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-gold" />
                        </h3>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 border border-brand-gold/30 group-hover:border-brand-gold flex items-center justify-center transition-colors flex-shrink-0">
                                    <span className="text-brand-gold text-sm">📧</span>
                                </div>
                                <a href="mailto:info@afrohub.org" className="hover:text-brand-gold transition-colors pt-1">
                                    info@afrohub.org
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 border border-brand-gold/30 group-hover:border-brand-gold flex items-center justify-center transition-colors flex-shrink-0">
                                    <span className="text-brand-gold text-sm">📞</span>
                                </div>
                                <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors pt-1">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 border border-brand-gold/30 group-hover:border-brand-gold flex items-center justify-center transition-colors flex-shrink-0">
                                    <span className="text-brand-gold text-sm">📍</span>
                                </div>
                                <span className="pt-1">Washington, DC</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar with Kente-inspired divider */}
                <div className="pt-8 border-t-2 border-brand-gold/20 relative">
                    {/* Kente pattern on border */}
                    <div className="absolute top-0 left-0 right-0 flex gap-1">
                        <div className="flex-1 h-1 bg-brand-gold" />
                        <div className="flex-1 h-1 bg-brand-gold/60" />
                        <div className="flex-1 h-1 bg-brand-gold/30" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
                        <p className="font-body text-sm text-gray-500">
                            © {new Date().getFullYear()} Afro Hub Events. All rights reserved.
                        </p>
                        <div className="flex gap-6 font-body text-sm">
                            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors relative group">
                                Privacy Policy
                                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-brand-gold transition-all duration-300" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors relative group">
                                Terms of Service
                                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-brand-gold transition-all duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
        </footer>
    );
};

export default Footer;

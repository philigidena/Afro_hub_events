import React from 'react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'Instagram', icon: '📸', url: '#' },
        { name: 'Twitter', icon: '🐦', url: '#' },
        { name: 'LinkedIn', icon: '💼', url: '#' },
    ];

    const quickLinks = [
        { name: 'About Us', url: '#' },
        { name: 'Events', url: '#' },
        { name: 'Contact', url: '#' },
        { name: 'Book Now', url: '#' },
    ];

    return (
        <footer className="bg-gradient-to-b from-black to-brand-dark text-white py-16 border-t border-brand-gold/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-brand-gold rotate-45"></div>
                            <span className="font-display font-bold text-3xl tracking-widest">AFRO HUB</span>
                        </div>
                        <p className="font-body text-gray-400 leading-relaxed mb-6 max-w-md">
                            Celebrating African heritage through premier cultural events that connect communities and create lasting memories.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    className="w-12 h-12 bg-brand-gold/10 hover:bg-brand-gold border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-brand-gold mb-6 tracking-wider">QUICK LINKS</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.url}
                                        className="font-body text-gray-400 hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-0.5 bg-brand-gold transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-brand-gold mb-6 tracking-wider">CONTACT</h3>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li className="flex items-start gap-2">
                                <span className="text-brand-gold mt-1">📧</span>
                                <a href="mailto:info@afrohub.org" className="hover:text-brand-gold transition-colors">
                                    info@afrohub.org
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-gold mt-1">📞</span>
                                <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-gold mt-1">📍</span>
                                <span>Washington, DC</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body text-sm text-gray-500">
                        © {new Date().getFullYear()} Afro Hub Events. All rights reserved.
                    </p>
                    <div className="flex gap-6 font-body text-sm">
                        <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

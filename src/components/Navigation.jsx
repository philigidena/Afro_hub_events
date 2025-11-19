import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Categories', href: '#categories' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-brand-dark/95 backdrop-blur-md shadow-2xl shadow-brand-gold/10 border-b border-brand-gold/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between py-4">
                    {/* Logo Section */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            {/* Animated glow effect behind logo */}
                            <div className="absolute inset-0 bg-brand-gold/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <img
                                src="/Logo.png"
                                alt="Afro Hub Events"
                                className="h-12 w-auto relative z-10 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-brand-gold transition-colors duration-300">
                                AFRO HUB
                            </span>
                            <div className="h-0.5 w-0 group-hover:w-full bg-brand-gold transition-all duration-500" />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="group relative font-display text-sm tracking-wider text-gray-300 hover:text-brand-gold transition-colors duration-300"
                            >
                                {link.name}
                                {/* Animated underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300" />
                                {/* Decorative dot */}
                                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <button className="group relative bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-display font-bold px-6 py-3 text-sm tracking-wider transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                BOOK NOW
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white p-2 relative z-50"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`h-0.5 w-full bg-brand-gold transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`h-0.5 w-full bg-brand-gold transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`h-0.5 w-full bg-brand-gold transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-brand-dark/98 backdrop-blur-lg transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="container mx-auto px-6 pt-24 pb-8">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group relative font-display text-3xl font-bold text-white hover:text-brand-gold transition-colors duration-300 py-3 border-b border-white/10"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="flex items-center gap-4">
                                    <span className="w-0 group-hover:w-8 h-0.5 bg-brand-gold transition-all duration-300" />
                                    {link.name}
                                </span>
                            </a>
                        ))}

                        <button className="mt-6 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-display font-bold px-8 py-4 text-lg tracking-wider transition-all duration-300">
                            BOOK NOW
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/4 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl" />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

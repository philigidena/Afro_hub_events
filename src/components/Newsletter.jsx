import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <section className="relative bg-brand-dark py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{ backgroundImage: "url('/cheerful-black-couple-in-african-clothing-taking-s-2025-03-18-16-27-05-utc.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black/95 to-brand-dark" />

            {/* Mudcloth-inspired Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="mudcloth-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                            {/* Horizontal lines */}
                            <line x1="0" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="2" className="text-brand-gold" />
                            <line x1="0" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="2" className="text-brand-gold" />
                            <line x1="0" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="2" className="text-brand-gold" />

                            {/* Zigzag patterns */}
                            <path d="M 10 40 L 20 30 L 30 40 L 40 30 L 50 40 L 60 30 L 70 40 L 80 30 L 90 40 L 100 30 L 110 40"
                                stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-gold" />
                            <path d="M 10 80 L 20 70 L 30 80 L 40 70 L 50 80 L 60 70 L 70 80 L 80 70 L 90 80 L 100 70 L 110 80"
                                stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-gold" />

                            {/* Dots */}
                            <circle cx="15" cy="10" r="2" fill="currentColor" className="text-brand-gold" />
                            <circle cx="45" cy="10" r="2" fill="currentColor" className="text-brand-gold" />
                            <circle cx="75" cy="10" r="2" fill="currentColor" className="text-brand-gold" />
                            <circle cx="105" cy="10" r="2" fill="currentColor" className="text-brand-gold" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mudcloth-pattern)" />
                </svg>
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-brand-gold/10 to-transparent blur-3xl animate-float" />
                <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-brand-gold/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-brand-gold/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Floating Adinkra Symbols */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <svg className="absolute top-20 left-20 w-24 h-24 text-brand-gold animate-float" viewBox="0 0 100 100">
                    {/* Gye Nyame - "Except God" symbol */}
                    <path d="M 50 10 Q 70 30, 70 50 Q 70 70, 50 90 Q 30 70, 30 50 Q 30 30, 50 10 Z M 50 30 Q 40 40, 40 50 Q 40 60, 50 70 Q 60 60, 60 50 Q 60 40, 50 30 Z"
                        stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <svg className="absolute bottom-20 right-20 w-32 h-32 text-brand-gold animate-float" viewBox="0 0 100 100" style={{ animationDelay: '1.5s' }}>
                    {/* Dwennimmen - "Ram's horns" symbol */}
                    <path d="M 30 50 Q 20 30, 35 20 Q 40 25, 35 35 M 70 50 Q 80 30, 65 20 Q 60 25, 65 35"
                        stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="60" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Artistic Header */}
                    <div className="text-center mb-12">
                        {/* Kente-inspired top decoration */}
                        <div className="flex items-center justify-center gap-2 mb-8 animate-fadeIn">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-brand-gold" />
                                <div className="w-4 h-4 bg-brand-gold/70" />
                                <div className="w-4 h-4 bg-brand-gold/40" />
                            </div>
                            <div className="w-24 h-1 bg-brand-gold" />
                            <div className="w-4 h-4 bg-brand-gold rotate-45" />
                            <div className="w-24 h-1 bg-brand-gold" />
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-brand-gold/40" />
                                <div className="w-4 h-4 bg-brand-gold/70" />
                                <div className="w-4 h-4 bg-brand-gold" />
                            </div>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-slideInLeft">
                            STAY <span className="relative inline-block">
                                <span className="text-brand-gold">CONNECTED</span>
                                {/* Adinkra-inspired underline */}
                                <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 200 16">
                                    <path d="M 0 8 L 40 8 M 50 8 L 90 8 M 100 8 L 140 8 M 150 8 L 190 8"
                                        stroke="currentColor" strokeWidth="3" className="text-brand-gold/50" />
                                    <circle cx="45" cy="8" r="3" fill="currentColor" className="text-brand-gold" />
                                    <circle cx="95" cy="8" r="3" fill="currentColor" className="text-brand-gold" />
                                    <circle cx="145" cy="8" r="3" fill="currentColor" className="text-brand-gold" />
                                </svg>
                            </span>
                        </h2>

                        <p className="font-body text-xl md:text-2xl text-gray-300 leading-relaxed animate-fadeIn max-w-3xl mx-auto">
                            Subscribe to our newsletter for exclusive updates on upcoming events, cultural insights, and special offers.
                        </p>
                    </div>

                    {/* Newsletter Form with African-inspired Frame */}
                    <div className="relative animate-slideInRight">
                        {/* Decorative frame inspired by African textiles */}
                        <div className="absolute -inset-4 opacity-30">
                            <div className="absolute top-0 left-0 right-0 h-2 flex gap-1">
                                <div className="flex-1 bg-brand-gold" />
                                <div className="flex-1 bg-brand-gold/70" />
                                <div className="flex-1 bg-brand-gold/40" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-2 flex gap-1">
                                <div className="flex-1 bg-brand-gold/40" />
                                <div className="flex-1 bg-brand-gold/70" />
                                <div className="flex-1 bg-brand-gold" />
                            </div>
                            <div className="absolute top-0 bottom-0 left-0 w-2 flex flex-col gap-1">
                                <div className="flex-1 bg-brand-gold" />
                                <div className="flex-1 bg-brand-gold/70" />
                                <div className="flex-1 bg-brand-gold/40" />
                            </div>
                            <div className="absolute top-0 bottom-0 right-0 w-2 flex flex-col gap-1">
                                <div className="flex-1 bg-brand-gold/40" />
                                <div className="flex-1 bg-brand-gold/70" />
                                <div className="flex-1 bg-brand-gold" />
                            </div>
                        </div>

                        {/* Main Form Container */}
                        <div className="relative bg-gradient-to-br from-brand-dark/80 to-black/80 backdrop-blur-sm border-2 border-brand-gold/30 p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                                <div className="flex-1 relative group">
                                    {/* Input decorative elements */}
                                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-brand-gold opacity-0 group-focus-within:opacity-100 transition-opacity" />
                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-brand-gold opacity-0 group-focus-within:opacity-100 transition-opacity" />

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-6 py-5 bg-white/5 border-2 border-brand-gold/30 text-white placeholder-gray-500 font-body focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group relative bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-display font-bold px-10 py-5 text-lg tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-gold/50 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        SUBSCRIBE
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>

                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-dark" />
                                        <div className="absolute bottom-0 right-0 w-full h-1 bg-brand-dark" />
                                    </div>
                                </button>
                            </form>

                            <p className="font-body text-sm text-gray-500 mt-6 text-center">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Decorative Element */}
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <svg className="w-12 h-12 text-brand-gold/30" viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
                            <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
                            <circle cx="24" cy="24" r="4" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

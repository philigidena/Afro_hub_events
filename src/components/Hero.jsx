import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-brand-dark text-white min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Enhanced Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/cheerful-black-couple-in-african-clothing-taking-s-2025-03-18-16-27-05-utc.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black/80 to-brand-dark/90" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            {/* Floating Gradient Orbs - More Modern Than Squares */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-brand-gold/20 to-transparent blur-3xl animate-float" />
                <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-brand-gold/15 to-transparent blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-brand-gold/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '3s' }} />
            </div>

            {/* Animated Particles/Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-gold rounded-full animate-twinkle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slideInLeft">
                        {/* Eyebrow Text */}
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-brand-gold" />
                            <span className="text-brand-gold font-display text-sm tracking-[0.3em] uppercase">Premium Cultural Events</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                            CELEBRATE
                            <br />
                            <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-clip-text text-transparent">
                                AFRICAN
                            </span>
                            <br />
                            HERITAGE
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                            Immerse yourself in the vibrant tapestry of African culture. Discover extraordinary events that unite communities and honor timeless traditions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group relative bg-brand-gold text-brand-dark font-display font-bold py-5 px-10 text-lg tracking-wider transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    DISCOVER EVENTS
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-brand-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </button>

                            <button className="group relative border-2 border-brand-gold text-brand-gold font-display font-bold py-5 px-10 text-lg tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20">
                                <span className="relative z-10">LEARN MORE</span>
                                <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>

                        {/* Stats Preview */}
                        <div className="flex gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="font-display text-3xl font-bold text-brand-gold">500+</div>
                                <div className="font-body text-sm text-gray-400 uppercase tracking-wide">Events Hosted</div>
                            </div>
                            <div>
                                <div className="font-display text-3xl font-bold text-brand-gold">50K+</div>
                                <div className="font-body text-sm text-gray-400 uppercase tracking-wide">Happy Attendees</div>
                            </div>
                            <div>
                                <div className="font-display text-3xl font-bold text-brand-gold">15+</div>
                                <div className="font-body text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Featured Image Accent */}
                    <div className="hidden lg:block relative animate-slideInRight">
                        <div className="relative">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-2xl" />
                            <div className="absolute inset-0 bg-brand-gold/5 rounded-2xl backdrop-blur-sm" />

                            {/* Icon Grid */}
                            <div className="relative p-8 grid grid-cols-2 gap-6">
                                {/* Music & Dance */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                                        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-white mb-1">Music</h3>
                                    <p className="font-body text-sm text-gray-400">Live Performances</p>
                                </div>

                                {/* Art & Culture */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                                        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-white mb-1">Art</h3>
                                    <p className="font-body text-sm text-gray-400">Exhibitions</p>
                                </div>

                                {/* Food & Cuisine */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                                        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-white mb-1">Cuisine</h3>
                                    <p className="font-body text-sm text-gray-400">Food Festivals</p>
                                </div>

                                {/* Community */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                                        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-white mb-1">Community</h3>
                                    <p className="font-body text-sm text-gray-400">Gatherings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-brand-gold text-xs font-display tracking-wider">SCROLL</span>
                <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;

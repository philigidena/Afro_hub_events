import React, { useEffect, useRef } from 'react';

const Statistics = () => {
    const stats = [
        { number: '500+', label: 'EVENTS HOSTED', icon: '🎭', color: 'from-amber-500 to-brand-gold' },
        { number: '50K+', label: 'ATTENDEES', icon: '👥', color: 'from-brand-gold to-yellow-600' },
        { number: '25+', label: 'COUNTRIES REPRESENTED', icon: '🌍', color: 'from-yellow-600 to-brand-gold' },
        { number: '100%', label: 'CLIENT SATISFACTION', icon: '⭐', color: 'from-brand-gold to-amber-500' },
    ];

    return (
        <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-black py-24 overflow-hidden">
            {/* Artistic Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="stats-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-brand-gold" />
                            <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" opacity="0.3" />
                            <line x1="30" y1="0" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#stats-grid)" />
                </svg>
            </div>

            {/* Animated Radial Patterns */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 border border-brand-gold/20 rounded-full animate-pulse" />
                <div className="absolute top-20 left-20 w-52 h-52 border border-brand-gold/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-10 right-10 w-80 h-80 border border-brand-gold/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 right-20 w-60 h-60 border border-brand-gold/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-brand-gold/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Artistic Header */}
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
                        <div className="w-3 h-3 bg-brand-gold rotate-45" />
                        <div className="w-20 h-1 bg-brand-gold" />
                        <div className="w-3 h-3 bg-brand-gold rotate-45" />
                        <div className="w-16 h-px bg-gradient-to-r from-brand-gold via-brand-gold to-transparent" />
                    </div>

                    <h2 className="font-display text-6xl md:text-7xl font-bold mb-6">
                        <span className="text-white">OUR </span>
                        <span className="relative inline-block">
                            <span className="text-brand-gold">IMPACT</span>
                            <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-gold/20 -z-10" />
                        </span>
                    </h2>

                    <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto">
                        Transforming cultural experiences across continents
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                </div>

                {/* Enhanced Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Outer glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Main card */}
                            <div className="relative bg-gradient-to-br from-brand-dark to-black border-2 border-brand-gold/30 p-8 text-center hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/30 overflow-hidden">
                                {/* Animated background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Circular progress indicator background */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                            className="text-brand-gold"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="35"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                            className="text-brand-gold"
                                        />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with artistic frame */}
                                    <div className="relative inline-block mb-6">
                                        <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
                                        <div className="relative bg-gradient-to-br from-brand-gold/10 to-transparent p-4 rounded-full border-2 border-brand-gold/30 group-hover:border-brand-gold transition-all duration-500">
                                            <div className="text-5xl group-hover:scale-125 transition-transform duration-500">
                                                {stat.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Number with artistic styling */}
                                    <div className="relative mb-4">
                                        <h3 className={`font-display text-6xl md:text-7xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                                            {stat.number}
                                        </h3>
                                        {/* Underlining decoration */}
                                        <div className="w-16 h-1 bg-brand-gold mx-auto mt-3 group-hover:w-full transition-all duration-500" />
                                    </div>

                                    {/* Label */}
                                    <p className="font-body text-xs tracking-[0.2em] text-gray-400 uppercase group-hover:text-brand-gold transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Decorative corner accents */}
                                <div className="absolute top-0 right-0">
                                    <div className="w-12 h-12 border-t-2 border-r-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0">
                                    <div className="w-12 h-12 border-b-2 border-l-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Animated shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional artistic element - Achievement banner */}
                <div className="mt-20 text-center">
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-brand-gold/10 blur-2xl" />
                        <div className="relative border-y-2 border-brand-gold/30 py-6 px-12">
                            <p className="font-display text-2xl md:text-3xl text-white tracking-wider">
                                RECOGNIZED EXCELLENCE IN
                                <span className="text-brand-gold font-bold"> CULTURAL EVENTS</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;

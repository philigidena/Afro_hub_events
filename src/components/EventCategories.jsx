import React from 'react';

const categories = [
    {
        title: 'DIPLOMATIC NIGHTS',
        image: '/group-of-black-adults-celebrating-kwanzaa-by-playi-2025-10-01-19-55-01-utc.jpg',
        description: 'Elite networking events',
        gradient: 'from-indigo-900/90 via-purple-900/80 to-brand-dark/90'
    },
    {
        title: 'AZMARI SOUND FEST',
        image: '/they-always-have-fun-together-2025-04-06-05-19-37-utc.jpg',
        description: 'Traditional music celebrations',
        gradient: 'from-blue-900/90 via-cyan-900/80 to-brand-dark/90'
    },
    {
        title: 'AFRICAN ART FAIR',
        image: '/traditional-african-barista-preparing-coffee-as-in-2025-01-09-05-37-38-utc.jpg',
        description: 'Contemporary art exhibitions',
        gradient: 'from-amber-900/90 via-orange-900/80 to-brand-dark/90'
    },
    {
        title: 'CULTURAL GALA',
        image: '/cheerful-black-couple-in-african-clothing-taking-s-2025-03-18-16-27-05-utc.jpg',
        description: 'Grand cultural showcases',
        gradient: 'from-rose-900/90 via-pink-900/80 to-brand-dark/90'
    },
    {
        title: 'A TO Z OF AFRICA',
        image: '/group-of-black-adults-celebrating-kwanzaa-by-playi-2025-10-01-19-55-01-utc.jpg',
        description: 'Educational experiences',
        gradient: 'from-emerald-900/90 via-teal-900/80 to-brand-dark/90'
    },
    {
        title: 'AFRO-FUSION PARTY',
        image: '/they-always-have-fun-together-2025-04-06-05-19-37-utc.jpg',
        description: 'Modern cultural fusion',
        gradient: 'from-violet-900/90 via-fuchsia-900/80 to-brand-dark/90'
    },
];

const EventCategories = () => {
    return (
        <section id="categories" className="relative bg-gradient-to-b from-brand-dark to-black py-24 overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="category-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                            <path d="M 0 60 L 60 0 L 120 60 L 60 120 Z" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                            <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#category-pattern)" />
                </svg>
            </div>

            {/* Floating Abstract Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-brand-gold/10 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Artistic Header */}
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="flex flex-col gap-1">
                            <div className="w-16 h-px bg-brand-gold" />
                            <div className="w-12 h-px bg-brand-gold/60" />
                            <div className="w-8 h-px bg-brand-gold/30" />
                        </div>
                        <div className="w-4 h-4 bg-brand-gold rotate-45" />
                        <div className="flex flex-col gap-1">
                            <div className="w-16 h-px bg-brand-gold" />
                            <div className="w-12 h-px bg-brand-gold/60" />
                            <div className="w-8 h-px bg-brand-gold/30" />
                        </div>
                    </div>

                    <h2 className="font-display text-brand-gold text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        EVENT CATEGORIES
                    </h2>

                    {/* Artistic subtitle with decorative elements */}
                    <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold hidden md:block" />
                        <p className="font-body text-xl text-gray-300">
                            Diverse cultural experiences tailored to celebrate African heritage
                        </p>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold hidden md:block" />
                    </div>
                </div>

                {/* Asymmetric Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`group relative cursor-pointer ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                                } ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* Outer glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/30 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Main Card */}
                            <div className={`relative overflow-hidden ${index === 0 ? 'h-[600px]' : 'h-80'
                                } border-2 border-brand-gold/30 group-hover:border-brand-gold transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-gold/40`}>

                                {/* Background Image with Artistic Treatment */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                />

                                {/* Artistic Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-all duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                {/* Geometric Pattern Overlay */}
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id={`overlay-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                                <polygon points="20,0 40,20 20,40 0,20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill={`url(#overlay-${index})`} />
                                    </svg>
                                </div>

                                {/* Decorative Corner Frames - Animated */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand-gold transform -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-brand-gold transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                                    <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-brand-gold/50 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-brand-gold/50 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    {/* Number indicator for large card */}
                                    {index === 0 && (
                                        <div className="absolute top-8 right-8 font-display text-8xl font-bold text-brand-gold/10">
                                            01
                                        </div>
                                    )}

                                    {/* Title with Artistic Treatment */}
                                    <div className="relative">
                                        <h3 className={`font-display text-white ${index === 0 ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'
                                            } font-bold uppercase leading-tight mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                                            {category.title}
                                        </h3>

                                        {/* Decorative underline */}
                                        <div className="flex items-center justify-center gap-2 mt-4">
                                            <div className="w-0 group-hover:w-12 h-px bg-brand-gold transition-all duration-500" />
                                            <div className="w-2 h-2 bg-brand-gold rotate-45" />
                                            <div className="w-0 group-hover:w-12 h-px bg-brand-gold transition-all duration-500" />
                                        </div>
                                    </div>

                                    {/* Description with Reveal Animation */}
                                    <p className={`font-body text-brand-gold ${index === 0 ? 'text-lg md:text-xl' : 'text-sm md:text-base'
                                        } tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100 mt-6`}>
                                        {category.description}
                                    </p>

                                    {/* Explore Button */}
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200 mt-8">
                                        <button className="relative border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-display font-bold px-8 py-3 text-sm tracking-[0.3em] transition-all duration-300 overflow-hidden">
                                            <span className="relative z-10">EXPLORE</span>
                                            <div className="absolute inset-0 bg-brand-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                                {/* Animated Shine */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="mt-20 flex items-center justify-center gap-4">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent to-brand-gold" />
                    <div className="flex gap-2">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                    <div className="w-24 h-px bg-gradient-to-l from-transparent to-brand-gold" />
                </div>
            </div>
        </section>
    );
};

export default EventCategories;

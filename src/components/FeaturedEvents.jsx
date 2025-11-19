import React from 'react';

const FeaturedEvents = () => {
    const events = [
        {
            title: 'DIPLOMATIC NIGHTS',
            date: 'March 15, 2025',
            location: 'Washington DC',
            image: '/group-of-black-adults-celebrating-kwanzaa-by-playi-2025-10-01-19-55-01-utc.jpg',
            category: 'Networking',
            color: 'from-purple-600/30 to-brand-gold/30'
        },
        {
            title: 'AZMARI SOUND FEST',
            date: 'April 20, 2025',
            location: 'New York City',
            image: '/they-always-have-fun-together-2025-04-06-05-19-37-utc.jpg',
            category: 'Music',
            color: 'from-blue-600/30 to-brand-gold/30'
        },
        {
            title: 'CULTURAL GALA',
            date: 'May 10, 2025',
            location: 'Los Angeles',
            image: '/traditional-african-barista-preparing-coffee-as-in-2025-01-09-05-37-38-utc.jpg',
            category: 'Culture',
            color: 'from-amber-600/30 to-brand-gold/30'
        },
    ];

    return (
        <section id="events" className="relative bg-brand-dark py-24 overflow-hidden">
            {/* Artistic Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="events-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#events-pattern)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-64 h-64 border-2 border-brand-gold/10 rotate-45 animate-float" />
            <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-brand-gold/10 rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Artistic Header */}
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-px bg-brand-gold" />
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-brand-gold rotate-45" />
                            <div className="w-2 h-2 bg-brand-gold rotate-45" style={{ opacity: 0.6 }} />
                            <div className="w-2 h-2 bg-brand-gold rotate-45" style={{ opacity: 0.3 }} />
                        </div>
                        <div className="w-12 h-px bg-brand-gold" />
                    </div>

                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
                        FEATURED <span className="relative inline-block">
                            <span className="text-brand-gold">EVENTS</span>
                            <svg className="absolute -bottom-3 left-0 w-full" height="8" viewBox="0 0 200 8">
                                <path d="M0 4 Q 50 0, 100 4 T 200 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-brand-gold/50" />
                            </svg>
                        </span>
                    </h2>

                    <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
                        Join us for unforgettable experiences celebrating African culture
                    </p>
                </div>

                {/* Events Grid with Staggered Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden ${index === 1 ? 'lg:mt-12' : ''}`}
                        >
                            {/* Outer glow */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Main card */}
                            <div className="relative bg-black border-2 border-brand-gold/30 hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/40 overflow-hidden">
                                {/* Image Section with Artistic Overlay */}
                                <div className="relative h-72 overflow-hidden">
                                    {/* Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                                        style={{ backgroundImage: `url(${event.image})` }}
                                    />

                                    {/* Artistic gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                                    {/* Geometric overlay pattern */}
                                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`card-pattern-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#card-pattern-${index})`} />
                                        </svg>
                                    </div>

                                    {/* Category Badge with artistic design */}
                                    <div className="absolute top-6 right-6 z-10">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-brand-gold blur-md" />
                                            <div className="relative bg-brand-gold text-brand-dark font-display font-bold px-5 py-2 text-sm tracking-widest clip-path-badge">
                                                {event.category}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative corner frames */}
                                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-gold/0 group-hover:border-brand-gold transition-all duration-500" />
                                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-gold/0 group-hover:border-brand-gold transition-all duration-500" />
                                </div>

                                {/* Content Section */}
                                <div className="relative p-8 bg-gradient-to-br from-brand-dark to-black">
                                    {/* Decorative top border */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    {/* Info with artistic icons */}
                                    <div className="space-y-3 mb-6 text-gray-400 font-body">
                                        <div className="flex items-center gap-3 group/item">
                                            <div className="w-8 h-8 border border-brand-gold/30 group-hover/item:border-brand-gold flex items-center justify-center transition-colors">
                                                <span className="text-brand-gold text-sm">📅</span>
                                            </div>
                                            <span className="group-hover/item:text-white transition-colors">{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 group/item">
                                            <div className="w-8 h-8 border border-brand-gold/30 group-hover/item:border-brand-gold flex items-center justify-center transition-colors">
                                                <span className="text-brand-gold text-sm">📍</span>
                                            </div>
                                            <span className="group-hover/item:text-white transition-colors">{event.location}</span>
                                        </div>
                                    </div>

                                    {/* Artistic divider */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/50 to-transparent" />
                                        <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
                                        <div className="h-px flex-1 bg-gradient-to-l from-brand-gold/50 to-transparent" />
                                    </div>

                                    {/* CTA Button */}
                                    <button className="group/btn relative w-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-display font-bold py-4 text-sm tracking-[0.3em] transition-all duration-300 overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            LEARN MORE
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 -translate-y-full group-hover/btn:translate-y-0 bg-brand-gold transition-transform duration-300" />
                                    </button>
                                </div>

                                {/* Animated shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Events CTA */}
                <div className="text-center mt-16">
                    <button className="group relative inline-block">
                        <div className="absolute inset-0 bg-brand-gold blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-display font-bold px-12 py-5 text-lg tracking-widest transition-all duration-300">
                            VIEW ALL EVENTS
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;

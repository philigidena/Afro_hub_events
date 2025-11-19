import React from 'react';

const Statistics = () => {
    const stats = [
        { number: '500+', label: 'EVENTS HOSTED', icon: '🎭' },
        { number: '50K+', label: 'ATTENDEES', icon: '👥' },
        { number: '25+', label: 'COUNTRIES REPRESENTED', icon: '🌍' },
        { number: '100%', label: 'CLIENT SATISFACTION', icon: '⭐' },
    ];

    return (
        <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-black py-20 overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-32 h-32 border border-brand-gold rotate-45"
                        style={{
                            left: `${(i % 5) * 25}%`,
                            top: `${Math.floor(i / 5) * 33}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="w-20 h-1 bg-brand-gold mx-auto mb-6" />
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
                        OUR <span className="text-brand-gold">IMPACT</span>
                    </h2>
                    <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
                        Transforming cultural experiences across continents
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-brand-dark to-black border border-brand-gold/30 p-8 text-center hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/20"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <h3 className="font-display text-5xl md:text-6xl font-bold text-brand-gold mb-2 group-hover:text-brand-gold-light transition-colors">
                                {stat.number}
                            </h3>

                            {/* Label */}
                            <p className="font-body text-sm tracking-widest text-gray-400 uppercase">
                                {stat.label}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;

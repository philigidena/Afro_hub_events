import React from 'react';

const About = () => {
    return (
        <section id="about" className="relative bg-gradient-to-br from-brand-dark via-black to-brand-dark py-24 overflow-hidden">
            {/* Artistic African Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="african-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="3" fill="currentColor" className="text-brand-gold" />
                            <path d="M 20 20 L 60 20 L 40 60 Z" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" />
                            <rect x="10" y="50" width="20" height="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-gold" transform="rotate(45 20 60)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#african-pattern)" />
                </svg>
            </div>

            {/* Animated Floating Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-10 w-64 h-64 border-2 border-brand-gold/20 rotate-45 animate-float" />
                <div className="absolute bottom-1/4 right-10 w-48 h-48 border-2 border-brand-gold/20 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-brand-gold/10 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="animate-fadeIn">
                        {/* Artistic Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative">
                                <div className="w-20 h-1 bg-brand-gold" />
                                <div className="w-20 h-1 bg-brand-gold/50 mt-1" />
                            </div>
                            <h2 className="font-display text-brand-gold text-5xl md:text-7xl font-bold tracking-tight">
                                WHO WE ARE
                            </h2>
                            <div className="hidden md:flex flex-1 items-center gap-2">
                                <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/50 to-transparent" />
                                <div className="w-2 h-2 bg-brand-gold rotate-45" />
                            </div>
                        </div>

                        {/* Content with Artistic Typography */}
                        <div className="relative">
                            {/* Large decorative quote mark */}
                            <div className="absolute -top-8 -left-4 text-9xl text-brand-gold/10 font-serif leading-none">"</div>

                            <p className="font-body text-2xl md:text-3xl leading-relaxed text-white mb-8 relative z-10">
                                Afro Hub Events is a <span className="relative inline-block">
                                    <span className="text-brand-gold font-bold">premier event-agency</span>
                                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-brand-gold/20 -z-10" />
                                </span> that celebrates African heritage and promotes cultural diplomacy.
                            </p>

                            <p className="font-body text-lg md:text-xl leading-relaxed text-gray-300 mb-12">
                                We specialize in hosting events that connect people, foster relationships, and highlight the rich diversity of African culture. From diplomatic galas to cultural festivals, we bring authentic experiences that leave lasting impressions.
                            </p>
                        </div>

                        {/* Enhanced Feature Points with 3D Effect */}
                        <div className="grid md:grid-cols-3 gap-6 mt-16">
                            {[
                                { icon: '🎯', title: 'AUTHENTIC', desc: 'Genuine cultural experiences', color: 'from-amber-500/20 to-brand-gold/20' },
                                { icon: '🤝', title: 'CONNECTED', desc: 'Building lasting relationships', color: 'from-brand-gold/20 to-yellow-600/20' },
                                { icon: '✨', title: 'EXCELLENCE', desc: 'Unmatched quality & service', color: 'from-yellow-600/20 to-brand-gold/20' }
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="group relative text-center p-8 border-2 border-brand-gold/30 hover:border-brand-gold transition-all duration-500 hover:bg-brand-gold/5 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-gold/20"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                >
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Decorative corners */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 group-hover:animate-pulse">
                                            {feature.icon}
                                        </div>
                                        <div className="w-12 h-1 bg-brand-gold mx-auto mb-4 group-hover:w-full transition-all duration-500" />
                                        <h3 className="font-display text-2xl font-bold text-brand-gold mb-3 tracking-wider">
                                            {feature.title}
                                        </h3>
                                        <p className="font-body text-sm text-gray-300 group-hover:text-white transition-colors">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                        <div className="absolute top-2 right-2 w-6 h-6 border border-brand-gold rotate-45" />
                                        <div className="absolute bottom-2 left-2 w-6 h-6 border border-brand-gold rotate-45" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Artistic Element - Mission Statement */}
                        <div className="mt-16 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-brand-gold/10 to-brand-gold/5 blur-xl" />
                            <div className="relative border-l-4 border-brand-gold pl-8 py-6">
                                <p className="font-display text-xl md:text-2xl text-white italic leading-relaxed">
                                    "Every event is a canvas where culture, community, and celebration unite to create unforgettable masterpieces."
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-12 h-px bg-brand-gold" />
                                    <span className="font-body text-sm text-brand-gold tracking-widest uppercase">Our Mission</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

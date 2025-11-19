import React from 'react';

const About = () => {
    return (
        <section className="relative bg-gradient-to-br from-brand-dark via-black to-brand-dark py-20 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-10 w-64 h-64 border-2 border-brand-gold rotate-45" />
                <div className="absolute bottom-1/4 right-10 w-48 h-48 border-2 border-brand-gold rotate-12" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-fadeIn">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-20 h-1 bg-brand-gold" />
                            <h2 className="font-display text-brand-gold text-5xl md:text-6xl font-bold">
                                WHO WE ARE
                            </h2>
                        </div>

                        <p className="font-body text-xl md:text-2xl leading-relaxed text-gray-300 mb-8">
                            Afro Hub Events is a <span className="text-brand-gold font-bold">premier event-agency</span> that celebrates African heritage and promotes cultural diplomacy.
                        </p>

                        <p className="font-body text-lg md:text-xl leading-relaxed text-gray-400 mb-8">
                            We specialize in hosting events that connect people, foster relationships, and highlight the rich diversity of African culture. From diplomatic galas to cultural festivals, we bring authentic experiences that leave lasting impressions.
                        </p>

                        {/* Feature Points */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {[
                                { icon: '🎯', title: 'AUTHENTIC', desc: 'Genuine cultural experiences' },
                                { icon: '🤝', title: 'CONNECTED', desc: 'Building lasting relationships' },
                                { icon: '✨', title: 'EXCELLENCE', desc: 'Unmatched quality & service' }
                            ].map((feature, i) => (
                                <div key={i} className="group text-center p-6 border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 hover:bg-brand-gold/5">
                                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                    <h3 className="font-display text-xl font-bold text-brand-gold mb-2">{feature.title}</h3>
                                    <p className="font-body text-sm text-gray-400">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ambassador Sarah Johnson',
            role: 'Cultural Diplomat',
            text: 'Afro Hub Events exceeded our expectations. Their attention to cultural authenticity and professionalism made our diplomatic reception a resounding success.',
            rating: 5,
        },
        {
            name: 'Dr. Michael Okonkwo',
            role: 'Event Organizer',
            text: 'Working with Afro Hub Events transformed our vision into reality. Their deep understanding of African heritage shines through every detail.',
            rating: 5,
        },
        {
            name: 'Lisa Mbatha',
            role: 'Community Leader',
            text: 'An exceptional team that truly celebrates our culture. The events they create bring our community together in the most beautiful way.',
            rating: 5,
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-black via-brand-dark to-brand-dark py-20 overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="testimonial-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="2" fill="currentColor" className="text-brand-gold" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="w-20 h-1 bg-brand-gold mx-auto mb-6" />
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
                        CLIENT <span className="text-brand-gold">TESTIMONIALS</span>
                    </h2>
                    <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
                        Hear what our clients say about their experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-brand-dark to-black p-8 border border-brand-gold/20 hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Quote Icon */}
                            <div className="text-6xl text-brand-gold/20 mb-4 font-serif leading-none">"</div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-brand-gold text-xl">★</span>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="font-body text-gray-300 leading-relaxed mb-6 italic">
                                {testimonial.text}
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-0.5 bg-brand-gold mb-4 group-hover:w-full transition-all duration-500" />

                            {/* Author */}
                            <div>
                                <h4 className="font-display text-xl font-bold text-white mb-1">
                                    {testimonial.name}
                                </h4>
                                <p className="font-body text-sm text-brand-gold tracking-wider uppercase">
                                    {testimonial.role}
                                </p>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-gold/50" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-gold/50" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

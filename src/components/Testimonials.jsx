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
        <section id="testimonials" className="relative bg-gradient-to-br from-black via-brand-dark to-brand-dark py-24 overflow-hidden">
            {/* Adinkra-inspired Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Adinkra Sankofa symbol pattern */}
                        <pattern id="adinkra-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            {/* Heart-like shape (simplified Sankofa) */}
                            <path d="M 50 30 Q 40 20, 30 30 Q 20 40, 30 50 L 50 70 L 70 50 Q 80 40, 70 30 Q 60 20, 50 30 Z"
                                stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-gold" />
                            {/* Spiral element */}
                            <path d="M 50 50 Q 55 45, 55 40 Q 55 35, 50 35 Q 45 35, 45 40 Q 45 42, 47 42"
                                stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-gold" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#adinkra-pattern)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Artistic Header */}
                <div className="text-center mb-20 animate-fadeIn">
                    {/* Decorative top element inspired by African textiles */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-brand-gold" />
                            <div className="w-3 h-3 bg-brand-gold/60" />
                            <div className="w-3 h-3 bg-brand-gold/30" />
                        </div>
                        <div className="w-20 h-px bg-brand-gold" />
                        <div className="w-4 h-4 bg-brand-gold transform rotate-45" />
                        <div className="w-20 h-px bg-brand-gold" />
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-brand-gold/30" />
                            <div className="w-3 h-3 bg-brand-gold/60" />
                            <div className="w-3 h-3 bg-brand-gold" />
                        </div>
                    </div>

                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
                        CLIENT <span className="relative inline-block">
                            <span className="text-brand-gold">TESTIMONIALS</span>
                            {/* Kente-inspired underline */}
                            <div className="absolute -bottom-3 left-0 right-0 h-2 flex gap-1">
                                <div className="flex-1 bg-brand-gold" />
                                <div className="flex-1 bg-brand-gold/60" />
                                <div className="flex-1 bg-brand-gold/30" />
                            </div>
                        </span>
                    </h2>

                    <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mt-8">
                        Hear what our clients say about their experiences
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Outer glow */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-brand-gold/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Main Card */}
                            <div className="relative bg-gradient-to-br from-brand-dark to-black p-8 border-2 border-brand-gold/30 hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-gold/30">
                                {/* African textile-inspired pattern overlay */}
                                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id={`kente-${index}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                                                <rect x="0" y="0" width="4" height="12" fill="currentColor" className="text-brand-gold" />
                                                <rect x="8" y="0" width="4" height="12" fill="currentColor" className="text-brand-gold" opacity="0.5" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill={`url(#kente-${index})`} />
                                    </svg>
                                </div>

                                {/* Decorative Quote Mark - Adinkra Style */}
                                <div className="relative mb-6">
                                    <svg className="w-16 h-16 text-brand-gold/20" viewBox="0 0 64 64" fill="currentColor">
                                        <path d="M 10 40 Q 10 25, 20 20 L 20 30 Q 15 32, 15 40 Q 15 48, 20 50 L 10 50 Z M 35 40 Q 35 25, 45 20 L 45 30 Q 40 32, 40 40 Q 40 48, 45 50 L 35 50 Z" />
                                    </svg>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-brand-gold transform group-hover:scale-110 transition-transform"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="font-body text-gray-300 leading-relaxed mb-8 italic relative">
                                    <span className="text-brand-gold/40 text-4xl absolute -left-2 -top-4">"</span>
                                    {testimonial.text}
                                    <span className="text-brand-gold/40 text-4xl">"</span>
                                </p>

                                {/* Kente-inspired Divider */}
                                <div className="flex gap-1 mb-6 group-hover:gap-0 transition-all duration-500">
                                    <div className="h-1 flex-1 bg-brand-gold" />
                                    <div className="h-1 flex-1 bg-brand-gold/70" />
                                    <div className="h-1 flex-1 bg-brand-gold/40" />
                                </div>

                                {/* Author Info */}
                                <div className="relative">
                                    {/* Small decorative element */}
                                    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-brand-gold via-brand-gold/50 to-transparent" />

                                    <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                                        {testimonial.name}
                                    </h4>
                                    <p className="font-body text-sm text-brand-gold/80 tracking-wider uppercase">
                                        {testimonial.role}
                                    </p>
                                </div>

                                {/* Decorative Corners - African-inspired */}
                                <div className="absolute top-0 left-0 w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute top-0 left-0 w-12 h-1 bg-brand-gold" />
                                    <div className="absolute top-0 left-0 w-1 h-12 bg-brand-gold" />
                                    <div className="absolute top-2 left-2 w-2 h-2 bg-brand-gold" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 right-0 w-12 h-1 bg-brand-gold" />
                                    <div className="absolute bottom-0 right-0 w-1 h-12 bg-brand-gold" />
                                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-brand-gold" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-16 flex items-center justify-center gap-3">
                    <div className="flex flex-col gap-1">
                        <div className="w-16 h-px bg-brand-gold" />
                        <div className="w-12 h-px bg-brand-gold/60" />
                    </div>
                    <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="16" cy="16" r="12" />
                        <path d="M 16 8 L 16 24 M 8 16 L 24 16" />
                    </svg>
                    <div className="flex flex-col gap-1">
                        <div className="w-16 h-px bg-brand-gold" />
                        <div className="w-12 h-px bg-brand-gold/60" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

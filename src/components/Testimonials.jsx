import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Amara Okafor",
            role: "Cultural Director",
            text: "Afro Hub Events transformed our annual gala into a mesmerizing journey through African heritage. The attention to detail was impeccable.",
            rating: 5
        },
        {
            id: 2,
            name: "Kwame Mensah",
            role: "Tech Entrepreneur",
            text: "The perfect blend of modern professionalism and authentic cultural representation. Highly recommended for any premium event.",
            rating: 5
        },
        {
            id: 3,
            name: "Zainab Abdi",
            role: "Fashion Designer",
            text: "Their ability to weave storytelling into the event design is unmatched. It wasn't just an event; it was an experience.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="relative py-24 bg-brand-dark overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        CLIENT <span className="text-brand-gold">STORIES</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-0.5 w-12 bg-brand-gold"></div>
                        <div className="w-3 h-3 rotate-45 border-2 border-brand-gold"></div>
                        <div className="h-0.5 w-12 bg-brand-gold"></div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-brand-gold/50 transition-all duration-300"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                <div className="absolute top-0 right-0 w-2 h-full bg-brand-gold/20 group-hover:bg-brand-gold transition-colors duration-300"></div>
                                <div className="absolute top-0 right-0 h-2 w-full bg-brand-gold/20 group-hover:bg-brand-gold transition-colors duration-300"></div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="mb-6 relative">
                                <span className="absolute -top-4 -left-2 text-6xl text-brand-gold/10 font-serif">"</span>
                                <p className="text-gray-300 italic relative z-10 leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <div>
                                    <h4 className="font-display font-bold text-white text-lg group-hover:text-brand-gold transition-colors duration-300">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-brand-gold/80 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

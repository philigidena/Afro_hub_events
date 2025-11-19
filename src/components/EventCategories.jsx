import React from 'react';

const categories = [
    { title: 'DIPLOMATIC NIGHTS', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop', description: 'Elite networking events' },
    { title: 'AZMARI SOUND FEST', image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop', description: 'Traditional music celebrations' },
    { title: 'AFRICAN ART FAIR', image: 'https://images.unsplash.com/photo-1569839083409-2312215c2a47?q=80&w=1000&auto=format&fit=crop', description: 'Contemporary art exhibitions' },
    { title: 'CULTURAL GALA', image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop', description: 'Grand cultural showcases' },
    { title: 'A TO Z OF AFRICA', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop', description: 'Educational experiences' },
    { title: 'AFRO-FUSION PARTY', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop', description: 'Modern cultural fusion' },
];

const EventCategories = () => {
    return (
        <section className="bg-gradient-to-b from-brand-dark to-black py-20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-24 h-24 border border-brand-gold"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="w-20 h-1 bg-brand-gold mx-auto mb-6" />
                    <h2 className="font-display text-brand-gold text-5xl md:text-6xl font-bold mb-4">
                        EVENT CATEGORIES
                    </h2>
                    <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
                        Diverse cultural experiences tailored to celebrate African heritage
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative h-80 overflow-hidden cursor-pointer border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/30"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-brand-dark group-hover:via-brand-dark/80 transition-all duration-500" />

                            {/* Decorative Border Animation */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-gold" />
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-gold" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="font-display text-white text-3xl md:text-4xl font-bold uppercase leading-tight mb-3 transform group-hover:scale-110 transition-transform duration-500">
                                    {category.title}
                                </h3>

                                {/* Description - appears on hover */}
                                <p className="font-body text-brand-gold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {category.description}
                                </p>

                                {/* Decorative line */}
                                <div className="w-0 group-hover:w-20 h-1 bg-brand-gold mt-4 transition-all duration-500" />
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCategories;

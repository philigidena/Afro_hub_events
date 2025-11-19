import React from 'react';

const FeaturedEvents = () => {
    const events = [
        {
            title: 'DIPLOMATIC NIGHTS',
            date: 'March 15, 2025',
            location: 'Washington DC',
            image: '/group-of-black-adults-celebrating-kwanzaa-by-playi-2025-10-01-19-55-01-utc.jpg',
            category: 'Networking'
        },
        {
            title: 'AZMARI SOUND FEST',
            date: 'April 20, 2025',
            location: 'New York City',
            image: '/they-always-have-fun-together-2025-04-06-05-19-37-utc.jpg',
            category: 'Music'
        },
        {
            title: 'CULTURAL GALA',
            date: 'May 10, 2025',
            location: 'Los Angeles',
            image: '/traditional-african-barista-preparing-coffee-as-in-2025-01-09-05-37-38-utc.jpg',
            category: 'Culture'
        },
    ];

    return (
        <section className="bg-brand-dark py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="w-20 h-1 bg-brand-gold mx-auto mb-6" />
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
                        FEATURED <span className="text-brand-gold">EVENTS</span>
                    </h2>
                    <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
                        Join us for unforgettable experiences celebrating African culture
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-black border border-brand-gold/20 hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-gold/30"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${event.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark font-display font-bold px-4 py-2 text-sm tracking-wider">
                                    {event.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 bg-gradient-to-br from-brand-dark to-black">
                                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                                    {event.title}
                                </h3>

                                <div className="space-y-2 mb-4 text-gray-400 font-body">
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-gold">📅</span>
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-gold">📍</span>
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <button className="w-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-display font-bold py-3 text-sm tracking-widest transition-all duration-300 group-hover:tracking-[0.3em]">
                                    LEARN MORE →
                                </button>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;

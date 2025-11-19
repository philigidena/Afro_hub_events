import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <section className="relative bg-brand-dark py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/cheerful-black-couple-in-african-clothing-taking-s-2025-03-18-16-27-05-utc.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black/90 to-brand-dark" />

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 border-4 border-brand-gold rounded-full animate-float" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 border-4 border-brand-gold rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-1 bg-brand-gold mx-auto mb-6 animate-fadeIn" />

                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 animate-slideInLeft">
                        STAY <span className="text-brand-gold">CONNECTED</span>
                    </h2>

                    <p className="font-body text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fadeIn">
                        Subscribe to our newsletter for exclusive updates on upcoming events, cultural insights, and special offers.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-slideInRight">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="flex-1 px-6 py-5 bg-white/10 border-2 border-brand-gold/30 text-white placeholder-gray-500 font-body focus:outline-none focus:border-brand-gold transition-all duration-300"
                        />
                        <button
                            type="submit"
                            className="group bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-display font-bold px-10 py-5 text-lg tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-gold/50"
                        >
                            SUBSCRIBE
                            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </button>
                    </form>

                    <p className="font-body text-sm text-gray-500 mt-6">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

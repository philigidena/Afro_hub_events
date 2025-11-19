import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Statistics from './components/Statistics';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategories from './components/EventCategories';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body bg-brand-dark text-white min-h-screen">
      <Hero />
      <About />
      <Statistics />
      <FeaturedEvents />
      <EventCategories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

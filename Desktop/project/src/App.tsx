import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Explore from './components/Explore';
import JoinUsLive from './components/JoinUsLive';
import Gallery from './components/Gallery';
import HandsOfJesus from './components/HandsOfJesus';
import VerseOfTheDay from './components/VerseOfTheDay';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'explore', 'live', 'gallery', 'hands', 'verse'];
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <Header currentSection={currentSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="explore">
          <Explore />
        </section>
        
        <section id="live">
          <JoinUsLive />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="hands">
          <HandsOfJesus />
        </section>
        
        <section id="verse">
          <VerseOfTheDay />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
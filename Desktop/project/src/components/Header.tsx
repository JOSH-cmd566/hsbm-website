import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'live', label: 'Join Live' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'hands', label: 'Hands of Jesus' },
    { id: 'verse', label: 'Daily Verse' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center p-2 border border-blue-400/30">
                <img 
                  src="/public/VERSE LOGO.png" 
                  alt="HSBM Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse border border-blue-300/50"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HSBM</h1>
              <p className="text-xs text-blue-300">Tenali</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  currentSection === item.id
                    ? 'text-blue-300 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20'
                    : 'text-white hover:text-blue-300 hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      currentSection === item.id
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
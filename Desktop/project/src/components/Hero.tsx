import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

const Hero: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/5 via-transparent to-transparent"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo reveal animation */}
            <motion.div
              className="mb-8 flex justify-center lg:justify-start"
              initial={{ scale: 0, opacity: 0 }}
              animate={showLogo ? { scale: 1, opacity: 1 } : {}}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                duration: 1 
              }}
            >
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl p-2 border border-blue-400/20">
                  <img 
                    src="/public/VERSE LOGO.png" 
                    alt="HSBM Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-5 h-5 bg-blue-400/60 backdrop-blur-sm rounded-full border border-blue-300/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Title animation */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Head Stone Bride Ministries
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-blue-300 mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Tenali
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <motion.button
                className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Ministry
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Us Live
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Pastor Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="relative">
              {/* Main photo container with glassmorphism */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[22rem] lg:h-[26rem] xl:w-96 xl:h-[28rem]">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-3xl blur-2xl transform rotate-3"></div>
                
                {/* Photo frame with glassmorphism */}
                <div className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-3xl p-3 shadow-2xl border border-white/10">
                  <img
                    src="/public/WhatsApp Image 2025-06-08 at 00.11.22.jpeg"
                    alt="Pastor Yacob"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-3 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                </div>

                {/* Pastor title overlay with glassmorphism */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <h3 className="text-white font-bold text-lg mb-1">Pastor Yacob</h3>
                  <p className="text-blue-300 text-sm">Senior Pastor & Spiritual Leader</p>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 backdrop-blur-sm rounded-full border border-blue-300/30"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400/20 backdrop-blur-sm rounded-full border border-indigo-300/30"
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0] 
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/50 backdrop-blur-sm rounded-full flex justify-center bg-white/5">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
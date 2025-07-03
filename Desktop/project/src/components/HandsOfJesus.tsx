import React from 'react';
import { motion } from 'framer-motion';
import { Play, Share2 } from 'lucide-react';

const HandsOfJesus: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Hands of Jesus Christ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power and love of Jesus through this inspiring message. 
            Let His hands guide you, heal you, and transform your life.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Video Container */}
          <div className="aspect-video bg-slate-900 relative group">
            <iframe
              src="https://www.youtube.com/embed/iv9CqRujblg?si=u-v4owjipEaLxTcT"
              title="Hands of Jesus Christ"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
            {/* Overlay for better visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Video Info */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Hands of Jesus Christ</h3>
                <p className="text-gray-400">A powerful message about God's healing touch</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 bg-red-600/80 backdrop-blur-sm text-white rounded-xl hover:bg-red-700/80 transition-colors border border-red-400/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://youtu.be/iv9CqRujblg?si=u-v4owjipEaLxTcT', '_blank')}
                >
                  <Play className="w-4 h-4" />
                  <span>Watch on YouTube</span>
                </motion.button>
                
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 backdrop-blur-sm text-gray-300 rounded-xl hover:bg-slate-600/50 transition-colors border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Hands of Jesus Christ - HSBM',
                        url: 'https://youtu.be/iv9CqRujblg?si=u-v4owjipEaLxTcT'
                      });
                    }
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </motion.button>
              </div>
            </div>

            {/* Scripture Foundation */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h5 className="font-semibold text-white mb-3">Scripture Foundation</h5>
                <p className="text-gray-300 text-sm italic">
                  "He took them in his arms, placed his hands on them and blessed them." - Mark 10:16
                </p>
              </div>
              
              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h5 className="font-semibold text-white mb-3">Prayer Focus</h5>
                <p className="text-gray-300 text-sm">
                  Allow Jesus to place His healing hands upon your heart, mind, and circumstances today.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Content */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
            <Play className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">More Sermons</h4>
            <p className="text-gray-300 text-sm mb-4">Explore our complete collection of messages</p>
            <button className="text-blue-400 hover:text-blue-300 font-medium">
              View All →
            </button>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
            <Share2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">Share the Love</h4>
            <p className="text-gray-300 text-sm mb-4">Share this message with others</p>
            <button className="text-green-400 hover:text-green-300 font-medium">
              Share Now →
            </button>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
            <Play className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">Live Services</h4>
            <p className="text-gray-300 text-sm mb-4">Join our live worship services</p>
            <button className="text-purple-400 hover:text-purple-300 font-medium">
              Join Live →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HandsOfJesus;
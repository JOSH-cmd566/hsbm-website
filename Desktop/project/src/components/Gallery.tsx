import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Users, 
  Heart, 
  Star,
  X,
  ZoomIn
} from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'worship', label: 'Worship', icon: Heart },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'events', label: 'Events', icon: Star }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529965/IMG_8117_dj3vfl.jpg',
      category: 'worship',
      alt: 'Church worship service'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529962/IMG_8231_tg8bkr.jpg',
      category: 'community',
      alt: 'Church community gathering'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529960/IMG_8288_alp7jv.jpg',
      category: 'events',
      alt: 'Church event'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529959/IMG_8170_thmc18.jpg',
      category: 'worship',
      alt: 'Worship service moment'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529960/IMG_8129_jhnzm7.jpg',
      category: 'community',
      alt: 'Community fellowship'
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529950/wev_yoqmae.jpg',
      category: 'events',
      alt: 'Special church event'
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529950/uitkg_k9zjtf.jpg',
      category: 'worship',
      alt: 'Worship and praise'
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529949/IMG_8233_llneck.jpg',
      category: 'community',
      alt: 'Church community'
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529949/sry_col1uc.jpg',
      category: 'events',
      alt: 'Church gathering'
    },
    {
      id: 10,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529949/ytvyjg_uggia3.jpg',
      category: 'worship',
      alt: 'Prayer and worship'
    },
    {
      id: 11,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529948/tyjjn_bt4mub.jpg',
      category: 'community',
      alt: 'Fellowship time'
    },
    {
      id: 12,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529948/fyyj_ec0kxk.jpg',
      category: 'events',
      alt: 'Church event celebration'
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529948/kjh_izdsyx.jpg',
      category: 'worship',
      alt: 'Worship service'
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529947/Screenshot_2025_0703_123540_jptuae.jpg',
      category: 'community',
      alt: 'Church community moment'
    },
    {
      id: 15,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529944/fcg_co1tis.jpg',
      category: 'events',
      alt: 'Special event'
    },
    {
      id: 16,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529944/jgy_phu5ym.jpg',
      category: 'worship',
      alt: 'Worship and prayer'
    },
    {
      id: 17,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529947/dytxjr_zb2ked.jpg',
      category: 'community',
      alt: 'Community gathering'
    },
    {
      id: 18,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529944/cgj_jla3nd.jpg',
      category: 'events',
      alt: 'Church event'
    },
    {
      id: 19,
      src: 'https://res.cloudinary.com/dydsjp9n3/image/upload/v1751529944/er_nbge1a.jpg',
      category: 'worship',
      alt: 'Worship service moment'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Glimpses of Grace
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Moments from our services, events, and celebrations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 backdrop-blur-sm border ${
                  activeCategory === category.id
                    ? 'bg-blue-500/20 text-white shadow-lg border-blue-400/30'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/30 border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="w-full h-full object-contain rounded-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
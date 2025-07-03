import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Youtube,
  Music,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      label: 'Pastor Yacob',
      value: '9492710050',
      type: 'phone'
    },
    {
      icon: Phone,
      label: 'HSBM Technical Team',
      value: '9347537540',
      type: 'phone'
    },
    {
      icon: Phone,
      label: 'Team HSBM',
      value: '9398799326',
      type: 'phone'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/hsbm_official',
      color: 'hover:text-pink-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/Hsbm_Official?t=l24YYCQqmI8TiYmdd3t8TQ&s=08',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: 'https://www.youtube.com/@headstonebrideministriestenali',
      color: 'hover:text-red-400'
    },
    {
      icon: Music,
      label: 'Spotify',
      url: 'https://open.spotify.com/show/7DPErnk',
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#explore' },
    { name: 'Services', href: '#explore' },
    { name: 'Live Stream', href: '#live' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Church Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-full flex items-center justify-center p-2 border border-blue-400/30">
                <img 
                  src="/public/VERSE LOGO.png" 
                  alt="HSBM Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Head Stone Bride Ministries</h3>
                <p className="text-blue-400 font-medium">Tenali</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              A sovereign non-denominational Christian Church where hope is restored, 
              faith is renewed, and lives are changed. Join us in our mission to spread 
              God's love and see the Breath of God revive the nations.
            </p>

            <div className="flex items-center space-x-2 text-blue-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Location:</span>
            </div>
            <p className="text-gray-300 ml-7">
              Sultanabad, Sundaraiah Nagar<br />
              Tenali, Andhra Pradesh, India
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-blue-400">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 group">
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      <a 
                        href={`tel:${contact.value}`}
                        className="text-white hover:text-blue-400 transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold mb-6 text-center text-blue-400">Connect With Us</h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg border border-white/10`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Service Times */}
        <motion.div
          className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-400/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold mb-4 text-center text-blue-400">Join Us for Worship</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h5 className="font-semibold text-white mb-1">Sunday</h5>
              <p className="text-green-400 font-medium">9:30 AM</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h5 className="font-semibold text-white mb-1">Wednesday</h5>
              <p className="text-blue-400 font-medium">7:00 PM</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h5 className="font-semibold text-white mb-1">Saturday</h5>
              <p className="text-purple-400 font-medium">7:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            © {currentYear} Head Stone Bride Ministries Tenali. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for God's Kingdom
          </p>
          
          {/* Telugu Blessing */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl inline-block border border-blue-400/20">
            <p className="text-blue-300 font-medium mb-1">దేవుడు మిమ్మల్ని ఆశీర్వదించు గాక</p>
            <p className="text-sm text-gray-400 italic">May God bless you</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
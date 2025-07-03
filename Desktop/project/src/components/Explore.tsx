import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Calendar, 
  MapPin, 
  Heart, 
  BookOpen, 
  MessageSquare, 
  Target, 
  Music,
  Clock,
  Phone,
  DollarSign,
  Star,
  ArrowRight,
  X,
  Send,
  CheckCircle,
  Users,
  ExternalLink
} from 'lucide-react';

const Explore: React.FC = () => {
  const [selectedSubpage, setSelectedSubpage] = useState<string | null>(null);
  const [testimonyForm, setTestimonyForm] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleTestimonySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'testimony-form');
      formData.append('name', testimonyForm.name);
      formData.append('message', testimonyForm.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTestimonyForm({ name: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting testimony:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTestimonyForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const subpages = [
    {
      id: 'pastor',
      title: 'Pastor',
      icon: User,
      color: 'from-blue-500/20 to-indigo-600/20',
      borderColor: 'border-blue-400/30',
      content: {
        title: 'Pastor Yacob',
        description: 'Our beloved Pastor Yacob is a dedicated servant of God, leading our congregation with wisdom, compassion, and unwavering faith. His ministry has touched countless lives and continues to inspire spiritual growth in our community. As a man of God, he is known for his humble nature, powerful preaching, and faithful adherence to biblical teachings.',
        image: '/public/WhatsApp Image 2025-06-08 at 00.11.22.jpeg'
      }
    },
    {
      id: 'services',
      title: 'Services',
      icon: Calendar,
      color: 'from-green-500/20 to-emerald-600/20',
      borderColor: 'border-green-400/30',
      content: {
        title: 'Worship Services',
        services: [
          { day: 'Sunday Worship', time: '9:30 AM', special: false },
          { day: 'Wednesday Worship', time: '7:00 PM', special: false },
          { day: 'Saturday Worship', time: '7:00 PM', special: false },
          { day: '2nd Sunday', time: 'Communion Service', special: true },
          { day: '3rd Sunday', time: 'Youth Service', special: true }
        ]
      }
    },
    {
      id: 'reach',
      title: 'Reach Us',
      icon: MapPin,
      color: 'from-purple-500/20 to-violet-600/20',
      borderColor: 'border-purple-400/30',
      content: {
        title: 'Visit Our Church',
        address: 'Sultanabad, Sundaraiah Nagar, Tenali, Andhra Pradesh',
        mapUrl: 'https://maps.app.goo.gl/qhUXj54RxgTKog7G8'
      }
    },
    {
      id: 'donate',
      title: 'Donate Us',
      icon: Heart,
      color: 'from-red-500/20 to-rose-600/20',
      borderColor: 'border-red-400/30',
      content: {
        title: 'Support Our Ministry',
        upi: '9492710050',
        description: 'Your generous donations help us continue our mission of spreading God\'s love and supporting our community.'
      }
    },
    {
      id: 'prophet',
      title: 'Our Prophet',
      icon: Star,
      color: 'from-yellow-500/20 to-amber-600/20',
      borderColor: 'border-yellow-400/30',
      content: {
        title: 'Our Spiritual Guide',
        description: 'Learn more about our spiritual foundation and the teachings that guide our ministry.',
        slides: ['Slide 1 content', 'Slide 2 content', 'Slide 3 content']
      }
    },
    {
      id: 'testimonies',
      title: 'Testimonies',
      icon: MessageSquare,
      color: 'from-indigo-500/20 to-blue-600/20',
      borderColor: 'border-indigo-400/30',
      content: {
        title: 'Testimonies of Faith',
        testimonies: [
          { name: 'Dr. Kiran Kumar', message: 'Head Stone Bride Church is led by Pastor Yacob garu. He is a Man of God, very good preacher, humble and follows the teachings of William Marrion Branham.' },
          { name: 'Vijay Tenali', message: 'Wonderful place... I had ever seen.' },
          { name: 'Siva Prasad', message: 'My house, my God is there.' },
          { name: 'Kishore Kodali', message: 'You want to know truth? Come here.' },
          { name: 'Mayuri Mandati', message: 'Wonderful service.' },
          { name: 'Srirama Jyothi', message: 'Good.' }
        ]
      }
    },
    {
      id: 'reading',
      title: 'Daily Bible Reading Goals',
      icon: BookOpen,
      color: 'from-teal-500/20 to-cyan-600/20',
      borderColor: 'border-teal-400/30',
      content: {
        title: 'Daily Bible Reading Goals',
        description: 'Follow a consistent Bible reading schedule curated by Headstone Bride Ministries.',
        subtitle: 'Read and reflect daily — grow in spiritual maturity along with our church family.',
        whatsappLink: 'https://chat.whatsapp.com/BrwtWoBt9SA9YlnAZdSTGU?mode=ac_t'
      }
    },
    {
      id: 'albums',
      title: 'Our Albums',
      icon: Music,
      color: 'from-pink-500/20 to-rose-600/20',
      borderColor: 'border-pink-400/30',
      content: {
        title: 'Our Albums',
        description: 'Enjoy official worship albums and spiritual songs from Headstone Bride Ministries Tenali.',
        subtitle: 'All songs are Spirit-led and shared with love to bless your walk with Christ.',
        playlistUrl: 'https://youtube.com/playlist?list=PLBcCMOWZi9LWAumJxLgufvNVseI0dfa17&si=_RRBSaboz-g_L6S-'
      }
    }
  ];

  const renderSubpageContent = (subpage: any) => {
    switch (subpage.id) {
      case 'pastor':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src={subpage.content.image} 
                alt="Pastor Yacob" 
                className="w-64 h-80 object-cover rounded-2xl shadow-lg border border-white/10"
              />
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-4">About Pastor Yacob</h4>
                <p className="text-gray-300 leading-relaxed">{subpage.content.description}</p>
                <div className="mt-4 p-4 bg-blue-600/20 backdrop-blur-sm rounded-xl border border-blue-400/30">
                  <p className="text-blue-400 font-semibold">Ministry Focus:</p>
                  <p className="text-gray-300 text-sm">Preaching the Gospel, Biblical teachings, and following the message of William Marrion Branham</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="space-y-4">
            {subpage.content.services.map((service: any, index: number) => (
              <div 
                key={index}
                className={`p-4 rounded-xl backdrop-blur-sm border ${service.special ? 'bg-red-600/20 border-red-400/30' : 'bg-slate-700/30 border-white/10'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{service.day}</span>
                  <span className="text-blue-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.time}
                  </span>
                </div>
                {service.special && (
                  <span className="text-red-400 text-sm">Special Service</span>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'reach':
        return (
          <div className="space-y-6">
            <div className="bg-slate-700/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                Church Address
              </h4>
              <p className="text-gray-300">{subpage.content.address}</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d144.9537!3d-37.8172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="300"
              className="rounded-xl border border-white/10"
              loading="lazy"
            ></iframe>
          </div>
        );
      
      case 'donate':
        return (
          <div className="space-y-6 text-center">
            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-xl border border-red-400/30">
              <DollarSign className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">UPI Payment</h4>
              <p className="text-2xl font-bold text-blue-400">{subpage.content.upi}</p>
            </div>
            <p className="text-gray-300">{subpage.content.description}</p>
          </div>
        );
      
      case 'prophet':
        return (
          <div className="space-y-8">
            {/* PDF Embed */}
            <div className="text-center">
              <iframe 
                src="https://drive.google.com/file/d/1KFESvzWl5RQ4FtHF97FucYIwZfCkjli3/preview"
                width="100%" 
                height="600" 
                className="rounded-2xl border-none shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}
                title="Our Prophet Document"
              />
              <div className="mt-4 p-4 bg-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
                <p className="text-gray-300 italic">
                  This document shares revelations and teachings that guide our faith at Headstone Bride Ministries.
                </p>
              </div>
            </div>
            
            {/* Additional Content */}
            <div className="text-center">
              <p className="text-gray-300">{subpage.content.description}</p>
            </div>
          </div>
        );
      
      case 'testimonies':
        return (
          <div className="space-y-8">
            {/* Existing Testimonies */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-indigo-400" />
                What Our Members Say
              </h4>
              {subpage.content.testimonies.map((testimony: any, index: number) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-gray-300 italic mb-3 text-lg leading-relaxed">"{testimony.message}"</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-3 border border-indigo-400/30">
                      <User className="w-4 h-4 text-indigo-400" />
                    </div>
                    <p className="text-blue-400 font-semibold">{testimony.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimony Submission Form */}
            <div className="bg-gradient-to-r from-indigo-600/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-400/30">
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Share Your Testimony</h4>
                <p className="text-gray-300">Tell us how God has worked in your life and inspire others with your faith journey.</p>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mb-6 p-4 bg-green-600/20 backdrop-blur-sm rounded-xl border border-green-400/30 text-center"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 font-semibold">Thank you for sharing your testimony!</p>
                    <p className="text-gray-300 text-sm">Your testimony will be reviewed and may be featured on our website.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hidden form for Netlify */}
              <form name="testimony-form" method="POST" data-netlify="true" style={{ display: 'none' }}>
                <input type="text" name="name" />
                <textarea name="message"></textarea>
              </form>

              {/* Visible form */}
              <form onSubmit={handleTestimonySubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={testimonyForm.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full p-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none transition-all duration-200 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Your Testimony *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={testimonyForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Share how God has worked in your life, answered your prayers, or transformed your circumstances. Your story could be the encouragement someone else needs to hear today..."
                    className="w-full p-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none transition-all duration-200 placeholder-gray-400 resize-none"
                  />
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !testimonyForm.name.trim() || !testimonyForm.message.trim()}
                    className="inline-flex items-center px-8 py-4 bg-indigo-600/80 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-indigo-700/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-indigo-400/30 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Testimony
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    By submitting your testimony, you give permission for it to be shared on our website and social media to encourage others.
                  </p>
                </div>
              </form>
            </div>
          </div>
        );
      
      case 'reading':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <BookOpen className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4">📖 Follow a Consistent Bible Reading Schedule</h4>
              <p className="text-gray-300 text-lg mb-6">{subpage.content.description}</p>
              <p className="text-blue-300 text-lg mb-8">🗓️ {subpage.content.subtitle}</p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30">
              <div className="text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h5 className="text-xl font-bold text-white mb-4">Join Our WhatsApp Community</h5>
                <p className="text-gray-300 mb-6">
                  💬 <strong>To read the Bible as per the schedule of HSBM</strong>, join the HSBM WhatsApp group and follow the daily quick updates:
                </p>
                
                <motion.a
                  href={subpage.content.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-green-700/80 transition-all duration-300 border border-green-400/30 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  🔗 Join our WhatsApp Group
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
              <h5 className="text-lg font-semibold text-white mb-3">🙏 Stay Connected, Stay Blessed!</h5>
              <p className="text-gray-300">
                Join our community of believers as we grow together in God's word through daily reading and reflection.
              </p>
            </div>
          </div>
        );
      
      case 'albums':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <Music className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4">🎵 Official Worship Albums</h4>
              <p className="text-gray-300 text-lg mb-4">{subpage.content.description}</p>
              <p className="text-blue-300 text-lg mb-8">🎼 {subpage.content.subtitle}</p>
            </div>

            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm p-8 rounded-2xl border border-red-400/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-red-400/30">
                  <Music className="w-8 h-8 text-red-400" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">HSBM Official Album Playlist</h5>
                <p className="text-gray-300 mb-6">
                  📺 Click below to watch our <strong>official HSBM YouTube album playlist</strong>:
                </p>
                
                <motion.a
                  href={subpage.content.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-red-600/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-red-700/80 transition-all duration-300 border border-red-400/30 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Music className="w-5 h-5 mr-2" />
                  🔗 HSBM Official Album Playlist on YouTube
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-center">
                <div className="bg-yellow-600/20 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/30 mb-4">
                  <p className="text-yellow-400 font-semibold mb-2">❌ Important Note</p>
                  <p className="text-gray-300 text-sm">
                    Please note that only official HSBM content is featured here. Any unofficial or unrelated videos have been removed to ensure you receive authentic, Spirit-led worship music.
                  </p>
                </div>
                <p className="text-blue-300 font-semibold">🕊️ God bless you as you worship with us.</p>
              </div>
            </div>

            {/* YouTube Playlist Embed */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h5 className="text-lg font-bold text-white mb-4 text-center">🎵 Featured Playlist</h5>
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/videoseries?list=PLBcCMOWZi9LWAumJxLgufvNVseI0dfa17" 
                  frameBorder="0" 
                  allowFullScreen
                  className="rounded-xl border border-white/10"
                  title="HSBM Official Album Playlist"
                />
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center">
            <p className="text-gray-300">{subpage.content.description}</p>
            {subpage.content.currentGoal && (
              <div className="mt-4 p-4 bg-teal-600/20 backdrop-blur-sm rounded-xl border border-teal-400/30">
                <p className="text-teal-400 font-semibold">{subpage.content.currentGoal}</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Explore
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Head Stone Bride Ministries is a sovereign non-denominational Christian Church located in Tenali, Andhra Pradesh, India. 
            We are a Bible-based Church where hope is restored, faith is renewed and lives are changed. A Christian Channel with a passion to see the Breath of God revive the nations!
          </p>
        </motion.div>

        {/* Subpages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subpages.map((subpage, index) => {
            const IconComponent = subpage.icon;
            return (
              <motion.div
                key={subpage.id}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${subpage.color} backdrop-blur-sm p-6 cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 border ${subpage.borderColor}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedSubpage(subpage.id)}
              >
                <div className="relative z-10">
                  <IconComponent className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{subpage.title}</h3>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded Video Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://drive.google.com/file/d/1xTjl7TExkzDSzPQYgGySgQAeTLh02HvN/preview"
            width="800" 
            height="450"
            allow="autoplay"
            className="rounded-2xl shadow-lg max-w-full mx-auto border border-white/10"
            style={{ boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
            title="Pastor Yacob Message"
          />
          <p className="mt-3 text-lg text-gray-300">God Bless You All – Pastor Yacob</p>
        </motion.div>
      </div>

      {/* Subpage Modal */}
      <AnimatePresence>
        {selectedSubpage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSubpage(null)}
          >
            <motion.div
              className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">
                  {subpages.find(s => s.id === selectedSubpage)?.content.title}
                </h3>
                <button
                  onClick={() => setSelectedSubpage(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {renderSubpageContent(subpages.find(s => s.id === selectedSubpage))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Explore;
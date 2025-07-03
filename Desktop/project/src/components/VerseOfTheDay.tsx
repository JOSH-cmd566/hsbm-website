import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, RefreshCw, Heart, Share2, Calendar, Globe } from 'lucide-react';

const VerseOfTheDay: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [englishVerse, setEnglishVerse] = useState('Loading English verse...');
  const [teluguVerse, setTeluguVerse] = useState('Loading Telugu verse...');
  const [isLoading, setIsLoading] = useState(true);

  // Telugu verses that rotate daily
  const teluguVerses = [
    "యోహాను 3:16 - దేవుడు లోకమును అట్టివిధముగా ప్రేమించెను...",
    "కీర్తనలు 23:1 - యెహోవా నా గొడ్డు, నాకేమియు కొరతలేదు.",
    "రోమీయులకు 8:28 - దేవుని ప్రేమించువారికిని...",
    "ఫిలిప్పీయులకు 4:13 - నన్ను బలపరచువానియందు నేను సమస్తమును చేయగలను.",
    "కీర్తనలు 119:105 - నీ వాక్యము నా పాదమునకు దీపము...",
    "మత్తయి 11:28 - కష్టపడువారును భారము మోయువారును అందరును నా దగ్గరకు రండి.",
    "యెషయా 40:31 - యెహోవా కొరకు కనిపెట్టువారు కొత్త బలము పొందుదురు.",
    "కీర్తనలు 46:1 - దేవుడు మాకు ఆశ్రయమును బలమును, కష్టకాలమున సహాయకుడును.",
    "యోహాను 14:6 - యేసు అతనితో నేనే మార్గమును సత్యమును జీవమును.",
    "కీర్తనలు 27:1 - యెహోవా నా వెలుగును నా రక్షణయు, నేను ఎవరికి భయపడుదును?"
  ];

  // Fetch English verse from OurManna API
  const fetchEnglishVerse = async () => {
    try {
      const response = await fetch("https://beta.ourmanna.com/api/v1/get/?format=text&order=daily");
      const data = await response.text();
      setEnglishVerse(data.trim());
    } catch (error) {
      console.error('Error fetching English verse:', error);
      setEnglishVerse("Unable to load English verse. Please try again later.");
    }
  };

  // Get Telugu verse based on current date
  const getTeluguVerse = () => {
    const todayIndex = new Date().getDate() % teluguVerses.length;
    setTeluguVerse(teluguVerses[todayIndex]);
  };

  // Load verses on component mount
  useEffect(() => {
    const loadVerses = async () => {
      setIsLoading(true);
      await fetchEnglishVerse();
      getTeluguVerse();
      setIsLoading(false);
    };

    loadVerses();
  }, []);

  const refreshVerses = async () => {
    setIsRefreshing(true);
    await fetchEnglishVerse();
    getTeluguVerse();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareVerse = () => {
    const shareText = `Daily Verse - HSBM Tenali\n\n📖 English: ${englishVerse}\n\n📖 తెలుగు: ${teluguVerse}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Daily Verse - HSBM',
        text: shareText
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Verse copied to clipboard!');
      });
    }
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Daily Verse
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Today's Bible verse in both English and Telugu. Updated daily automatically to strengthen your faith and guide your path.
          </p>
        </motion.div>

        {/* Date Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-white/10">
            <Calendar className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-white font-medium">{currentDate}</span>
          </div>
        </motion.div>

        {/* Daily Verse Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Daily Verse</h3>
                  <p className="text-blue-400 font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    English & Telugu
                  </p>
                </div>
              </div>
              
              <motion.button
                onClick={refreshVerses}
                disabled={isLoading}
                className="p-3 bg-slate-700/50 backdrop-blur-sm hover:bg-slate-600/50 rounded-full transition-colors border border-white/10 disabled:opacity-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1 }}
              >
                <RefreshCw className="w-5 h-5 text-gray-300" />
              </motion.button>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Loading today's verses...</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* English Verse */}
                <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 border border-blue-400/30">
                      <span className="text-blue-400 font-bold text-sm">EN</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">📖 English</h4>
                  </div>
                  <blockquote 
                    id="dailyVerseEN"
                    className="text-lg md:text-xl text-gray-200 leading-relaxed italic font-medium"
                  >
                    {englishVerse}
                  </blockquote>
                </div>

                {/* Telugu Verse */}
                <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 border border-orange-400/30">
                      <span className="text-orange-400 font-bold text-sm">తె</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">📖 తెలుగు</h4>
                  </div>
                  <blockquote 
                    id="dailyVerseTE"
                    className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium"
                    style={{ fontFamily: 'Noto Sans Telugu, sans-serif' }}
                  >
                    {teluguVerse}
                  </blockquote>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 bg-red-600/20 backdrop-blur-sm hover:bg-red-600/30 text-red-400 rounded-full transition-colors border border-red-400/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4" />
                <span>Save</span>
              </motion.button>
              
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600/20 backdrop-blur-sm hover:bg-blue-600/30 text-blue-400 rounded-full transition-colors border border-blue-400/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareVerse}
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bible Reading Plan */}
        <motion.div
          className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Bible Reading Plan</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow along with our church family as we read through the Bible together. 
              This month we're focusing on the Gospel of John.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-blue-700/80 transition-all duration-300 border border-blue-400/30">
                View Reading Plan
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full font-semibold transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </motion.div>

        {/* Language Support Note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/30 backdrop-blur-sm rounded-full border border-white/10">
            <Globe className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-gray-400 text-sm">
              Verses automatically updated daily in both languages
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerseOfTheDay;
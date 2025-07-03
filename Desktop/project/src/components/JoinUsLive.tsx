import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Volume2, 
  Youtube, 
  Music, 
  Calendar,
  Users,
  Radio,
  Headphones,
  Clock
} from 'lucide-react';

const JoinUsLive: React.FC = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [liveStatus, setLiveStatus] = useState('🔵 Offline');
  const [countdown, setCountdown] = useState('Loading...');
  const [isYouTubeLive, setIsYouTubeLive] = useState(false);

  // Live Status Update Function
  const updateLiveStatus = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    const isSundayLive = day === 0 && hour === 9 && minute >= 30 && minute <= 59;
    const isWednesdayLive = day === 3 && hour === 19;
    const isSaturdayLive = day === 6 && hour === 19;

    if (isSundayLive || isWednesdayLive || isSaturdayLive) {
      setLiveStatus('🔴 Live Now');
    } else {
      setLiveStatus('🔵 Offline');
    }
  };

  // Check YouTube Live Status
  const checkYouTubeLive = async () => {
    try {
      const channelId = "UCBoEtV5cvyXT5hvie2GDZ5g"; // HSBM Channel ID
      const response = await fetch(`https://www.youtube.com/channel/${channelId}/live`);
      const text = await response.text();
      const isLive = text.includes("isLiveNow") || text.includes("live_stream");
      setIsYouTubeLive(isLive);
    } catch (error) {
      console.log('YouTube live check failed:', error);
      setIsYouTubeLive(false);
    }
  };

  // Get Next Service Time
  const getNextServiceTime = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    let nextService = new Date(now);

    if (day === 0 && (hour < 9 || (hour === 9 && minute < 30))) {
      // Sunday before 9:30 AM
      nextService.setHours(9, 30, 0, 0);
    } else if (day < 3 || (day === 3 && hour < 19)) {
      // Before Wednesday 7 PM
      const addDays = (3 - day + 7) % 7 || (day === 3 ? 0 : 3 - day);
      nextService.setDate(now.getDate() + addDays);
      nextService.setHours(19, 0, 0, 0);
    } else if (day < 6 || (day === 6 && hour < 19)) {
      // Before Saturday 7 PM
      const addDays = (6 - day + 7) % 7 || (day === 6 ? 0 : 6 - day);
      nextService.setDate(now.getDate() + addDays);
      nextService.setHours(19, 0, 0, 0);
    } else {
      // After Saturday service, next is Sunday
      const daysUntilSunday = (7 - day) % 7 || 7;
      nextService.setDate(now.getDate() + daysUntilSunday);
      nextService.setHours(9, 30, 0, 0);
    }
    return nextService;
  };

  // Update Countdown
  const updateCountdown = () => {
    const now = new Date();
    const next = getNextServiceTime();
    const diff = next - now;
    
    if (diff <= 0) {
      setCountdown('Service Starting Soon!');
      return;
    }
    
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    setCountdown(`${h}h ${m}m ${s}s`);
  };

  useEffect(() => {
    // Initial updates
    updateLiveStatus();
    updateCountdown();
    checkYouTubeLive();

    // Set up intervals
    const statusInterval = setInterval(updateLiveStatus, 60000); // Update every minute
    const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
    const youtubeInterval = setInterval(checkYouTubeLive, 30000); // Check YouTube every 30 seconds

    return () => {
      clearInterval(statusInterval);
      clearInterval(countdownInterval);
      clearInterval(youtubeInterval);
    };
  }, []);

  const tabs = [
    { id: 'live', label: 'Live Stream', icon: Play },
    { id: 'audio', label: 'Live Audio', icon: Volume2 },
    { id: 'youtube', label: 'YouTube', icon: Youtube },
    { id: 'spotify', label: 'Spotify', icon: Music }
  ];

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
            Join Us Live
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience worship and fellowship from anywhere in the world. Join our live services, listen to past sermons, 
            and stay connected with our community.
          </p>
        </motion.div>

        {/* Live Status & Countdown */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 inline-block">
            <div className="text-xl font-medium text-white mb-2">
              <span className={liveStatus.includes('Live Now') ? 'text-red-400' : 'text-blue-400'}>
                {liveStatus}
              </span>
            </div>
            <div className="text-lg text-yellow-400 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              Next Service Starts In: <span className="ml-2 font-mono">{countdown}</span>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 backdrop-blur-sm border ${
                  activeTab === tab.id
                    ? 'bg-blue-600/20 text-white shadow-lg border-blue-400/30'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/30 border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
        >
          {activeTab === 'live' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <Radio className="w-8 h-8 mr-3 text-red-500" />
                  📺 Watch Our Live Video Service
                </h3>
                <p className="text-gray-300 mb-6">Join our live worship services and special events</p>
              </div>
              
              {/* YouTube Live Stream */}
              {isYouTubeLive ? (
                <div className="aspect-video bg-slate-900 rounded-2xl border border-white/10 overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/live_stream?channel=UCBoEtV5cvyXT5hvie2GDZ5g&autoplay=1"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="rounded-2xl"
                    title="HSBM Live Stream"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold mb-2">🙏 Currently, we are not live streaming.</p>
                    <p className="text-gray-400">Please check back during service times.</p>
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
                  <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Sunday Service</h4>
                  <p className="text-green-400">9:30 AM</p>
                </div>
                <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
                  <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Wednesday Service</h4>
                  <p className="text-blue-400">7:00 PM</p>
                </div>
                <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
                  <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Saturday Service</h4>
                  <p className="text-purple-400">7:00 PM</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'audio' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <Headphones className="w-8 h-8 mr-3 text-blue-500" />
                  🎧 Listen to Live Audio Broadcast
                </h3>
                <p className="text-gray-300 mb-6">Experience our services with crystal clear audio streaming</p>
              </div>
              
              {/* Caster.fm Audio Player */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-center mb-4">
                  <Radio className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-white mb-2">Live Audio Stream</h4>
                  <p className="text-gray-300 text-sm">Listen to our live services and special broadcasts</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                  <iframe 
                    src="https://sapircast.caster.fm" 
                    width="100%" 
                    height="180" 
                    frameBorder="0" 
                    scrolling="no"
                    className="w-full"
                    title="HSBM Live Audio Stream"
                  />
                </div>
              </div>
              
              {/* Audio Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
                  <Volume2 className="w-10 h-10 text-blue-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">High Quality Audio</h4>
                  <p className="text-gray-300 text-sm">Crystal clear sound quality for the best listening experience during our services.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm p-6 rounded-xl border border-green-400/30">
                  <Headphones className="w-10 h-10 text-green-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Mobile Friendly</h4>
                  <p className="text-gray-300 text-sm">Perfect for listening on mobile devices and low bandwidth connections.</p>
                </div>
              </div>

              {/* Service Times for Audio */}
              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-bold text-white mb-4 text-center">Live Audio Schedule</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Sunday</p>
                    <p className="text-green-400">9:30 AM</p>
                  </div>
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Wednesday</p>
                    <p className="text-blue-400">7:00 PM</p>
                  </div>
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Saturday</p>
                    <p className="text-purple-400">7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'youtube' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <Youtube className="w-8 h-8 mr-3 text-red-500" />
                  YouTube Channel
                </h3>
                <p className="text-gray-300 mb-6">Watch past sermons and worship sessions</p>
              </div>
              
              {/* YouTube Playlist */}
              <div className="space-y-6">
                <h4 className="text-center text-white text-xl font-semibold">📺 Watch Our Sermons</h4>
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/videoseries?list=PLyRrZMUfaMfquXK9-SW0Zdn2DPgkhFlnF" 
                    frameBorder="0" 
                    allowFullScreen
                    className="rounded-2xl border border-white/10"
                    title="HSBM Sermon Playlist"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://www.youtube.com/@headstonebrideministriestenali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-red-600/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-red-700/80 transition-colors border border-red-400/30"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Visit Our Channel
                </a>
              </div>
            </div>
          )}

          {activeTab === 'spotify' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <Music className="w-8 h-8 mr-3 text-green-500" />
                  Spotify Sermons
                </h3>
                <p className="text-gray-300 mb-6">Listen to our past sermons on Spotify</p>
              </div>
              
              {/* Updated Spotify Embed */}
              <div className="space-y-6">
                <h4 className="text-center text-white text-xl font-semibold">🎧 Listen to Sermons on Spotify</h4>
                <iframe 
                  style={{ borderRadius: '12px', marginTop: '12px' }} 
                  src="https://open.spotify.com/embed/show/7DPErnkLLjFaoTkaZtNJTh?utm_source=generator" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="HSBM Spotify Podcast"
                />
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-8 rounded-2xl text-center border border-green-400/30">
                <Music className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-4">HSBM Sermon Podcast</h4>
                <p className="text-gray-300 mb-6">Access our complete collection of sermons and teachings</p>
                <a
                  href="https://open.spotify.com/show/7DPErnkLLjFaoTkaZtNJTh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-green-700/80 transition-colors border border-green-400/30"
                >
                  <Music className="w-5 h-5 mr-2" />
                  Listen on Spotify
                </a>
              </div>
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">1000+</h4>
            <p className="text-gray-300">Community Members</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
            <Play className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
            <p className="text-gray-300">Sermon Recordings</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
            <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">3</h4>
            <p className="text-gray-300">Services Per Week</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUsLive;
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, LineChart, Line } from 'recharts';
import { TrendingUp, Users, ArrowUpRight, Target, Percent, Sparkles } from 'lucide-react';

const instagramData = [
  { month: 'Jan', followers: 4200, reach: 12000 },
  { month: 'Feb', followers: 5800, reach: 19000 },
  { month: 'Mar', followers: 8900, reach: 35000 },
  { month: 'Apr', followers: 12400, reach: 58000 },
  { month: 'May', followers: 18100, reach: 94000 },
  { month: 'Jun', followers: 24500, reach: 142000 },
  { month: 'Jul', followers: 31200, reach: 184000 }
];

const facebookData = [
  { month: 'Jan', value: 85 },
  { month: 'Feb', value: 120 },
  { month: 'Mar', value: 180 },
  { month: 'Apr', value: 240 },
  { month: 'May', value: 310 },
  { month: 'Jun', value: 387 },
  { month: 'Jul', value: 450 }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'instagram' | 'facebook' | 'meta-ads'>('instagram');
  const [liveEngagement, setLiveEngagement] = useState(8.42);

  // Simulate subtle real-time fluctuations to feel like a live system
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveEngagement((prev) => {
        const delta = (Math.random() - 0.5) * 0.04;
        return parseFloat(Math.min(9.5, Math.max(7.2, prev + delta)).toFixed(2));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="hero-dashboard"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="w-full bg-[#161616] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Glow Effect */}
      <div className="absolute -top-1/4 -right-1/4 w-72 h-72 bg-[#2563EB]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#2563EB]/20 transition-all duration-500" />
      <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-gray-400 tracking-wider uppercase">Live Analytics Feed</span>
          </div>
          <h3 className="text-base font-semibold text-white mt-1">Campaign Command Hub</h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-[#222222] p-1 rounded-lg border border-white/5">
          {(['instagram', 'facebook', 'meta-ads'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#2563EB] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'instagram' ? 'Instagram' : tab === 'facebook' ? 'Facebook' : 'Meta Ads'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Analytics Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-[#1f1f1f] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <Users className="w-4 h-4 text-[#2563EB]" />
            <span className="text-[10px] font-mono font-medium text-emerald-400 flex items-center">
              +48% <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-medium">Follower Base</p>
            <p className="text-sm font-bold text-white mt-0.5">31.2K</p>
          </div>
        </div>

        <div className="bg-[#1f1f1f] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-mono font-medium text-emerald-400 flex items-center">
              +320% <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-medium">Monthly Reach</p>
            <p className="text-sm font-bold text-white mt-0.5">184.0K</p>
          </div>
        </div>

        <div className="bg-[#1f1f1f] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <Percent className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-mono font-medium text-emerald-400 flex items-center">
              Active <Sparkles className="w-3 h-3" />
            </span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-medium">Live Eng. Rate</p>
            <p className="text-sm font-bold text-white mt-0.5">{liveEngagement}%</p>
          </div>
        </div>

        <div className="bg-[#1f1f1f] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <Target className="w-4 h-4 text-rose-400" />
            <span className="text-[10px] font-mono font-medium text-purple-400 flex items-center">
              Sustained
            </span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-medium">Meta Ads ROAS</p>
            <p className="text-sm font-bold text-white mt-0.5">5.2x Avg</p>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 'instagram' ? (
            <AreaChart data={instagramData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="instaReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f1f1f', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                labelStyle={{ color: '#9ca3af', fontSize: '12px', fontWeight: 'bold' }}
                itemStyle={{ color: '#fff', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="reach" name="Total Reach" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#instaReach)" />
            </AreaChart>
          ) : activeTab === 'facebook' ? (
            <BarChart data={facebookData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f1f1f', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                labelStyle={{ color: '#9ca3af', fontSize: '12px', fontWeight: 'bold' }}
                itemStyle={{ color: '#fff', fontSize: '12px' }}
              />
              <Bar dataKey="value" name="Views (K)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={instagramData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f1f1f', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                labelStyle={{ color: '#9ca3af', fontSize: '12px', fontWeight: 'bold' }}
                itemStyle={{ color: '#fff', fontSize: '12px' }}
              />
              <Line type="monotone" dataKey="followers" name="Ad Conversions" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7', strokeWidth: 1 }} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Dashboard Footer / Visual Accent */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Server: API Connected (v3.1)
        </span>
        <span className="text-[#2563EB] font-bold uppercase tracking-widest flex items-center gap-1">
          METRICS VERIFIED BY META PIXEL
        </span>
      </div>
    </motion.div>
  );
}

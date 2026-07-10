import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudies } from '../data';
import { CaseStudy } from '../types';
import { 
  ArrowRight, X, Sparkles, Target, Users, Calendar, 
  Layers, BarChart3, ChevronRight, CheckCircle2, AlertTriangle, 
  Lightbulb, ArrowUpRight, TrendingUp 
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, LineChart, Line } from 'recharts';

interface CaseStudiesProps {
  onContactClick: () => void;
}

export default function CaseStudies({ onContactClick }: CaseStudiesProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const handleOpenStudy = (study: CaseStudy) => {
    setSelectedStudy(study);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseStudy = () => {
    setSelectedStudy(null);
    document.body.style.overflow = 'unset';
  };

  const handleCTAClick = () => {
    handleCloseStudy();
    // Small delay to allow modal exit animation to complete before scrolling
    setTimeout(() => {
      onContactClick();
    }, 300);
  };

  return (
    <section id="case-studies" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Proof of Performance</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans"
          >
            Case Studies & Concept Funnels
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed"
          >
            A curated deep-dive into how I structure campaigns, script content, optimize paid Meta Ads, and scale real-world and conceptual businesses.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Image & Tag */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 bg-[#2563EB] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
                    {study.id === 'organic-social-growth' ? 'Organic Data' : 'Strategy Concept'}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 md:p-8">
                  <p className="text-xs font-mono text-gray-500 font-semibold tracking-wider uppercase mb-1">{study.industry}</p>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors duration-200">
                    {study.title}
                  </h3>
                  
                  <div className="mt-4 space-y-3.5">
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">The Challenge</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">The Strategy</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">{study.strategy}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 md:p-8 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold font-mono tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {study.resultsDetailed[0].label}: {study.resultsDetailed[0].value}
                </span>
                <button
                  onClick={() => handleOpenStudy(study)}
                  className="font-sans text-xs font-bold text-[#2563EB] group-hover:text-blue-400 flex items-center gap-1.5 cursor-pointer"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Lightbox Overlay */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            id="case-study-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-end overflow-y-auto"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-5xl bg-[#111111] min-h-screen border-l border-white/10 relative shadow-2xl p-6 md:p-12 overflow-y-auto"
            >
              {/* Floating Close Button */}
              <button
                id="close-study-modal"
                onClick={handleCloseStudy}
                className="sticky top-0 float-right z-50 p-2.5 bg-[#1a1a1a]/80 backdrop-blur border border-white/10 rounded-full text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Case Study Structure */}
              <div className="max-w-4xl mx-auto pt-4 pb-20">
                {/* Title */}
                <span className="text-xs font-mono font-bold text-[#2563EB] tracking-widest uppercase block mb-2">{selectedStudy.industry}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  {selectedStudy.title}
                </h1>

                {/* Hero banner */}
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-inner border border-white/5">
                  <img
                    src={selectedStudy.heroImage}
                    alt={selectedStudy.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-wrap gap-3">
                    {selectedStudy.resultsDetailed.map((res, i) => (
                      <div key={i} className="bg-[#161616]/95 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">{res.label}</p>
                        <p className="text-sm font-bold text-emerald-400 mt-0.5">{res.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/5">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#2563EB]" /> Business Overview
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{selectedStudy.overview}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500" /> The Challenge
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{selectedStudy.challenge}</p>
                  </div>
                </div>

                {/* Segment 2: Strategy, Goals */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/5">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-400" /> Goals & Objectives
                    </h3>
                    <ul className="space-y-3">
                      {selectedStudy.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="leading-normal">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" /> Audience Research
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{selectedStudy.audienceResearch}</p>
                  </div>
                </div>

                {/* Segment 3: Content Strategy & Posting Calendar */}
                <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 mb-12 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#2563EB]" /> Content Strategy
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans">{selectedStudy.contentStrategy}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-400" /> Posting Calendar Breakdown
                      </h3>
                      <ul className="space-y-2.5">
                        {selectedStudy.postingCalendar.map((day, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2 border-l-2 border-[#2563EB] pl-3.5 py-0.5">
                            <span className="font-sans leading-relaxed">{day}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Segment 4: Creative Examples Showcases */}
                <div className="mb-12 pb-12 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white mb-6 font-sans tracking-wide">
                    Creative Performance Examples
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedStudy.creativeExamples.map((item, i) => (
                      <div key={i} className="bg-[#161616] border border-white/5 rounded-xl overflow-hidden shadow-sm hover:border-white/10 transition-colors">
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={item.previewUrl}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-[9px] font-mono font-bold text-gray-300 px-2 py-0.5 rounded uppercase tracking-wider">
                            {item.type}
                          </span>
                        </div>
                        <div className="p-5">
                          <h4 className="text-sm font-bold text-white font-sans">{item.title}</h4>
                          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-sans">{item.desc}</p>
                          {item.metrics && (
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                              <span className="text-[10px] font-mono text-[#2563EB] uppercase tracking-wide">Performance Result</span>
                              <span className="text-[10px] font-mono font-semibold text-emerald-400">{item.metrics}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Segment 5: Meta Ads Strategy & KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/5">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#2563EB]" /> Meta Ads Strategy
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{selectedStudy.metaAdsStrategy}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-emerald-400" /> Active Campaign KPIs
                    </h3>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedStudy.kpis.map((kpi, i) => (
                        <li key={i} className="bg-[#161616] border border-white/5 px-4 py-3 rounded-lg text-sm text-gray-400 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Analytics Dashboard Segment with Recharts */}
                <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-base font-bold text-white font-sans flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#2563EB]" /> Campaign Growth Analytics
                    </h4>
                    <span className="text-[9px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                      Live Performance Data
                    </span>
                  </div>
                  
                  {/* Recharts Render */}
                  <div className="h-60 w-full mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      {selectedStudy.id === 'restaurant-growth-strategy' ? (
                        <BarChart data={selectedStudy.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <XAxis dataKey="name" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#111111', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                            itemStyle={{ fontSize: '12px' }}
                          />
                          <Bar dataKey="value" name={selectedStudy.chartLabel} fill="#2563EB" radius={[4, 4, 0, 0]} opacity={0.6} />
                          <Bar dataKey="secondaryValue" name={selectedStudy.secondaryChartLabel} fill="#10b981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      ) : selectedStudy.id === 'fashion-brand' ? (
                        <LineChart data={selectedStudy.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <XAxis dataKey="name" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#111111', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                            itemStyle={{ fontSize: '12px' }}
                          />
                          <Line type="monotone" dataKey="value" name={selectedStudy.chartLabel} stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981' }} />
                        </LineChart>
                      ) : (
                        <AreaChart data={selectedStudy.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="deepStudyReach" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#111111', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                            itemStyle={{ fontSize: '12px' }}
                          />
                          <Area type="monotone" dataKey="value" name={selectedStudy.chartLabel} stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#deepStudyReach)" />
                        </AreaChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Segment 6: Detailed Results cards */}
                <div className="mb-12">
                  <h3 className="text-lg font-bold text-white mb-4 font-sans tracking-wide">
                    Verifiable Campaign Results
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedStudy.resultsDetailed.map((res, i) => (
                      <div key={i} className="bg-[#161616] border border-white/5 p-5 rounded-xl">
                        <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">{res.label}</p>
                        <p className="text-xl font-bold text-emerald-400 mt-1 font-mono">{res.value}</p>
                        <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-sans">{res.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Segment 7: Lessons Learned & Future Optimization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-blue-950/20 border border-blue-900/40 rounded-2xl p-6 md:p-8">
                    <h3 className="text-lg font-bold text-blue-400 mb-3 font-sans tracking-wide flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[#2563EB]" /> Key Lessons Learned
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">{selectedStudy.lessonsLearned}</p>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 md:p-8">
                    <h3 className="text-lg font-bold text-emerald-400 mb-3 font-sans tracking-wide flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-400" /> Future Campaign Optimization
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">{selectedStudy.futureOptimization}</p>
                  </div>
                </div>

                {/* Bottom CTA Box */}
                <div className="bg-gradient-to-r from-[#2563EB] to-blue-700 rounded-3xl p-8 md:p-12 text-center shadow-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-normal">
                    Need similar high-impact results for your business?
                  </h2>
                  <p className="text-blue-100 mt-3 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    Let's discuss how we can map this exact customer acquisition model onto your brands and scale your sales pipeline.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <button
                      id="lightbox-cta-btn"
                      onClick={handleCTAClick}
                      className="px-6 py-3 bg-white hover:bg-gray-100 text-[#2563EB] font-sans text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      Let's Talk
                    </button>
                    <button
                      onClick={handleCloseStudy}
                      className="px-6 py-3 border border-white/30 hover:border-white/50 text-white font-sans text-sm font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Close Project
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

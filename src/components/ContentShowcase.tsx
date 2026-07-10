import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Heart, MessageCircle, Sparkles, Filter, Maximize2 } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  platform: 'Instagram' | 'Facebook' | 'Meta Ads';
  category: 'Instagram Grid' | 'Facebook Posts' | 'Carousel Posts' | 'Story Designs' | 'Reels Covers' | 'Ad Creatives';
  imageUrl: string;
  likes: string;
  comments: string;
  strategy: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'sg-1',
    title: 'The Minimalist Workspace Grid',
    platform: 'Instagram',
    category: 'Instagram Grid',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=600',
    likes: '1.2K',
    comments: '45',
    strategy: 'Utilizes deep contrast and neat product spacing to build visual authority for a premium productivity brand.'
  },
  {
    id: 'sg-2',
    title: 'B2B SMM Growth Playbook',
    platform: 'Facebook',
    category: 'Facebook Posts',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600&h=600',
    likes: '840',
    comments: '32',
    strategy: 'Infographic breakdown detailing organic CTR increases, optimized for high click-through shares on professional feeds.'
  },
  {
    id: 'sg-3',
    title: 'Sustainable Sizing Deck',
    platform: 'Instagram',
    category: 'Carousel Posts',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600&h=600',
    likes: '2.4K',
    comments: '110',
    strategy: 'Multi-card swipable sizing guide that addresses customer doubts and lowered cart-abandonment rate by 24%.'
  },
  {
    id: 'sg-4',
    title: 'VIP Lounge Launch Offer',
    platform: 'Meta Ads',
    category: 'Story Designs',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600&h=900',
    likes: '1.8K',
    comments: '56',
    strategy: 'Dynamic 9:16 story ad built with motion triggers and clear CTA swipe indicators for hyperlocal lead capture.'
  },
  {
    id: 'sg-5',
    title: 'Chef Culinary Secrets',
    platform: 'Instagram',
    category: 'Reels Covers',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600&h=900',
    likes: '4.5K',
    comments: '184',
    strategy: 'Hook-heavy, food-porn cover graphic designed to capture maximum algorithmic attention and stimulate hunger.'
  },
  {
    id: 'sg-6',
    title: 'Ultimate Home Appraisal Ad',
    platform: 'Meta Ads',
    category: 'Ad Creatives',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600&h=600',
    likes: '920',
    comments: '78',
    strategy: 'High-contrast real estate ad using architectural walk-through thumbnails and pre-qualification form links.'
  }
];

export default function ContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Instagram Grid', 'Facebook Posts', 'Carousel Posts', 'Story Designs', 'Reels Covers', 'Ad Creatives'];

  const filteredItems = selectedCategory === 'All'
    ? showcaseItems
    : showcaseItems.filter(item => item.category === selectedCategory);

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section id="content-showcase" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Social Library</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Content Showcase
            </h2>
            <p className="text-gray-400 mt-4 text-base leading-relaxed">
              Browse through authentic ad creatives, vertical story overlays, carousels, and high-performing grids crafted to capture visual retention.
            </p>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6 overflow-x-auto">
          <div className="flex items-center gap-1.5 text-gray-500 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null); // Reset lightbox scope
              }}
              className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#2563EB] text-white shadow'
                  : 'bg-[#161616] border border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer transition-all duration-300"
              >
                {/* Showcase Cover */}
                <div className="relative aspect-square overflow-hidden bg-gray-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Hover Shield */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
                  
                  {/* Floating Platform Tag */}
                  <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-[9px] font-mono tracking-widest font-bold px-2 py-0.5 rounded text-gray-300 backdrop-blur">
                    {item.platform}
                  </span>

                  {/* Floating Zoom Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-[#2563EB] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Hover Meta Cards (Engagement Mock) */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center z-10">
                    <div className="flex gap-3 text-xs text-white">
                      <span className="flex items-center gap-1 font-semibold">
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <MessageCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                        {item.comments}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/10 border border-white/20 text-white font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Foot Label */}
                <div className="p-5 border-t border-white/5">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#2563EB] transition-colors">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.strategy}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              id="close-lightbox"
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 bg-[#161616] border border-white/10 rounded-full text-gray-400 hover:text-white transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Right buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-[#161616] border border-white/10 rounded-full text-gray-400 hover:text-white cursor-pointer hover:bg-[#2563EB]"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-[#161616] border border-white/10 rounded-full text-gray-400 hover:text-white cursor-pointer hover:bg-[#2563EB]"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative"
            >
              {/* Image Left */}
              <div className="w-full md:w-[55%] aspect-square bg-black flex items-center justify-center border-r border-white/5 relative">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[500px]"
                />
              </div>

              {/* Information Right */}
              <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono bg-blue-950 text-blue-400 border border-blue-800 px-2 py-0.5 rounded tracking-widest uppercase font-bold">
                      {filteredItems[lightboxIndex].platform}
                    </span>
                    <span className="text-[10px] font-mono bg-white/5 text-gray-400 px-2 py-0.5 rounded uppercase font-semibold">
                      {filteredItems[lightboxIndex].category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  
                  <div className="mt-6">
                    <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1.5">Strategy & Concept</h5>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {filteredItems[lightboxIndex].strategy}
                    </p>
                  </div>
                </div>

                {/* Metrics Mock footer */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                        {filteredItems[lightboxIndex].likes} Likes
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold">
                        <MessageCircle className="w-4 h-4 text-blue-400 fill-blue-400" />
                        {filteredItems[lightboxIndex].comments} Comments
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-widest">VERIFIED CONVERSION</span>
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

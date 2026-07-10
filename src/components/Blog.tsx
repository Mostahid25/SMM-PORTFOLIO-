import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogArticles } from '../data';
import { BlogArticle } from '../types';
import { Sparkles, Calendar, Clock, ArrowRight, X, BookOpen, Send } from 'lucide-react';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const handleOpenArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="blog" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Marketing Insights</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            SMM & Meta Ads Blog
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            I write detailed guides breaking down actual campaign structures, organic algorithms, scripting playbooks, and funnel configurations.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#161616] border border-white/5 hover:border-[#2563EB]/40 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => handleOpenArticle(article)}
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-4">
                  <span className="text-[#2563EB] font-bold uppercase tracking-wider">{article.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-gray-400 mt-3 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#2563EB] transition-colors">
                <span className="flex items-center gap-1 font-mono text-[10px] text-gray-500"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                <span className="flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Complete Article Lightbox Drawer */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            id="blog-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseArticle}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-end overflow-y-auto"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-2xl bg-[#111111] min-h-screen border-l border-white/10 relative shadow-2xl p-6 md:p-12 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Close Button */}
              <button
                id="close-blog-modal"
                onClick={handleCloseArticle}
                className="sticky top-0 float-right z-50 p-2.5 bg-[#161616] border border-white/10 rounded-full text-gray-400 hover:text-white cursor-pointer"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-w-xl mx-auto pt-4 pb-20">
                {/* Meta header */}
                <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3">
                  <span className="text-[#2563EB] font-bold uppercase tracking-wider">{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
                  {selectedArticle.title}
                </h1>

                {/* Sub-summary banner */}
                <div className="bg-[#161616] border-l-4 border-[#2563EB] p-4 rounded-r-xl mb-8">
                  <p className="text-xs md:text-sm text-gray-300 font-sans italic leading-relaxed">
                    "{selectedArticle.summary}"
                  </p>
                </div>

                {/* Paragraphs body */}
                <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed font-sans">
                  {selectedArticle.content.map((p, i) => (
                    <p key={i} className="text-gray-300">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Bottom author signature */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center font-bold text-white text-sm shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                      GM
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">GM Mostahid</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">SMM & Meta Ads Specialist</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseArticle}
                    className="px-4 py-2 bg-[#161616] border border-white/10 hover:border-white/20 text-xs font-bold text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

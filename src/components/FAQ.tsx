import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqItems } from '../data';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#2563EB]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Clarifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            Everything you need to know about SMM systems, tracking configurations, scoping contracts, and scaling paid advertising.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#161616] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-white/[0.01] transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-white font-sans pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-1 bg-[#222222] border border-white/5 rounded-lg text-gray-400 shrink-0 ${
                      isOpen ? 'text-[#2563EB]' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Dropdown Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-xs md:text-sm text-gray-400 leading-relaxed font-sans border-t border-white/[0.02] pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

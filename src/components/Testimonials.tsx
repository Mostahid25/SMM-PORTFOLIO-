import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#111111] border-t border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Header Icon */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
          <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Social Proof Policy</span>
        </div>

        {/* Testimonial Fallback Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#161616] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          
          <MessageSquare className="w-10 h-10 text-[#2563EB]/40 mx-auto mb-6" />

          <p className="text-base md:text-xl text-gray-300 font-sans italic font-medium leading-relaxed">
            "Currently building my portfolio through real-world projects and strategic concept case studies."
          </p>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Integrity Guarantee</span>
            <span className="text-gray-600">•</span>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">100% Authentic Portfolio</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

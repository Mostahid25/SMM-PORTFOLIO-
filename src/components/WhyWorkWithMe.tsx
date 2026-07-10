import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { whyWorkWithMe } from '../data';
import { 
  LineChart, Sparkles, Search, Target, Gauge, 
  MessageSquare, ShieldCheck, HelpCircle 
} from 'lucide-react';

const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  LineChart,
  Sparkles,
  SearchCode: Search, // fallback to search
  Target,
  Gauge,
  ShieldAlert: MessageSquare // fallback to message circle for clean communication
};

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative subtle light beam */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Client Guarantees</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Why Work With Me?
            </h2>
            <p className="text-gray-400 mt-4 text-base leading-relaxed">
              I operate with the standards of a premium marketing agency. No vanity reports, no hand-waving—just strict data, creative pacing, and consistent ROI scaling.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || HelpCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-2xl"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 bg-[#222222] text-[#2563EB] border border-white/5 group-hover:bg-[#2563EB] group-hover:text-white rounded-xl flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white tracking-tight font-sans mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Aesthetic footer marker */}
                <div className="mt-8 flex justify-between items-center text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase">
                  <span>Standard Metric</span>
                  <span className="text-[#2563EB]">100% Commitment</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

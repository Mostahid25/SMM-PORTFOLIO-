import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { services } from '../data';
import { 
  TrendingUp, Target, Sparkles, Calendar, MessageSquare, 
  BarChart3, Users, Search, UserCheck, HelpCircle, ArrowUpRight 
} from 'lucide-react';

// Explicitly map string keys to Lucide icons to prevent dynamic import issues
const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  TrendingUp,
  Target,
  Sparkles,
  Calendar,
  MessageSquare,
  BarChart3,
  Users,
  Search,
  UserCheck,
  HelpCircle
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#111111] relative">
      {/* Background Gradient Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Expertise & Execution</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Conversion-Focused SMM Services
            </h2>
            <p className="text-gray-400 mt-4 text-base leading-relaxed">
              No generic packages or empty vanity metrics. Every service is custom-structured to align with your sales funnel, grow organic brand authority, and maximize Return on Ad Spend.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-sm font-mono text-[#2563EB] font-bold tracking-widest uppercase flex items-center gap-1">
              TAILORED STRATEGY FOR SCALE
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || HelpCircle;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 bg-[#222222] border border-white/5 group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white rounded-xl flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white tracking-tight font-sans mb-3 group-hover:text-[#2563EB] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Outcome Box */}
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-col gap-2">
                  <span className="text-[9px] font-bold font-mono tracking-widest uppercase text-gray-500">
                    EXPECTED BUSINESS OUTCOME
                  </span>
                  <div className="flex items-start gap-2 text-xs text-emerald-400 font-medium">
                    <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-normal text-gray-300 font-sans font-medium">{service.outcome}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

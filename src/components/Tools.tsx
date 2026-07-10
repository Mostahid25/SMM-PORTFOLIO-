import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { toolsList } from '../data';
import { 
  Layers, Palette, TrendingUp, Database, BookOpen, 
  Cpu, Video, Activity, PenTool, Sparkles, Image, FileSpreadsheet, BarChart
} from 'lucide-react';

const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  Layers,
  Palette,
  TrendingUp,
  Database,
  BookOpen,
  Cpu,
  Video,
  Activity,
  PenTool,
  Image,
  FileSpreadsheet,
  BarChart
};

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-[#111111] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Campaign Infrastructure
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            I utilize professional SMM, graphic design, copywriting, tracking, and analytics platforms to construct reliable customer acquisition engines.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {toolsList.map((tool, index) => {
            const IconComponent = iconMap[tool.iconName] || Layers;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl p-5 flex flex-col items-center text-center justify-center group transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className="absolute -inset-full bg-[#2563EB]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon Container */}
                <div className="w-10 h-10 bg-[#222222] group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white border border-white/5 rounded-xl flex items-center justify-center transition-colors duration-300 mb-4 shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Name */}
                <h4 className="text-xs font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h4>

                {/* Category label */}
                <p className="text-[9px] font-mono font-medium text-gray-500 uppercase tracking-wider mt-1.5 line-clamp-1">
                  {tool.category}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

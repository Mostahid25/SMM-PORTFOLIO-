import { useState } from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data';
import { Sparkles, Milestone, ArrowDown } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-[#111111] border-t border-b border-white/5 relative overflow-hidden">
      {/* Absolute Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <Milestone className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Methodology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            The Campaign Growth Engine
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            A highly structured, repeatable marketing sprint framework designed to transition your brand from basic social media visibility to scalable customer acquisition.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="relative">
          {/* Timeline connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-[45px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-[#2563EB]/10 via-[#2563EB]/40 to-[#2563EB]/10" />

          {/* Steps list */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                className="flex flex-col items-center lg:items-start text-center lg:text-left relative group cursor-pointer"
              >
                {/* Step indicator circle */}
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-extrabold transition-all duration-300 border ${
                    activeStep === index 
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' 
                      : 'bg-[#161616] text-gray-500 border-white/5 hover:border-white/20'
                  }`}
                >
                  {step.step}
                </div>

                {/* Vertical arrow connector for mobile / tablet */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden my-4 text-[#2563EB]/40 animate-bounce">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                )}

                {/* Content block */}
                <div className="mt-5 lg:mt-6">
                  <h3 className={`text-base font-bold tracking-tight font-sans transition-colors duration-200 ${
                    activeStep === index ? 'text-[#2563EB]' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2.5">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

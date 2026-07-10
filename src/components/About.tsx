import { motion } from 'motion/react';
import { Sparkles, Award, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

export default function About() {
  const skills = [
    'Social Media Marketing',
    'Meta Ads',
    'Content Strategy',
    'Analytics',
    'Community Management',
    'Marketing Research'
  ];

  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">The Specialist</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans"
            >
              Hi, I'm GM Mostahid.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed font-sans"
            >
              I specialize in helping businesses grow through strategic social media marketing and Meta Ads. My approach combines creative content with deep analytics to build sustainable audience growth and measurable, bottom-line business results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed font-sans"
            >
              Instead of chasing empty likes, I focus strictly on mapping social traction to actual pipeline revenue. Whether designing hyper-local geofenced funnels or scaling D2C e-commerce spend, I build structures that encourage action and convert clicks into contracts.
            </motion.p>

            {/* Core Professional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-[#161616] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Agency Quality</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-normal">High-standard asset building, scripts, and targeting funnels.</p>
                </div>
              </div>
              <div className="bg-[#161616] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">ROI Audits</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-normal">Granular monthly pixel optimization and scale reporting.</p>
                </div>
              </div>
            </div>

            {/* Skills chip array */}
            <div className="mt-10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-4">Core Core Capabilities</h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-[#161616] border border-white/5 hover:border-[#2563EB]/45 text-sm text-gray-300 rounded-xl transition-colors duration-200 font-sans font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait Container Right */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative max-w-sm w-full aspect-[3/4] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
            >
              {/* Image with fallback */}
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800"
                alt="GM Mostahid Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />

              {/* Ambient black gradient shade inside portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Floating Specialist Banner inside portrait */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#161616]/90 border border-white/10 backdrop-blur-md px-5 py-4 rounded-2xl flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#2563EB] uppercase">Active Status</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">SMM & Paid Meta Ads</h4>
                </div>
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Eye, TrendingUp, Zap, Calendar } from 'lucide-react';

interface MetricCardProps {
  target: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  icon: ReactNode;
}

function AnimatedCounter({ target, suffix, prefix = '', decimals = 0, label, sublabel, icon }: MetricCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentVal = start + (end - start) * easeProgress;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300 shadow-md hover:shadow-xl"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-[#222222] border border-white/5 rounded-xl text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Verified</span>
      </div>

      <div className="mt-2">
        <h3 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white flex items-baseline">
          <span className="text-gray-100 font-mono">
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
          </span>
        </h3>
        <p className="text-sm font-semibold text-gray-200 mt-2 font-sans tracking-wide">{label}</p>
        <p className="text-xs text-gray-500 mt-1 font-sans leading-relaxed">{sublabel}</p>
      </div>
    </motion.div>
  );
}

export default function TrustMetrics() {
  return (
    <section id="trust-metrics" className="py-16 bg-[#111111] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedCounter
            target={1.2}
            suffix="M+"
            label="Instagram Views"
            sublabel="Organic video impression velocity"
            decimals={1}
            icon={<Eye className="w-5 h-5" />}
          />
          <AnimatedCounter
            target={387}
            suffix="K+"
            label="Facebook Views"
            sublabel="Direct social feed visual impressions"
            decimals={0}
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <AnimatedCounter
            target={99.5}
            suffix="%"
            label="Non-Follower Reach"
            sublabel="Algorithmic exploration viral multiplier"
            decimals={1}
            icon={<Zap className="w-5 h-5" />}
          />
          <AnimatedCounter
            target={28}
            suffix=" Days"
            label="Campaign Duration"
            sublabel="Average period to demonstrate scale"
            decimals={0}
            icon={<Calendar className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
}

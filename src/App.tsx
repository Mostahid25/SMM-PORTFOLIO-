import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TrustMetrics from './components/TrustMetrics';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Process from './components/Process';
import ContentShowcase from './components/ContentShowcase';
import Tools from './components/Tools';
import ManagedPlatforms from './components/ManagedPlatforms';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const appRef = useRef<HTMLDivElement>(null);

  // 1. Loading Entrance Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // 2. Cursor Glow Track (Desktop Only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!appRef.current) return;
      const rect = appRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Scroll Intersection Observer (Highlights navbar active item)
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'case-studies', 'services', 'about', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' } // triggers when item is dominant in mid-screen
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [isLoading]);

  // 4. Smooth Navigation Scroll Handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={appRef}
      className="bg-[#111111] text-white min-h-screen relative selection:bg-[#2563EB] selection:text-white overflow-hidden"
      style={{
        // Define dynamic values for the tailwind/CSS cursor spotlight
        ['--x' as any]: `${mousePosition.x}px`,
        ['--y' as any]: `${mousePosition.y}px`,
      }}
    >
      {/* Preloading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="app-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center text-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-gradient-to-tr from-[#2563EB] to-blue-400 rounded-2xl flex items-center justify-center font-extrabold text-white text-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] mb-4">
                GM
              </div>
              <h1 className="text-lg font-bold font-sans tracking-tight text-white mb-1">GM Mostahid</h1>
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">SMM & Paid Meta Ads</p>
              <div className="mt-8 w-16 h-[2px] bg-white/5 relative overflow-hidden rounded">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-8 bg-[#2563EB]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative">
          {/* Static Ambient Spotlights (Desktop cursor spot and default radial gradients) */}
          <div className="absolute inset-0 cursor-glow hidden lg:block" />
          
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[120vh] right-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[100px] pointer-events-none" />

          {/* Sticky Navigation Bar */}
          <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

          {/* ------------------ HERO SECTION ------------------ */}
          <section id="home" className="min-h-screen pt-32 pb-16 md:py-40 flex items-center relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Hero Left Content */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Premium Growth Partner</span>
                  </motion.div>

                  {/* Core Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1] md:leading-[1.15]"
                  >
                    Helping Businesses Grow Through{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#2563EB] to-blue-500 drop-shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                      Social Media Marketing & Meta Ads
                    </span>
                  </motion.h1>

                  {/* Subheadline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed font-sans max-w-xl"
                  >
                    I help businesses increase visibility, generate leads, and grow through data-driven social media strategies, content marketing, and Meta advertising.
                  </motion.p>

                  {/* Call to Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                  >
                    <button
                      id="hero-primary-cta"
                      onClick={() => scrollToSection('case-studies')}
                      className="group font-sans text-sm font-semibold tracking-wide px-7 py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#2563EB]/10 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      View Case Studies
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      id="hero-secondary-cta"
                      onClick={() => scrollToSection('contact')}
                      className="font-sans text-sm font-semibold tracking-wide px-7 py-3.5 bg-[#161616] hover:bg-[#222222] border border-white/5 hover:border-white/10 hover:-translate-y-0.5 text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Contact Me
                    </button>
                  </motion.div>
                </div>

                {/* Hero Right Dashboard mockup */}
                <div className="lg:col-span-6 w-full flex justify-center">
                  <Dashboard />
                </div>

              </div>
            </div>
          </section>

          {/* ------------------ SECTIONS SEQUENCE ------------------ */}
          
          {/* Trust Metrics Cards */}
          <TrustMetrics />

          {/* Case Studies Segment */}
          <CaseStudies onContactClick={() => scrollToSection('contact')} />

          {/* Services Cards */}
          <Services />

          {/* Chronological SMM Process */}
          <Process />

          {/* Creative Content Showcase */}
          <ContentShowcase />

          {/* Software Tool List */}
          <Tools />

          {/* Platforms I Manage Section */}
          <ManagedPlatforms />

          {/* Unique Qualities */}
          <WhyWorkWithMe />

          {/* Integrity Testimonials banner */}
          <Testimonials />

          {/* Professional Bio */}
          <About />

          {/* Educational Articles */}
          <Blog />

          {/* Accordion Questions */}
          <FAQ />

          {/* Interactive Lead Intake Form */}
          <Contact />

          {/* Foot Links & Signature */}
          <Footer onNavigate={scrollToSection} />

        </div>
      )}
    </div>
  );
}

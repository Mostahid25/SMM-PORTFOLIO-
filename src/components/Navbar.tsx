import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={() => handleItemClick('home')}
          className="cursor-pointer flex items-center gap-2.5"
        >
          <div className="w-9 h-9 bg-gradient-to-tr from-[#2563EB] to-blue-400 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            GM
          </div>
          <span className="font-sans font-semibold tracking-tight text-lg text-white">
            GM Mostahid
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => handleItemClick(item.id)}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative py-1.5 cursor-pointer ${
                activeSection === item.id ? 'text-[#2563EB]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden md:flex items-center gap-4"
        >
          <a
            id="nav-download-portfolio-btn"
            href="https://drive.google.com/drive/u/1/folders/1nCGVZqP2E7yR9zIh_U9O_0SFa5gL292i"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-sans text-sm font-medium tracking-wide px-4 py-2.5 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/[0.02] text-gray-300 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            Download Portfolio
          </a>
          <button
            id="nav-cta-btn"
            onClick={() => handleItemClick('contact')}
            className="group font-sans text-sm font-medium tracking-wide px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            Let's Work Together
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#111111] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`font-sans text-left text-base font-medium transition-colors duration-200 py-1 ${
                    activeSection === item.id ? 'text-[#2563EB]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                id="mobile-download-portfolio-btn"
                href="https://drive.google.com/drive/u/1/folders/1nCGVZqP2E7yR9zIh_U9O_0SFa5gL292i"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-sans text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 bg-white/5"
              >
                <Download className="w-4 h-4" />
                Download Portfolio
              </a>
              <button
                id="mobile-cta-btn"
                onClick={() => handleItemClick('contact')}
                className="w-full text-center py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-sans text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Let's Work Together
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

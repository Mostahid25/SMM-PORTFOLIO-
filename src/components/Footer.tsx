import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Github, Globe, Heart, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/g-m-mostahid-06325b420' },
    { name: 'Twitter', icon: <Twitter className="w-4 h-4" />, href: 'https://x.com/GM_Mostahid22' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/gmmustahid/' },
    { name: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com/Mostahid25' },
    { name: 'Portfolio', icon: <Globe className="w-4 h-4" />, href: '#home' }
  ];

  const handleLinkClick = (id: string, e: MouseEvent) => {
    if (id.startsWith('http')) return;
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="bg-[#111111] border-t border-white/5 py-12 md:py-16 text-gray-500 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Foot top split row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/5">
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-[0_0_10px_rgba(37,99,235,0.3)]">
              GM
            </div>
            <span className="font-sans font-semibold tracking-tight text-sm text-white">
              GM Mostahid
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['home', 'case-studies', 'services', 'about', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(id, e)}
                className="text-gray-400 hover:text-white transition-colors duration-200 capitalize font-medium"
              >
                {id.replace('-', ' ')}
              </a>
            ))}
          </div>

          {/* Social Profiles Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 bg-[#161616] border border-white/5 text-gray-400 hover:text-[#2563EB] hover:border-[#2563EB]/50 hover:bg-[#2563EB]/5 rounded-xl transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Foot bottom copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-[11px] text-gray-500">
          <p>© {currentYear} GM Mostahid. All rights reserved. Professional SMM & Meta Ads Strategy.</p>
          <p className="flex items-center gap-1.5">
            Designed for scaling conversion with <Heart className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]" />
          </p>
        </div>

      </div>
    </footer>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  PhoneCall, 
  Sparkles, 
  Linkedin, 
  Github, 
  Instagram, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Phone
} from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleBookCall = () => {
    const infoElement = document.getElementById('actual-contact-info');
    if (infoElement) {
      infoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const contactLinks = [
    {
      name: 'LinkedIn',
      value: 'g-m-mostahid-06325b420',
      href: 'https://www.linkedin.com/in/g-m-mostahid-06325b420',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5',
      accent: '#0A66C2',
    },
    {
      name: 'GitHub',
      value: 'Mostahid25',
      href: 'https://github.com/Mostahid25',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-white hover:border-white/20 hover:bg-white/5',
      accent: '#FFFFFF',
    },
    {
      name: 'Instagram',
      value: '@gmmustahid',
      href: 'https://www.instagram.com/gmmustahid/',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]/30 hover:bg-[#E1306C]/5',
      accent: '#E1306C',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#111111] relative overflow-hidden border-t border-white/5">
      {/* Decorative colored glow grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large CTA */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Acquisition Pipeline</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
              Ready to Grow Your Brand?
            </h2>
            
            <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed font-sans max-w-lg mx-auto lg:mx-0">
              Let's stop burning marketing dollars on erratic content or empty clicks. Connect with me today to scale your social authority and construct high-converting lead campaigns.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                id="contact-book-call"
                onClick={handleBookCall}
                className="group font-sans text-sm font-semibold tracking-wide px-7 py-4 bg-white hover:bg-gray-100 text-[#111111] rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <PhoneCall className="w-4.5 h-4.5 text-[#2563EB]" />
                Get in Touch Now
              </button>
            </div>
          </div>

          {/* Right Direct Social/Contact Cards */}
          <div id="actual-contact-info" className="lg:col-span-7">
            <div className="bg-[#161616] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white font-sans">Direct Channels & Social Networks</h3>
                <p className="text-xs text-gray-500 mt-1.5 font-sans">
                  Connect with me directly or audit my work through any of the following platforms.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Direct Card */}
                <div className="p-5 bg-[#1c1c1c] border border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-[#2563EB]/30 group">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-blue-950/40 border border-blue-500/20 text-[#2563EB] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">Business Inquiry</p>
                      <p className="text-sm font-semibold text-white mt-0.5 font-mono">mostahidgm@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy('mostahidgm@gmail.com', 'email')}
                      className="p-2.5 bg-[#222222] hover:bg-[#2c2c2c] border border-white/5 text-gray-400 hover:text-white rounded-lg transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                      title="Copy Email"
                    >
                      {copiedType === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-mono text-[10px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-mono text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:mostahidgm@gmail.com"
                      className="p-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <span className="font-sans text-[10px]">Mail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Call Card */}
                <div className="p-5 bg-[#1c1c1c] border border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-emerald-500/30 group">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">Direct Line / WhatsApp</p>
                      <p className="text-sm font-semibold text-white mt-0.5 font-mono">+8801771426048</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy('+8801771426048', 'phone')}
                      className="p-2.5 bg-[#222222] hover:bg-[#2c2c2c] border border-white/5 text-gray-400 hover:text-white rounded-lg transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                      title="Copy Number"
                    >
                      {copiedType === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-mono text-[10px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-mono text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="tel:+8801771426048"
                      className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <span className="font-sans text-[10px]">Call</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {contactLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-[#1c1c1c] border border-white/5 rounded-2xl flex flex-col justify-between h-28 transition-all duration-200 group ${social.color}`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="text-gray-400 group-hover:text-inherit transition-colors">
                          {social.icon}
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-inherit group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="mt-4">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 group-hover:text-gray-400">
                          {social.name}
                        </p>
                        <p className="text-xs font-semibold text-white truncate mt-0.5 group-hover:text-inherit font-mono">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

              </div>

              {/* Integrity footprint statement */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2">
                <span className="text-[9px] font-mono tracking-widest text-gray-600 uppercase">Response Rate</span>
                <span className="text-gray-700">•</span>
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">Under 12 Hours Guarantee</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

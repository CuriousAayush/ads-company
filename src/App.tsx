import React, { useState } from 'react';
import { 
  BarChart3, 
  Target, 
  Zap, 
  Search, 
  PenTool, 
  Palette, 
  TrendingUp, 
  CheckCircle2, 
  Mail, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Payment', href: '#payment' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-bottom border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white">A</div>
          <span className="font-display font-bold text-xl tracking-tight">ADCRAFT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/60 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-brand-primary text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-all hover:scale-105 active:scale-95"
          >
            Get Proposal
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-brand-primary"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
          Expert Ad Creator for Nepal
        </span>
        <h1 className="font-display text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
          I GROW <span className="gradient-text">NEPALESE</span> <br />
          BUSINESSES WITH ADS.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
          Custom ad campaigns tailored for the Nepalese market. From local niche research to high-converting creatives, I help you reach customers across Nepal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full text-lg font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
          >
            Get a Free Ad Proposal
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const PaymentInfo = () => (
  <section id="payment" className="py-24 px-6 bg-brand-gray/30">
    <div className="max-w-7xl mx-auto">
      <div className="glass-card p-10 md:p-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6 text-white">Simple Project-Based <br /><span className="text-brand-primary">Payments in NPR</span></h2>
            <p className="text-white/60 text-lg mb-8">
              No complicated subscriptions. I work on a per-project basis tailored to your niche. Once we agree on a proposal, you can easily pay via Mobile Banking.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="text-brand-primary" size={20} />
                <span>Direct Mobile Banking (Fonepay/IPS)</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="text-brand-primary" size={20} />
                <span>Transparent NPR Pricing</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="text-brand-primary" size={20} />
                <span>Pay only for what you need</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-brand-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Kumari Bank</h3>
            <p className="text-brand-primary font-mono text-3xl font-bold mb-4 tracking-wider">9700158257</p>
            <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Mobile Banking Number</p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm italic">"Send the requested budget amount after our initial consultation."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhatIDo = () => (
  <section id="services" className="py-24 px-6 bg-brand-gray/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The Full-Cycle <br />
            <span className="text-brand-primary">Ad Strategy.</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            I don't just "run ads." I handle the entire ecosystem of your paid media to ensure every dollar spent is working toward your bottom line.
          </p>
          <div className="space-y-6">
            {[
              { icon: Search, title: 'Market Research', desc: 'Deep dive into your competitors and target audience behavior.' },
              { icon: PenTool, title: 'Campaign Crafting', desc: 'Writing copy and designing creatives that stop the scroll.' },
              { icon: BarChart3, title: 'Active Management', desc: 'Continuous optimization and scaling of your winning campaigns.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: PenTool, title: 'Ad Copywriting', color: 'bg-orange-500' },
            { icon: Palette, title: 'Creative Design', color: 'bg-blue-500' },
            { icon: Target, title: 'Campaign Strategy', color: 'bg-emerald-500' },
            { icon: TrendingUp, title: 'Paid Management', color: 'bg-purple-500' },
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex flex-col justify-between aspect-square"
            >
              <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                <service.icon size={20} />
              </div>
              <h3 className="font-bold text-xl">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyMe = () => (
  <section id="why-me" className="py-24 px-6">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Work With Me?</h2>
      <p className="text-white/60">I focus on the metrics that actually matter: ROI and Revenue.</p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      {[
        { title: 'Results-Driven', desc: 'Every campaign is optimized for conversions, not just impressions.' },
        { title: 'Niche Targeting', desc: 'Finding your ideal customers where they spend their time online.' },
        { title: 'Fast Turnaround', desc: 'Get your first campaign live and testing within 72 hours.' },
        { title: 'Data-Backed', desc: 'Decisions made based on hard numbers and split-test results.' },
      ].map((point, i) => (
        <div key={i} className="text-center p-6">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
            <CheckCircle2 size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3">{point.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{point.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 bg-brand-gray/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Past Successes</h2>
          <p className="text-white/60">Real campaigns, real results, real growth.</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Social', 'Google', 'Creative'].map(tab => (
            <button key={tab} className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
              <img 
                src={`https://picsum.photos/seed/ad-${item}/800/1000`} 
                alt="Portfolio Item" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">E-commerce</span>
                <h4 className="text-xl font-bold">3.4x ROAS Campaign</h4>
              </div>
            </div>
            <h4 className="font-bold text-lg group-hover:text-brand-primary transition-colors">Campaign Case Study #{item}</h4>
            <p className="text-white/50 text-sm">Meta Ads • Scaling Strategy</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', company: '', budget: '', message: '' });

  return (
    <section id="contact" className="py-24 px-6 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-white/60 text-lg mb-10">
              Fill out the form and I'll get back to you within 24 hours with a custom proposal for your business.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="font-bold">hello@adcraft.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">LinkedIn</p>
                  <p className="font-bold">linkedin.com/in/adcraft</p>
                </div>
              </div>
            </div>
          </div>
          <form className="glass-card p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Company</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Project Budget (NPR)</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                placeholder="e.g. 15,000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                placeholder="Tell me about your goals..."
              />
            </div>
            <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
              Send Message
              <ChevronRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center font-display font-bold text-white text-xs">A</div>
        <span className="font-display font-bold text-lg tracking-tight">ADCRAFT</span>
      </div>
      <p className="text-white/40 text-sm">© 2024 AdCraft Media. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
        <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <WhyMe />
        <Portfolio />
        <PaymentInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

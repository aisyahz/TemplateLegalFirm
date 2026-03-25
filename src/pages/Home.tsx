import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Briefcase, Gavel, FileText, Landmark, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const practices = [
    {
      title: "Corporate Advisory",
      desc: "Strategic counsel on complex mergers, acquisitions, and cross-border corporate structures.",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Contractual Strategy",
      desc: "Meticulous drafting and negotiation of high-value commercial agreements and frameworks.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Risk & Compliance",
      desc: "Comprehensive regulatory navigation and risk mitigation for international operations.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Private Wealth",
      desc: "Discreet advisory for high-net-worth individuals and family offices on global assets.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <div className="overflow-hidden bg-ivory">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-midnight/85"></div>
        </div>

        <div className="relative z-10 container-wide w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-brass font-medium tracking-[0.4em] uppercase text-[10px] mb-8 block">
              Global Legal Counsel
            </span>
            <h1 className="text-5xl md:text-7xl text-white font-serif leading-[1.1] mb-10 text-balance">
              Strategic Legal Counsel for <br />
              <span className="italic font-normal text-white/90">Complex Business Matters</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg mb-12 leading-relaxed max-w-xl font-light">
              We provide sophisticated legal advisory and strategic solutions for corporate entities and private clients navigating the world's most complex regulatory landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/contact" className="btn-executive">
                Speak With Our Team
              </Link>
              <Link to="/services" className="flex items-center gap-4 text-white/80 text-[11px] uppercase tracking-[0.2em] hover:text-brass transition-colors">
                Practice Areas <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Legacy Section */}
      <section className="py-32 bg-white border-b border-stone/20">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brass font-medium tracking-widest uppercase text-[10px] mb-6 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl text-ink mb-8 leading-tight">A Tradition of Precision and Discretion</h2>
            <p className="text-slate text-base leading-relaxed mb-10 font-light">
              For over two decades, Lexington & Co. has served as a trusted advisor to global corporations and private individuals. Our approach combines traditional legal excellence with a forward-thinking strategic perspective.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-3xl font-serif text-ink mb-2">25+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-ink mb-2">40+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate">Global Jurisdictions</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
              alt="Law Library" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-midnight p-10 hidden md:block">
              <Scale className="text-brass w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <div className="text-center mb-24">
            <span className="text-brass font-medium tracking-widest uppercase text-[10px] mb-6 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl text-ink">Core Practice Areas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone/30 border border-stone/30">
            {practices.map((practice, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-ivory p-16 hover:bg-white transition-colors duration-700 group"
              >
                <div className="text-brass/40 mb-10 group-hover:text-brass transition-colors duration-500">{practice.icon}</div>
                <h3 className="text-2xl font-serif mb-6 text-ink">{practice.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-10 font-light max-w-sm">
                  {practice.desc}
                </p>
                <Link to="/services" className="text-[10px] font-bold tracking-[0.2em] uppercase text-brass flex items-center gap-3">
                  Explore Practice <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Discreet */}
      <section className="py-40 bg-midnight text-white relative">
        <div className="container-wide max-w-4xl text-center">
          <div className="text-brass/30 text-6xl font-serif mb-12 italic">“</div>
          <p className="text-2xl md:text-3xl font-serif italic text-white/80 mb-16 leading-relaxed">
            Lexington & Co. operates with a level of precision and discretion that is rare in today's market. They are not just our legal counsel; they are our most trusted strategic partners.
          </p>
          <div className="divider-subtle w-24 mx-auto mb-10 opacity-20"></div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-brass">Managing Director, Global Capital Partners</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-6xl text-ink mb-12 font-serif italic">Discreet Advisory for <br />Uncommon Challenges</h2>
          <p className="text-slate text-lg mb-16 max-w-2xl mx-auto font-light">
            We invite you to discuss your legal requirements with our senior partners in a strictly confidential environment.
          </p>
          <Link to="/contact" className="btn-executive">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

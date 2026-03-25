import { motion } from 'motion/react';
import { Gavel, FileText, ShieldCheck, Briefcase, Landmark, Scale, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Corporate Advisory",
      desc: "Strategic counsel on complex mergers, acquisitions, and cross-border corporate structures for global enterprises.",
      features: ["M&A Advisory", "Corporate Restructuring", "Governance Audits", "Shareholder Frameworks"]
    },
    {
      title: "Contractual Strategy",
      desc: "Meticulous drafting and negotiation of high-value commercial agreements to mitigate long-term risk.",
      features: ["Commercial Contracts", "Licensing Strategy", "Employment Frameworks", "Vendor Governance"]
    },
    {
      title: "Compliance & Risk",
      desc: "Comprehensive regulatory navigation and risk mitigation strategies for international operations.",
      features: ["Regulatory Compliance", "Anti-Money Laundering", "Data Privacy (GDPR)", "Risk Assessments"]
    },
    {
      title: "Private Wealth",
      desc: "Discreet advisory for high-net-worth individuals and family offices on global asset protection.",
      features: ["Estate Planning", "Asset Protection", "Tax Strategy", "Philanthropic Advisory"]
    },
    {
      title: "Intellectual Property",
      desc: "Protecting innovations, brands, and creative assets in a competitive global marketplace.",
      features: ["Trademark Strategy", "Patent Advisory", "IP Litigation", "Copyright Protection"]
    },
    {
      title: "International Trade",
      desc: "Navigating cross-border legal complexities and international trade regulations with precision.",
      features: ["Cross-border Transactions", "Trade Compliance", "Foreign Investment", "Dispute Resolution"]
    }
  ];

  return (
    <div className="pt-20 bg-ivory">
      {/* Header */}
      <section className="bg-midnight py-40 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute -top-20 -left-20"><Scale size={600} /></div>
        </div>
        <div className="container-wide relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-brass font-medium tracking-[0.4em] uppercase text-[10px] mb-8 block">Practice Areas</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Sophisticated Solutions <br />for Global Challenges.</h1>
            <p className="text-white/50 text-xl leading-relaxed font-light max-w-2xl">
              We provide a comprehensive suite of legal and strategic services designed to address the most complex challenges facing modern enterprises and private individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Editorial */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-12 h-px bg-brass/30 group-hover:w-20 transition-all duration-700"></div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brass font-medium">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-serif text-ink mb-8">{service.title}</h3>
                <p className="text-slate text-base leading-relaxed mb-12 font-light max-w-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 text-[11px] font-medium tracking-widest uppercase text-ink/40">
                      <div className="w-1 h-1 bg-brass rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Refined */}
      <section className="section-padding bg-ivory border-t border-stone/20">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-24">
            <span className="text-brass font-medium tracking-widest uppercase text-[10px] mb-6 block">Engagement</span>
            <h2 className="text-4xl font-serif text-ink">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-12">
            {[
              { q: "How are your advisory services structured?", a: "We offer flexible engagement models including project-based fixed fees, hourly rates for specific litigation, and monthly retainer options for ongoing corporate advisory." },
              { q: "Do you handle cross-border legal matters?", a: "Yes, our firm specializes in international law with a network of partner firms across 40+ jurisdictions to ensure seamless global representation." },
              { q: "What is your typical response framework?", a: "We prioritize immediate responsiveness for our clients. For urgent matters, a senior partner is typically available within 4 hours." }
            ].map((faq, idx) => (
              <div key={idx} className="pb-12 border-b border-stone/30 last:border-0">
                <h4 className="font-serif text-xl text-ink mb-6 italic">{faq.q}</h4>
                <p className="text-slate text-base leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-midnight text-white text-center">
        <div className="container-wide">
          <h2 className="text-4xl md:text-6xl font-serif mb-12 italic">Tailored Strategic Counsel</h2>
          <p className="text-white/40 text-lg mb-16 max-w-2xl mx-auto font-light">
            Discuss your unique requirements with our senior partners in a strictly confidential environment.
          </p>
          <Link to="/contact" className="btn-executive">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

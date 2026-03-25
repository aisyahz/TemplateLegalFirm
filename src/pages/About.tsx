import { motion } from 'motion/react';
import { Award, Users, History, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Years of Practice", value: "25", icon: <History className="w-5 h-5" /> },
    { label: "Global Partners", value: "12", icon: <Users className="w-5 h-5" /> },
    { label: "Jurisdictions", value: "40+", icon: <Award className="w-5 h-5" /> },
    { label: "Success Rate", value: "98%", icon: <Target className="w-5 h-5" /> },
  ];

  const team = [
    {
      name: "Marcus Lexington",
      role: "Senior Managing Partner",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
      bio: "With three decades of experience in international corporate litigation, Marcus leads our firm's strategic direction with a focus on high-stakes advisory."
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Global Compliance",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "Elena specializes in cross-border regulatory frameworks and risk assessment for multi-national corporate entities."
    },
    {
      name: "David Chen",
      role: "Lead Contractual Strategist",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
      bio: "David's analytical approach to contractual law has established him as a premier advisor for complex commercial negotiations."
    }
  ];

  return (
    <div className="pt-20 bg-ivory">
      {/* Header */}
      <section className="bg-midnight py-40 text-white">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-brass font-medium tracking-[0.4em] uppercase text-[10px] mb-8 block">Our Firm</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 italic leading-tight">A Legacy of Trust,<br />Built on Precision.</h1>
            <p className="text-white/50 text-xl leading-relaxed font-light max-w-2xl">
              Established in 2001, Lexington & Co. was founded on the principle that legal advisory should be as sophisticated as the clients it serves. We provide a bridge between traditional legal excellence and modern strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats - Refined */}
      <section className="py-24 bg-white border-b border-stone/20">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="text-brass/40">{stat.icon}</div>
              <div>
                <div className="text-4xl font-serif text-ink mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission/Vision - Editorial */}
      <section className="section-padding bg-ivory">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200" 
              alt="Boardroom" 
              className="w-full h-[600px] object-cover grayscale brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-20">
            <div>
              <span className="text-brass font-medium tracking-widest uppercase text-[10px] mb-6 block">Our Mission</span>
              <h2 className="text-4xl font-serif text-ink mb-8">Uncompromising Standards</h2>
              <p className="text-slate text-base leading-relaxed font-light">
                To provide unparalleled legal and business strategic guidance that empowers our clients to navigate complex global environments with absolute confidence and clarity.
              </p>
            </div>
            <div className="divider-subtle"></div>
            <div>
              <span className="text-brass font-medium tracking-widest uppercase text-[10px] mb-6 block">Our Vision</span>
              <h2 className="text-4xl font-serif text-ink mb-8">Defining the Future of Advisory</h2>
              <p className="text-slate text-base leading-relaxed font-light">
                To be the world's most trusted partner for strategic legal solutions, recognized for our unwavering commitment to ethics, excellence, and the success of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Editorial Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-32">
            <span className="text-brass font-medium tracking-widest uppercase text-[10px] mb-6 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl text-ink">Senior Partners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-10 bg-stone/10">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif text-ink mb-2">{member.name}</h3>
                <p className="text-brass text-[10px] uppercase tracking-[0.2em] mb-6">{member.role}</p>
                <p className="text-slate text-sm leading-relaxed font-light italic">
                  "{member.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

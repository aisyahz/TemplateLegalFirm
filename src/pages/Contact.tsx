import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            <span className="text-brass font-medium tracking-[0.4em] uppercase text-[10px] mb-8 block">Inquiry</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 italic">Speak With Our <br />Senior Partners.</h1>
            <p className="text-white/50 text-xl leading-relaxed font-light max-w-2xl">
              We invite you to discuss your legal requirements in a strictly confidential environment. Our team is available for global consultations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-serif text-ink mb-20">Global Presence</h2>
            
            <div className="space-y-20">
              <div className="flex gap-10">
                <div className="w-px h-16 bg-brass/30 shrink-0"></div>
                <div>
                  <h4 className="font-serif text-xl text-ink mb-4 italic">New York Headquarters</h4>
                  <p className="text-slate text-base leading-relaxed font-light">
                    1200 Avenue of the Americas, Suite 400<br />
                    New York, NY 10036, USA
                  </p>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="w-px h-16 bg-brass/30 shrink-0"></div>
                <div>
                  <h4 className="font-serif text-xl text-ink mb-4 italic">Direct Communication</h4>
                  <p className="text-slate text-base leading-relaxed font-light">
                    Main: +1 (212) 555-0198<br />
                    Advisory: advisory@lexingtonco.com
                  </p>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="w-px h-16 bg-brass/30 shrink-0"></div>
                <div>
                  <h4 className="font-serif text-xl text-ink mb-4 italic">Secure Messaging</h4>
                  <p className="text-slate text-base leading-relaxed font-light mb-8">
                    For encrypted communication, please contact us via our secure client portal or WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/12125550198" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brass hover:text-ink transition-colors"
                  >
                    <MessageCircle size={16} /> Secure WhatsApp Channel
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder - Refined */}
            <div className="mt-24 aspect-video bg-stone/10 relative overflow-hidden group border border-stone/20">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-midnight text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase">
                  View Global Offices
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Premium */}
          <div className="bg-white p-12 md:p-20 border border-stone/20 shadow-2xl">
            <h2 className="text-3xl font-serif text-ink mb-12">Confidential Inquiry</h2>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <h3 className="text-2xl font-serif text-ink mb-4 italic">Inquiry Received</h3>
                <p className="text-slate font-light">Your message has been routed to our senior partners. You will receive a response within 4 business hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-4 group-focus-within:text-brass transition-colors">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-stone/50 py-4 focus:border-brass outline-none transition-colors font-light text-ink"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-4 group-focus-within:text-brass transition-colors">Corporate Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-stone/50 py-4 focus:border-brass outline-none transition-colors font-light text-ink"
                    placeholder="email@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-4 group-focus-within:text-brass transition-colors">Nature of Inquiry</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-stone/50 py-4 focus:border-brass outline-none transition-colors font-light text-ink resize-none"
                    placeholder="Briefly describe your requirements"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-executive flex items-center justify-center gap-4">
                  Submit Inquiry <Send size={14} />
                </button>
                <p className="text-[10px] text-slate/60 text-center italic">
                  All communications are protected by attorney-client privilege.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white pt-32 pb-12 border-t border-white/5">
      <div className="container-wide grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-6 h-6 text-brass" />
            <span className="text-lg font-serif font-semibold tracking-tighter">
              LEXINGTON<span className="text-brass font-normal mx-0.5">&</span>CO.
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
            Strategic legal counsel and business advisory for corporate entities and private clients worldwide.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-brass transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-white/30 hover:text-brass transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-white/30 hover:text-brass transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-8 text-brass">Our Firm</h4>
          <ul className="flex flex-col gap-4 text-[13px] text-white/50">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Practice Areas</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-8 text-brass">Practice Areas</h4>
          <ul className="flex flex-col gap-4 text-[13px] text-white/50">
            <li><Link to="/services" className="hover:text-white transition-colors">Corporate Law</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Contract Advisory</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Compliance & Risk</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Private Wealth</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-8 text-brass">Global Presence</h4>
          <ul className="flex flex-col gap-5 text-[13px] text-white/50">
            <li className="flex items-start gap-4">
              <MapPin size={16} className="text-brass/60 shrink-0 mt-0.5" />
              <span className="leading-relaxed">1200 Avenue of the Americas<br />New York, NY 10036</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="text-brass/60 shrink-0" />
              <span>+1 (212) 555-0198</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-brass/60 shrink-0" />
              <span>advisory@lexingtonco.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-wide mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] tracking-[0.3em] uppercase">
        <span>© {new Date().getFullYear()} Lexington & Co. Advisory.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
        </div>
      </div>
    </footer>
  );
}

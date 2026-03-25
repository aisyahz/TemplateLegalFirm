import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scale, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Practice Areas', path: '/services' },
    { name: 'Our Firm', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'nav-premium py-5' : 'bg-transparent py-8'}`}>
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Scale className={`w-7 h-7 transition-colors duration-500 ${scrolled ? 'text-brass' : 'text-white'}`} />
          <span className="text-xl font-serif font-semibold tracking-tighter text-white">
            LEXINGTON<span className="text-brass font-normal mx-0.5">&</span>CO.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:text-brass ${
                location.pathname === link.path ? 'text-brass' : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-executive !py-2.5 !px-7 !text-[10px]">
            Speak With Our Team
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-midnight border-t border-white/5 p-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-widest font-medium ${location.pathname === link.path ? 'text-brass' : 'text-white/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-executive text-center mt-4">
            Speak With Our Team
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

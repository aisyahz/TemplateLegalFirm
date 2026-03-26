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
    <nav className={`fixed w-full z-50 transition-all duration-700 nav-executive ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Scale className="w-6 h-6 text-brass transition-all duration-700" />
          <span className="text-lg font-serif font-semibold tracking-tighter text-white">
            LEXINGTON<span className="text-brass font-normal mx-0.5">&</span>CO.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-700 hover:text-brass ${
                location.pathname === link.path ? 'text-brass' : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-executive">
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
          className="md:hidden absolute top-full left-0 w-full bg-midnight border-t border-white/10 p-10 flex flex-col gap-8 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-500 ${location.pathname === link.path ? 'text-brass' : 'text-white/70'}`}
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

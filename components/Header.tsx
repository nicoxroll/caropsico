import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Terapia Breve', href: '#metodologia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-serif font-bold text-slate-800 tracking-wide">
          Carolina <span className="text-primary-600">Crespo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-primary-600 transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto"
            className="px-5 py-2 bg-primary-600 text-white rounded-full text-sm font-bold shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Agendar Cita
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 border-t border-slate-100">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 hover:text-primary-600 font-medium text-lg block border-b border-slate-50 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto"
            className="block text-center w-full py-3 bg-primary-600 text-white rounded-lg font-bold shadow hover:bg-primary-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Cita
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
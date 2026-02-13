import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { BlobPink, BlobPurple } from './Decorations';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-primary-50 to-secondary-50 pt-16 pb-8 border-t border-primary-100/50 relative overflow-hidden">
      
      {/* Subtle Blobs */}
      <BlobPink className="w-64 h-64 -top-20 -left-20 opacity-20 blob-shape" />
      <BlobPurple className="w-64 h-64 -bottom-20 -right-20 opacity-20 blob-shape animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold mb-2 text-slate-800">
              Carolina <span className="text-primary-600">Crespo</span>
            </h2>
            <p className="text-slate-500 text-sm tracking-wide">Psicóloga Clínica • Terapia Breve Estratégica</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-primary-100 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-primary-100 flex items-center justify-center text-primary-400 hover:bg-secondary-500 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-primary-100 flex items-center justify-center text-primary-400 hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-200/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-light">
          <p>&copy; {new Date().getFullYear()} Carolina Crespo Psicología. Todos los derechos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-600 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
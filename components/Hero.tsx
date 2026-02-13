import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlobPink, BlobPurple } from './Decorations';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects based on window scroll
  const blob1Y = useTransform(scrollY, [0, 800], [0, 250]);
  const blob2Y = useTransform(scrollY, [0, 800], [0, -150]);
  const imageY = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white w-full">
      {/* Abstract Background Shapes with Parallax */}
      <BlobPink style={{ y: blob1Y }} className="absolute w-96 h-96 -top-20 -right-20 md:w-[600px] md:h-[600px] md:-top-32 md:-right-32 blob-shape pointer-events-none" />
      <BlobPurple style={{ y: blob2Y }} className="absolute w-64 h-64 top-40 -left-20 md:w-[500px] md:h-[500px] md:top-20 md:-left-32 animation-delay-2000 blob-shape pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-full overflow-hidden md:overflow-visible">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-secondary-100 text-secondary-700 text-xs font-bold tracking-widest uppercase mb-4 border border-secondary-200"
              >
                Psicología Clínica
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-tight">
                El cambio comienza <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 italic pr-2">
                  hoy mismo
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
              Especialista en <strong>Terapia Breve Estratégica</strong>. Enfoque centrado en soluciones eficientes para recuperar tu bienestar en el menor tiempo posible.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="https://wa.me/5492214091012" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-bold shadow-lg shadow-primary-200 hover:shadow-xl hover:bg-primary-700 transition-all transform hover:-translate-y-1"
              >
                Comenzar Terapia <ArrowRight size={18} />
              </a>
              <a 
                href="#sobre-mi" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold shadow-sm hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                Conocer más
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ y: imageY }}
            className="w-full md:w-1/2 relative"
          >
             <div className="relative z-10 mx-auto w-72 h-96 md:w-96 md:h-[500px] rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/og-image.jpg" 
                  alt="Carolina Crespo Psicóloga" 
                  width="800"
                  height="1000"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
             </div>
             
             {/* Decorative element behind image */}
             <div className="absolute top-10 right-10 md:right-20 w-72 h-96 md:w-96 md:h-[500px] rounded-t-[10rem] rounded-b-[3rem] border-2 border-primary-200 -z-10 transform translate-x-4 translate-y-4 hidden md:block"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useRef } from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create subtle parallax difference between the two columns
  const yCol1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} id="sobre-mi" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1 relative"
          >
             <div className="grid grid-cols-2 gap-4">
               <motion.div style={{ y: yCol1 }} className="space-y-4 mt-8">
                  <div className="bg-secondary-50 p-6 rounded-2xl rounded-tr-[3rem]">
                    <Award className="text-secondary-500 mb-3" size={32} />
                    <h3 className="font-serif text-xl font-bold text-slate-800">Formación</h3>
                    <p className="text-sm text-slate-600">Constante actualización académica y profesional.</p>
                  </div>
                  <img 
                    src="https://images.pexels.com/photos/7034590/pexels-photo-7034590.jpeg" 
                    alt="Psicología" 
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-48 object-cover rounded-2xl rounded-bl-[3rem] opacity-90 shadow-lg" 
                  />
               </motion.div>
               <motion.div style={{ y: yCol2 }} className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/7034741/pexels-photo-7034741.jpeg" 
                    alt="Terapia" 
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-48 object-cover rounded-2xl rounded-tr-[3rem] opacity-90 shadow-lg" 
                  />
                  <div className="bg-primary-50 p-6 rounded-2xl rounded-bl-[3rem]">
                    <Heart className="text-primary-500 mb-3" size={32} />
                    <h3 className="font-serif text-xl font-bold text-slate-800">Empatía</h3>
                    <p className="text-sm text-slate-600">Un espacio seguro, libre de juicios.</p>
                  </div>
               </motion.div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Sobre Mí</h2>
            <h3 className="text-4xl font-serif text-slate-800 mb-6">Hola, soy Carolina Crespo</h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Como psicóloga clínica especializada en <strong>Terapia Breve Estratégica</strong>, mi objetivo es ayudarte a encontrar soluciones efectivas a los problemas que te impiden avanzar. No se trata de analizar tu pasado eternamente, sino de entender cómo funciona tu problema hoy para desactivarlo.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Creo firmemente en la capacidad de cambio de cada persona. Mi enfoque es pragmático, cálido y directo. Trabajaremos juntos para desbloquear tus recursos personales y construir una realidad más funcional y feliz.
            </p>
            
            <div className="flex flex-col gap-4 text-slate-700 font-medium mt-8">
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                   <BookOpen size={20} />
                </div>
                <span>Especialista en Terapia Breve Centrada en Soluciones</span>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="p-2 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                   <Heart size={20} />
                 </div>
                 <span>Formación en Psicodrama</span>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="p-2 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                   <Award size={20} />
                 </div>
                 <span>Terapia de Parejas</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

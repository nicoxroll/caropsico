import React, { useRef } from 'react';
import { BlobPurple } from './Decorations';
import { Clock, Target, Lightbulb } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Methodology: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} id="metodologia" className="py-24 bg-secondary-50 relative overflow-hidden">
      <BlobPurple style={{ y: blobY }} className="w-[800px] h-[800px] -right-40 -top-40 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-secondary-600 uppercase tracking-widest mb-2">Mi Enfoque</h2>
          <h3 className="text-4xl font-serif text-slate-900 mb-6">¿Qué es la Terapia Breve?</h3>
          <p className="text-slate-600 text-lg">
            A diferencia de las terapias tradicionales de larga duración, la Terapia Breve se centra en <strong>cómo</strong> funciona el problema en el presente y en encontrar herramientas prácticas para solucionarlo.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={cardVariants} className="bg-white p-8 rounded-3xl shadow-sm border border-secondary-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <Clock size={28} />
            </div>
            <h4 className="text-xl font-serif font-bold text-slate-800 mb-3">Tiempo Limitado</h4>
            <p className="text-slate-600">
              Buscamos resultados en el menor número de sesiones posible. Valoramos tu tiempo y tu deseo de bienestar inmediato.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-3xl shadow-sm border border-secondary-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative top-0 md:-top-8">
            <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-6">
              <Target size={28} />
            </div>
            <h4 className="text-xl font-serif font-bold text-slate-800 mb-3">Centrada en Soluciones</h4>
            <p className="text-slate-600">
              No nos estancamos en el "por qué". Nos enfocamos en el "cómo" solucionar lo que te afecta hoy.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-3xl shadow-sm border border-secondary-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6">
              <Lightbulb size={28} />
            </div>
            <h4 className="text-xl font-serif font-bold text-slate-800 mb-3">Cambio Activo</h4>
            <p className="text-slate-600">
              Te llevarás tareas y herramientas prácticas entre sesiones para consolidar el cambio en tu vida diaria.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;

import React from 'react';
import { ServiceItem } from '../types';
import { Brain, Smile, Activity, Users, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    title: "Ansiedad y Estrés",
    description: "Aprende a gestionar la ansiedad, los ataques de pánico y el estrés crónico con técnicas efectivas.",
    icon: Activity
  },
  {
    title: "Depresión",
    description: "Recupera la vitalidad y el sentido de vida superando estados de tristeza profunda y apatía.",
    icon: Sun
  },
  {
    title: "Autoestima",
    description: "Fortalece tu seguridad personal, amor propio y confianza para afrontar desafíos.",
    icon: Smile
  },
  {
    title: "Terapia de Pareja",
    description: "Mejora la comunicación y resuelve conflictos para construir una relación más sana.",
    icon: Users
  },
  {
    title: "Insomnio",
    description: "Higiene del sueño y estrategias cognitivas para recuperar el descanso reparador.",
    icon: Moon
  },
  {
    title: "Obsesiones",
    description: "Tratamiento de pensamientos intrusivos y comportamientos compulsivos.",
    icon: Brain
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Áreas de Intervención</h2>
          <h3 className="text-4xl font-serif text-slate-900">¿En qué puedo ayudarte?</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3 font-serif group-hover:text-primary-700 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
            <p className="text-slate-600 mb-6">¿No encuentras lo que buscas? Contáctame para evaluar tu caso.</p>
            <a href="#contacto" className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-600 hover:text-white transition-all">
                Hacer una consulta
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
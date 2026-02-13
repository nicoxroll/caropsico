import React from 'react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: (ServiceItem & { image: string })[] = [
  {
    title: "Ansiedad y Estrés",
    description: "Recupera la calma y el control de tu vida.",
    image: "https://images.pexels.com/photos/6951509/pexels-photo-6951509.jpeg"
  },
  {
    title: "Depresión",
    description: "Encuentra la luz y la motivación para seguir adelante.",
    image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Autoestima",
    description: "Fortalece tu seguridad y aprende a quererte.",
    image: "https://images.pexels.com/photos/3958400/pexels-photo-3958400.jpeg"
  },
  {
    title: "Terapia de Pareja",
    description: "Mejora la comunicación y la conexión mutua.",
    image: "https://images.pexels.com/photos/7176186/pexels-photo-7176186.jpeg"
  },
  {
    title: "Insomnio",
    description: "Descansa mejor con hábitos de sueño saludables.",
    image: "https://images.pexels.com/photos/3914783/pexels-photo-3914783.jpeg"
  },
  {
    title: "Obsesiones",
    description: "Rompe los ciclos de pensamientos intrusivos.",
    image: "https://images.pexels.com/photos/7273311/pexels-photo-7273311.jpeg"
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
    <section id="servicios" className="py-24 bg-white overflow-hidden">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  width="600"
                  height="800"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-70"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-display font-medium text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {service.title}
                </h4>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                   <p className="text-slate-200 text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     {service.description}
                   </p>
                </div>
                {/* Always visible on mobile, or just keep title? Let's make description appear on hover for cleaner look as requested "similar to products" */}
                {/* For better UX on mobile, we might want to show title always and small peek of description, but strictly following 'zoom on hover like products', hidden description until hover is common pattern */}
              </div>
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
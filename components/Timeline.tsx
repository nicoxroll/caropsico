import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    year: '2015',
    title: 'Profesorado en Psicología',
    description: 'Egreso de la Facultad de Psicología, Universidad Nacional de La Plata.',
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg'
  },
  {
    year: '2017 - 2022',
    title: 'Experiencia en Educación Inicial',
    description: 'Trayectoria en Jardin Maternal “Mis Primeros Pasos”, consolidando la experiencia en desarrollo infantil.',
    image: 'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg'
  },
  {
    year: '2023',
    title: 'Licenciatura en Psicología',
    description: 'Obtención del título de Grado en la Universidad Nacional de La Plata.',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
  },
  {
    year: '2025',
    title: 'Especialización Clínica',
    description: 'Formación en Terapia Breve Estratégica y Centrada en Soluciones. Inicio de atención en consultorio privado.',
    image: 'https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg'
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
            Trayectoria Profesional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
             Un camino dedicado al bienestar y la formación continua.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-200 via-purple-400 to-secondary-200 h-full rounded-full"></div>

          <div className="space-y-16 md:space-y-32">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-5/12 mb-8 md:mb-0">
        <div className={`p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-100 group`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-display font-bold text-sm mb-4">
            {item.year}
          </span>
          <h3 className="text-2xl font-display font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      <div className="w-8 h-8 rounded-full bg-white border-4 border-primary-500 shadow-lg z-10 relative hidden md:block">
        <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20"></div>
      </div>

      <div className="w-full md:w-5/12">
         <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
         </div>
      </div>
    </motion.div>
  );
}

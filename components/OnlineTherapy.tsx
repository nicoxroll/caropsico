import React from 'react';
import { Video, Wifi, Calendar, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnlineTherapy() {
  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.pexels.com/photos/6893332/pexels-photo-6893332.jpeg" 
                alt="Consulta Online" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-display font-bold text-lg mb-1 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  Disponible ahora
                </p>
                <p className="text-white/80 text-sm">Desde la comodidad de tu casa</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Modalidad Virtual</h2>
            <h3 className="text-4xl font-serif text-slate-900 mb-6">Terapia Online por Videollamada</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              La distancia ya no es un impedimento para cuidar tu salud mental. Accede a sesiones profesionales a través de plataformas seguras como Zoom o Google Meet, manteniendo la misma eficacia y confidencialidad que en el consultorio presencial.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Feature icon={<Globe className="w-5 h-5 text-primary-500" />} title="Sin fronteras" desc="Atención a pacientes de todo el mundo." />
              <Feature icon={<Calendar className="w-5 h-5 text-primary-500" />} title="Flexibilidad" desc="Horarios adaptados a tu rutina." />
              <Feature icon={<Wifi className="w-5 h-5 text-primary-500" />} title="Conexión estable" desc="Plataformas de alta calidad de video." />
              <Feature icon={<Video className="w-5 h-5 text-primary-500" />} title="Privacidad" desc="Espacio seguro y confidencial." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
               <a 
                 href="https://wa.me/5492214091012" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-bold font-display hover:bg-green-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
               >
                 Agendar por WhatsApp
               </a>
               <a 
                 href="https://calendar.google.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold font-display hover:bg-slate-50 transition-all hover:shadow-sm"
               >
                 <Calendar className="w-5 h-5" /> Ver Disponibilidad
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
    </div>
  )
}

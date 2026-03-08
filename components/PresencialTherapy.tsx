import React from 'react';
import { Coffee, Wind, Flower2, Armchair, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PresencialTherapy() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/consul.jpg" 
                alt="Consultorio Psicológico Presencial en La Plata" 
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 right-8 text-white text-right">
                <p className="font-display font-bold text-lg mb-1 flex items-center justify-end gap-2">
                  <MapPin className="text-primary-400" size={20} />
                  En el centro de La Plata
                </p>
                <p className="text-white/80 text-sm">Calle 66 Nº 720</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Modalidad Presencial</h2>
            <h3 className="text-4xl font-serif text-slate-900 mb-6">Conocé el Consultorio</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Un espacio pensado para tu comodidad y tranquilidad. El ambiente físico es parte fundamental de la terapia, por eso he cuidado cada detalle para que te sientas como en casa desde el primer momento.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <Feature icon={<Wind className="w-6 h-6 text-primary-500" />} title="Ambiente Climatizado" desc="Temperatura ideal en verano e invierno." />
              <Feature icon={<Flower2 className="w-6 h-6 text-primary-500" />} title="Aromaterapia" desc="Esencias y sahumerios para la calma." />
              <Feature icon={<Coffee className="w-6 h-6 text-primary-500" />} title="Café o Té de cortesía" desc="Disfrutá de una bebida caliente." />
              <Feature icon={<Armchair className="w-6 h-6 text-primary-500" />} title="Máximo Confort" desc="Mobiliario cómodo y baño privado." />
            </div>

            <a 
              href="https://wa.me/5492214091012" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 border-2 border-slate-900 rounded-xl font-bold font-display hover:bg-slate-50 transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              Consultar Horarios Presenciales
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-primary-50 rounded-lg shadow-sm text-primary-600">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
    </div>
  )
}

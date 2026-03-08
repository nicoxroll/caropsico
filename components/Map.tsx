import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Map() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
            Ubicación y Contacto
          </h2>
          <p className="text-lg text-slate-600">
            Encontrame en el corazón de La Plata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="space-y-6"
          >
            <ContactCard 
              icon={<MapPin className="w-6 h-6 text-primary-600" />}
              title="Consultorio"
              content="Avenida 66 N° 720, La Plata, Buenos Aires"
            />
            <ContactCard 
              icon={<Phone className="w-6 h-6 text-purple-600" />}
              title="Teléfono"
              content="221 409-1012"
            />
            <ContactCard 
              icon={<Mail className="w-6 h-6 text-pink-600" />}
              title="Email"
              content="caroyluna@live.com"
            />
             <ContactCard 
              icon={<Clock className="w-6 h-6 text-cyan-600" />}
              title="Horarios"
              content="Lun - Vie: 9:00 - 20:00"
            />
          </motion.div>

          {/* Map Frame */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="h-[500px] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.740879944743!2d-57.942617!3d-34.912999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e639a044d37d%3A0x6b80309903b44b8!2sAv.%2066%20720%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707923456789!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700"
            ></iframe>

             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
    return (
        <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg border border-slate-50 hover:border-primary-100 transition-colors group">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-primary-50 transition-colors mr-4">
                {icon}
            </div>
            <div>
                <h3 className="font-display font-bold text-slate-800 mb-1">{title}</h3>
                <p className="text-slate-600 font-medium">{content}</p>
            </div>
        </div>
    )
}

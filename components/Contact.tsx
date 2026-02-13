import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { BlobPink } from './Decorations';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <section ref={ref} id="contacto" className="py-24 bg-gradient-to-br from-secondary-50 to-white relative overflow-hidden">
      <BlobPink style={{ y: blobY }} className="w-[600px] h-[600px] -left-20 bottom-0 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Contacto</h2>
            <h3 className="text-4xl font-serif text-slate-900 mb-6">Agenda tu Primera Cita</h3>
            <p className="text-slate-600 mb-10 text-lg">
              Dar el primer paso es lo más importante. Escríbeme para coordinar un horario o resolver tus dudas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-slate-600">+54 9 221 409-1012</p>
                  <p className="text-sm text-slate-500 mt-1">Lunes a Viernes, 9:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-secondary-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">caroyluna@live.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-pink-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Consulta</h4>
                  <p className="text-slate-600">Calle 66 Nº 720</p>
                  <p className="text-slate-600">La Plata, Buenos Aires</p>
                  <a href="https://maps.google.com/?q=Calle+66+720+La+Plata" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 mt-2 font-medium cursor-pointer hover:underline block">Ver en Google Maps</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
               {/* WhatsApp Quick Action */}
               <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-100 flex items-center justify-between flex-wrap gap-4">
                 <div>
                   <h5 className="font-bold text-green-800 text-sm">¿Respuesta inmediata?</h5>
                   <p className="text-green-600 text-xs">Escríbeme directamente por WhatsApp</p>
                 </div>
                 <a 
                   href="https://wa.me/5492214091012" 
                   target="_blank"
                   rel="noopener noreferrer" 
                   className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-green-600 transition-colors flex items-center gap-2"
                 >
                   <Phone size={16} /> Enviar mensaje
                 </a>
               </div>

              {formStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                  >
                    <Send size={40} />
                  </motion.div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-slate-600">Gracias por contactarme. Te responderé a la brevedad posible.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary-600 font-bold hover:underline">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Nombre Completo</label>
                      <input 
                        required 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700">Teléfono</label>
                      <input 
                        required 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                        placeholder="+34 000 000 000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                    <input 
                      required 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Mensaje</label>
                    <textarea 
                      required 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                      placeholder="Breve descripción de tu consulta..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-secondary-700 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-4">
                    Tus datos serán tratados con absoluta confidencialidad.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

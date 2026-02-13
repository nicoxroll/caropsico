import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlobPink, BlobPurple } from './Decorations';

export default function Newsletter() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse animation-delay-1000"></div>
         
         {/* Animated Blobs */}
         <BlobPink className="w-96 h-96 top-10 right-20 blob-shape opacity-30 animate-blob" />
         <BlobPurple className="w-80 h-80 bottom-10 left-20 blob-shape opacity-30 animate-blob animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Suscríbete a mi Newsletter
            </h2>
            <p className="text-slate-300 text-lg mb-10 font-light max-w-2xl mx-auto">
              Recibe artículos sobre bienestar, tips de salud mental y novedades del consultorio directamente en tu bandeja de entrada.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-grow px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-sm transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl font-bold font-display tracking-wide hover:shadow-lg hover:from-primary-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 group"
            >
              Suscribirse
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
          
          <p className="mt-6 text-sm text-slate-500">
            Respeto tu privacidad. Cero spam.
          </p>
        </div>
      </div>
    </section>
  );
}

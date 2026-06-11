import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';

interface CallToActionProps {
  onBookDemo: () => void;
}

export default function CallToAction({ onBookDemo }: CallToActionProps) {
  return (
    <section id="servicios" className="py-[120px] sm:py-[160px] px-6 md:px-10 max-w-[1728px] mx-auto bg-page-bg relative scroll-mt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo center badge */}
          <div className="w-12 h-12 rounded-full border border-text flex items-center justify-center mb-10 bg-white shadow-md">
            <span className="text-text font-bold text-lg leading-none font-display">B</span>
          </div>
          
          <h2 className="font-display text-[32px] sm:text-[60px] md:text-[76px] font-bold text-text tracking-tighter leading-[1.05] mb-10 max-w-4xl text-balance">
            Empieza tu transformación hoy de la mano de blockTech.
          </h2>
          
          <p className="font-sans text-xs sm:text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Permite que nuestro equipo lidere el diseño, construcción e integración de tus flujos de trabajo inteligentes a la medida exacta de tus necesidades corporativas.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={onBookDemo}
              className="bg-black text-white hover:bg-black/90 font-sans rounded-full transition-all duration-300 shrink-0 flex items-center justify-center gap-2 px-8 py-4 text-[11px] font-bold uppercase tracking-wider shadow-xl cursor-pointer pointer-events-auto"
            >
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>Agendar una Sesión Técnica</span>
            </button>
            
            <a 
              href="https://wa.me/573160424062?text=Hola%20Mateo,%20me%20interesa%20automatizar%20mi%20negocio%20con%20blockTech"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba5a] font-sans rounded-full transition-all duration-300 shrink-0 flex items-center justify-center gap-2 px-8 py-4 text-[11px] font-bold uppercase tracking-wider shadow-md cursor-pointer pointer-events-auto"
            >
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}

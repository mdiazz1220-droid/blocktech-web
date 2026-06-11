import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-[180px] sm:pt-[240px] px-6 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible bg-page-bg pb-[120px] sm:pb-[200px]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1100px]"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted font-semibold bg-soft-card-2 px-3 py-1.5 rounded-full border border-line/20">
          blockTech — Agencia de Inteligencia Artificial • Cali, Colombia
        </span>
        
        <h1 className="font-display text-[48px] sm:text-[68px] md:text-[84px] text-balance max-w-5xl mt-6 mb-8 text-text font-bold tracking-tighter leading-[1.05] relative">
          Automatiza tu negocio con Inteligencia Artificial
        </h1>
        
        <p className="font-sans text-body-lg text-muted max-w-2xl mx-auto mb-12 text-sm sm:text-lg leading-relaxed">
          Diseñamos soluciones reales que de verdad funcionan. Integración de contabilidad automática, agentes de contenido omnicanal, chatbots de ventas 24/7 y copilotos empresariales a la medida de tu operación.
        </p>

        <div className="flex gap-4 justify-center items-center mb-16">
          <a
            href="#servicios"
            className="group flex items-center justify-center gap-2 bg-black text-white hover:bg-black/90 px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>Lo que construimos</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#plataforma"
            className="flex items-center justify-center gap-2 border border-black/20 text-black hover:bg-black/5 px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer"
          >
            <span>Procesos & Datos</span>
          </a>
        </div>
      </motion.div>

      {/* Hero media container (vibrant abstract graphic / mock system screenshot) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.2 }}
        className="w-full max-w-[1400px] bg-panel-bg overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)] relative z-10 rounded-[30px] sm:rounded-[40px] h-[400px] sm:h-[600px] md:h-[750px] border border-line/30"
      >
        <img 
          alt="Abstract AI neural networks and automated data blocks blockTech Concept" 
          className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-[6s]" 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
        
        {/* Absolute floating details inside hero container for high design pedigree */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-left text-white max-w-sm sm:max-w-md bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
            <span className="font-mono text-[10px] tracking-widest text-white-soft uppercase font-semibold">Motor blockTech v1.5 Activo</span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
            Consolidamos modelos fundacionales y flujos propietarios de datos en un ecosistema seguro, sin alucinaciones.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

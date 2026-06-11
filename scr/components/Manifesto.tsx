import { motion } from 'motion/react';

export default function Manifesto() {
  return (
    <section className="py-[120px] sm:py-[180px] px-6 md:px-10 max-w-[1728px] mx-auto relative flex flex-col items-center text-center bg-page-bg overflow-hidden">
      
      {/* Absolute geometric layout decorative badge */}
      <div className="absolute top-0 right-[10%] w-[350px] h-[350px] opacity-10 pointer-events-none hidden sm:block">
        <svg className="w-full h-full" fill="none" stroke="url(#manifesto-grad)" strokeWidth="0.5" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="manifesto-grad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FF416C" />
              <stop offset="100%" stopColor="#FF4B2B" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" />
          <ellipse cx="50" cy="50" rx="24" ry="48" />
          <ellipse cx="50" cy="50" rx="48" ry="24" />
          <line x1="2" x2="98" y1="50" y2="50" />
          <line x1="50" x2="50" y1="2" y2="98" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1050px] relative z-10"
      >
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted font-bold mb-8">
          EL MANIFIESTO DE COHERENCIA COGNITIVA
        </p>
        
        <h2 className="font-display text-[26px] sm:text-[44px] md:text-[52px] leading-[1.25] sm:leading-[1.1] text-balance tracking-tight text-text font-light text-center">
          "A medida que los <span className="font-semibold text-black">agentes autónomos</span> de IA se despliegan para operar a escala empresarial, la necesidad de un <span className="font-semibold text-black">diseño de flujos automatizados de alta precisión</span> nunca ha sido tan crítica. blockTech unifica tus procesos, datos y herramientas preferidas sin fricción alguna."
        </h2>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';

export default function TrustMarquee() {
  const brands = [
    'Northline',
    'Arcform',
    'Velo Group',
    'Juniper',
    'Meridian',
    'Cognitive Lab',
    'Suisse Tech',
    'Nexo IA'
  ];

  return (
    <section className="py-12 px-6 border-t border-line/30 max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg relative z-0 pt-[40px]">
      <p className="font-sans text-[11px] font-bold text-muted/80 mb-8 uppercase tracking-[0.2em] text-center">
        INTEGRANDO SOLUCIONES COGNITIVAS Y FLUJOS QUE SÍ FUNCIONAN
      </p>
      
      <div className="w-full overflow-hidden select-none relative">
        {/* Soft edge masking gradients for ultra modern aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-container flex">
          <div className="animate-marquee flex gap-[80px] sm:gap-[130px] items-center text-muted/70 py-2">
            {brands.concat(brands).map((brand, idx) => (
              <span 
                key={idx} 
                className="font-display text-2xl sm:text-3xl font-bold tracking-tighter hover:text-text transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

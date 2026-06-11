import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TEAM_USE_CASES, UseCase } from '../types';
import { Sparkles, BarChart2, Laptop, Layers, Compass } from 'lucide-react';

export default function TeamUseCases() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'strategy' | 'marketing' | 'design' | 'sales'>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'strategy', label: 'Facturación / ERP' },
    { id: 'marketing', label: 'Agentes de Contenido' },
    { id: 'design', label: 'Dashboards & Control' },
    { id: 'sales', label: 'Bots de Ventas / WhatsApp' }
  ];

  const filteredUseCases = selectedCategory === 'all' 
    ? TEAM_USE_CASES 
    : TEAM_USE_CASES.filter(uc => uc.category === selectedCategory);

  return (
    <section id="casos" className="py-[100px] sm:py-[160px] px-6 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg border-t border-line/25 scroll-mt-20">
      
      <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted font-bold mb-4 text-center">
        ARQUITECTURAS COGNITIVAS SECTORIALES
      </p>
      
      <h2 className="font-display text-[32px] sm:text-[48px] mb-12 font-bold tracking-tight text-center text-text leading-tight">
        Llevando la IA a cada división corporativa.
      </h2>

      {/* Dynamic Filter Switcher */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-14 text-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-black text-page-bg shadow-md'
                : 'bg-white text-text border border-line/30 hover:bg-gray-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1400px]">
        <AnimatePresence mode="popLayout">
          {filteredUseCases.map((useCase) => (
            <motion.div
              layout
              key={useCase.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative h-[360px] sm:h-[420px] rounded-[32px] p-6 sm:p-9 flex flex-col justify-end group overflow-hidden shadow-sm border border-line/20 hover:shadow-xl transition-shadow duration-500 bg-black"
            >
              <img 
                alt={useCase.title} 
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105 opacity-55" 
                src={useCase.imageUrl} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-start">
                
                {/* Custom Tags */}
                <div className="flex flex-wrap gap-2 mb-3.5">
                  {useCase.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="font-mono text-[9px] uppercase tracking-wider text-white bg-white/10 backdrop-blur-md px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="font-mono text-[9px] uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded">
                    {useCase.category}
                  </span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold mb-2 text-white leading-tight">
                  {useCase.title}
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                  {useCase.description}
                </p>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}

import { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface FloatingNavProps {
  onBookDemo: () => void;
}

export default function FloatingNav({ onBookDemo }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-[24px] left-0 right-0 z-50 flex items-center justify-center px-4 w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[700px] flex items-center justify-between bg-black/95 backdrop-blur-xl rounded-full px-2 py-2 shadow-xl border border-white/10 h-[56px] transition-all duration-300">
        <div className="flex items-center gap-6 pl-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-[34px] h-[34px] rounded-full border border-page-bg/80 flex items-center justify-center shrink-0 bg-white transition-transform group-hover:rotate-12 duration-300">
              <span className="text-black font-bold text-sm leading-none font-display">B</span>
            </div>
            <span className="text-white font-display text-sm font-bold tracking-tight">blockTech</span>
          </a>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5">
            <a className="font-sans text-[11px] font-semibold text-page-bg/85 hover:text-page-bg transition-colors duration-200 uppercase tracking-wider" href="#servicios">Servicios</a>
            <a className="font-sans text-[11px] font-semibold text-page-bg/85 hover:text-page-bg transition-colors duration-200 uppercase tracking-wider" href="#plataforma">Nuestra IA</a>
            <a className="font-sans text-[11px] font-semibold text-page-bg/85 hover:text-page-bg transition-colors duration-200 uppercase tracking-wider" href="#casos">Casos</a>
            <a className="font-sans text-[11px] font-semibold text-page-bg/85 hover:text-page-bg transition-colors duration-200 uppercase tracking-wider" href="#blog">Blog</a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onBookDemo}
            className="border border-white/30 text-white font-sans rounded-full hover:bg-white hover:text-black transition-all duration-300 shrink-0 flex items-center px-4 text-[10px] h-[36px] font-semibold uppercase tracking-widest gap-1 cursor-pointer"
          >
            <span>Reservar Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center gap-8 pointer-events-auto p-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-400 p-2 border border-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              className="font-display text-4xl font-light text-white/90 hover:text-white transition-colors py-2" 
              href="#servicios"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              className="font-display text-4xl font-light text-white/90 hover:text-white transition-colors py-2" 
              href="#plataforma"
              onClick={() => setIsOpen(false)}
            >
              Nuestra IA
            </a>
            <a 
              className="font-display text-4xl font-light text-white/90 hover:text-white transition-colors py-2" 
              href="#casos"
              onClick={() => setIsOpen(false)}
            >
              Casos de Éxito
            </a>
            <a 
              className="font-display text-4xl font-light text-white/90 hover:text-white transition-colors py-2" 
              href="#blog"
              onClick={() => setIsOpen(false)}
            >
              Novedades
            </a>
          </div>

          <button 
            onClick={() => {
              setIsOpen(false);
              onBookDemo();
            }}
            className="mt-8 bg-white text-black px-8 py-4 rounded-full font-sans uppercase font-bold tracking-widest text-xs flex items-center gap-2 hover:bg-white-soft transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Hablar con un Especialista</span>
          </button>
        </div>
      )}
    </header>
  );
}

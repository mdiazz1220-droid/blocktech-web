import { Share2, Globe, Disc, Command, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[100px] pb-12 px-6 sm:px-10 rounded-t-[40px] sm:rounded-t-[64px] relative z-20">
      <div className="max-w-[1728px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand info column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white">
                <span className="text-black font-bold text-lg leading-none font-display">B</span>
              </div>
              <span className="text-white font-display text-lg font-bold tracking-tight">blockTech</span>
            </div>
            
            <p className="font-sans text-[13px] text-white/50 leading-relaxed max-w-xs">
              Diseño e integración de agentes de IA y flujos de automatización hiper-coherentes. Liderado por Mateo Diaz Zuluaga en Cali, Colombia.
            </p>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest">Contacto Directo</span>
              <a 
                href="https://wa.me/573160424062" 
                target="_blank" 
                rel="noreferrer" 
                className="font-sans text-[12px] text-white/80 hover:text-orange-400 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" /> 
                WhatsApp: +57 316 0424062
              </a>
            </div>
            
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              <a 
                href="https://www.instagram.com/block_tech_cali/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-orange-400 transition-colors" 
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/112343177/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-orange-400 transition-colors" 
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav column 1: Soluciones */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-[0.15em] text-[10px]">Sistemas</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#plataforma">Contabilidad Automática</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#servicios">Agentes de Contenido</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#plataforma">Chatbots de Ventas</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#casos">Historias de Éxito</a></li>
            </ul>
          </div>

          {/* Nav column 2: Servicios */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-[0.15em] text-[10px]">Servicios</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#servicios">Auditorías Operacionales</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#servicios">Integración CRM / ERP</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#">Copilotos a la Medida</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#">Dian / Facturación Latam</a></li>
            </ul>
          </div>

          {/* Nav column 3: Recursos */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-[0.15em] text-[10px]">Agencia</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#blog">Blog de blockTech</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#">Mateo Diaz Zuluaga (CEO)</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#">Contacto de Ventas</a></li>
              <li><a className="font-sans text-xs text-white/60 hover:text-white transition-colors" href="#">Cali, Colombia</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom divider and info */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-white/40">
            © 2026 blockTech. Todos los derechos reservados. Desarrollando automatizaciones de alto impacto.
          </p>
          <div className="flex flex-wrap gap-6 text-[11px]">
            <a className="font-sans text-white/40 hover:text-white transition-colors" href="#">Política de Privacidad</a>
            <a className="font-sans text-white/40 hover:text-white transition-colors" href="#">Términos del Servicio</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

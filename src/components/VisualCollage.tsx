import { motion } from 'motion/react';
import { Sparkles, Brain, RefreshCw, Volume2, CheckCircle, MessageSquare } from 'lucide-react';

export default function VisualCollage() {
  return (
    <section className="min-h-[850px] md:min-h-[1400px] w-full max-w-[1728px] mx-auto relative overflow-hidden bg-page-bg py-16 px-6">
      
      {/* Central Anchor Title */}
      <div className="md:absolute inset-0 flex justify-center items-center pointer-events-none z-0 my-10 md:my-0">
        <h2 className="font-display text-[54px] sm:text-[80px] md:text-[120px] font-extrabold text-text tracking-tighter leading-[0.85] text-center opacity-15 md:opacity-100 uppercase">
          Inteligencia<br />Cognitiva
        </h2>
      </div>

      {/* 
        MOBILE LAYOUT (Stacked Bento style / grid)
        Visible on small screens (<md)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden relative z-10">
        
        {/* Card 1 */}
        <div className="bg-white-card rounded-3xl p-6 border border-line/30 shadow-md">
          <div className="relative h-48 rounded-xl overflow-hidden mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1751467928435-22c8826b5310?q=80&w=800" alt="IA Processing" />
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="font-sans text-xs font-bold text-text uppercase tracking-widest">Ejecución del Agente</span>
            <span className="font-mono text-xs font-bold text-text">92%</span>
          </div>
          <div className="w-full bg-black/10 rounded-full h-2">
            <div className="bg-black w-[92%] h-2 rounded-full"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white-card rounded-3xl p-6 border border-line/30 shadow-md flex flex-col justify-between">
          <div className="relative h-48 rounded-xl overflow-hidden mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1762532264999-7dde57d37f22?q=80&w=800" alt="Auto-Sync" />
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider">Alineación de Modelos</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white-card rounded-3xl p-6 border border-line/30 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <span className="font-sans text-xs font-bold text-text uppercase tracking-wider">Flujos Automatizados</span>
            <div className="w-8 h-4 bg-black rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="font-sans text-sm text-text font-medium">Auto-Sincronización Semántica</p>
          <span className="text-xs text-muted">Estructura Corporativa Conectada</span>
        </div>

        {/* Card 4 */}
        <div className="bg-white-card rounded-3xl p-6 border border-line/30 shadow-md">
          <div className="relative h-48 rounded-xl overflow-hidden mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607874089816-bf5af74fe2c5?q=80&w=800" alt="Alineación vocal" />
          </div>
          <span className="font-mono text-[10px] bg-black text-white px-2 py-1 rounded tracking-widest uppercase">Análisis Cognitivo Escrito</span>
        </div>

        {/* Comment block mobile icon */}
        <div className="bg-soft-card-2 p-4 rounded-2xl flex items-center gap-3 border border-line/30">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 shrink-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUZpAK7kBAK1H5Anlz-i_nh19XyaGUt1hLDC6ZASnuBK2vRcwFDP46vx7HodMWCGvWJVA3aKLfp00pDRGNPsH0LVYvOGBSQ1KJIx2wTCxFcEJMNlnv9DHJKT0wyVelxRunXJN3d41Z2MPDK4poxQF_iybQaYL4ebVjC52RWnq9U6Y-VA7k5seZ7Z4c1n3nq7ply6CwSNm8-OH_B6wae1-h-Zmn2y3jh9urDyal2zhahuy408MHHCcPTmA9TNKUOA7WEsjuEy1iMvC" />
          </div>
          <div>
            <p className="font-sans text-xs font-bold text-text">Alejandra Ramos</p>
            <p className="font-sans text-xs text-text/80">"La clasificación de egresos e ingresos de blockTech nos ahorró 30 horas semanales."</p>
          </div>
        </div>
      </div>

      {/* 
        DESKTOP LAYOUT (Signature absolute overlapping grid)
        Visible on larger screens (>=md)
      */}
      <div className="hidden md:block absolute inset-0 w-full h-full lg:max-w-7xl mx-auto pointer-events-none">
        
        {/* 1. Top-left: Image with Glass UI Overlay */}
        <motion.div 
          whileHover={{ scale: 1.02, zIndex: 30 }}
          transition={{ duration: 0.3 }}
          className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl pointer-events-auto cursor-pointer"
          style={{ left: '6%', top: '8%', width: '340px', height: '260px', zIndex: 10 }}
        >
          <img className="w-full h-full object-cover select-none" src="https://images.unsplash.com/photo-1751467928435-22c8826b5310?q=80&w=1064" alt="Procesando Datos de AI" />
          <div className="absolute bottom-4 left-4 right-4 bg-white/35 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-[10px] text-text font-bold uppercase tracking-wider">Alineando Contexto</span>
              <span className="font-mono text-[10px] text-text font-bold">78%</span>
            </div>
            <div className="w-full bg-black/10 rounded-full h-1.5">
              <div className="bg-black w-[78%] h-1.5 rounded-full transition-all duration-1000"></div>
            </div>
          </div>
        </motion.div>

        {/* 2. Top-right: Tall Card with Image */}
        <motion.div 
          whileHover={{ scale: 1.02, zIndex: 30 }}
          transition={{ duration: 0.3 }}
          className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl pointer-events-auto cursor-pointer"
          style={{ right: '8%', top: '10%', width: '280px', height: '320px', zIndex: 10 }}
        >
          <img className="w-full h-full object-cover select-none" src="https://images.unsplash.com/photo-1762532264999-7dde57d37f22?q=80&w=2664" alt="Generación Creativa" />
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/55 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
            <Brain className="w-4 h-4 text-text" />
          </div>
        </motion.div>

        {/* 3. Mid-left: Floating Glass UI */}
        <motion.div 
          whileHover={{ scale: 1.03, zIndex: 30 }}
          transition={{ duration: 0.3 }}
          className="absolute rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 shadow-[0_12px_45px_rgba(0,0,0,0.06)] flex flex-col p-5 pointer-events-auto cursor-pointer"
          style={{ left: '3%', top: '42%', width: '260px', zIndex: 20 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-sans text-xs font-semibold text-text">Sincronización Autómata</span>
            <div className="w-10 h-6 bg-black rounded-full relative shadow-inner cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shadow-md">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[11px] font-bold text-text">Ecosistema Seguro</span>
              <span className="font-sans text-[12px] text-muted leading-none">Conectado B2B</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Mid-right: Image with Content Guidelines Label */}
        <motion.div 
          whileHover={{ scale: 1.02, zIndex: 30 }}
          transition={{ duration: 0.3 }}
          className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl pointer-events-auto cursor-pointer"
          style={{ right: '5%', top: '48%', width: '320px', height: '220px', zIndex: 10 }}
        >
          <img className="w-full h-full object-cover select-none" src="https://images.unsplash.com/photo-1607874089816-bf5af74fe2c5?q=80&w=2070" alt="Análisis Semántico" />
          <div className="absolute top-4 left-4 bg-white/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/50 shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="font-sans text-[10px] font-bold text-text uppercase tracking-wider">ANÁLISIS COGNITIVO</span>
          </div>
        </motion.div>

        {/* 5. Bottom-left: Large Image with Brand Voice */}
        <motion.div 
          whileHover={{ scale: 1.02, zIndex: 30 }}
          transition={{ duration: 0.3 }}
          className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl pointer-events-auto cursor-pointer"
          style={{ left: '10%', top: '68%', width: '380px', height: '260px', zIndex: 10 }}
        >
          <img className="w-full h-full object-cover select-none" src="https://images.unsplash.com/photo-1758369636841-241369c12f3b?q=80&w=1064" alt="Voice Model Match" />
          <div className="absolute bottom-5 left-5 bg-white/50 backdrop-blur-xl px-4 py-2 rounded-full border border-white/50 shadow-sm flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-text" />
            <span className="font-sans text-[10px] font-bold text-text uppercase tracking-wider">POLÍTICA TONAL</span>
          </div>
        </motion.div>

        {/* 6. Bottom-right: Wide Image */}
        <motion.div 
          whileHover={{ scale: 1.02, zIndex: 30 }}
          transition={{ duration: 0.3 }}
          className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl pointer-events-auto cursor-pointer"
          style={{ right: '12%', top: '74%', width: '360px', height: '240px', zIndex: 10 }}
        >
          <img className="w-full h-full object-cover select-none" src="https://images.unsplash.com/photo-1661962399580-80301d32d791?q=80&w=1625" alt="Alineación en la Nube" />
        </motion.div>

        {/* 7. Floating Comment / Profile */}
        <motion.div 
          whileHover={{ scale: 1.04, zIndex: 35 }}
          transition={{ duration: 0.3 }}
          className="absolute bg-white/40 backdrop-blur-3xl backdrop-saturate-[2] rounded-[24px] flex items-center gap-4 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/50 pointer-events-auto cursor-pointer"
          style={{ left: '42%', top: '84%', width: 'max-content', zIndex: 25 }}
        >
          <div className="w-10 h-10 rounded-full bg-soft-card overflow-hidden shadow-sm border border-white/60">
            <img className="w-full h-full object-cover select-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUZpAK7kBAK1H5Anlz-i_nh19XyaGUt1hLDC6ZASnuBK2vRcwFDP46vx7HodMWCGvWJVA3aKLfp00pDRGNPsH0LVYvOGBSQ1KJIx2wTCxFcEJMNlnv9DHJKT0wyVelxRunXJN3d41Z2MPDK4poxQF_iybQaYL4ebVjC52RWnq9U6Y-VA7k5seZ7Z4c1n3nq7ply6CwSNm8-OH_B6wae1-h-Zmn2y3jh9urDyal2zhahuy408MHHCcPTmA9TNKUOA7WEsjuEy1iMvC" alt="Alejandra Ramos" />
          </div>
          <div className="flex flex-col pr-4 text-left">
            <span className="font-sans text-[11px] text-text font-bold">Alejandra Ramos</span>
            <span className="font-sans text-[13px] text-text/80 leading-tight">"La contabilidad automática con blockTech transformó la agencia."</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

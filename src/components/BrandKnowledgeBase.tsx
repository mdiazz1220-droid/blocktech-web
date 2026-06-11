import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Database, ShieldAlert, Folder, Search, Sparkles, BookOpen } from 'lucide-react';
import { KNOWLEDGE_FILES, KnowledgeFile } from '../types';

export default function BrandKnowledgeBase() {
  const [selectedFile, setSelectedFile] = useState<KnowledgeFile>(KNOWLEDGE_FILES[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFiles = KNOWLEDGE_FILES.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="plataforma" className="py-[80px] sm:py-[120px] px-6 md:px-10 max-w-[1728px] mx-auto bg-page-bg scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] md:gap-[100px] items-center">
        
        {/* Left Interactive Interface (Files & Extraction Simulator) */}
        <div className="bg-gradient-to-br from-soft-card-2 to-soft-card rounded-[32px] sm:rounded-[40px] p-4 sm:p-8 min-h-[550px] sm:min-h-[660px] flex flex-col justify-between relative overflow-hidden border border-line/30 shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-b-line/30">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-text" />
                <span className="font-display font-bold text-sm text-text">Centro Operativo blockTech</span>
              </div>
              <span className="font-mono text-[9px] bg-black/10 text-text/80 px-2 py-1 rounded">ESTADO: OPERATIVO</span>
            </div>

            {/* Simple Search bar inside simulation */}
            <div className="relative mb-6">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-3" />
              <input 
                type="text" 
                placeholder="Buscar procesos o flujos automatizados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white-card/80 border border-line/50 rounded-xl py-2 pl-10 pr-4 text-xs font-sans text-text focus:outline-none focus:ring-1 focus:ring-black placeholder:text-muted/65"
              />
            </div>

            <p className="font-sans text-[11px] font-bold text-muted uppercase tracking-wider mb-3">SELECCIONA UN PROCESO CLAVE</p>
            
            {/* List of files */}
            <div className="space-y-2.5">
              {filteredFiles.map((file) => {
                const isSelected = selectedFile.id === file.id;
                return (
                  <button
                    key={file.id}
                    onClick={() => setSelectedFile(file)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left ${
                      isSelected 
                      ? 'bg-white-card border-black shadow-[0_4px_20px_rgba(0,0,0,0.03)] scale-[1.01]' 
                      : 'bg-white-card/40 border-line/30 hover:bg-white-card/80 hover:border-line/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Folder className={`w-4 h-4 ${isSelected ? 'text-orange-500' : 'text-muted'}`} />
                      <div className="flex flex-col">
                        <span className="font-sans text-xs font-semibold text-text">{file.name}</span>
                        <span className="font-mono text-[9px] text-muted">{file.size}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="font-mono text-[9px] text-orange-500 font-bold bg-orange-500/10 px-2 py-0.5 rounded flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-2.5 h-2.5" /> INDEXADO
                      </span>
                    )}
                  </button>
                );
              })}
              {filteredFiles.length === 0 && (
                <div className="text-center py-8 text-xs text-muted font-sans">No se encontraron archivos.</div>
              )}
            </div>
          </div>

          {/* Extracted Semantic Rules Container */}
          <div className="mt-8 bg-white-card rounded-2xl p-5 border border-line/30 shadow-md">
            <div className="flex items-center gap-2 mb-3.5">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-text">Reglas Tonales Extraídas por IA</span>
            </div>
            
            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFile.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  {selectedFile.extractedRules.map((rule, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-xs font-sans text-text/90 leading-relaxed bg-page-bg/45 p-2 rounded border border-line/10">
                      <span className="font-mono text-[10px] text-muted select-none mt-0.5">[0{idx + 1}]</span>
                      <p>{rule}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Right Content Column */}
        <div className="flex flex-col justify-center h-full max-w-lg lg:pl-4">
          <h3 className="font-display text-[32px] sm:text-[44px] leading-[1.1] mb-8 font-bold tracking-tight text-text">
            Sistemas robustos de automatización con IA.
          </h3>
          
          <div className="relative pl-6 border-l-2 border-line space-y-10">
            {/* Colored top-focus border accent */}
            <div className="absolute left-[-2px] top-0 w-0.5 h-[120px] bg-gradient-to-b from-[#FF416C] to-[#FF4B2B]"></div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-text">Procesos Conectados</h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Conectamos tu CRM, correo electrónico, Dian y sistemas de mensajería (WhatsApp / Instagram) en flujos de datos inteligentes sin fricción.
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-text">Exactitud Operativa</h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Nuestros extractores y validadores OCR detectan valores, NIT, IVA y conceptos contables con un margen de precisión de hasta el 99.5% sin margen de error humano.
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-text">Escala sin Esfuerzo</h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Implementa bots de pedido 24/7 de forma rápida, liberando a tu equipo comercial de procesamientos manuales y respuestas repetitivas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

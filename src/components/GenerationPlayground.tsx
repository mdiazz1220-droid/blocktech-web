import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Copy, Check, Send, RotateCw } from 'lucide-react';
import { PLAYGROUND_TEMPLATES } from '../types';

export default function GenerationPlayground() {
  const [activeTab, setActiveTab] = useState(PLAYGROUND_TEMPLATES[0].id);
  const [typedResponse, setTypedResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentTemplate = PLAYGROUND_TEMPLATES.find(t => t.id === activeTab) || PLAYGROUND_TEMPLATES[0];

  useEffect(() => {
    // Simulate generation typing output whenever active template changes
    setIsGenerating(true);
    setTypedResponse('');
    let index = 0;
    const fullText = currentTemplate.response;
    
    // Quick typing simulation
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedResponse((prev) => prev + fullText.charAt(index));
        index += 2; // Grab two letters at a time for snappier experience
      } else {
        setIsGenerating(false);
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activeTab, currentTemplate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTemplate.response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-[80px] sm:py-[120px] px-6 md:px-10 max-w-[1728px] mx-auto bg-page-bg border-t border-line/25">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] md:gap-[100px] items-center">
        
        {/* Left Side: Descriptions */}
        <div className="flex flex-col justify-center h-full max-w-lg order-2 lg:order-1">
          <h3 className="font-display text-[32px] sm:text-[44px] leading-[1.1] mb-8 font-bold tracking-tight text-text">
            Genera activos alineados a tu marca en segundos.
          </h3>
          
          <div className="relative pl-6 border-l-2 border-line space-y-10">
            {/* Colored top-focus border accent */}
            <div className="absolute left-[-2px] top-0 w-0.5 h-[120px] bg-gradient-to-b from-[#FF416C] to-[#FF4B2B]"></div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-text font-semibold">Garantía de Fidelidad Coherente</h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Cada párrafo de copy corporativo, brief de campaña, o contenido técnico generado es analizado por nuestro motor de alineación tonal antes de mostrarse en pantalla.
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-text font-semibold">Estructura Adaptativa</h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Nuestros agentes de producción reconocen el canal de destino (comunicado de prensa, LinkedIn, etc.) y ajustan automáticamente el formato y la densidad semántica.
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-text font-semibold">Integración Multitarea</h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Crea publicaciones completas listas para revisión por directivos humanos. Reduce la iteración de agencias externas de semanas a microsegundos.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive AI Generation Playground */}
        <div className="bg-gradient-to-tr from-[#E0EAFC] to-[#CFDEF3] rounded-[32px] sm:rounded-[40px] p-4 sm:p-8 min-h-[550px] sm:min-h-[660px] flex flex-col justify-center relative overflow-hidden border border-line/30 shadow-inner order-1 lg:order-2">
          
          <div className="w-full bg-white-soft/95 backdrop-blur-xl rounded-[24px] shadow-2xl p-4 sm:p-6 border border-white/60">
            
            {/* Header of simulator */}
            <div className="flex items-center justify-between mb-5 border-b border-line/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center shrink-0 bg-black">
                  <span className="text-white font-bold text-[10px] leading-none font-display">B</span>
                </div>
                <span className="font-sans text-[10px] font-bold text-muted uppercase tracking-[0.15em]">BLOCKTECH STUDIO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-[9px] text-muted uppercase">AGENTE REDACTOR</span>
              </div>
            </div>

            {/* Selector tabs of Playground */}
            <div className="flex gap-2 border-b border-line/10 pb-4 overflow-x-auto">
              {PLAYGROUND_TEMPLATES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-semibold whitespace-nowrap transition-all duration-300 pointer-events-auto cursor-pointer ${
                    activeTab === item.id 
                    ? 'bg-black text-white' 
                    : 'bg-black/5 text-muted hover:bg-black/10'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Prompt Section */}
            <div className="mt-4 bg-muted/10 rounded-xl p-3 border border-line/10">
              <span className="font-mono text-[9px] text-muted block mb-1">CONSOLA INSTANTÁNEA: PROMPT INTENSIFICADO</span>
              <p className="font-sans text-xs text-text/85 font-medium leading-relaxed italic">
                "{currentTemplate.prompt}"
              </p>
            </div>

            {/* Generation Sandbox output */}
            <div className="mt-4 bg-black/95 text-white/90 rounded-2xl p-5 border border-white/10 font-mono text-xs min-h-[220px] max-h-[300px] overflow-y-auto relative selection:bg-orange-500/35 selection:text-white">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <span className="text-[10px] uppercase text-white/40 tracking-widest flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-orange-400" /> Terminal de Generación
                </span>
                
                <div className="flex gap-2">
                  <button 
                    onClick={handleCopy}
                    disabled={isGenerating}
                    className="p-1 px-2 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors duration-200 text-[10px] flex items-center gap-1"
                    title="Copiar respuesta"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-green-400" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Typed or simulated text response */}
              <div className="whitespace-pre-wrap leading-relaxed min-h-[120px] font-mono text-[11px] select-text">
                {typedResponse}
                {isGenerating && (
                  <span className="inline-block w-1.5 h-4 bg-orange-400 animate-pulse ml-0.5" />
                )}
              </div>

              {/* Simulated progress indicator */}
              {isGenerating && (
                <div className="absolute top-2 right-4 flex items-center gap-1.5 bg-orange-500/10 text-orange-400 font-mono text-[9px] px-2 py-0.5 rounded border border-orange-500/20">
                  <RotateCw className="w-2.5 h-2.5 animate-spin" /> Escribiendo...
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-muted font-sans border-t border-line/10 pt-3">
              <span>Velocidad de Respuesta: ~45 Tokens/seg</span>
              <span className="bg-orange-500/10 text-orange-600 font-bold font-mono px-2 py-0.5 rounded">MODELO: GEMINI 1.5 PRO</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

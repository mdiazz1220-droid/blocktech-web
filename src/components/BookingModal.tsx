import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, Building, User, Mail, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    objective: 'agents',
    date: '11-june',
    time: '10-00'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const objetivos = [
    { id: 'agents', label: 'Estrategia y Agentes Inteligentes' },
    { id: 'automation', label: 'Automatización de Procesos B2B' },
    { id: 'design', label: 'Sistemas de Activos AI Coherente' },
    { id: 'consulting', label: 'Evaluación Técnica de Modelos' }
  ];

  const dates = [
    { id: '11-june', label: 'Mañana, 11 de Junio' },
    { id: '12-june', label: 'Viernes, 12 de Junio' },
    { id: '15-june', label: 'Lunes, 15 de Junio' },
    { id: '16-june', label: 'Martes, 16 de Junio' }
  ];

  const times = [
    { id: '09-30', label: '09:30 AM' },
    { id: '11-00', label: '11:00 AM' },
    { id: '14-30', label: '02:30 PM' },
    { id: '16.00', label: '04:00 PM' }
  ];

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  };

  const validateAndSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor ingresa tu nombre';
    if (!formData.company.trim()) newErrors.company = 'Por favor ingresa el nombre de tu empresa';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Ingresa un correo institucional válido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success step
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Glass Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-[28px] border border-line/30 shadow-2xl overflow-hidden w-full max-w-[580px] relative z-10 p-6 sm:p-8"
          >
            {/* Close trigger button */}
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 text-muted hover:text-black p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 1 ? (
              <form onSubmit={validateAndSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-muted">Sesión de Consulta</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text">Reserva tu Sesión Técnica</h3>
                  <p className="font-sans text-xs text-muted leading-relaxed mt-1">
                    Crea una agenda privada con Mateo Díaz o un ingeniero especialista de blockTech.
                  </p>
                </div>

                {/* Main Subject Section */}
                <div>
                  <label className="block font-sans text-[11px] font-bold text-text mb-2 uppercase tracking-wide">
                    ¿Cuál es tu principal objetivo de IA?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {objetivos.map(obj => (
                      <button
                        key={obj.id}
                        type="button"
                        onClick={() => handleInputChange('objective', obj.id)}
                        className={`p-3 text-left rounded-xl text-xs font-sans border transition-all pointer-events-auto cursor-pointer ${
                          formData.objective === obj.id
                            ? 'bg-black text-white border-black font-semibold'
                            : 'bg-page-bg/55 border-line/30 hover:bg-page-bg'
                        }`}
                      >
                        {obj.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-3.5">
                  <div>
                    <label className="block font-sans text-[11px] font-bold text-text mb-1 uppercase tracking-wide">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-muted/60" />
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ingresa tu nombre..."
                        className={`w-full bg-page-bg/55 border ${errors.name ? 'border-red-400' : 'border-line/45'} rounded-xl py-2.5 pl-10 pr-4 text-xs font-sans text-text focus:outline-none focus:ring-1 focus:ring-black`}
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 font-sans">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[11px] font-bold text-text mb-1 uppercase tracking-wide">Compañía</label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-muted/60" />
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Tu empresa..."
                          className={`w-full bg-page-bg/55 border ${errors.company ? 'border-red-400' : 'border-line/45'} rounded-xl py-2.5 pl-10 pr-4 text-xs font-sans text-text focus:outline-none focus:ring-1 focus:ring-black`}
                        />
                      </div>
                      {errors.company && <p className="text-[10px] text-red-500 mt-1 font-sans">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] font-bold text-text mb-1 uppercase tracking-wide">Email Laboral</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-muted/60" />
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="nombre@empresa.com"
                          className={`w-full bg-page-bg/55 border ${errors.email ? 'border-red-400' : 'border-line/45'} rounded-xl py-2.5 pl-10 pr-4 text-xs font-sans text-text focus:outline-none focus:ring-1 focus:ring-black`}
                        />
                      </div>
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 font-sans">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Date & Time Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-line/20 pt-4">
                  <div>
                    <label className="block font-sans text-[11px] font-bold text-text mb-1.5 uppercase tracking-wide">Selecciona Fecha</label>
                    <select 
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full bg-page-bg/55 border border-line/45 rounded-xl py-2.5 px-3 text-xs font-sans text-text focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      {dates.map(d => (
                        <option key={d.id} value={d.id}>{d.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] font-bold text-text mb-1.5 uppercase tracking-wide">Selecciona Hora (COT - Colombia)</label>
                    <select 
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full bg-page-bg/55 border border-line/45 rounded-xl py-2.5 px-3 text-xs font-sans text-text focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      {times.map(t => (
                        <option key={t.id} value={t.id}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Form Action Button */}
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-black/85 text-white py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                >
                  Confirmar Reserva Técnica
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto text-green-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-text">¡Reserva Confirmada!</h3>
                  <p className="font-sans text-xs text-muted max-w-sm mx-auto leading-relaxed">
                    Hemos agendado con éxito tu consulta para el <span className="font-bold text-text">{dates.find(d => d.id === formData.date)?.label}</span> a las <span className="font-bold text-text">{times.find(t => t.id === formData.time)?.label}</span>.
                  </p>
                </div>

                <div className="bg-page-bg p-4 rounded-xl text-left border border-line/20 space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between items-center text-[10px] font-mono text-muted border-b border-line/10 pb-1.5">
                    <span>CITA CONFIRMADA • BLOCKTECH</span>
                    <span>TICKET #[{Math.floor(1000 + Math.random() * 9000)}]</span>
                  </div>
                  <p className="font-sans text-xs text-text"><strong>Nombre</strong>: {formData.name}</p>
                  <p className="font-sans text-xs text-text"><strong>Empresa</strong>: {formData.company}</p>
                  <p className="font-sans text-xs text-text"><strong>Objetivo</strong>: Recibirás un enlace de videollamada de Google Meet al correo <span className="underline">{formData.email}</span>.</p>
                </div>

                <button
                  onClick={handleClose}
                  className="border border-line/50 text-text hover:bg-page-bg px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer pointer-events-auto"
                >
                  Entendido, Cerrar
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-[100px] sm:py-[160px] px-6 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center bg-page-bg relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <Quote className="w-12 h-12 text-muted-light mb-10 opacity-70" />

        <h2 className="font-display text-[26px] sm:text-[44px] md:text-[52px] leading-[1.25] sm:leading-[1.1] tracking-tight text-text mb-12 text-balance max-w-[1000px] font-light">
          "Nuestra colaboración con <span className="font-semibold text-black">blockTech</span> liberó por completo a nuestro equipo operativo. Su integración de contabilidad automática y bots de ventas redujo un 80% las horas de digitación manual."
        </h2>

        <div className="flex items-center gap-4 text-left">
          <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shadow-md border-2 border-white select-none">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9" 
              alt="Alejandra Ramos"
            />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-text">Alejandra Ramos</p>
            <p className="font-sans text-xs text-muted font-medium">VP de Estrategia de Marca, Northline</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

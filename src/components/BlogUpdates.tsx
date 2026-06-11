import { motion } from 'motion/react';
import { BLOG_UPDATES } from '../types';
import { ArrowUpRight } from 'lucide-react';

export default function BlogUpdates() {
  return (
    <section id="blog" className="py-[100px] sm:py-[120px] px-6 md:px-10 max-w-[1728px] mx-auto bg-page-bg border-t border-line/20 scroll-mt-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted font-bold mb-3">
            NOTICIAS Y PUBLICACIONES COGNITIVAS
          </p>
          <h2 className="font-display text-[32px] sm:text-[44px] font-bold tracking-tight text-text leading-none">
            Últimas Novedades
          </h2>
        </div>
        
        <button className="font-sans text-xs font-semibold uppercase tracking-wider border-b border-black text-text pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors pointer-events-auto cursor-pointer">
          Explorar Todo el Archivo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_UPDATES.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer pointer-events-auto"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-[32px] mb-6 overflow-hidden shadow-md border border-line/10">
              <img 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none" 
                src={post.imageUrl} 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
              
              {/* Overlay with a beautiful white glass icon */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <p className="font-sans text-[11px] text-muted font-semibold mb-3">
              {post.category} • {post.date}
            </p>
            
            <h4 className="font-display text-lg sm:text-xl font-bold text-text leading-snug group-hover:text-black hover:underline underline-offset-4 decoration-line transition-all duration-300">
              {post.title}
            </h4>
            
            <span className="font-sans text-xs text-muted/80 block mt-2 font-medium">
              {post.readTime}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

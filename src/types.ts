/**
 * Types & Static Data for blockTech - Spanish AI Agency Landing Page
 */

export interface KnowledgeFile {
  id: string;
  name: string;
  type: 'strategy' | 'guidelines' | 'assets' | 'data';
  size: string;
  extractedRules: string[];
}

export interface UseCase {
  id: string;
  category: 'strategy' | 'marketing' | 'design' | 'sales';
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface BlogItem {
  id: string;
  category: string;
  date: string;
  title: string;
  imageUrl: string;
  readTime: string;
}

export const KNOWLEDGE_FILES: KnowledgeFile[] = [
  {
    id: 'kb-1',
    name: 'blockTech_Estrategia_IA_2026.pdf',
    type: 'strategy',
    size: '4.8 MB',
    extractedRules: [
      'Tono de blockTech: Analítico, preciso, tecnológico y de alto enfoque estético.',
      'Target clave: Empresas que operan en Colombia y Latinoamérica buscando eficiencias reales.',
      'Valores core: Cero palabras de relleno o "hype". Enfoque cuantitativo antes que especulativo.'
    ]
  },
  {
    id: 'kb-2',
    name: 'Procesos_Automatizacion_Finanzas.docx',
    type: 'guidelines',
    size: '2.1 MB',
    extractedRules: [
      'Contabilidad automática: Extracción estricta de facturas bajo la normativa Dian Colombia.',
      'Conciliación de egresos e ingresos con reporte diario directo a Slack/WhatsApp.',
      'Alertas preventivas de flujo de caja que se ejecutan automáticamente a las 8:00 AM.'
    ]
  },
  {
    id: 'kb-3',
    name: 'Manual_TonoVoice_blockTech_Cali.zip',
    type: 'assets',
    size: '12.5 MB',
    extractedRules: [
      'Voz corporativa blockTech: Activa, ágil y experta, omitiendo jerga académica densa o aburrida.',
      'Marca dominante: Fondo de Arena Suave (#FAF9F5) y Antracita mate (#1B1B1B).',
      'Layout de cuadrícula suiza con márgenes amplios (mínimo 40px).'
    ]
  },
  {
    id: 'kb-4',
    name: 'Reporte_Metricas_Operativas.csv',
    type: 'data',
    size: '1.2 MB',
    extractedRules: [
      'Eficiencia de tiempo promedio lograda tras integraciones: 78.4%.',
      'Margen de error en la extracción OCR de facturas: Menor al 0.5%.',
      'Tasa de respuesta del Chatbot en consultas recurrentes: 100% instantánea las 24 horas.'
    ]
  }
];

export const PLAYGROUND_TEMPLATES = [
  {
    id: 'temp-1',
    title: 'Post de Contenido blockTech',
    prompt: 'Genera una publicación minimalista para LinkedIn sobre el verdadero beneficio de la contabilidad automatizada...',
    response: `**¿Cuánto tiempo pierde tu equipo financiero en tareas manuales?** ⏳

En **blockTech**, demostramos con datos que automatizar la clasificación de egresos e ingresos cambia las reglas del juego operacional.

- **Detección Inmediata**: Lectura autónoma de PDFs de facturas de proveedores.
- **Flujo de Caja Real**: Análisis en vivo sin hojas de cálculo desactualizadas.
- **Cero Errores**: Sistema conectado directo a tu software contable o base de datos.

La transformación digital no es teorizar. Es automatizar procesos reales.

Haz clic para cotizar tu flujo de IA personalizado: wa.me/573160424062`
  },
  {
    id: 'temp-2',
    title: 'Chatbot de Ventas',
    prompt: 'Escribe un fragmento de conversación donde un Chatbot de Ventas 24/7 de blockTech atiende un nuevo lead en Cali...',
    response: `### Simulación de Flujo: Chatbot de Ventas blockTech

**Cliente**: "Hola, me interesa automatizar la cobranza de mi negocio."
**Agente blockTech**: "Hola de parte de Mateo Diaz y el equipo de blockTech. 🧠
Tengo dos formas de ayudarte de inmediato:
1. Automatizar la extracción de facturas desde PDF/Email con reporte directo.
2. Crear un Bot de cobranza en WhatsApp integrado a tu CRM.

Dime, ¿cuántas facturas promedio procesas al mes para darte un diagnóstico rápido?"`
  },
  {
    id: 'temp-3',
    title: 'Reporte de Facturas IA',
    prompt: 'Genera un resumen en formato de consola sobre el procesamiento automático de 45 facturas recibidas esta mañana...',
    response: `### PIPELINE: EXTRACTOR COGNITIVO blockTech v1.2
[OK] Inicializando lector de correos (ingresos@empresa.com)
[OK] Detectados 45 correos sin leer con adjuntos PDF.
[OK] OCR activo: Extrayendo Rut, NIT, Valores antes de IVA, IVA y Total.
[INFO] Conciliación en base de datos completada (45/45).
[INFO] Alertas de retención de impuestos generadas para el departamento de contabilidad.

>> Resumen de Operación: $128,450,000 COP conciliados con cero intervención humana.
>> Notificación enviada a Slack corporativo del CEO Mateo Díaz.`
  }
];

export const TEAM_USE_CASES: UseCase[] = [
  {
    id: 'uc-1',
    category: 'strategy',
    title: 'Sistemas que ya funcionan',
    description: 'Sistema de Facturas Automático que lee correos, extrae PDFs, ingresa datos al sistema y genera alertas en un pipeline automatizado de alta precisión.',
    imageUrl: 'https://images.unsplash.com/photo-1614852207233-e8d771f8e9fc?q=80&w=1000&auto=format&fit=crop',
    tags: ['Facturación', 'Dian Colombia', 'Cero Fricción']
  },
  {
    id: 'uc-2',
    category: 'marketing',
    title: 'Agente Publicitario Inteligente',
    description: 'Analiza competidores, diseña briefs creativos y programa copys y newsletters optimizados alineados al tono exacto de tu negocio 24/7.',
    imageUrl: 'https://images.unsplash.com/photo-1645811791249-93a1e10d0169?q=80&w=1000&auto=format&fit=crop',
    tags: ['Generación', 'Redes Sociales', 'Coherencia']
  },
  {
    id: 'uc-3',
    category: 'design',
    title: 'Panel de Control Unificado',
    description: 'Un centro operativo dinámico e interactivo en directo donde ves el rendimiento operativo y financiero de tus flujos de inteligencia artificial.',
    imageUrl: 'https://images.unsplash.com/photo-1751467928435-22c8826b5310?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dashboards', 'Analytics', 'Toma de Decisiones']
  },
  {
    id: 'uc-4',
    category: 'sales',
    title: 'Chatbot de Pedidos 24/7',
    description: 'Recibe órdenes de e-commerce y WhatsApp, valida existencias en tiempo real y coordina el envío de tus productos sin demoras.',
    imageUrl: 'https://images.unsplash.com/photo-1774420073915-96cc5e3abdb7?q=80&w=1000&auto=format&fit=crop',
    tags: ['Ventas', 'WhatsApp Bot', 'Cierre de Leads']
  }
];

export const BLOG_UPDATES: BlogItem[] = [
  {
    id: 'blog-1',
    category: 'Actualización • blockTech',
    date: '10 de Junio',
    title: 'Cómo conectar la facturación automatizada Dian en Colombia utilizando Agentes de Inteligencia Artificial',
    imageUrl: 'https://images.unsplash.com/photo-1615714259003-5db15f3cf5f5?q=80&w=800&auto=format&fit=crop',
    readTime: '4 min de lectura'
  },
  {
    id: 'blog-2',
    category: 'Casos • Automatización',
    date: '04 de Junio',
    title: 'Sistemas que ya funcionan: Reduciendo el tiempo administrativo en contabilidad contable en Cali de 15 días a 10 minutos',
    imageUrl: 'https://images.unsplash.com/photo-1646388286080-62887d1b34ab?q=80&w=800&auto=format&fit=crop',
    readTime: '5 min de lectura'
  },
  {
    id: 'blog-3',
    category: 'Estrategia • Copiloto',
    date: '28 de Mayo',
    title: 'El Copiloto Empresarial: Cómo blockTech integra notas automáticas de reuniones en Notion, Trello y Asana',
    imageUrl: 'https://images.unsplash.com/photo-1615714259121-c9870fd23fcd?q=80&w=800&auto=format&fit=crop',
    readTime: '3 min de lectura'
  }
];

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  popularQuestions: string[];
}

export const COACHING_CATEGORIES: Category[] = [
  {
    id: 'health',
    name: 'Salud y Bienestar',
    icon: '🏥',
    description: 'Consejos médicos, nutrición y bienestar',
    color: 'text-green-600',
    popularQuestions: [
      'Consulta nutricional',
      'Planificación de ejercicios',
      'Revisión de síntomas'
    ]
  },
  {
    id: 'psychology',
    name: 'Psicología',
    icon: '🧠',
    description: 'Salud mental y orientación conductual',
    color: 'text-purple-600',
    popularQuestions: [
      'Manejo del estrés',
      'Consejos de relaciones',
      'Apoyo para ansiedad'
    ]
  },
  {
    id: 'law',
    name: 'Asesoría Legal',
    icon: '⚖️',
    description: 'Consultoría y orientación legal',
    color: 'text-blue-600',
    popularQuestions: [
      'Revisión de contratos',
      'Consulta de derechos',
      'Ayuda con documentos'
    ]
  },
  {
    id: 'mechanics',
    name: 'Automotriz',
    icon: '🔧',
    description: 'Reparación y mantenimiento de autos',
    color: 'text-orange-600',
    popularQuestions: [
      'Diagnóstico de motor',
      'Cronograma de mantenimiento',
      'Estimaciones de reparación'
    ]
  },
  {
    id: 'programming',
    name: 'Programación',
    icon: '💻',
    description: 'Ayuda con código y orientación técnica',
    color: 'text-indigo-600',
    popularQuestions: [
      'Debug de código',
      'Consejos de arquitectura',
      'Selección de tecnología'
    ]
  },
  {
    id: 'cloud',
    name: 'Servicios en la Nube',
    icon: '☁️',
    description: 'Arquitectura en la nube y DevOps',
    color: 'text-sky-600',
    popularQuestions: [
      'Configuración AWS',
      'Pipeline DevOps',
      'Migración a la nube'
    ]
  }
];
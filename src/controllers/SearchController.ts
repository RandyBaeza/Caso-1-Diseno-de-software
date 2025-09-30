import { Coach } from '@/models/Coach';
import { CoachingRequest } from '@/models/Coach';
import coachSarahImage from '@/assets/coach-sarah.jpg';
import coachMichaelImage from '@/assets/coach-michael.jpg';
import coachElenaImage from '@/assets/coach-elena.jpg';

// Mock data for development
const MOCK_COACHES: Coach[] = [
  {
    id: '1',
    name: 'Dra. Sarah Martínez',
    photo: coachSarahImage,
    specialties: ['Diagnósticos Automotrices', 'Reparación de Motor'],
    rating: 4.8,
    reviewCount: 127,
    professionalBackground: 'Mecánica Maestra Certificada con más de 15 años de experiencia en diagnósticos automotrices y reparación. Especializada en vehículos europeos y domésticos.',
    experience: '15+ años',
    isAvailable: true,
    location: 'Bogotá, Colombia',
    expertise: ['Diagnóstico de Motor', 'Sistemas de Frenos', 'Problemas Eléctricos', 'Transmisión'],
    languages: ['Español', 'Inglés'],
    responseTime: '2-3 minutos'
  },
  {
    id: '2',
    name: 'Miguel Chen',
    photo: coachMichaelImage,
    specialties: ['Desarrollo Full-Stack', 'Arquitectura de Sistemas'],
    rating: 4.9,
    reviewCount: 203,
    professionalBackground: 'Ingeniero de Software Senior en grandes empresas tecnológicas. Experto en React, Node.js y arquitectura en la nube con más de 10 años construyendo aplicaciones escalables.',
    experience: '10+ años',
    isAvailable: true,
    location: 'São Paulo, Brasil',
    expertise: ['React', 'Node.js', 'AWS', 'Diseño de Sistemas', 'Desarrollo de APIs'],
    languages: ['Español', 'Portugués', 'Inglés'],
    responseTime: '1-2 minutos'
  },
  {
    id: '3',
    name: 'Dra. Elena Rodríguez',
    photo: coachElenaImage,
    specialties: ['Psicología Clínica', 'Manejo del Estrés'],
    rating: 4.7,
    reviewCount: 89,
    professionalBackground: 'Psicóloga Clínica Licenciada especializada en ansiedad, manejo del estrés y terapia cognitivo-conductual. PhD en Psicología de Stanford.',
    experience: '8+ años',
    isAvailable: false,
    location: 'Medellín, Colombia',
    expertise: ['TCC', 'Tratamiento de Ansiedad', 'Manejo del Estrés', 'Mindfulness'],
    languages: ['Español', 'Inglés'],
    responseTime: '5-10 minutos'
  }
];

export class SearchController {
  async searchCoaches(request: Partial<CoachingRequest>): Promise<Coach[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple filtering based on description keywords
    const keywords = request.description?.toLowerCase().split(' ') || [];
    
    return MOCK_COACHES.filter(coach => {
      if (keywords.some(keyword => 
        coach.specialties.some(specialty => specialty.toLowerCase().includes(keyword)) ||
        coach.expertise.some(expertise => expertise.toLowerCase().includes(keyword)) ||
        coach.professionalBackground.toLowerCase().includes(keyword)
      )) {
        return true;
      }
      return coach.isAvailable; // Return available coaches as fallback
    });
  }

  async getCoachById(id: string): Promise<Coach | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_COACHES.find(coach => coach.id === id) || null;
  }

  async requestSession(coachId: string, userId: string, requestId: string): Promise<boolean> {
    // Simulate session request
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Sesión solicitada con coach ${coachId} para usuario ${userId}`);
    return true;
  }
}
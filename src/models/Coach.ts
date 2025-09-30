export interface Coach {
  id: string;
  name: string;
  photo: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  professionalBackground: string;
  experience: string;
  isAvailable: boolean;
  location: string;
  expertise: string[];
  languages: string[];
  responseTime: string;
}

export interface CoachingRequest {
  id: string;
  userId: string;
  description: string;
  audioUrl?: string;
  category: string;
  location?: string;
  preferredLanguage?: string;
  urgency: 'low' | 'medium' | 'high';
  createdAt: Date;
}

export interface CoachingSession {
  id: string;
  coachId: string;
  userId: string;
  requestId: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  startTime?: Date;
  endTime?: Date;
  rating?: number;
  feedback?: string;
}
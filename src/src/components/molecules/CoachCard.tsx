import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rating } from '@/components/atoms/Rating';
import { Coach } from '@/models/Coach';
import { MapPin, Clock, Languages } from 'lucide-react';

interface CoachCardProps {
  coach: Coach;
  onRequestSession: (coach: Coach) => void;
  onNext: () => void;
}

export const CoachCard: React.FC<CoachCardProps> = ({ coach, onRequestSession, onNext }) => {
  return (
    <Card className="w-full max-w-2xl shadow-elegant border-2">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <img
            src={coach.photo}
            alt={coach.name}
            className="w-20 h-20 rounded-xl object-cover shadow-card"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-foreground">{coach.name}</h2>
              {coach.isAvailable && (
                <Badge className="bg-accent text-accent-foreground">Disponible Ahora</Badge>
              )}
            </div>
            <Rating rating={coach.rating} reviewCount={coach.reviewCount} />
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{coach.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Responde en {coach.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Experiencia Profesional</h3>
          <p className="text-sm text-muted-foreground">{coach.professionalBackground}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Áreas de Especialización</h3>
          <div className="flex flex-wrap gap-2">
            {coach.expertise.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Idiomas</h3>
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {coach.languages.join(', ')}
            </span>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <div className="bg-muted/50 p-3 rounded-lg mb-4">
            <p className="text-sm font-medium text-foreground mb-1">Paquetes Disponibles:</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Starter: $19.99/mes (2 sesiones)</p>
              <p>• Pro: $59.99/mes (8 sesiones)</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onNext}>
              Siguiente Coach
            </Button>
            <Button 
              onClick={() => onRequestSession(coach)}
              className="bg-gradient-primary hover:opacity-90 shadow-elegant px-8"
            >
              Solicitar Sesión
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
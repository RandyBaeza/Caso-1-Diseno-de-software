import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Logo } from '@/components/atoms/Logo';
import { CoachCard } from '@/components/molecules/CoachCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Coach } from '@/models/Coach';
import { SearchController } from '@/controllers/SearchController';
import { ArrowLeft, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const searchController = new SearchController();

interface LocationState {
  coaches: Coach[];
  searchQuery: string;
  currentIndex: number;
}

export const CoachResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const state = location.state as LocationState;
  const [currentIndex, setCurrentIndex] = useState(state?.currentIndex || 0);
  const [isRequesting, setIsRequesting] = useState(false);
  
  const coaches = state?.coaches || [];
  const searchQuery = state?.searchQuery || '';
  const currentCoach = coaches[currentIndex];

  useEffect(() => {
    if (!state || coaches.length === 0) {
      navigate('/');
    }
  }, [state, coaches.length, navigate]);

  const handleNext = () => {
    if (currentIndex < coaches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      toast({
        title: "No hay más coaches",
        description: "Has visto todos los coaches disponibles para esta búsqueda",
      });
    }
  };

  const handleRequestSession = async (coach: Coach) => {
    if (!user) return;
    
    setIsRequesting(true);
    try {
      const success = await searchController.requestSession(
        coach.id, 
        user.sub, 
        `search-${Date.now()}`
      );
      
      if (success) {
        toast({
          title: "¡Sesión solicitada!",
          description: `${coach.name} responderá en ${coach.responseTime}`,
        });
        
        // En una app real, esto navegaría a una página de espera/chat de sesión
        navigate('/', { 
          state: { 
            message: `Sesión solicitada con ${coach.name}` 
          } 
        });
      }
    } catch (error) {
      toast({
        title: "Solicitud fallida",
        description: "Por favor intenta de nuevo en un momento",
        variant: "destructive"
      });
    } finally {
      setIsRequesting(false);
    }
  };

  const handleBack = () => {
    navigate('/', { state: { searchQuery } });
  };

  if (!currentCoach) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="p-8 shadow-elegant">
          <CardContent className="text-center">
            <h2 className="text-xl font-semibold mb-2">No se encontraron coaches</h2>
            <p className="text-muted-foreground mb-4">
              Intenta ajustar tu búsqueda o explora las categorías
            </p>
            <Button onClick={handleBack}>
              Volver a la Búsqueda
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            className="hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Logo size="md" />
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{coaches.length} coaches encontrados</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Coach {currentIndex + 1} de {coaches.length}</span>
          </div>
          <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="text-primary font-medium">
              5 sesiones restantes
            </span>
          </div>
        </div>
      </header>

      {/* Search Context */}
      <div className="container mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Mostrando resultados para:{' '}
            <span className="font-medium text-foreground">"{searchQuery}"</span>
          </p>
        </div>
      </div>

      {/* Coach Card */}
      <main className="container mx-auto px-6 pb-12">
        <div className="flex justify-center">
          <CoachCard
            coach={currentCoach}
            onRequestSession={handleRequestSession}
            onNext={handleNext}
          />
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            {coaches.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : index < currentIndex 
                      ? 'bg-accent' 
                      : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Loading State for Session Request */}
      {isRequesting && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="p-8 shadow-elegant">
            <div className="text-center">
              <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-lg font-medium">Solicitando sesión...</p>
              <p className="text-sm text-muted-foreground">
                Notificando a {currentCoach.name}
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
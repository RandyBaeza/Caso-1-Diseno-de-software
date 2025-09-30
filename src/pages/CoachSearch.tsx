import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { usePermissions } from '@/hooks/usePermissions';
import { Logo } from '@/components/atoms/Logo';
import { SearchInput } from '@/components/molecules/SearchInput';
import { CategoryCard } from '@/components/molecules/CategoryCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COACHING_CATEGORIES, Category } from '@/models/Category';
import { SearchController } from '@/controllers/SearchController';
import { CoachingRequest } from '@/models/Coach';
import { Crown, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const searchController = new SearchController();

export const CoachSearch: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { hasPremiumAccess } = usePermissions();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkPremium = () => {
      const premium = hasPremiumAccess();
      console.log("Premium access:", premium); // Debug log
      setIsPremium(premium);
    };
    
    checkPremium();
  }, [hasPremiumAccess]);

  
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Por favor describe tu necesidad",
        description: "Cuéntanos qué tipo de ayuda estás buscando",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    try {
      const request: Partial<CoachingRequest> = {
        description: searchQuery,
        userId: user?.sub,
        category: 'general'
      };

      const coaches = await searchController.searchCoaches(request);
      
      // Navigate to results with search data
      navigate('/coach-results', { 
        state: { 
          coaches, 
          searchQuery,
          currentIndex: 0 
        } 
      });
    } catch (error) {
      toast({
        title: "Búsqueda fallida",
        description: "Por favor intenta de nuevo en un momento",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleCategoryClick = (category: Category) => {
    setSearchQuery(`Necesito ayuda con ${category.name.toLowerCase()}`);
  };

  const handleVoiceStart = () => {
    setIsRecording(true);
    // TODO: Implement actual voice recording
    toast({
      title: "Grabación de voz iniciada",
      description: "Habla claramente sobre lo que necesitas"
    });
  };

  const handleVoiceStop = () => {
    setIsRecording(false);
    // TODO: Implement voice-to-text conversion
    toast({
      title: "Grabación de voz detenida",
      description: "Procesando tu solicitud..."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Logo size="lg" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Bienvenido, {user?.name}</span>
            <div>
              <span className="font-medium">Sesiones restantes:</span> 5/8
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={logout}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Obtén Ayuda Experta en{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              20 Minutos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conéctate instantáneamente con expertos verificados en decenas de campos. 
            Simplemente describe tu necesidad y comienza tu sesión.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex justify-center mb-16">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            onVoiceStart={handleVoiceStart}
            onVoiceStop={handleVoiceStop}
            isRecording={isRecording}
            placeholder="Describe qué necesitas y en qué te podemos ayudar..."
          />
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Categorías Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {COACHING_CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>

        {/* Premium Benefits */}
        {isPremium && (
          <div className="flex justify-center">
            <Card className="max-w-md shadow-premium border-2 border-premium/20">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-premium rounded-full">
                    <Crown className="h-6 w-6 text-premium-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Beneficios Premium</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Coincidencia prioritaria, sesiones extendidas y acceso exclusivo a expertos
                </p>
                <Button variant="premium">
                  Ve tus beneficios por ser premium
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Loading State */}
        {isSearching && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="p-8 shadow-elegant">
              <div className="text-center">
                <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-lg font-medium">Encontrando el coach perfecto...</p>
                <p className="text-sm text-muted-foreground">Esto tomará solo un momento</p>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};
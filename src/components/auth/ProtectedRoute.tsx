import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth();
  // Temporary auth bypass to allow navigation without Auth0 while testing
  const TEMP_AUTH_BYPASS = false; // set to false to re-enable auth
  if (
    TEMP_AUTH_BYPASS ||
    (typeof window !== 'undefined' && ((window as any).__DISABLE_AUTH__ === true || localStorage.getItem('disableAuth') === 'true'))
  ) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-muted rounded mb-4"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              20minCoach
            </CardTitle>
            <CardDescription>
              Conecta con coaches expertos en minutos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Por favor inicia sesión para acceder a la plataforma de coaching
            </p>
            <Button 
              onClick={loginWithRedirect}
              className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant"
              size="lg"
            >
              Iniciar Sesión para Continuar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

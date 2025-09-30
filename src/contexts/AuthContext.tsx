import React, { createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContextType } from '@/lib/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  const value: AuthContextType = {
    user: user ? {
      sub: user.sub || '',
      name: user.name || '',
      email: user.email || '',
      picture: user.picture || '',
      isPremium: user['app_metadata']?.isPremium || false,
      isCoach: user['app_metadata']?.isCoach || false,
    } : undefined,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
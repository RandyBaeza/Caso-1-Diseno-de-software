export const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  audience: process.env.REACT_APP_AUTH0_AUDIENCE || "",
  redirectUri: window.location.origin,
};

export interface User {
  sub: string;
  name: string;
  email: string;
  picture: string;
  isPremium?: boolean;
  isCoach?: boolean;
}

export interface AuthContextType {
  user: User | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}


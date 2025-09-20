// Auth0 configuration and utilities
const w = window as any;
const domain = w.__AUTH0_DOMAIN__ || localStorage.getItem("auth0Domain") || "dev-dwut2n5nvuu4bl0n.us.auth0.com";
const clientId = w.__AUTH0_CLIENT_ID__ || localStorage.getItem("auth0ClientId") || "h5wipav5LmusIRE1kBUFUu4VNxbHTlD7";
const audience = w.__AUTH0_AUDIENCE__ || localStorage.getItem("auth0Audience") || undefined;

export const auth0Config = {
  domain,
  clientId,
  redirectUri: window.location.origin,
  audience,
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

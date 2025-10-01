import { useAuth0 } from '@auth0/auth0-react';

export const useAuthManager = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  const getSecureToken = async (): Promise<string> => {
	try {
	  return await getAccessTokenSilently();
	} catch (error) {
	  throw new Error('Failed to get secure token');
	}
  };

  const hasRequiredRole = (requiredRole: string): boolean => {
	const roles = user?.['https://20mincoach.com/roles'] || [];
	return roles.includes(requiredRole);
  };

  const encryptSensitiveData = (data: string): string => {
	// Simple base64 encoding - in production use proper encryption
	return btoa(unescape(encodeURIComponent(data)));
  };

  const decryptSensitiveData = (encryptedData: string): string => {
	try {
	  return decodeURIComponent(escape(atob(encryptedData)));
	} catch {
	  throw new Error('Failed to decrypt data');
	}
  };

  return {
	getSecureToken,
	hasRequiredRole,
	encryptSensitiveData,
	decryptSensitiveData
  };
import { useAuth } from '../hooks/usePermissions';

export const usePermissionMiddleware = () => {
  const { hasPermission } = useAuth();

  const checkPermission = (permission: string): boolean => {
	return hasPermission(permission);
  };

  return { checkPermission };
};
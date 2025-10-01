import { usePermissionMiddleware } from '../middleware/authMiddleware';

export const usePermissionValidator = () => {
  const { checkPermission } = usePermissionMiddleware();

  const validatePermission = (permission: string): boolean => {
	const hasPerm = checkPermission(permission);
	
	if (!hasPerm) {
	  console.warn(`Permission denied: ${permission}`);
	  return false;
	}
	
	return true;
  };

  return { validatePermission };
};
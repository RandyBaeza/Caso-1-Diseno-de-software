import { useLogMiddleware } from '../middleware/logMiddleware';

export const useEventListeners = () => {
  const log = useLogMiddleware();

  const setupUIListeners = (onUserAction: (action: string, data: any) => void) => {
  
	// Listen for page visibility changes
	
	document.addEventListener('visibilitychange', () => {
	  onUserAction('visibility_change', { 
		isVisible: !document.hidden 
	  });
	});

	// Listen for online/offline status
	
	window.addEventListener('online', () => {
	  onUserAction('connection_restored', {});
	});

	window.addEventListener('offline', () => {
	  onUserAction('connection_lost', {});
	});
  };

  return { setupUIListeners };
};
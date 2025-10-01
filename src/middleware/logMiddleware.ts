export const useLogMiddleware = () => {
  const logEvent = (event: string, data?: any) => {
    console.log(`[${new Date().toISOString()}] ${event}`, data);
    
    // Send to logging service in production
    if (import.meta.env.PROD) {
      // Add your logging service here
    }
  };

  return { logEvent };
};
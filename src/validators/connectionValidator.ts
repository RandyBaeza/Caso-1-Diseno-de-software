export const useConnectionValidator = () => {
  const checkConnectionQuality = async (): Promise<'good' | 'fair' | 'poor'> => {
    if (!navigator.onLine) {
      return 'poor';
    }

    // Simple connection check - in real app, use more sophisticated method
    try {
      const start = performance.now();
      await fetch('https://www.google.com/favicon.ico', { 
        mode: 'no-cors',
        cache: 'no-cache'
      });
      const latency = performance.now() - start;

      if (latency < 100) return 'good';
      if (latency < 500) return 'fair';
      return 'poor';
    } catch {
      return 'poor';
    }
  };

  return { checkConnectionQuality };
};
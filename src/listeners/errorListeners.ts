export const useErrorListeners = () => {
  const setupErrorListeners = (onError: (error: Error, context: string) => void) => {
    // Global error handler
    window.addEventListener('error', (event) => {
      onError(event.error, 'window_error');
    });

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  onError(event.reason, 'unhandled_rejection');
});
  };

  return { setupErrorListeners };
};
export const useErrorMiddleware = () => {
  const handleApiError = (error: any) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
      return 'Please log in again';
    }
    
    if (error.response?.status === 403) {
      return 'You do not have permission for this action';
    }
    
    return error.response?.data?.message || 'Something went wrong';
  };

  return { handleApiError };
};
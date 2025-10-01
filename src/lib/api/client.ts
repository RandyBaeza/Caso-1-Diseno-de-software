import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Optional: add interceptors if needed, e.g., for logging or global error handling
// Auth tokens are handled via Auth0 using getAccessTokenSilently() in the components/hooks that call the API

export default apiClient;

import apiClient from '../lib/api/client';

export const coachApi = {
  search: async (term: string) => {
    const response = await apiClient.get('/coaches', { params: { search: term } });
    return response.data;
  },
};

import { useQuery } from '@tanstack/react-query';
import { coachApi } from '../services/coachApi';

export const useCoaches = (searchTerm: string) => {
  return useQuery({
    queryKey: ['coaches', searchTerm],
    queryFn: () => coachApi.search(searchTerm),
    enabled: !!searchTerm,
  });
};

// Usage in a component
const { data: coaches, isLoading, error } = useCoaches('mechanic');

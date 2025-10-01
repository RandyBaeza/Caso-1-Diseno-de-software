import { useQuery } from '@tanstack/react-query';
import { coachService } from '../services/coachService';
import type { CoachSearchFilters } from '../models';

export const useCoachSearch = (filters: CoachSearchFilters) => {
  return useQuery({
	queryKey: ['coaches', filters],
	queryFn: () => coachService.searchCoaches(filters),
  });
};
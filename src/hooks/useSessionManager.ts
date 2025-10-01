import { useMutation } from '@tanstack/react-query';
import { coachService } from '../services/coachService';

export const useSessionManager = () => {
  const requestSession = useMutation({
	mutationFn: (coachId: string) => coachService.requestSession(coachId),
  });

  return {
	requestSession: requestSession.mutate,
	isLoading: requestSession.isPending,
  };
};
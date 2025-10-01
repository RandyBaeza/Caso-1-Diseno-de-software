export const useInputValidator = () => {
  const validateSearchInput = (input: string): { isValid: boolean; message: string } => {
	if (input.length < 2) {
	  return { isValid: false, message: 'Search term must be at least 2 characters' };
	}
	
	if (input.length > 100) {
	  return { isValid: false, message: 'Search term too long' };
	}
	
	// Check for potentially harmful characters
	const harmfulPattern = /[<>{}]/;
	if (harmfulPattern.test(input)) {
	  return { isValid: false, message: 'Invalid characters in search' };
	}
	
	return { isValid: true, message: '' };
  };

  const validateSessionRequest = (coachId: string, userId: string): boolean => {
	return !!coachId && !!userId;
  };

  return { validateSearchInput, validateSessionRequest };
};
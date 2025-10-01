export const formatSessionTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { 
	hour: '2-digit', 
	minute: '2-digit' 
  });
};

export const getSessionEndTime = (startTime: Date): Date => {
  return new Date(startTime.getTime() + 20 * 60000); // 20 minutes
};
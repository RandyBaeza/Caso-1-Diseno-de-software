export const calculateSessionCost = (baseRate: number, duration: number = 20): number => {
  const hourlyRate = baseRate;
  const minuteRate = hourlyRate / 60;
  return Math.round(minuteRate * duration * 100) / 100; // Round to 2 decimal places
};

export const calculateCoachEarnings = (
  sessionRate: number, 
  platformFee: number = 0.2 // 20% platform fee
): { coachEarnings: number; platformFee: number } => {
  const platformFeeAmount = sessionRate * platformFee;
  const coachEarnings = sessionRate - platformFeeAmount;
  
  return {
    coachEarnings: Math.round(coachEarnings * 100) / 100,
    platformFee: Math.round(platformFeeAmount * 100) / 100
  };
};

export const calculateAverageRating = (ratings: number[]): number => {
  if (ratings.length === 0) return 0;
  
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return Math.round((sum / ratings.length) * 10) / 10; // Round to 1 decimal
};

export const calculateDiscount = (
  originalPrice: number, 
  discountPercentage: number
): number => {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return Math.round(discountAmount * 100) / 100;
};
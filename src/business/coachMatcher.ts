import type { Coach, CoachSearchFilters } from '../models';

export class CoachMatcher {
	findBestMatch(coaches: Coach[], filters: CoachSearchFilters): Coach | null {
	let filteredCoaches = coaches.filter(coach => 
		coach.available && 
		coach.rating >= (filters.minRating || 0)
	);
	if (filters.specialty) {
		filteredCoaches = filteredCoaches.filter(coach =>
		coach.specialty.toLowerCase().includes(filters.specialty!.toLowerCase())
		);
	}

	// Sort by rating (highest first)
	filteredCoaches.sort((a, b) => b.rating - a.rating);

	return filteredCoaches[0] || null;
	}
	calculateMatchScore(coach: Coach, userNeeds: string): number {
	let score = coach.rating;
	
	// Boost score if specialty matches user needs
	if (coach.specialty.toLowerCase().includes(userNeeds.toLowerCase())) {
		score += 2;
	}
	return score;
	}
}
export const coachMatcher = new CoachMatcher();
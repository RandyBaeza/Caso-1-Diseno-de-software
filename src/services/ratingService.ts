export class RatingService {
  async submitRating(rating: Rating): Promise<void> {
    return apiClient.post('/ratings', rating); 
  }
}
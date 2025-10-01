import { sessionService } from '../services/sessionService';
import { useLogMiddleware } from '../middleware/logMiddleware';

export class SessionCoordinator {
	private log = useLogMiddleware();

	async connectUserToCoach(userId: string, coachId: string): Promise<string> {
	try {
		this.log.logEvent('session_connect_attempt', { userId, coachId });
		
		const peerId = await sessionService.startVideoCall(`${userId}-${coachId}`);
		
	
		setTimeout(() => {
		this.endSession(userId, coachId);
		}, 20 * 60 * 1000);

		this.log.logEvent('session_connected', { userId, coachId, peerId });
		return peerId;
	} catch (error) {
		this.log.logEvent('session_connect_failed', { userId, coachId, error });
		throw error;
	}
	}

	async endSession(userId: string, coachId: string): Promise<void> {
	await sessionService.endSession(`${userId}-${coachId}`);
	this.log.logEvent('session_ended', { userId, coachId });
	}
}

export const sessionCoordinator = new SessionCoordinator();
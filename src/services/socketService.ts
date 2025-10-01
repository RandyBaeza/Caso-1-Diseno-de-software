import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;

  connect(userId: string) {
    this.socket = io(import.meta.env.VITE_SOCKET_URL, {
      auth: { userId },
    });

    this.socket.on('coach-request', (data) => {
      console.log('Incoming coach request:', data);
      // Handle incoming coach requests here
    });
  }

  sendCoachRequest(coachId: string) {
    this.socket?.emit('request-coach', { coachId });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}

export const socketService = new SocketService();

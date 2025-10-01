import Peer from 'peerjs';

export class VideoCallService {
  private peer: Peer | null = null;

  initialize(userId: string) {
    this.peer = new Peer(userId, {
      host: import.meta.env.VITE_PEER_HOST,
      port: Number(import.meta.env.VITE_PEER_PORT),
    });
  }

  async startCall(coachPeerId: string): Promise<MediaStream | null> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.peer?.call(coachPeerId, stream);
      return stream;
    } catch (err) {
      console.error('Error accessing media devices:', err);
      return null;
    }
  }
}

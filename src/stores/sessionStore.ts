import { create } from 'zustand';
import type { User, Coach } from '../models'; 

interface SessionState {
  user: User | null;
  currentCoach: Coach | null;
  setUser: (user: User) => void;
  setCurrentCoach: (coach: Coach) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  user: null,
  currentCoach: null,
  setUser: (user) => set({ user }),
  setCurrentCoach: (coach) => set({ currentCoach: coach }),
}));
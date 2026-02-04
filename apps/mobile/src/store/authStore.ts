import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  id: string;
  email: string;
  fullName: string;
  userType: 'tenant' | 'landlord' | 'agent' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setToken: async (token) => {
    set({ token });
    if (token) {
      await AsyncStorage.setItem('authToken', token);
    } else {
      await AsyncStorage.removeItem('authToken');
    }
  },
  setLoading: (isLoading) => set({ isLoading }),
  logout: async () => {
    set({ user: null, token: null });
    await AsyncStorage.removeItem('authToken');
  },
}));

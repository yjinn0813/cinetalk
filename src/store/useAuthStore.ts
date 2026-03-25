/* 로그인 상태관리 스토어 */

import { create } from 'zustand';

// 로그인한 유저정보
type User = {
  userId: string;
  userName: string;
}

// 로그인 상태
type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  error: string;
  login: (userData: User) => void;
  logout: () => void;
  setError: (message: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  error: '',

  login: (userData: User) =>
    set({
      isLoggedIn: true,
      user: userData,
      error: '',
    }),

  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
      error: '',
    }),
  
  setError: (message: string) =>
    set({
      error: message,
    }),
}));
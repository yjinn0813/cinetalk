/* 로그인 상태관리 스토어 */

import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  error: '',

  login: (userData) =>
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
  
  setError: (message) =>
    set({
      error: message,
    }),
}));
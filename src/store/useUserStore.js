/* 회원가입 페이지, 유저정보 스토어 */

import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: {
    userName: '',
    userId: '',
    userPw: '',
    terms: {
      term1: false,
      term2: false,
      term3: false,
    },
  },

  setUserInfo: (userInfo) =>
    set(() => ({
      user: userInfo,
    })),
}));
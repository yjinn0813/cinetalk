/* 회원가입 페이지, 유저정보 스토어 */

import { create } from 'zustand';

// 회원가입 데이터
type UserInfo = {
  userName: string;
  userId: string;
  userPw: string;
  terms: {
    term1: boolean;
    term2: boolean;
    term3: boolean;
  };
};

// 가입 상태
type UserState = {
  user: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
};

export const useUserStore = create<UserState>((set) => ({
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
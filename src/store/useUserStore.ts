/* 회원가입 페이지, 유저정보 스토어 */

import { create } from 'zustand';

// 회원가입 데이터
type UserInfo = {
  userName: string;
  userId: string;
  userPw: string;
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
  },

  setUserInfo: (userInfo) =>
    set(() => ({
      user: userInfo,
    })),
}));
/* 로그인 유틸함수 */

type ValidateResult = {
  msg: string;
  type: 'empty' | 'warning' | 'error' | 'success';
};

export const validateLoginId = (userId: string): ValidateResult => {
  if (!userId) {
    return {
      msg: '아이디를 입력해주세요.',
      type: 'empty'
    }
  };
  
  if (
    userId.length < 4 ||
    userId.length > 10 ||
    !/^[a-zA-Z0-9]+$/.test(userId)
  ) {
    return {
      msg: '아이디는 4 ~ 10자의 영문&숫자입니다.',
      type: 'warning'
    };
  }
  
  return {
    msg: '', 
    type: 'success'
  };
};

export const validateLoginPw = (userPw: string): ValidateResult => {
  if (!userPw) {
    return {
      msg: '비밀번호를 입력해주세요.',
      type: 'empty'
    }
  };
  
  if (
    userPw.length < 8 ||
    userPw.length > 15 ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(userPw)
  ) {
    return {
      msg: '비밀번호는 특수문자 포함 8 ~ 15자입니다.',
      type: 'warning'
    };
  }
  
  return {
    msg: '',
    type: 'success'
  };
};
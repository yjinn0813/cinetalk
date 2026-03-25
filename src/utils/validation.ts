/* 회원가입 유틸함수 */

// 정규식 분리
const ID_REGEX = /^[a-zA-Z0-9]{4,10}$/;
const PW_REGEX = /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,15}$/;

// 테스트용 아이디
const BLOCKED_USER_ID = 'cinetalk';

type ValidateResult = {
  msg: string;
  type: 'empty' | 'warning' | 'error' | 'success';
};

// 아이디 검증
export const validateId = (value: string): ValidateResult => {
  if (!value) {
    return {
      msg: '아이디를 입력하세요.',
      type: 'empty'
    }
  };

  if (!ID_REGEX.test(value)) {
    return {
      msg: '아이디는 4 ~ 10자의 영문&숫자입니다.',
      type: 'warning'
    };
  }

  if (value === BLOCKED_USER_ID) {
    return {
      msg: '사용할 수 없는 아이디입니다.',
      type: 'error'
    };
  }

  return {
    msg: '사용 가능한 아이디입니다.',
    type: 'success'
  };
};

// 비밀번호 검증
export const validatePw = (pw: string, pw2: string): ValidateResult => {
  if (!pw) {
    return {
      msg: '비밀번호를 입력해주세요.',
      type: 'empty'
    }
  };

  if (!PW_REGEX.test(pw)) {
    return {
      msg: '비밀번호는 특수문자 포함 8~15자만 가능합니다.',
      type: 'warning'
    };
  }

  if (pw !== pw2) {
    return {
      msg: '비밀번호가 일치하지 않습니다.',
      type: 'error'
    };
  }

  return {
    msg: '비밀번호가 일치합니다.',
    type: 'success'
  };
};
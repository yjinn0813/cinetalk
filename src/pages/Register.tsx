/* 회원가입 페이지 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';
import { useAuthStore } from '../store/useAuthStore';
import { validateId, validatePw } from '../utils/validation';
import useTitle from '../hooks/useTitle';
import { Box, TextField, Button } from '@mui/material';
import '../styles/pages/Register.scss';

const inputList = [
  { name: 'userName', type: 'text', placeholder: '이름' },
  { name: 'userId', type: 'text', placeholder: '아이디' },
  { name: 'userPw', type: 'password', placeholder: '비밀번호' },
  { name: 'userPw2', type: 'password', placeholder: '비밀번호 확인' },
];

type ValidateResult = {
  msg: string;
  type: string;
}

// ==============================
const Register = () => {
  useTitle('Register');
  const navigate = useNavigate();
  const { setUserInfo, user } = useUserStore(); // 회원가입
  const { login } = useAuthStore(); // 로그인 처리

  // 입력값 객체화
  const [form, setForm] = useState({
    userName: '',
    userId: '',
    userPw: '',
    userPw2: '',
  });

  const [idMsg, setIdMsg] = useState<ValidateResult>({
    msg: '',
    type: '',
  });
  const [pwMsg, setPwMsg] = useState<ValidateResult>({
    msg: '',
    type: '',
  });

  // 공통 input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 아이디 검증
    if (name === 'userId') {
      setIdMsg(validateId(value));
    }

    // 비밀번호 검증
    if (name === 'userPw' || name === 'userPw2') {
      const pw =
        name === 'userPw' ? value : form.userPw;
      const pw2 =
        name === 'userPw2' ? value : form.userPw2;

      setPwMsg(validatePw(pw, pw2));
    }
  };

  // 포커스 아웃되면 메시지 초기화
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'userId' && !value) {
      setIdMsg({ msg: '', type: '' });
    }

    if ((name === 'userPw' || name === 'userPw2') && !form.userPw && !form.userPw2) {
      setPwMsg({ msg: '', type: '' });
    }
  };

  // 회원가입 완료
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userName, userId, userPw, userPw2 } = form;

    if (
      !userName ||
      !userId ||
      !userPw ||
      !userPw2
    ) {
      return;
    }

    setUserInfo({ userName, userId, userPw });
    login({ userId, userName });

    navigate('/Profile');
  };

  return (
    <Box component="form" 
      autoComplete="off" noValidate
      className="reg-wrap" 
      onSubmit={handleSubmit}
    >
      <div className="reg-title">회원가입</div>

      <div className="reg-input-area">
        {inputList.map((input) => {
          const isId = input.name === 'userId';
          const isPw2 = input.name === 'userPw2';

          let currentMsg: ValidateResult | null = null;
          if (isId) currentMsg = idMsg;
          else if (isPw2) currentMsg = pwMsg;

          return (
            <React.Fragment key={input.name}>
              <TextField
                name={input.name}
                type={input.type}
                label={input.placeholder}
                value={form[input.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                variant="outlined"

                error={
                  isId
                    ? idMsg.type === 'error' || idMsg.type === 'warning'
                    : isPw2
                    ? pwMsg.type === 'error' || pwMsg.type === 'warning'
                    : false
                }

                helperText={null}

                sx={{
                  my: 1.5,

                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',

                    '& fieldset': {
                      borderColor: '#6b6b6b',
                    },

                    '&:hover fieldset': {
                      borderColor: '#1e90ff',
                    },

                    '&.Mui-focused fieldset': {
                      borderColor: '#1e90ff',
                    },
                  },
                }}
              />

              {currentMsg?.msg && (
                <div className={`regMsg ${currentMsg.type}`}>
                  {currentMsg.msg}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <Button variant="contained"
        sx={{
          fontSize: '20px',
          backgroundColor: '#1e90ff',
          padding: '16px 0',
          fontWeight: 600,
          borderRadius: 2,
          maxWidth: '360px',
          width: '100%',
        }}
      >가입하기</Button>
    </Box>
  );
};

export default Register;

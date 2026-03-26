/* 로그인 페이지 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useUserStore } from '../store/useUserStore';
import { validateLoginId, validateLoginPw } from '../utils/auth';
import { Box, TextField, Button } from '@mui/material';
import '../styles/pages/Login.scss';

const inputList = [
  { name: 'userId', label: '아이디', type: 'text' },
  { name: 'userPw', label: '비밀번호', type: 'password' },
];

type ValidateResult = {
  msg: string;
  type: string;
};

const testUserId = 'cinetalk';
const testUserPw = 'cinetalk1!';

// ==============================
const Login = () => {
  const { login } = useAuthStore();
  const { user } = useUserStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userId: '',
    userPw: '',
  });

  const [idMsg, setIdMsg] = useState<ValidateResult>({ msg: '', type: '' });
  const [pwMsg, setPwMsg] = useState<ValidateResult>({ msg: '', type: '' });

  // 에러메시지 출력
  const getMsg = (name: string) => {
    if (name === 'userId') return idMsg;
    if (name === 'userPw') return pwMsg;
    return { msg: '', type: '' };
  };

  // 공통 change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'userId') {
      setIdMsg(validateLoginId(value));
    }

    if (name === 'userPw') {
      setPwMsg(validateLoginPw(value));
    }
  };

  // blur handler
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'userId' && !value) {
      setIdMsg({ msg: '', type: '' });
    }

    if (name === 'userPw' && !value) {
      setPwMsg({ msg: '', type: '' });
    }
  };

  // 로그인 처리
  const handleLogin = () => {
    const idResult = validateLoginId(form.userId);
    const pwResult = validateLoginPw(form.userPw);

    setIdMsg(idResult);
    setPwMsg(pwResult);

    if (idResult.type !== 'success' || pwResult.type !== 'success') return;

    if (form.userId !== testUserId || form.userPw !== testUserPw) {
      setPwMsg({
        msg: '아이디 또는 비밀번호가 올바르지 않습니다.',
        type: 'error',
      });
      return;
    }

    setIdMsg({ msg: '', type: '' });
    setPwMsg({ msg: '', type: '' });

    login({
      userId: user.userId,
      userName: user.userName,
    });

    navigate('/Profile');
  };

  const toRegister = () => navigate('/register');

  return (
    <Box component="form" autoComplete="off" noValidate className="lg-wrap">
      <div className="lg-title">로그인</div>

      <Box className="lg-input">
        {inputList.map((input) => {
          const currentMsg = getMsg(input.name);

          return (
            <Box key={input.name} sx={{ mb: 2 }}>
              <TextField
                name={input.name}
                type={input.type}
                label={input.label}
                value={form[input.name as keyof typeof form]}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={
                  currentMsg.type === 'error' ||
                  currentMsg.type === 'warning'
                }
                sx={{
                  mb: 1.5,

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

              {currentMsg.msg && (
                <div className={`lg-msg ${currentMsg.type}`}>
                  {currentMsg.msg}
                </div>
              )}
            </Box>
          );
        })}

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          className='login'
        >
          로그인
        </Button>
      </Box>

      <Box className="lg-btns">
        <Button fullWidth
          variant="outlined" 
          onClick={toRegister} 
          className='register'
        >
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

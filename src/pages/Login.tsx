/* 로그인 페이지 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useUserStore } from '../store/useUserStore';
import { validateLoginId, validateLoginPw } from '../utils/auth';
import '../styles/pages/Login.scss';

const Login = () => {
  const { login } = useAuthStore();
  const { user } = useUserStore();
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const [idMsg, setIdMsg] = useState({ msg: '', type: '' });
  const [pwMsg, setPwMsg] = useState({ msg: '', type: '' });

  const handleLogin = () => {
    const idResult = validateLoginId(userId);
    const pwResult = validateLoginPw(userPw);

    setIdMsg(idResult);
    setPwMsg(pwResult);

    if (idResult.type !== 'success' || pwResult.type !== 'success') {
      return;
    }

    login({
      userId: user.userId,
      userName: user.userName,
    });
    
    navigate('/Profile');
  };

  // 회원가입 페이지 이동 버튼
  const toRegister = () => {
    navigate('/register');
  };

  return (
    <div className="lg-wrap">
      <div className="lg-title">Login</div>

      <div className="lg-input">
        {/* 아이디 */}
        <input
          type="text"
          className="lg-focus userId"
          placeholder="아이디"
          value={userId}
          onChange={(e) => {
            const value = e.target.value;
            setUserId(value);
            setIdMsg(validateLoginId(value));
          }}
          onBlur={() => {
            if (!userId) {
              setIdMsg({ msg: '', type: '' });
            }
          }}
        />
        {idMsg.msg && (
          <div className={`lg-msg ${idMsg.type}`}>
            {idMsg.msg}
          </div>
        )}

        {/* 비밀번호 */}
        <input
          type="password"
          className="lg-focus password"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => {
            const value = e.target.value;
            setUserPw(value);
            setPwMsg(validateLoginPw(value));
          }}
          onBlur={() => {
            if (!userPw) {
              setPwMsg({ msg: '', type: '' });
            }
          }}
        />
        {pwMsg.msg && (
          <div className={`lg-msg ${pwMsg.type}`}>
            {pwMsg.msg}
          </div>
        )}

        <div className="lg-apply">
          <button className="lg-apply-btn" onClick={handleLogin}>
            확인
          </button>
        </div>
      </div>

      <div className="lg-btns">
        <button className="register" onClick={toRegister}>
          아이디로 회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;

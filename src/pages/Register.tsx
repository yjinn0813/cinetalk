/* 회원가입 페이지 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';
import { useAuthStore } from '../store/useAuthStore';
import { validateId, validatePw } from '../utils/validation';
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

  const [terms, setTerms] = useState({
    all: false,
    term1: false,
    term2: false,
    term3: false,
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
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'userId' && !value) {
      setIdMsg({ msg: '', type: '' });
    }

    if ((name === 'userPw' || name === 'userPw2') && !form.userPw && !form.userPw2) {
      setPwMsg({ msg: '', type: '' });
    }
  };

  // 약관동의 확인
  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === 'all') {
      setTerms({
        all: checked,
        term1: checked,
        term2: checked,
        term3: checked,
      });
    } else {
      setTerms((prev) => ({
        ...prev,
        [name]: checked,
        all: checked && prev.term1 && prev.term2 && prev.term3,
      }));
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
      !userPw2 ||
      !terms.term1 ||
      !terms.term2 ||
      !terms.term3
    ) {
      alert('모든 항목을 입력하고 약관에 동의해주세요.');
      return;
    }

    setUserInfo({ userName, userId, userPw, terms });
    login({ userId, userName });

    navigate('/Profile');
  };

  return (
    <form className="reg-wrap" onSubmit={handleSubmit}>
      <div className="reg-title">회원가입</div>

      <div className="reg-input-area">
        {inputList.map((input) => (
          <React.Fragment key={input.name}>
            <input
              className="reg-focus"
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={form[input.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {input.name === 'userId' && (
              <div className={`regMsg ${idMsg.type}`}>{idMsg.msg}</div>
            )}

            {(input.name === 'userPw2') && (
              <div className={`regMsg ${pwMsg.type}`}>{pwMsg.msg}</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 약관 */}
      <div className="terms">
        {['all', 'term1', 'term2', 'term3'].map((term) => (
          <label key={term}
            className={ term === 'all' ? 'checkAll' : term }
          >
            <input
              type="checkbox"
              name={term}
              checked={terms[term]}
              onChange={handleTermChange}
            />
            {term === 'all' && ' 모두 동의'}
            {term === 'term1' && ' 14세 이상입니다 (필수)'}
            {term === 'term2' && ' 이용 약관 동의 (필수)'}
            {term === 'term3' && ' 개인정보 수집 동의 (필수)'}
          </label>
        ))}
      </div>

      <button className="regOk">회원가입 완료</button>
    </form>
  );
};

export default Register;

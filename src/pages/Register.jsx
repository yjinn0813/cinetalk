// 회원가입 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/actions/userActions';
import '../styles/pages/Register.scss';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPw2, setUserPw2] = useState('');
  const [idMsg, setIdMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [terms, setTerms] = useState({
    all: false,
    term1: false,
    term2: false,
    term3: false,
  });

  // 아이디 검증 및 메시지 설정
  const handleIdChange = (e) => {
    const value = e.target.value;
    setUserId(value);

    const testUserId = 'cinetalk';
    let msg = '';

    if (!value) {
      msg = '아이디를 입력하세요';
    } else if (!/^[a-zA-Z0-9]{4,10}$/.test(value)) {
      msg = '아이디는 4 ~ 10자의 영문&숫자입니다';
    } else if (value === testUserId) {
      msg = '사용할 수 없는 아이디입니다';
    } else {
      msg = '사용 가능한 아이디입니다';
    }

    setIdMsg(msg);
  };

  // 아이디 입력 필드에서 포커스가 벗어날 때
  const handleIdBlur = () => {
    if (!userId) {
      setIdMsg('');
    }
  };

  // 비밀번호 검증
  const handlePwChange = (e, isConfirmation = false) => {
    const value = e.target.value;
    if (!isConfirmation) {
      setUserPw(value);
    } else {
      setUserPw2(value);
    }
  };

  useEffect(() => {
    const message = checkPw(userPw, userPw2);
    setPwMsg(message);
  }, [userPw, userPw2]);

  const handlePwBlur = () => {
    if (!userPw && !userPw2) {
      setPwMsg('');
    }
  };

  const checkPw = (pw, pw2) => {
    let msg = '';

    if (pw === '') {
      msg = '';
    } else if (!pw && !pw2) {
      msg = '비밀번호를 입력하세요';
    } else if (
      !/^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,15}$/.test(
        pw
      )
    ) {
      msg = '특수문자 포함 8~15자만 가능합니다';
    } else if (pw !== pw2) {
      msg = '비밀번호가 일치하지 않습니다';
    }
    return msg;
  };

  // 약관동의 검증
  const handleTermChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'all') {
      setTerms({
        all: checked,
        term1: checked,
        term2: checked,
        term3: checked,
      });
    } else {
      setTerms((prevTerms) => ({
        ...prevTerms,
        [name]: checked,
        all: checked && prevTerms.term1 && prevTerms.term2 && prevTerms.term3,
      }));
    }
  };

  // 모든 입력값 검증
  const handleSubmit = (e) => {
    e.preventDefault();

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

    const userInfo = {
      userName,
      userId,
      userPw,
      terms,
    };

    dispatch(setUserInfo(userInfo));
    navigate('/Profile');
  };

  return (
    <form className="reg-wrap" onSubmit={handleSubmit}>
      <div className="reg-title">회원가입</div>
      <div className="reg-input-area">
        <input
          type="text"
          className="userName reg-focus"
          placeholder="이름"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className="regId reg-focus"
          placeholder="아이디"
          value={userId}
          onChange={(e) => handleIdChange(e)}
          onBlur={handleIdBlur}
        />
        <div className="regIdMsg">{idMsg}</div>
        <input
          type="password"
          className="regPw reg-focus"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => handlePwChange(e)}
          onBlur={handlePwBlur}
        />
        <input
          type="password"
          className="regPw2 reg-focus"
          placeholder="비밀번호 확인"
          value={userPw2}
          onChange={(e) => handlePwChange(e, true)}
          onBlur={handlePwBlur}
        />
        <div className="regPwMsg">{pwMsg}</div>
      </div>

      {/* 약관동의 */}
      <div className="terms">
        <div className="checkAll">
          <label>
            <input
              type="checkbox"
              name="all"
              checked={terms.all}
              onChange={handleTermChange}
            />
            &nbsp;&nbsp;모두 동의
          </label>
        </div>
        <div className="term1">
          <label>
            <input
              type="checkbox"
              name="term1"
              checked={terms.term1}
              onChange={handleTermChange}
            />
            &nbsp;&nbsp;14세 이상입니다 (필수)
          </label>
        </div>
        <div className="term2">
          <label>
            <input
              type="checkbox"
              name="term2"
              checked={terms.term2}
              onChange={handleTermChange}
            />
            &nbsp;&nbsp;이용 약관 동의 (필수)
          </label>
        </div>
        <div className="term3">
          <label>
            <input
              type="checkbox"
              name="term3"
              checked={terms.term3}
              onChange={handleTermChange}
            />
            &nbsp;&nbsp;개인정보 수집 및 이용 동의 (필수)
          </label>
        </div>
      </div>
      <button className="regOk">회원가입 완료</button>
    </form>
  );
}

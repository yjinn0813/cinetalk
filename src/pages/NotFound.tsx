// Not Found 예외처리 페이지

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-title">
        페이지를 찾을 수 없습니다.
        <br />
        (404 Not Found)
      </div>
      <br />
      <br />
      <div className="notfound-msg">
        존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 확인해주시기 바랍니다.
      </div>
      <br />
      <br />
      <button onClick={() => navigate(-1)} className="notfound-btn primary-btn">
        이전 화면
      </button>
      <button
        onClick={() => navigate('/')}
        className="notfound-btn to-home-btn"
      >
        홈으로
      </button>
    </div>
  );
}

export default NotFound;
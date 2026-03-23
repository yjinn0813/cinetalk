// 마이 페이지

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import '../styles/pages/Profile.scss';

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="mypage-container">
      <div className="page-title">MY PAGE</div>
      <div className="profile">
        <div className="nickname">홍길동</div>
      </div>
      <div className="profile-btns">
        <button className="m-btn">
          <Link to="/Watched" className="movingbtn">
            라이브러리
          </Link>
        </button>
        <button className="m-btn">
          <Link to="/Write" className="movingbtn">
            리뷰 작성하기
          </Link>
        </button>
        <button className="m-btn">
          <Link to="/NotFound" className="movingbtn">
            본 작품 캘린더
          </Link>
        </button>
        <button className="m-btn">
          <Link to="/NotFound" className="movingbtn">
            본 작품 통계
          </Link>
        </button>
        <button className="m-btn logout" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}

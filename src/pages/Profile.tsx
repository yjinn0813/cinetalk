/* 프로필 페이지 */

import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import '../styles/pages/Profile.scss';

// 버튼 목록 객체화
const menuList = [
  { name: '라이브러리', path: '/Watched' },
  { name: '리뷰 작성하기', path: '/Write' },
];

// ==============================
const Profile = () => {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="mypage-container">
      <div className="page-title">MY PAGE</div>

      <div className="profile">
        <div className="nickname">{user?.userName || '홍길동'}</div>
      </div>

      <div className="profile-btns">
        {menuList.map((menu) => (
          <button
            key={menu.name}
            className="m-btn"
            onClick={() => navigate(menu.path)}
          >
            {menu.name}
          </button>
        ))}

        <button className="m-btn logout" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Profile;

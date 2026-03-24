/* header */

import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import logo from '../../assets/logo.png';
import '../../styles/common/Header.scss';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';

// 공통 메뉴
const menuList = [
  {
    name: 'Search',
    path: '/Search',
    icon: SearchIcon,
  },
  {
    name: 'New',
    path: '/NotFound',
    icon: DescriptionIcon,
  },
  {
    name: 'Friends',
    path: '/NotFound',
    icon: PeopleIcon,
  },
];

// ==============================
const Header = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <header className="header">
      <div className="container">
        <div className="main-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="icon-container">
          {/* 공통 메뉴 */}
          {menuList.map((menu) => {
            const Icon = menu.icon;

            return (
              <div className="header-btns" key={menu.name}>
                <Link to={menu.path} className="header-link">
                  <Icon className="icon" />
                  <div className="header-txt">{menu.name}</div>
                </Link>
              </div>
            );
          })}

          {/* 로그인 상태에 따른 버튼 */}
          <div className="header-btns">
            {isLoggedIn ? (
              <Link to="/Profile" className="header-link">
                <AccountBoxIcon className="icon" />
                <div className="header-txt">Profile</div>
              </Link>
            ) : (
              <Link to="/Login" className="header-link">
                <LoginIcon className="icon" />
                <div className="header-txt">Login</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

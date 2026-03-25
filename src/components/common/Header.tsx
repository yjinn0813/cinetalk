/* header */

import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import logo from '../../assets/logo.png';
import '../../styles/common/Header.scss';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';

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
          <div className="header-btns">
            <Link to="/search" className="header-link">
              <SearchIcon className="icon" />
              <div className="header-txt">Search</div>
            </Link>
          </div>

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

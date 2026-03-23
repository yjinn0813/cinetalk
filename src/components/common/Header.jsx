// header
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/common/Header.scss';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className="header">
      <div className="container">
        <div className="main-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
            {/* 로고 이미지 클릭시 홈으로 이동 */}
          </Link>
        </div>
        <div className="icon-container">
          <div className="header-btns">
            <Link to="/Search" className="header-link">
              <SearchIcon className="icon" />
              <div className="header-txt">Search</div>
            </Link>
          </div>
          <div className="header-btns">
            <Link to="/NotFound" className="header-link">
              <DescriptionIcon className="icon" />
              <div className="header-txt">New</div>
            </Link>
          </div>
          <div className="header-btns">
            <Link to="/NotFound" className="header-link">
              <PeopleIcon className="icon" />
              <div className="header-txt">Friends</div>
            </Link>
          </div>
          <div className="header-btns">
            {isLoggedIn ? (
              <>
                <Link to="/Profile" className="header-link">
                  <AccountBoxIcon className="icon" />
                  <div className="header-txt">Profile</div>
                </Link>
              </>
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
}

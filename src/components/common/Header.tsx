/* header */

import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Box, IconButton, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.png';
import '../../styles/common/Header.scss';

const Header = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <Box component="header"
      sx={{
        borderBottom: '2px solid #1e90ff',
        fontSize: '14px',
        padding: {
          xs: '4px 28px',  // 640px 이하
          sm: '4px 54px',  // 기본
        },

        display: {
          xs: 'flex',
          sm: 'block',
        },
      }}
      >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        width: { xs: '100%' }
      }}>
        {/* 로고 */}
        <Box>
          <Link to="/">
            <Box component="img"
              src={logo}
              alt="Logo"
              sx={{
                xs: {
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '32px'
                },

                width: {
                  xs: '120px',
                  sm: '150px'
                }
              }}
            />
          </Link>
        </Box>

        {/* 아이콘 영역 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          {/* 검색 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: '4px 0',
            minWidth: {
              xs: '40px',
              sm: '70px'
            }
          }}>
            <Link to="/search" className="header-link">
              <Box sx={{ 
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <IconButton size="small" sx={{ color:'inherit' }}>
                  <SearchIcon className="icon" />
                </IconButton>
                <Typography sx={{ 
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}>
                  Search
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* 로그인 상태 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: '4px 0',
            minWidth: {
              xs: '40px',
              sm: '70px'
            }
          }}>
            {isLoggedIn ? (
              <Link to="/Profile" className="header-link">
                <Box sx={{
                  display:'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <IconButton size="small" sx={{ color:'inherit' }}>
                    <AccountBoxIcon className="icon" />
                  </IconButton>
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  }}>
                    Profile
                  </Typography>
                </Box>
              </Link>
            ) : (
              <Link to="/Login" className="header-link">
                <Box sx={{
                  display:'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <IconButton size="small" sx={{ color:'inherit' }}>
                    <LoginIcon className="icon" />
                  </IconButton>
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  }}>
                    Login
                  </Typography>
                </Box>
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

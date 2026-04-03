/* 프로필 페이지 */

import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { usePostStore } from '../store/usePostStore';
import useTitle from '../hooks/useTitle';
import { Box, Card, CardContent, Divider} from '@mui/material';
import UserInfo from '../components/Profile/UserInfo';
import MenuButtons from '../components/Profile/MenuButtons';
import LogoutButton from '../components/Profile/LogoutButton';
import ContentBadges from '../components/Profile/ContentBadge';

// 버튼 목록
const menuList = [
  { name: '라이브러리', path: '/Watched' },
  { name: '리뷰 작성하기', path: '/Write' },
];

// ====================
const Profile = () => {
  useTitle('Profile');
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const posts = usePostStore((state) => state.posts);
  const movieCount = posts.filter(p => p.type === 'movie').length;
  const dramaCount = posts.filter(p => p.type === 'drama').length;
  const aniCount = posts.filter(p => p.type === 'animation').length;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box className="mypage-container"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: { xs: '40px 16px', sm: '60px 24px' },
        height: 'auto',
        backgroundColor: '#dadada'
      }}
    >
      {/* 중앙 카드 */}
      <Card
        sx={{
          width: '100%',
          borderRadius: '8px',
          boxShadow: 4,
          p: '10px',
          maxWidth: {
            xs: '90%',  // 모바일
            sm: 420,    // 태블릿 이상
          },
        }}
      >
        <CardContent>
          {/* 유저 정보 */}
          <UserInfo userName={user?.userName} />
          <ContentBadges 
            movieCount={movieCount}
            dramaCount={dramaCount}
            aniCount={aniCount}
          />

          <Divider sx={{ my: 2 }} />

          {/* 메뉴 */}
          <MenuButtons menuList={menuList} />

          <Divider sx={{ my: 2 }} />

          <LogoutButton onLogout={handleLogout}/>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;

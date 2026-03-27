/* 프로필 페이지 - user stats */

import { usePostStore } from '../../store/usePostStore';
import { Box, Typography, Divider } from '@mui/material';

const UserStats = () => {
  const posts = usePostStore((state) => state.posts);

  // 평점 계산
  const avgRating =
    posts.length === 0
      ? 0
      : (
          posts.reduce((acc, cur) => acc + cur.rating, 0) /
          posts.length
        ).toFixed(1);
  
  // 활동일 계산
  const activeDays = new Set(posts.map(p => p.date)).size;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mt: 3,
        padding: '16px 0',
        fontWeight: 'bold',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}
    >
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="body2">총 리뷰</Typography>
        <Typography sx={{
          fontSize: 24,
          fontWeight: 600
        }}>{posts.length}</Typography>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="body2">평균 평점</Typography>
        <Typography sx={{
          fontSize: 24,
          fontWeight: 600
        }}>{avgRating}</Typography>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="body2">총 활동일</Typography>
        <Typography sx={{
          fontSize: 24,
          fontWeight: 600
        }}>{activeDays}일</Typography>
      </Box>      
    </Box>
  );
};

export default UserStats;
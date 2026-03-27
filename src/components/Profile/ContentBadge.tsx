/* 프로필 페이지 - 영화,드라마 구분 뱃지 */

import { Box, Typography } from '@mui/material';

type Props = {
  movieCount: number;
  dramaCount: number;
  aniCount: number;
};

const ContentBadges = ({ movieCount, dramaCount, aniCount }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mt: 2,
      }}
    >
      {/* 영화 */}
      <Box
        sx={{
          padding: '16px 0',
          borderRadius: '8px',
          backgroundColor: '#f6f6f6',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          {movieCount}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          영화
        </Typography>
      </Box>

      {/* 드라마 */}
      <Box
        sx={{
          padding: '16px 0',
          borderRadius: '8px',
          backgroundColor: '#f6f6f6',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          {dramaCount}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          드라마
        </Typography>
      </Box>

      {/* 애니메이션 */}
      <Box
        sx={{
          padding: '16px 0',
          borderRadius: '8px',
          backgroundColor: '#f6f6f6',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          {aniCount}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          애니메이션
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentBadges;
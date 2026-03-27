// 라이브러리 카드

import { Box, Typography } from '@mui/material';
import '../../styles/Watched/WatchedPoster.scss';

type LibraryProps = {
  poster: string;
  title: string;
  signal: 'good' | 'neutral' | 'bad';
  rating: number;
};

const WatchedPoster = ({ poster, title, signal, rating }: LibraryProps) => {
  return (
    <Box className="w-container">
      <Box className="w-box" 
        sx={{ 
          minHeight: 506,
          borderRadius: 2,
          m: '16px 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 1.이미지 */}
        <Box
          component="img"
          sx={{
            width:280,
            minHeight: 410,
            maxHeight: 410,
            objectFit: 'cover',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0'
          }}
          src={`/images/Review/${poster}.jpeg`}
          alt={poster}
        />

        {/* 2.하단 영역 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px:2,
          my: 'auto'
        }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 19,
              maxWidth: '182px'
            }}
          >
            {title}
          </Typography>

          {/* 신호등+평점 */}
          <Box sx={{ 
            display:'flex', 
            alignItems: 'center',
            gap: '6px',
          }}>
            <Box 
              className={`signal ${signal}`}
              sx={{
                width: 13,
                height: 13,
                borderRadius: '50%',
              }}
            />

            <Typography sx={{
              fontSize: 15,
              fontWeight: 600,
              color: '#6b6b6b'
            }}>{rating.toFixed(1)}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchedPoster;

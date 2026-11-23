// 라이브러리 카드

import { Box, Typography } from '@mui/material';
import '../../styles/components/WatchedPoster.scss';

type LibraryProps = {
  poster: string;
  title: string;
  signal: 'good' | 'neutral' | 'bad';
  rating: number;
  date: string;
};

const WatchedPoster = ({ poster, title, signal, rating, date }: LibraryProps) => {
  const defaultPosterUrl = import.meta.env.VITE_DEFAULT_POSTER_URL; // 디폴트 포스터 URL
  
  return (
    <Box className="w-container">
      <Box className="w-box" 
        sx={{ 
          minHeight: 360,
          border: '1px solid #ddd;',
          borderRadius: 2,
          m: '16px 0',
          display: 'flex',
          flexDirection: 'column',

          '@media (max-width:640px)': {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: 140,
            m: '8px 0',
            borderRadius: 1,
          }
        }}
      >
        {/* 1.이미지 */}
        <Box
          component="img"
          sx={{
            width:192,
            minHeight: 280,
            maxHeight: 280,
            objectFit: 'cover',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0',

            '@media (max-width:640px)': {
              width: 96,
              minHeight: 140,
              maxHeight: 140,
              borderRadius: '4px 0 0 4px',
            }
          }}
          src={poster ? poster : defaultPosterUrl}
          alt={title}
        />

        {/* 2.하단 영역 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          px:2,
          my:2,

          '@media (max-width:640px)': {
            width: '100%',
          }
        }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            {title}
          </Typography>

          <Box sx={{
            width: '100%',
            my: '2px',
            display: 'flex',
            justifyContent: 'space-between',

            '@media (max-width:640px)': {
              flexDirection: 'column',
            }
          }}>
            {/* 관람일자 */}
            <Typography sx={{
              fontSize: 14,
              color: '#6b6b6b'
            }}>{date}</Typography>

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
                fontSize: 14,
                fontWeight: 600,
                color: '#6b6b6b'
              }}>{rating.toFixed(1)}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchedPoster;

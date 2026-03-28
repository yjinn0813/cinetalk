// Not Found 예외처리 페이지

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

// ====================
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        m: '80px 0'
      }}
    >
      <Box sx={{
          textAlign: 'center',
          p: { xs: 3, sm: 5 },
          width: '100%',
          maxWidth: {
            xs: '80%', // 모바일
            sm: 420,   // 태블릿 이상
          },
        }}
      >
        {/* 아이콘 */}
        <Box sx={{ mb: 2 }}>
          <SearchOffIcon sx={{ fontSize: 60, color: '#1e90ff' }} />
        </Box>

        {/* 타이틀 */}
        <Typography sx={{
          fontSize: { xs: '22px', sm: '26px' },
          fontWeight: 700,
          mb: 1,
        }}> 페이지를 찾을 수 없습니다 </Typography>

        {/* 404 텍스트 */}
        <Typography sx={{
          fontSize: '16px',
          color: '#999',
          mb: 2,
        }}> 404 Not Found </Typography>

        {/* 메시지 */}
        <Typography sx={{
            fontSize: { xs: '14px', sm: '15px' },
            color: '#6b6b6b',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          존재하지 않거나 사용할 수 없는 페이지입니다.
          <br />
          주소를 다시 확인해주세요.
        </Typography>

        {/* 버튼 */}
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1.5,
          }}
        >
          <Button variant="contained"
            onClick={() => navigate(-1)}
            sx={{
              flex: 1,
              py: 2,
              borderRadius: '8px',
              backgroundColor: '#6b6b6b',
              color: '#f0f0f0',
              fontSize: '17px',
            }}
          >
            이전 화면
          </Button>

          <Button variant="contained"
            onClick={() => navigate('/')}
            sx={{
              flex: 1,
              py: 2,
              borderRadius: '8px',
              backgroundColor: '#1e90ff',
              color: '#f0f0f0',
              fontSize: '17px',
            }}
          >
            홈으로
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
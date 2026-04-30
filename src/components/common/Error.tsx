/* Error Component for React Query */

import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h5">
          에러가 발생했습니다 😥
        </Typography>

        <Stack direction="row" spacing={3}>
          <Button variant="outlined" 
            onClick={() => navigate(-1)}
            sx={{
              border: '1px solid #1e90ff',
              borderRadius: 2,
              fontSize: 18,
              fontWeight: 600,
              padding: '10px 20px',
            }}
          >
            뒤로가기
          </Button>

          <Button variant="contained" 
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#1e90ff',
              borderRadius: 2,
              fontSize: 18,
              fontWeight: 600,
              padding: '10px 20px',
            }}
          >
            홈으로 이동
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Error;
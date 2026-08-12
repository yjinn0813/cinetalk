// 리뷰 작성 페이지 > 신호등 컴포넌트
import React from 'react'
import { Box, Typography } from '@mui/material';

type Signal = 'good' | 'neutral' | 'bad';

type SignalInputProps = {
  value: Signal;
  onChange: (value: Signal) => void;
};

const SignalInput = ({ value, onChange }: SignalInputProps) => {
  return (
    <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ fontSize: 18, mr: 2, minWidth: '48px' }}>
        신호등
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, ml: 1 }}>
        {/* 좋음 */}
        <Box
          onClick={() => onChange('good')}
          sx={{
            py: 1,
            px: 2,
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              mr: 1,
              backgroundColor: value === 'good' ? '#4caf50' : '#ccc',
            }}
          />
          <Typography fontSize={14}>좋음</Typography>
        </Box>

        {/* 보통 */}
        <Box
          onClick={() => onChange('neutral')}
          sx={{
            py: 1,
            px: 2,
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              mr: 1,
              backgroundColor: value === 'neutral' ? '#fbc02d' : '#ccc',
            }}
          />
          <Typography fontSize={14}>보통</Typography>
        </Box>

        {/* 별로 */}
        <Box
          onClick={() => onChange('bad')}
          sx={{
            py: 1,
            px: 2,
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              mr: 1,
              backgroundColor: value === 'bad' ? '#f44336' : '#ccc',
            }}
          />
          <Typography fontSize={14}>별로</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignalInput;
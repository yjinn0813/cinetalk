// 리뷰 작성 페이지 > 별점 컴포넌트
import React from 'react';
import { Box, Rating, Typography } from '@mui/material';

type RatingInputProps = {
  value: number;
  onChange: (value: number) => void;
};

const RatingInput = ({ value, onChange }: RatingInputProps) => {
  const handleRatingChange = (
    _event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    onChange(newValue || 0);
  };

  return (
    <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ fontSize: 18, mr: 2, minWidth: '48px' }}>
        평점
      </Typography>

      <Rating
        precision={0.5}
        value={value}
        onChange={handleRatingChange}
        sx={{
          color: '#1e90ff',
          fontSize: '32px',
        }}
      />
    </Box>
  );
};

export default RatingInput;

// 리뷰 박스
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import '../../styles/components/ReviewBox.scss';

type ReviewProps = {
  movieName: string;
  trafficLight: string;
  poster: string;
  author: string;
}

const ReviewBox = ({ movieName, trafficLight, poster, author }: ReviewProps) => {
  return (
    <Card sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #1e90ff',
        borderRadius: 3,
        boxShadow: 5,
        p: '16px',
        transition: '0.3s',

        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >

      {/* 포스터 */}
      <CardMedia
        className='main-poster'
        component="img"
        image={`/images/Poster/${poster}`}
        sx={{
          height: 240,
          borderRadius: 2,
        }}
      />
      
      <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: '16px !important'
        }}
      >
        <Typography variant="h6" sx={{ fontSize:'18px' }}>
          {movieName}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          mt: '4px',
          fontSize: '14px',
          color: '#6b6b6b'
        }}>
          <div className={`traffic-light ${trafficLight}`}></div>
          <Typography variant="body2">
            {author} 님의 리뷰
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ReviewBox;

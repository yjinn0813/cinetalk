// 리뷰 박스
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import '../../styles/Main/ReviewBox.scss';

type ReviewProps = {
  movieName: string;
  trafficLight: string;
  poster: string;
  author: string;
}

const ReviewBox = ({ movieName, trafficLight, poster, author }: ReviewProps) => {
  return (
    <Card className='main-box' 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 3,
        boxShadow: 5,
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
      
      <CardContent className='main-wrap'>
        <Typography variant="h6" className="main-movie-title">
          {movieName}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          className="main-author"
        >
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

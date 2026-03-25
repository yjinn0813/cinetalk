// 박스오피스 랭킹 박스

import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import '../../styles/Main/RankBox.scss';

type RankProps = {
  Rank: number;
  Boxoffice: string;
  RankName: string;
}

const RankBox =({ Rank, Boxoffice, RankName }: RankProps) => {
  return (
    <Card className="rank-box"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'auto', // 원하는 카드 폭
        height: 110, // 직사각형 높이
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #ffffff, #e3f0ff)',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      {/* 포스터 */}
      <CardMedia
        className="rank-poster"
        component="img"
        image={`images/Main/${Boxoffice}`}
        alt={Boxoffice}
        sx={{
          width: 80,
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* 텍스트 */}
      <CardContent className='rank-text' 
        sx={{ display:'flex', flexDirection:'row', alignItems:'center', flex:1 }}
      >
        <Typography variant="subtitle1"
          fontWeight="bold"
          className="rank"
          sx={{ pr:3 }}
        >
          {Rank}
        </Typography>
        <Typography variant="body1" className="rank-name">{RankName}</Typography>
      </CardContent>
    </Card>
  );
}

export default RankBox;

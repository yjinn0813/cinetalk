// 박스오피스 랭킹 박스

import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import '../../styles/Main/RankBox.scss';

type RankChangeType = "up" | "down" | "new" | "equal";
type RankProps = {
  rank: number;
  poster: string;
  name: string;
  rankChange: RankChangeType,
  rankDiff: number;
}

const getRankColor = (rankChange: RankChangeType) => {
  switch (rankChange) {
    case 'up': return '#ff4d4f';
    case 'down': return '#1261ff';
    case 'new': return '#ffaa00';
    default: return '#6b6b6b'; // 'equal'
  }
};

const renderRankIcon = (rankChange: RankChangeType, rankDiff: number) => {
  switch (rankChange) {
    case 'up':
      return (
        <Box component="div" 
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <ArrowDropUpIcon sx={{ fontSize: 32, fontWeight: 700 }} />
          <Typography component="div" 
            fontWeight="bold" 
            className='rank-change'
          >{rankDiff}</Typography>
        </Box>
      );
    case 'down':
      return (
        <Box component="div"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <ArrowDropDownIcon sx={{ fontSize: 32, fontWeight: 700 }} />
          <Typography component="div" 
            fontWeight="bold" 
            className='rank-change'
          >{rankDiff}</Typography>
        </Box>
      );
    case 'equal':
      return <RemoveRoundedIcon sx={{ fontSize: 40, fontWeight: 900 }} />;
    case 'new':
      return <FiberNewOutlinedIcon sx={{ fontSize: 40, fontWeight: 700 }} />;
  }
};

// ====================
const RankBox =({ rank, poster, name, rankChange, rankDiff }: RankProps) => {
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
        image={`images/Main/rank/${poster}`}
        alt={poster}
        sx={{
          width: 80,
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* 텍스트 */}
      <CardContent
        className='rank-text'
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flex: 1
        }}
      >
        {/* 왼쪽: 순위 + 영화제목 */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ pr: 1 }} className='rank'>
            {rank}
          </Typography>
          <Typography variant="body1" className='rank-name'>{name}</Typography>
        </Box>

        {/* 오른쪽: 등락 */}
        <Typography
          component="div"
          variant="body2"
          sx={{
            fontWeight: 'bold',
            color: getRankColor(rankChange)
          }}
        >
          {renderRankIcon(rankChange, rankDiff)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RankBox;

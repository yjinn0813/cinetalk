// 리뷰 상세보기 컴포넌트 구조

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { copyToClipboard } from '../../utils/clipboard';
import { Box, Typography, Chip, Button, Snackbar, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type PostProps = {
  id?: number;
  type: 'movie' | 'animation' | 'drama';
  poster: string;
  title: string;
  date: string;
  body: string;
  signal: 'good' | 'neutral' | 'bad';
  rating: number;
  onDelete: () => void;
  isDeleting?: boolean; // 삭제 중 중복 클릭 방지
};


const ReadPosts = ({ poster, type, title, date, body, signal, rating, onDelete, isDeleting }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [openToast, setOpenToast] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const posterImage = `/images/Review/${poster}.jpeg`;

  // types
  const typeMap = {
    movie: {
      label: '영화', 
      bgcolor: '#cee5fa',
      color: '#174b75',
    },
    drama: {
      label: '드라마', 
      bgcolor: '#fbdbe4',
      color: '#70314f'
    },
    animation: {
      label: '애니메이션', 
      bgcolor: '#ecdcf5',
      color: '#624273'
    },
  }

  // 좋아요
  const handleLikeClick = () => {
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    setLiked((prev) => !prev);
  };

  // 공유
  const handleShareClick = async () => {
    try {
      await copyToClipboard();
      setOpenToast(true);
    } catch {
      alert('복사 실패');
    }
  };

  // 수정 페이지 이동
  const handleEdit = () => {
    navigate(`/write/${id}`);
  };

  // 버튼 데이터 객체
  const buttons = [
    {
      label: `${likeCount}`,
      icon: liked ? (
        <FavoriteIcon sx={{ color: '#1e90ff' }} />
      ) : (
        <FavoriteBorderIcon />
      ),
      onClick: handleLikeClick,
    },
    {
      label: '공유',
      icon: <ShareIcon />,
      onClick: handleShareClick,
    },
    {
      label: '수정',
      icon: <EditIcon />,
      onClick: handleEdit,
    }
  ];

  // ====================
  return (
    <Box className="r-container">
      <Box sx={{
        border: '1px solid #dadada',
        borderRadius: 2,
        py: 4, px: 3
      }}>

        {/* 상단 */}
        <Box sx={{ display: 'flex', gap: '24px', mb:4 }}>
          <Box
            component="img"
            src={posterImage}
            alt="poster"
            sx={{
              width: 120,
              borderRadius: 1,
              objectFit: 'cover',
            }}
          />

          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Chip 
              label={typeMap[type].label}
              sx={{
                backgroundColor: typeMap[type].bgcolor,
                color: typeMap[type].color,
                mb: 1,
                width: 90,
                borderRadius: '8px',
              }}
            />

            <Typography sx={{ 
              fontWeight: 600,
              fontSize: 24,
            }}>
              {title}
            </Typography>

            <Typography
              sx={{ 
                color: 'text.secondary',
                fontSize: 15
              }}
            >
              {date}
            </Typography>

            {/* 신호등 + 평점 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <Box
                className={`signal ${signal}`}
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                }}
              />
              <Typography sx={{ 
                fontWeight: 600,
                fontSize: 19
              }}>
                {rating.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 본문 */}
        {body.split('\n').map((line, idx) => (
          <Typography
            key={idx}
            sx={{
              whiteSpace: 'pre-line',
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            {line}
          </Typography>
        ))}

        {/* 액션 버튼 */}
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mt: 4 
        }}>
          {buttons.map((btn, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={btn.icon}
              onClick={btn.onClick}
              sx={{ 
                minWidth: '82px',
                p: '8px 0',

                '&.MuiButton-outlined:hover': {
                  backgroundColor: '#1e90ff',
                  color: '#fff',
                },
              }}
            >
              {btn.label}
            </Button>
          ))}

          {/* 삭제 */}
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={isDeleting ? undefined : onDelete}
            disabled={isDeleting}
            sx={{ 
              minWidth: '82px',
              p: '8px 0',

              '&.MuiButton-outlined:hover': {
                backgroundColor: '#c62828',
                color: '#fff',
              },
            }}
          >
            삭제
          </Button>
        </Box>
      </Box>

      {/* 토스트 */}
      <Snackbar
        open={openToast}
        autoHideDuration={2000}
        onClose={() => setOpenToast(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled">
          URL이 복사되었습니다!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ReadPosts;
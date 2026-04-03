/* 리뷰 작성하기 페이지 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostStore } from '../store/usePostStore';
import useTitle from '../hooks/useTitle';
import { Box, TextField, Typography, Button, Snackbar, Alert, Rating } from '@mui/material';
import '../styles/pages/Write.scss';

type newPostProps = {
  title: string;
  body: string;
  date: string;
  rating: number;
  signal: 'good' | 'neutral' | 'bad';
  type: 'movie' | 'drama' | 'animation';
}

// ====================
const Write = () => {
  useTitle('Write');
  const navigate = useNavigate();
  const { addPost } = usePostStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<newPostProps>({
    title: '',
    body: '',
    date: '',
    rating: 0,
    signal: 'good',
    type: 'movie'
  });

  // 인풋 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 별점 핸들러
  const handleRatingChange = (_: React.SyntheticEvent, value: number | null) => {
    setForm((prev) => ({
      ...prev,
      rating: value || 0,
    }));
  };

  // 작성완료 핸들러
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title || !form.body || !form.date || form.rating === 0){
      return;
    }

    const newPost = {
      ...form,
      poster: 'default_poster', // 디폴트 포스터
    };

    const newId = addPost(newPost);

    setOpen(true); // 토스트 오픈

    setTimeout(() => {
      navigate(`/Review/${newId}`);
    }, 1200);
  };

  return (
    <Box className="write-container">
      <Typography variant="h5" 
        sx={{ 
          fontWeight: 600, 
          fontSize: '32px',
          m: '28px 0 54px',
        }}>
        리뷰 작성하기
      </Typography>

      <Box component="form" onSubmit={handleSubmit}
        sx={{ 
          m: '0 40px',
          width: '100%',
          maxWidth: {
            xs: '360px',
            sm: '800px'
          },
        }}
      >
        {/* 제목 */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="영화 제목"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </Box>

        {/* 관람 날짜 */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            type="date"
            name="date"
            label="관람일"
            InputLabelProps={{ shrink: true }}
            value={form.date}
            onChange={handleChange}
          />
        </Box>

        {/* 평점 */}
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize:18, mr:2, minWidth:'48px' }}>평점</Typography>
          <Rating
            precision={0.5}
            value={form.rating}
            onChange={handleRatingChange}
            sx={{
              color: '#1e90ff',
              fontSize: '32px',
            }}
          />
        </Box>

        {/* 신호등 */}
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize:18, mr:2, minWidth:'48px' }}>신호등</Typography>

          <Box sx={{ display: 'flex', gap: 1, ml:1 }}>
            {/* 좋음 */}
            <Box
              onClick={() => setForm(prev => ({ ...prev, signal: 'good' }))}
              sx={{
                py: 1,
                px: 2,
                cursor: 'pointer',
                border:'1px solid #ddd',
                borderRadius: 2,
                display:'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  mr:1,
                  backgroundColor:
                    form.signal === 'good' ? '#4caf50' : '#ccc',
                }}
              />
              <Typography fontSize={14}>좋음</Typography>
            </Box>

            {/* 보통 */}
            <Box
              onClick={() => setForm(prev => ({ ...prev, signal: 'neutral' }))}
              sx={{
                py: 1,
                px: 2,
                cursor: 'pointer',
                border:'1px solid #ddd',
                borderRadius: 2,
                display:'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  mr:1,
                  backgroundColor:
                    form.signal === 'neutral' ? '#fbc02d' : '#ccc',
                }}
              />
              <Typography fontSize={14}>보통</Typography>
            </Box>

            {/* 별로 */}
            <Box
              onClick={() => setForm(prev => ({ ...prev, signal: 'bad' }))}
              sx={{
                py: 1,
                px: 2,
                cursor: 'pointer',
                border:'1px solid #ddd',
                borderRadius: 2,
                display:'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  mr:1,
                  backgroundColor:
                    form.signal === 'bad' ? '#f44336' : '#ccc',
                }}
              />
              <Typography fontSize={14}>별로</Typography>
            </Box>

          </Box>
        </Box>

        {/* 본문 */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            multiline
            minRows={10}
            label="리뷰 본문"
            name="body"
            value={form.body}
            onChange={handleChange}
          />
        </Box>

        {/* 버튼 */}
        <Box sx={{
          textAlign: 'center',
          m: '80px 0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button
            type="submit"
            variant="contained"
            disabled={
              !form.title ||
              !form.body ||
              !form.date ||
              form.rating === 0
            }
            sx={{
              backgroundColor: '#1e90ff',
              borderRadius: 2,
              fontSize: 20,
              fontWeight: 600,
              p: '16px 0',
              minWidth: '360px',
            }}
          >
            작성완료
          </Button>
        </Box>
      </Box>

      {/* Snackbar (토스트) */}
      <Snackbar
        open={open}
        autoHideDuration={1200}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" variant='filled'>
          리뷰가 등록되었습니다!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Write;

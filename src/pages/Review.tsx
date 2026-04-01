/* 리뷰 상세보기 페이지 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostStore } from '../store/usePostStore';
import { Box, Typography, IconButton, Snackbar, Alert } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReadPosts from '../components/Review/ReadPosts';
import '../styles/pages/Review.scss';

// ====================
const Review = () => {
  const [openToast, setOpenToast] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = usePostStore((state) => state.posts);
  const deletePost = usePostStore((state) => state.deletePost);
  
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <Box className="NotFound" sx={{ textAlign: 'center', mt: 5 }}>
        해당 글을 찾을 수 없습니다!😭
      </Box>
    );
  }

  const handleDelete = () => {
    deletePost(Number(id));
    setOpenToast(true);

    setTimeout(() => {
      navigate('/watched');
    }, 1500);
  };

  return (
    <Box className="r-wrap" sx={{ 
      maxWidth: 900, mx: 'auto', px: 2,
    }}>
      
      {/* 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          margin: '60px 0',
          position: 'relative'
        }}
      >
        <IconButton
          className="r-back"
          onClick={() => navigate('/watched')}
          sx={{
            position: 'absolute',
            left: 0
          }}
        >
          <ArrowBackIosIcon sx={{ color: '#000', fontSize: '26px' }}/>
        </IconButton>

        <Typography
          className="rp-title"
          variant="h6"
          sx={{ 
            fontWeight: 600,
            fontSize: '32px',
          }}
        >
          리뷰 상세보기
        </Typography>
      </Box>

      {/* 본문 컴포넌트 */}
      <ReadPosts
        poster={post.poster}
        title={post.title}
        date={post.date}
        body={post.body}
        signal={post.signal}
        rating={post.rating}
        onDelete={handleDelete}
      />

      {/* 삭제 토스트 */}
      <Snackbar
        open={openToast}
        autoHideDuration={1500}
        onClose={() => setOpenToast(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled">
          리뷰가 삭제되었습니다!
        </Alert>
      </Snackbar>

    </Box>
  );
};

export default Review;

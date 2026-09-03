/* 리뷰 상세보기 페이지 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReview } from '../hooks/useReview';
import { useDeleteReview } from '../hooks/useDeleteReview';
import { useDeleteReviewImage } from '../hooks/useDeleteImg';
import useTitle from '../hooks/useTitle';
import ReadPosts from '../components/Review/ReadPosts';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import { Box, Typography, IconButton, Snackbar, Alert } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../styles/pages/Review.scss';

// ====================
const Review = () => {
  useTitle('Review');
  const [openToast, setOpenToast] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const defaultPosterUrl = import.meta.env.VITE_DEFAULT_POSTER_URL; // 디폴트 포스터 URL

  // React Query - fetch
  const { data: post, isLoading, isError } = useReview(id!);
  const { mutateAsync: deleteMutate, isPending } = useDeleteReview();
  const { mutateAsync: deleteImage } = useDeleteReviewImage();
  if (isLoading) return <Loading />;
  if (isError || isErrorOpen) return <Error />;

  if (!post && !openToast) {
    return (
      <Box className="NotFound" sx={{ textAlign: 'center', mt: 5 }}>
        해당 글을 찾을 수 없습니다!😭
      </Box>
    );
  }

  // 삭제 핸들러
  const handleDelete = async() => {
    const posterData = post.poster;
    if (!id) return;

    // 삭제 전 확인
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteMutate(id);

      // DB 삭제 성공 후 Storage 이미지 삭제
      if (posterData && posterData !== defaultPosterUrl) {
        try {
          await deleteImage(posterData);
        } catch (error) {
          console.error('이미지 삭제 실패:', error);
        }
      }

      setOpenToast(true);

      setTimeout(() => {
        navigate('/watched');
      }, 1500);
    } catch (error) {
      console.error('리뷰 삭제 실패:', error);
      setIsErrorOpen(true);
    }
  };

  // ====================
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
        type={post.type}
        title={post.title}
        date={post.date}
        body={post.body}
        signal={post.signal}
        rating={post.rating}
        onDelete={handleDelete}
        isDeleting={isPending} // 삭제 중 중복 클릭 방지
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

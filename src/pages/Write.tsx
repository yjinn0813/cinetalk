/* 리뷰 작성하기 페이지 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { convertToWebp } from '../utils/convertToWebp';
import { useUploadReviewImage } from '../hooks/useUploadImg';
import { useDeleteReviewImage } from '../hooks/useDeleteImg';
import { useReview } from '../hooks/useReview';
import { useCreateReview } from '../hooks/useCreateReview';
import { useUpdateReview } from '../hooks/useUpdateReview';
import useTitle from '../hooks/useTitle';
import Error from '../components/common/Error';
import Loading from '../components/common/Loading';
import RatingInput from '../components/Write/RatingInput';
import SignalInput from '../components/Write/SignalInput';
import PosterUploader from '../components/Write/PosterUploader';
import { Box, TextField, Typography, Button, Snackbar, Alert } from '@mui/material';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import '../styles/pages/Write.scss';

type newPostProps = {
  title: string;
  body: string;
  date: string;
  rating: number;
  signal: 'good' | 'neutral' | 'bad';
  type: 'movie' | 'drama' | 'animation';
  poster: string;
}

// ====================
const Write = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const defaultPosterUrl = import.meta.env.VITE_DEFAULT_POSTER_URL; // 디폴트 포스터 URL
  
  const isEdit = Boolean(id);
  const pageTitle = isEdit ? '리뷰 수정하기' : '리뷰 작성하기';
  useTitle(isEdit ? 'Edit' : 'Write');

  const { data: post, isLoading } = useReview(id!);
  const { mutateAsync: createMutate } = useCreateReview();
  const { mutateAsync: updateMutate } = useUpdateReview();
  const { mutateAsync: uploadImage } = useUploadReviewImage();
  const { mutateAsync: deleteImage } = useDeleteReviewImage();

  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [form, setForm] = useState<newPostProps>({
    title: '',
    body: '',
    date: '',
    rating: 0,
    signal: 'good',
    type: 'movie',
    poster: '',
  });

  // 수정하기 모드
  if (isEdit && isLoading) {
    return <Loading />;
  }

  useEffect(() => {
    if (!post) return;

    setForm({
      title: post.title,
      body: post.body,
      date: post.date,
      rating: post.rating,
      signal: post.signal || 'good',
      type: post.type,
      poster: post.poster || defaultPosterUrl,
    })
  }, [post]);

  // 인풋 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* 작성완료 핸들러 */
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title || !form.body || !form.date || form.rating === 0){
      return;
    }

    // 미래 날짜 선택 방지
    const today = new Date().toISOString().split('T')[0];
    if (form.date > today) {
      return;
    }

    /* 이미지 첨부 여부 확인해서 CRUD 처리 */
    try {
      let submitData = { ...form }; // 제출용 데이터 복사해서 사용

      /* 1) 이미지 신규 등록 또는 기존 이미지 교체 */
      if (posterFile) {  
        // webp로 변환 후, 변환된 파일을 스토리지에 업로드하고 링크 반환
        const webpFile = await convertToWebp(posterFile);
        const imageUrl = await uploadImage(webpFile); 

        // DB에 저장할 poster를 Supabase 이미지 URL로 변경
        submitData = {
          ...submitData,
          poster: imageUrl,
        }
      } else if (!submitData.poster) {
        /* 2) 이미지 제거 또는 처음부터 이미지 없음 */
        submitData.poster = defaultPosterUrl;
      }

      if (id) {
        /* 수정 모드 */
        const oldPosterUrl = post.poster;
        
        const data = await updateMutate({
          id,
          data: submitData,
        });

        // DB 수정 성공 후 기존 이미지 삭제
        if (
          oldPosterUrl &&
          oldPosterUrl !== defaultPosterUrl &&
          oldPosterUrl !== submitData.poster
        ) {
          try {
            await deleteImage(oldPosterUrl);
          } catch (error) {
            // DB 수정은 성공했으므로 Storage 삭제 실패는 별도로 처리
            console.error('기존 이미지 삭제 실패:', error);
          }
        }

        setToastOpen(true);

        setTimeout(() => {
          navigate(`/Review/${data.id}`);
        }, 1200);
      } else {
        /* 신규 작성 모드 */
        const data = await createMutate(submitData);

        setToastOpen(true);

        setTimeout(() => {
          navigate(`/Review/${data.id}`);
        }, 1200);
      }
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      setIsErrorOpen(true);
      return;
    }    
  };

  if (isErrorOpen) {
    return <Error />;
  }

  return (
    <Box className="write-container">
      <Typography variant="h5" 
        sx={{ 
          fontWeight: 600, 
          fontSize: '32px',
          m: '28px 0 54px',
        }}>
        {pageTitle}
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
        {/* 타입 선택 */}
        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel>콘텐츠 타입</InputLabel>
            <Select
              name="type"
              value={form.type}
              label="콘텐츠 타입"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  type: e.target.value as 'movie' | 'drama' | 'animation',
                }))
              }
            >
              <MenuItem value="movie">영화</MenuItem>
              <MenuItem value="drama">드라마</MenuItem>
              <MenuItem value="animation">애니메이션</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* 제목 */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="작품 제목"
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
            value={form.date}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              htmlInput: {
                max: new Date().toISOString().split('T')[0],
              },
            }}
          />
        </Box>

        {/* 평점 */}
        <RatingInput
          value={form.rating}
          onChange={(rating) =>
            setForm((prev) => ({
              ...prev,
              rating,
            }))
          }
        />

        {/* 신호등 */}
        <SignalInput
          value={form.signal}
          onChange={(signal) =>
            setForm((prev) => ({
              ...prev,
              signal,
            }))
          }
        />

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

        {/* 이미지 첨부 */}
        <PosterUploader
          value={form.poster}
          onChange={(poster, file) => {
            setForm((prev) => ({
              ...prev,
              poster,
            }));

            setPosterFile(file);
          }}
        />

        {/* 버튼 */}
        <Box sx={{
          textAlign: 'center',
          m: '80px 0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}>
          {isEdit && (
            <Button
              variant="outlined"
              onClick={() => navigate(`/review/${id}`)}
              sx={{
                color: '#1e90ff',
                borderRadius: 2,
                fontSize: 20,
                fontWeight: 600,
                p: '16px 0',
                minWidth: '240px'
              }}
            >취소</Button>
          )}
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
              minWidth: '240px',
            }}
          >
            {isEdit ? '수정완료' : '작성완료'}
          </Button>
        </Box>
      </Box>

      {/* Snackbar (토스트) */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={1200}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" variant='filled'>
          {isEdit ? '리뷰가 수정되었습니다!' : '리뷰가 등록되었습니다!'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Write;

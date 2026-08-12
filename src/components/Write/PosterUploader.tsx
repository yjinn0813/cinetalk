// 리뷰 작성 페이지 > 이미지 첨부 컴포넌트
import React, { useRef, useState } from 'react';
import { Alert, Box, Button, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type PosterUploaderProps = {
  value: string;
  onChange: (value: string) => void;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
];

const PosterUploader = ({ value, onChange }: PosterUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError('');

    // 파일 형식 검사
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('JPG, PNG, WEBP 형식의 이미지만 업로드할 수 있습니다.');
      e.target.value = '';
      return;
    }

    // 파일 용량 검사
    if (file.size > MAX_FILE_SIZE) {
      setError('이미지는 10MB 이하만 업로드할 수 있습니다.');
      e.target.value = '';
      return;
    }

    // 기존 이미지가 있으면 URL 해제
    if (value.startsWith('blob:')) {
      URL.revokeObjectURL(value);
    }

    // 미리보기 URL 생성
    const previewUrl = URL.createObjectURL(file);

    onChange(previewUrl);

    // 같은 파일을 다시 선택할 수 있도록 초기화
    e.target.value = '';
  };

  const handleRemove = () => {
    if (value.startsWith('blob:')) {
      URL.revokeObjectURL(value);
    }

    onChange('');
    setError('');
  };

  // ==========================
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontSize: 18,
          mb: 1.5,
        }}
      >
        포스터
      </Typography>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        hidden
        onChange={handleFileChange}
      />

      {value ? (
        <Box
          sx={{
            position: 'relative',
            width: 200,
          }}
        >
          <Box
            component="img"
            src={value}
            alt="포스터 미리보기"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 300,
              objectFit: 'contain',
              borderRadius: 2,
              display: 'block',
            }}
          />

          <IconButton
            onClick={handleRemove}
            aria-label="이미지 삭제"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            <DeleteIcon />
          </IconButton>

          <Button
            variant="outlined"
            startIcon={<AddPhotoAlternateIcon />}
            onClick={() => inputRef.current?.click()}
            sx={{
              mt: 1,
              width: '100%',
              minWidth: 200,
              p: '12px 0',
              fontSize: 15,

              '&:hover': {
                backgroundColor: '#1e90ff',
                color: '#fff',
              },
            }}
          >
            다른 이미지 선택
          </Button>
        </Box>
      ) : (
        <Button
          variant="outlined"
          startIcon={<AddPhotoAlternateIcon />}
          onClick={() => inputRef.current?.click()}
          sx={{
            minWidth: 200,
            p: '12px 0',
            fontSize: 15,

            '&:hover': {
              backgroundColor: '#1e90ff',
              color: '#fff',
            },
          }}
        >
          포스터 첨부
        </Button>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{ mt: 1 }}
        >
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default PosterUploader;

/* 리뷰 이미지 추가 - React Query */

import { useMutation } from '@tanstack/react-query';
import { uploadReviewImage } from '../api/storage';

export const useUploadReviewImage = () => {
  return useMutation({
    mutationFn: (file: File) => uploadReviewImage(file),

    onError: (error) => {
      console.error('이미지 업로드 실패:', error);
    },
  });
};
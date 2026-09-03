/* 리뷰 이미지 삭제 - React Query */

import { useMutation } from '@tanstack/react-query';
import { deleteReviewImage } from '../api/storage';

export const useDeleteReviewImage = () => {
  return useMutation({
    mutationFn: (publicUrl: string) => deleteReviewImage(publicUrl),
    onError: (error) => {
      console.error('이미지 삭제 실패:', error);
    },
  });
};
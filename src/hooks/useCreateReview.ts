/* 개별 리뷰 CRUD - React Query */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview } from '../api/reviews';
import { CreateReview } from '../types/reviewTypes';

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newReview: CreateReview) => createReview(newReview), // DB insert

    onSuccess: () => {
      // 리뷰 리스트 자동 재요청
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },

    onError: (error) => {
      console.error('리뷰 생성 실패:', error);
    },
  });
};
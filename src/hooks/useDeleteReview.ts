/* 개별 리뷰 CRUD - React Query */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview } from '../api/reviews';

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteReview(id),

    onSuccess: () => {
      // 리뷰 리스트 자동 재요청
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },

    onError: (error) => {
      console.error('리뷰 삭제 실패', error);
    }
  })
}
/* 개별 리뷰 CRUD - React Query */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateReview } from '../api/reviews';
import { UpdateReview } from '../types/reviewTypes';

// 개별 리뷰 수정하기
export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({id, data}: {id: string; data: UpdateReview}) => updateReview(id, data),

    onSuccess: (data) => {
      // 개별 캐시 갱신
      queryClient.invalidateQueries({ queryKey: ['review', data.id] }); 
      
      // 리스트 캐시 갱신
      queryClient.invalidateQueries({ queryKey: ['reviews']}); 
    },

    onError: (error) => {
      console.error('리뷰 수정 실패:', error);
    },
  })
}
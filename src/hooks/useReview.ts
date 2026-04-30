/* 개별 리뷰 CRUD - React Query */

import { useQuery } from '@tanstack/react-query';
import { getReview } from '../api/reviews';

// 개별 리뷰 조회하기
export const useReview = (id: string) => {
  return useQuery({
    queryKey: ['review', id],
    queryFn: () => getReview(id),
    enabled: !!id,
  })
}
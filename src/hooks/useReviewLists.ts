/* 리뷰리스트 조회 react query */

import { useQuery } from '@tanstack/react-query';
import { getReviewLists } from '../api/reviews';

export const useReviewLists = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: getReviewLists,
  });
};
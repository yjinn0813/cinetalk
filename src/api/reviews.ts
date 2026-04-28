/* supabase 리뷰 데이터 CRUD */

import { supabase } from '../lib/supabase';

// 리스트 전체 불러오기
export const getReviewLists = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*');

  if (error) throw error;
  return data;
};
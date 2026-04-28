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

// 개별 리뷰 불러오기
export const getReview = async (id: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('id', id)  // 특정 아이디 필터링해서
    .single();     // 결과 1개만 가져오기

  if (error) throw error;
  return data;
};
/* supabase 리뷰 데이터 CRUD */

import { supabase } from '../lib/supabase';
import { CreateReview, UpdateReview } from '../types/reviewTypes';

// READ - 리스트 전체 불러오기
export const getReviewLists = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*');

  if (error) throw error;
  return data;
};

// READ - 개별 리뷰 불러오기
export const getReview = async (id: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('id', id)  // 특정 아이디 필터링해서
    .single();     // 결과 1개만 가져오기

  if (error) throw error;
  return data;
};

// CREATE - 개별 리뷰 추가하기
export const createReview = async (newReview: CreateReview) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert([newReview])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// UPDATE - 개별 리뷰 수정하기
export const updateReview = async (id: string, updatePost: UpdateReview) => {
  const { data, error } = await supabase 
    .from('reviews')
    .update(updatePost)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// DELETE - 개별 리뷰 삭제하기
export const deleteReview = async (id: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', id)
    .select().single();

  if (error) throw error;
  return data;
}
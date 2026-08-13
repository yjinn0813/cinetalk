/* supabase 리뷰 사진 데이터 CRUD */

import { supabase } from '../lib/supabase';

// 이미지 업로드
export const uploadReviewImage = async (file: File) => {
  const fileName = `${crypto.randomUUID()}.webp`;

  const { error } = await supabase.storage
    .from('posters')
    .upload(fileName, file, {
      contentType: 'image/webp',
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from('posters')
    .getPublicUrl(fileName);

  return data.publicUrl;
};
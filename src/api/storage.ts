/* supabase 리뷰 사진 데이터 CRUD */

import { supabase } from '../lib/supabase';

// ====== 이미지 업로드 =====
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

// ====== 이미지 삭제 =====
export const deleteReviewImage = async (publicUrl: string) => {
  // posters bucket의 Public URL인지 확인
  const bucketPath = '/storage/v1/object/public/posters/';
  const pathIndex = publicUrl.indexOf(bucketPath);

  if (pathIndex === -1) {
    throw new Error('유효하지 않은 이미지 URL입니다.');
  }

  // Storage path 추출 (filename.webp)
  const filePath = publicUrl.slice(pathIndex + bucketPath.length);

  // 기본 이미지는 삭제하지 않음
  if (filePath === 'default_poster.webp') {
    throw new Error('기본 이미지는 삭제할 수 없습니다.');
  }

  // storage에서 삭제
  const { error } = await supabase.storage
    .from('posters')
    .remove([filePath]);

  if (error) throw error;
};
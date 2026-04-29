/* 리뷰에 대한 타입 정의 - supabase */

export type Review = {
  id?: string;
  type: 'movie' | 'drama' | 'animation';
  title: string;
  body: string;
  date: string;
  poster: string;
  rating: number;
  signal: 'good' | 'neutral' | 'bad';
  created_at?: string; // DB 저장시간
};

export type CreateReview = Omit<Review, 'id' | 'created_at'>;
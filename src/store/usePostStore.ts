/* 리뷰 작성 및 삭제 스토어 */

import { create } from 'zustand';
import PostsData from '../components/Review/Posts.json';

// 본문에 대한 타입
type Post = {
  id: number;
  type: string;
  title: string;
  body: string;
  date: string;
  poster: string;
  url?: string;
  spoiler?: boolean;
  isPrivate?: boolean;
  rating: number;
};

// 글 상태
type PostState = {
  posts: Post[];
  addPost: (newPost: Omit<Post, 'id'>) => number;
  deletePost: (id: number) => void;
  updatePost: (id: number, updatedPost: Omit<Post, 'id'>) => void;
};

// 데이터 불러오기
const getInitialPosts = (): Post[] => {
  const stored = localStorage.getItem('posts');
  return stored ? JSON.parse(stored) : PostsData;
};

// ==============================
export const usePostStore = create<PostState>((set, get) => ({
  posts: getInitialPosts(),

  addPost: (newPost) => {
    const { posts } = get();

    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const postWithId = { id: newId, ...newPost };

    // 맨 앞에 추가
    const updatedPosts = [postWithId, ...posts];

    // Zustand state + localStorage 동기화
    set({ posts: updatedPosts });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    return newId;
  },

  deletePost: (id) => {
    const updatedPosts = get().posts.filter((p) => p.id !== id);

    set({ posts: updatedPosts });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  },

  updatePost: (id, updatedPost) => {
    const updatedPosts = get().posts.map((post) =>
      post.id === id ? { ...post, ...updatedPost } : post
    );

    set({ posts: updatedPosts });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  },
}));
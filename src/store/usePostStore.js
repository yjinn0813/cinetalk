/* 리뷰 작성 및 삭제 스토어 */

import { create } from 'zustand';
import PostsData from '../components/Review/Posts.json';

const getInitialPosts = () => {
  const stored = localStorage.getItem('posts');
  return stored ? JSON.parse(stored) : PostsData;
};

export const usePostStore = create((set, get) => ({
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
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    set({ posts: updatedPosts });
  },
}));
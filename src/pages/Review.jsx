// 리뷰 상세보기 페이지

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePosts } from '../redux/reducers/postSlice';
import ReadPosts from '../components/Review/ReadPosts';
import '../styles/pages/Review.scss';

export default function Review() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 포스트 데이터 찾기
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <div className="NotFound">해당 글을 찾을 수 없습니다!😭</div>;
  }

  const handleDelete = () => {
    dispatch(deletePosts(Number(id)));
    alert('리뷰가 삭제되었습니다.');
    navigate('/watched');
  };

  return (
    <div class="r-wrap">
      <div class="rp-title">리뷰 상세보기</div>
      <ReadPosts
        poster={post.poster}
        title={post.title}
        date={post.date}
        body={post.body}
        onDelete={handleDelete}
      />
    </div>
  );
}

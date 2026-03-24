/* 리뷰 상세보기 페이지 */

import { useNavigate, useParams } from 'react-router-dom';
import { usePostStore } from '../store/usePostStore';
import ReadPosts from '../components/Review/ReadPosts';
import '../styles/pages/Review.scss';

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = usePostStore((state) => state.posts);
  const deletePost = usePostStore((state) => state.deletePost);

  // 포스트 데이터 찾기
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div className="NotFound">해당 글을 찾을 수 없습니다!😭</div>;
  }

  const handleDelete = () => {
    deletePost(Number(id));
    alert('리뷰가 삭제되었습니다.');
    navigate('/watched');
  };

  return (
    <div className="r-wrap">
      <div className="rp-title">리뷰 상세보기</div>
      <ReadPosts
        poster={post.poster}
        title={post.title}
        date={post.date}
        body={post.body}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Review;

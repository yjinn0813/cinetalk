/* 리뷰 리스트 (라이브러리) 페이지 */

import { Link } from 'react-router-dom';
import { useReviewLists } from '../hooks/useReviewLists';
import useTitle from '../hooks/useTitle';
import WatchedPoster from '../components/Review/WatchedPoster';
import '../styles/pages/ReviewLists.scss';

const ReviewLists = () => {
  useTitle('Library');

  // React Query - fetch
  const { data: postList, isLoading, isError } = useReviewLists();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!😢</div>;

  // 데이터 가져와서 최신순 정렬
  const sortedPosts = [...(postList || [])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="library-container">
      <div className="library-title">LIBRARY</div>
      <div className="library-list">
        {postList.length === 0 ? (
          <div>해당 리뷰가 없습니다!😭</div>
        ) : (
          sortedPosts.map((card) => (
            <Link key={card.id} to={`/Review/${card.id}`} className="movingbtn">
              <WatchedPoster
                poster={card.poster}
                title={card.title}
                signal={card.signal}
                rating={card.rating}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewLists;

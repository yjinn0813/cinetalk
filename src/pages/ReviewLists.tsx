/* 리뷰 리스트 (라이브러리) 페이지 */

import React from 'react';
import { Link } from 'react-router-dom';
import { usePostStore } from '../store/usePostStore';
import WatchedPoster from '../components/Review/WatchedPoster';
import '../styles/pages/Watched.scss';

const ReviewLists = () => {
  const posts = usePostStore((state) => state.posts); // 데이터 가져오기

  return (
    <div className="library-container">
      <div className="library-title">LIBRARY</div>
      <div className="library-list">
        {posts.length === 0 ? (
          <div>해당 리뷰가 없습니다!😭</div>
        ) : (
          posts.map((card) => (
            <Link key={card.id} to={`/Review/${card.id}`} className="movingbtn">
              <WatchedPoster
                poster={`/images/Review/${card.poster}.jpg`}
                title={card.title}
                date={card.date}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewLists;

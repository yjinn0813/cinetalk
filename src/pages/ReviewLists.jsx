/* 리뷰 리스트 (라이브러리) 페이지 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePostStore } from '../store/usePostStore';
import WatchedPoster from '../components/Review/WatchedPoster';
import '../styles/pages/Watched.scss';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ==============================
const ReviewLists = () => {
  const posts = usePostStore((state) => state.posts); // 데이터 가져오기
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="library-container">
      <div className="library-title">LIBRARY</div>
      <div className="library-list">
        {posts.length === 0 ? (
          <div>해당 리뷰가 없습니다!😭</div>
        ) : isMobile ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={{ clickable: true }}
            modules={[Navigation]}
          >
            {posts.map((card) => (
              <SwiperSlide key={card.id}>
                <Link to={`/Review/${card.id}`} className="movingbtn">
                  <WatchedPoster
                    poster={`images/Review/${card.poster}.jpg`}
                    title={card.title}
                    date={card.date}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          posts.map((card) => (
            <Link key={card.id} to={`/Review/${card.id}`} className="movingbtn">
              <WatchedPoster
                poster={`images/Review/${card.poster}.jpg`}
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

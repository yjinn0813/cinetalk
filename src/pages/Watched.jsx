// 라이브러리 (개인의 리뷰 목록) 페이지
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WatchedPoster from '../components/Watched/WatchedPoster';
import '../styles/pages/Watched.scss';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Watched() {
  const posts = useSelector((state) => state.posts.posts);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize); // 크기 변경시 함수 호출
    return () => window.removeEventListener('resize', handleResize);
    // 필요 없는 이벤트 리스너 정리
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
                    poster={require(`../assets/Watched/${card.poster}.jpg`)}
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
                poster={require(`../assets/Watched/${card.poster}.jpg`)}
                title={card.title}
                date={card.date}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

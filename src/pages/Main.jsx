import React from 'react';
import '../styles/pages/Main.scss';
import ReviewBox from '../components/Main/ReviewBox';
import EventBox from '../components/Main/EventBox';
import RankBox from '../components/Main/RankBox';
import Reviews from '../components/Main/Reviews.json';
import Friends from '../components/Main/Friends.json';
import Events from '../components/Main/Events.json';
import Boxoffice from '../components/Main/Boxoffice.json';

import banner1 from '../assets/Main/banner1.jpg';
import banner2 from '../assets/Main/banner2.png';
import banner3 from '../assets/Main/banner3.png';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Main() {
  return (
    <section className="main-container">
      <div className="main-item boxoffice-area">
        <div className="boxoffice-title">이번주 박스오피스 순위</div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Boxoffice.map((box) => (
            <SwiperSlide key={box.id}>
              <RankBox
                Rank={box.Rank}
                Boxoffice={box.Boxoffice}
                RankName={box.RankName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-item new-posts">
        <div className="new">지금 뜨는 최신 글</div>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
          }}
          className="mySwiper"
        >
          {Reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewBox
                MovieName={review.Movie_Name}
                PostTitle={review.Post_Title}
                author={review.author}
                trafficLight={review.trafficLight}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-item friends-posts">
        <div className="friends">내 친구는 지금</div>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
          }}
          className="mySwiper"
        >
          {Friends.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewBox
                MovieName={review.Movie_Name}
                PostTitle={review.Post_Title}
                author={review.author}
                trafficLight={review.trafficLight}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-item event">
        <div className="event-title">이벤트</div>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.8,
              spaceBetween: 25,
            },
          }}
          className="mySwiper"
        >
          {Events.map((e) => (
            <SwiperSlide key={e.id}>
              <EventBox
                EventPhoto={e.EventPhoto}
                EventName={e.EventName}
                EventScript={e.EventScript}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-item banner-area">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner1} alt="banner" className="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="banner" className="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="banner" className="banner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

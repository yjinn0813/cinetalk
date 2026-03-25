// 라이브러리 컴포넌트 (포스터만 보여주기)
import React from 'react';
import '../../styles/Watched/WatchedPoster.scss';

type LibraryProps = {
  poster: string;
  title: string;
  date: string;
}

const WatchedPoster = ({ poster, title, date }: LibraryProps) => {
  return (
    <div className="w-container">
      <div className="w-box">
        <img className="w-poster" src={poster} alt={poster} />
        <div className="w-info">
          <div className="w_title">{title}</div>
          <div className="w_date">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default WatchedPoster;

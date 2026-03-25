// 리뷰 상세보기 컴포넌트 구조
import React, { useState } from 'react';
import '../../styles/Review/ReadPosts.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

type PostProps = {
  poster: string;
  title: string;
  date: string;
  body: string;
  onDelete: () => void;
}

const ReadPosts = ({ poster, title, date, body, onDelete }: PostProps) => {
  const posterImage = `/images/Review/${poster}.jpg`;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 좋아요 버튼 클릭 이벤트
  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  // 공유하기 버튼 클릭시 주소 복사
  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('URL이 복사되었습니다!');
    } catch (err) {
      alert('URL 복사에 실패했습니다.');
    }
  };

  return (
    <div className="r-container">
      <div className="r-box">
        <div className="r-info">
          <img className="r-poster" src={posterImage} alt="poster" />
          <div className="r-text">
            <div className="r-title">{title}</div>
            <div className="r-date">{date}</div>
          </div>
        </div>
        <div className="r-body">{body}</div>
        <div className="r-actions">
          <div
            className={`r-like-button ${liked ? 'liked' : ''}`}
            onClick={handleLikeClick}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />} 좋아요{' '}
            {likeCount}
          </div>
          <div className="r-share-button" onClick={handleShareClick}>
            <ShareIcon />
            공유하기
          </div>
          <div className="r-delete-button" onClick={onDelete}>
            삭제하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadPosts;
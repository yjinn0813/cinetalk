/* 리뷰 리스트 (라이브러리) 페이지 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReviewLists } from '../hooks/useReviewLists';
import useTitle from '../hooks/useTitle';
import { Box, Button } from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SideBar from '../components/Review/SideBar';
import WatchedPoster from '../components/Review/WatchedPoster';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import '../styles/pages/ReviewLists.scss';

const ReviewLists = () => {
  useTitle('Library');

  // sidebar open state
  const [isSideOpen, setSideOpen] = useState(false);

  // React Query - fetch
  const { data: postList, isLoading, isError } = useReviewLists();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  // 데이터 가져와서 최신순 정렬
  const sortedPosts = [...(postList || [])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="library-container">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div className="library-title">LIBRARY</div>
        <Button
          variant="outlined"
          startIcon={<TuneRoundedIcon />}
          onClick={() => setSideOpen(true)}
          sx={{
            alignSelf: 'flex-end',

            '&.MuiButton-outlined:hover': {
              backgroundColor: '#1e90ff',
              border: '1px solid #1e90ff',
              color: '#fff',
            },
          }}
        >필터</Button>
      </Box>

      <SideBar 
        open={isSideOpen}
        onClose={() => setSideOpen(false)}
      />

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

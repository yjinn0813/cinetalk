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
import { Typography } from '@mui/material';

const ReviewLists = () => {
  useTitle('Library');

  // sidebar open state
  const [isSideOpen, setSideOpen] = useState(false);

  // sidebar - type chip
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const handleTypeClick = (value: string) => {
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // sidebar - signal chip
  const [selectedSignal, setSelectedSignals] = useState<string[]>([]);
  const handleSignalClick = (value: string) => {
    setSelectedSignals((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  // sidebar - rating chip
  const [selectedRate, setSelectedRate] = useState<number[]>([]);
  const handleSelectedRate = (value: number) => {
    setSelectedRate((prev) => 
      prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
    )
  }

  // React Query - fetch
  const { data: postList, isLoading, isError } = useReviewLists();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  // 데이터 가져와서 최신순 정렬
  const sortedPosts = [...(postList || [])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // sidebar filter
  const filteredPosts = sortedPosts.filter((post) => {
    const typeMatch = 
      selectedTypes.length === 0 ||
      selectedTypes.includes(post.type);
    
    const signalMatch =
      selectedSignal.length === 0 ||
      selectedSignal.includes(post.signal);

    const rateMatch =
      selectedRate.length === 0 ||
      selectedRate.includes(post.rating);

    return typeMatch && signalMatch && rateMatch;
  })

  // sidebar filter reset
  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedSignals([]);
    setSelectedRate([]);
  }

  // ==========
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
        onReset={resetFilters}
        selectedTypes={selectedTypes}
        selectedSignal={selectedSignal}
        selectedRate={selectedRate}
        onTypeToggle={handleTypeClick}
        onSignalToggle={handleSignalClick}
        onRateToggle={handleSelectedRate}
      />

      <div className="library-list">
        {filteredPosts.length === 0 ? (
          <Box sx={{ 
            width: '100%',
            maxWidth: '100% !important',
            flex: '0 0 100% !important',
            textAlign: 'center',
            py: 6,
          }}>
            <Typography sx={{
              fontSize: 20,
              fontWeight: 600,
            }}>조건에 맞는 리뷰가 없습니다!😭</Typography>
          </Box>
        ) : (
          filteredPosts.map((card) => (
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

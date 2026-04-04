/* 검색 페이지 */

import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';
import { Box, TextField, IconButton, Typography, CircularProgress, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/pages/Search.scss';

const Search = () => {
  useTitle('Search');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const MOVIE_API = import.meta.env.VITE_MOVIE_LIST_API;

  // 영화 검색 API
  const fetchMovies = async (searchQuery: string) => {
    setLoading(true);

    const kobis = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json`;
    const URL = `${kobis}?key=${MOVIE_API}&movieNm=${searchQuery}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.movieListResult.movieList) {
        setMovies(data.movieListResult.movieList);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // 검색 버튼
  const handleSearch = () => {
    if (query.trim()) {
      setHasSearched(true);
      fetchMovies(query.trim());
    }
  };

  // 엔터키 검색
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <Box className="search-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 검색창 */}
      <Box sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
        }}
      >
        <TextField
          fullWidth
          className="search-input"
          placeholder="작품, 키워드를 검색해보세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '60px',
              borderRadius: '8px',

              '& fieldset': {
                border: '1px solid #6b6b6b',
              },

              '&:hover fieldset': {
                borderColor: '#aaa',
              },

              '&.Mui-focused fieldset': {
                borderColor: '#1e90ff',
              },
            },

            width: '100%',
            flex: 1,
            minWidth: 0,
          }}
        />

        <IconButton
          className="search-btn"
          onClick={handleSearch}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '0 8px 8px 0',
            backgroundColor: '#1e90ff',
            color: '#fff',
            height: '56px',
            width: '56px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            '&:hover': {
              backgroundColor: '#187bcd',
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {/* 결과 영역 */}
      <Box sx={{
          width: '100%',
          maxWidth: 600,
          mt: 3
        }}
      >
        {/* 로딩 */}
        {loading ? (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <CircularProgress />
            <Typography sx={{ mt: 2, fontSize: 18 }}>검색 중입니다..⏳</Typography>
          </Box>
        ) : hasSearched && movies.length === 0 ? (
          <Typography sx={{ textAlign: 'center', mt: 4, fontSize: 18, fontWeight: 500 }}>
            결과를 찾을 수 없습니다!😭
          </Typography>
        ) : (
          movies.map((movie) => (
            <Paper
              key={movie.movieCd}
              className="movie-item"
              sx={{
                p: 2,
                mb: 2,
                borderRadius: 2,
                boxShadow: 2,
                cursor: 'pointer',

                '&:hover': {
                  boxShadow: 5,
                },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                {movie.movieNm} ({movie.prdtYear})
              </Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Search;

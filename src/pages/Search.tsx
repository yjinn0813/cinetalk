// 검색하면 영화정보가 등장하는 페이지

import React, { useState } from 'react';
import '../styles/pages/Search.scss';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const MOVIE_API = import.meta.env.VITE_MOVIE_LIST_API;

  const fetchMovies = async (searchQuery) => {
    setLoading(true); // 검색 시작 시 로딩 상태로 설정

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
      setLoading(false); // 검색 완료 후 로딩 상태 해제
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      setHasSearched(true);
      fetchMovies(query.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="작품, 키워드를 검색해보세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className="search-btn">
          <SearchIcon />
        </button>
      </div>
      <div className="movie-list">
        {loading ? (
          <p>검색 중입니다..⏳</p> // 로딩 중 메시지 표시
        ) : hasSearched && movies.length === 0 ? (
          <p>결과를 찾을 수 없습니다!😭</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.movieCd} className="movie-item">
              <h4>
                {movie.movieNm} ({movie.prdtYear})
              </h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;

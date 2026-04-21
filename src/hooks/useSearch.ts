/* 검색 페이지 리액트쿼리 */

import { useQuery } from '@tanstack/react-query';

const MOVIE_API = import.meta.env.VITE_MOVIE_LIST_API;

const fetchMovies = async (query: string) => {
  const kobis = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json`;
  const URL = `${kobis}?key=${MOVIE_API}&movieNm=${query}`;

  const res = await fetch(URL);
  const data = await res.json();

  return data.movieListResult.movieList ?? [];
}

// ====================
export default function useSearch(query: string, enabled: boolean){
  return useQuery({
    queryKey: ['movies', query],
    queryFn: () => fetchMovies(query),
    enabled, // 버튼 클릭시에만 실행
  })
}
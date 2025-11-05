import React, { useEffect, useState } from 'react';
import { ListFilm } from '@/interface/ListFilm';
import CategoryMovieSection from './CategoryMovieSection';

interface Props {
  setId?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PopularFilm: React.FC<Props> = ({ setId }) => {
  const [popularMovies, setPopularMovies] = useState<ListFilm[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<ListFilm[]>([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url =
          'https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1';
        const response = await fetch(url, options);
        const data = await response.json();
        setPopularMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url =
          'https://api.themoviedb.org/3/movie/top_rated?language=vi-VN&page=1';
        const response = await fetch(url, options);
        const data = await response.json();
        setTopRatedMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  return (
    <div className="w-full bg-[#282b3a] py-10 mt-24">
      <CategoryMovieSection
        title="Phim Phổ Biến"
        titleColor="text-purple-400"
        movies={popularMovies}
        setId={setId}
        viewAllLink="/popular"
      />

      <CategoryMovieSection
        title="Phim Đánh Giá Cao"
        titleColor="text-yellow-400"
        movies={topRatedMovies}
        setId={setId}
        viewAllLink="/top-rated"
      />
    </div>
  );
};

export default PopularFilm;

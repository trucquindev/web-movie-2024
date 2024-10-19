import React from 'react';
import Header from '../../components/Header';
import PolularFim from '../../components/ListPopular';
import MovieSearch from '@/components/MovieSearch';
const SearchFilm: React.FC = () => {
  return (
    <div className="bg-black pb-10">
      <Header />
      <MovieSearch />
      <PolularFim />
    </div>
  );
};

export default SearchFilm;

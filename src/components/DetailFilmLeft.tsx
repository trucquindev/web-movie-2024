import React from 'react';
import MovieVideoDetail from './MovieVideoDetail';
import { IDetailFilm } from '@/interface/ListFilm';
interface Props {
  movie: IDetailFilm;
}
const DetailFilmLeft: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      <MovieVideoDetail movie={movie} />
    </div>
  );
};

export default DetailFilmLeft;

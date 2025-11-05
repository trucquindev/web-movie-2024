import React from 'react';
import { ListFilm } from '@/interface/ListFilm';
import { useNavigate } from 'react-router-dom';
import { path } from '../../untils/constrains/path';

interface MovieCardProps {
  movie: ListFilm;
  setId?: React.Dispatch<React.SetStateAction<number | undefined>>;
  episode?: number;
  season?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  movie, 
  setId, 
  episode, 
  season 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${path.OVERVIEW}${movie.id}`);
    setId && setId(movie.id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={handleClick}
      className="w-[200px] h-72 relative transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer group"
    >
      {/* Image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.original_title}
        className="w-full h-full object-cover rounded-2xl"
      />
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 group-hover:bg-black/0 transition-opacity rounded-2xl" />
      
      {/* Badges */}
      {(episode || season) && (
        <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
          {episode && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              PĐ. {episode}
            </span>
          )}
          {season && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              TM. {season}
            </span>
          )}
        </div>
      )}
      
      {/* Title and Subtitle */}
      <div className="absolute bottom-0 left-0 right-0 p-3 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-semibold text-sm mb-1 truncate">
          {movie.title}
        </p>
        {movie.original_title && movie.original_title !== movie.title && (
          <p className="text-white/70 text-xs truncate">
            {movie.original_title}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
import React, { useState } from 'react';
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

  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-52 sm:h-60 md:h-64 lg:h-72 relative transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer group"
    >
      {/* Image */}
      {imageLoading && !imageError && (
        <div className="absolute inset-0 bg-slate-700/50 rounded-xl sm:rounded-2xl animate-pulse" />
      )}
      {imageError || !imageUrl ? (
        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-4">
          <svg
            className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4v16M17 4v16M3 8h18M3 12h18M3 16h18M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <p className="text-slate-400 text-xs text-center line-clamp-2">
            {movie.title || movie.original_title}
          </p>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt={movie.title || movie.original_title}
          className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 group-hover:bg-black/0 transition-opacity rounded-xl sm:rounded-2xl" />
      
      {/* Badges */}
      {(episode || season) && (
        <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex gap-1 sm:gap-2 flex-wrap">
          {episode && (
            <span className="bg-green-600 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
              PĐ. {episode}
            </span>
          )}
          {season && (
            <span className="bg-green-600 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
              TM. {season}
            </span>
          )}
        </div>
      )}
      
      {/* Title and Subtitle */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 rounded-b-xl sm:rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">
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
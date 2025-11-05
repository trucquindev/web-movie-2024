'use client';

import { useRef } from 'react';

interface Movie {
  id: number;
  title: string;
  vietnameseTitle: string;
  image: string;
  rating: number;
  ageRating: string;
  year: number;
  duration: string;
  genres: string[];
  description: string;
}

interface MovieSelectorProps {
  movies: Movie[];
  selectedMovie: Movie;
  onSelectMovie: (movie: Movie) => void;
  variant?: 'sidebar' | 'overlay';
}

export default function MovieSelector({
  movies,
  selectedMovie,
  onSelectMovie,
  variant = 'sidebar',
}: MovieSelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (variant === 'overlay') {
    return (
      <div className="flex items-center gap-4 md:gap-6">
        {movies.map((movie) => (
          <button
            key={movie.id}
            onClick={() => onSelectMovie(movie)}
            className={`relative w-20 h-10 md:w-20 md:h-10 rounded-xl overflow-hidden transition-all duration-300 ${
              selectedMovie.id === movie.id
                ? 'ring-4 ring-white scale-105 shadow-2xl'
                : 'opacity-80 hover:opacity-100 hover:scale-[1.03]'
            }`}
          >
            <img
              src={movie.image || '/placeholder.svg'}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-col gap-4 w-48 shrink-0 h-[600px]">
      {/* Scroll Container */}
      <div className="relative flex-1 overflow-hidden rounded-lg bg-slate-900/50 border border-slate-800">
        <div
          ref={scrollContainerRef}
          className="flex flex-col gap-3 overflow-y-auto p-2 h-full scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <button
              key={movie.id}
              onClick={() => onSelectMovie(movie)}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all flex-shrink-0 h-28 group ${
                selectedMovie.id === movie.id
                  ? 'ring-2 ring-amber-400'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={movie.image || '/placeholder.svg'}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Selected indicator */}
              {selectedMovie.id === movie.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-400/90 flex items-center justify-center">
                    <span className="text-slate-950 font-bold">✓</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Info Preview */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
        <h3 className="text-xs font-semibold text-amber-400 mb-1 truncate">
          {selectedMovie.vietnameseTitle}
        </h3>
        <div className="text-xs text-slate-400 space-y-1">
          <p>⭐ {selectedMovie.rating} IMDb</p>
          <p>📅 {selectedMovie.year}</p>
          <p>⏱️ {selectedMovie.duration}</p>
        </div>
      </div>
    </div>
  );
}

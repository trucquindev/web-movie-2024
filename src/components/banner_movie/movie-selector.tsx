'use client';

import { useRef, useEffect, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play on mobile
  useEffect(() => {
    if (variant === 'overlay' && isMobile && movies.length > 0) {
      const interval = setInterval(() => {
        const currentIndex = movies.findIndex((m) => m.id === selectedMovie.id);
        const nextIndex = (currentIndex + 1) % movies.length;
        onSelectMovie(movies[nextIndex]);
      }, 2000); // 2 seconds

      return () => clearInterval(interval);
    }
  }, [variant, isMobile, movies, selectedMovie.id, onSelectMovie]);

  if (variant === 'overlay') {
    return (
      <div className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {movies.map((movie) => (
          <button
            key={movie.id}
            onClick={() => onSelectMovie(movie)}
            className={`relative w-12 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
              selectedMovie.id === movie.id
                ? 'ring-2 sm:ring-3 md:ring-4 ring-white scale-105 shadow-2xl'
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

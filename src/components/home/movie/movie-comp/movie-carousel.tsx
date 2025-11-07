'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './movie-card';

interface Movie {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  rating: string;
  label?: string;
}

interface MovieCarouselProps {
  title: string;
  subtitle: string;
  movies: Movie[];
}

export default function MovieCarousel({
  title,
  subtitle,
  movies,
}: MovieCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredMovieId, setHoveredMovieId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-400">{subtitle}</p>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Movies Grid */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-4 pb-4 scroll-smooth"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard
                movie={movie}
                isHovered={hoveredMovieId === movie.id}
                hasHoveredCard={hoveredMovieId !== null}
                onHover={(isHovering: boolean) =>
                  setHoveredMovieId(isHovering ? movie.id : null)
                }
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      </div>
    </section>
  );
}

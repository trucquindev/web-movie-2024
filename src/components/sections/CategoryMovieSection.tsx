'use client';

import React, { useRef } from 'react';
import { ListFilm } from '@/interface/ListFilm';
import MovieCard from './MovieCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CategoryMovieSectionProps {
  title: string;
  titleColor?: string; // Tailwind color class like 'text-purple-400', 'text-yellow-400'
  movies: ListFilm[];
  setId?: React.Dispatch<React.SetStateAction<number | undefined>>;
  viewAllLink?: string;
}

const CategoryMovieSection: React.FC<CategoryMovieSectionProps> = ({
  title,
  titleColor = 'text-purple-400',
  movies,
  setId,
  viewAllLink,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        <div className="flex items-end justify-between gap-3 mb-1 sm:mb-2">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${titleColor}`}
          >
            {title}
          </h2>
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors flex items-center gap-1 whitespace-nowrap group"
            >
              <span>Xem toàn bộ</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:block absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Movies Grid */}
        {movies.length === 0 ? (
          <div className="px-2 sm:px-4 py-8">
            <div className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-8 text-center">
              <p className="text-slate-400">Không có phim nào để hiển thị.</p>
            </div>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-4 pb-4 scroll-smooth"
          >
            {movies.map((movie, index) => (
              <div key={`${movie.id}-${index}`} className="flex-shrink-0">
                <MovieCard movie={movie} setId={setId} />
              </div>
            ))}
          </div>
        )}

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:block absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
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
};

export default CategoryMovieSection;

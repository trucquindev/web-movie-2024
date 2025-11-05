'use client';

import { useState, useEffect, useRef } from 'react';
import MovieCarousel from './movie-comp/movie-carousel';
import { carouselDataFake } from '@/data/movies';

const MovieAnalysis = () => {
  const [visibleCarouselCount, setVisibleCarouselCount] = useState(2);
  const [hasLoadedAll, setHasLoadedAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const lastScrollYRef = useRef(window.scrollY);

  const maxLoads = 5;
  const carouselsPerLoad = 2;
  const totalCarousels = 10;

  useEffect(() => {
    if (hasLoadedAll || visibleCarouselCount >= totalCarousels) return;

    const currentLoads =
      Math.floor((visibleCarouselCount - 2) / carouselsPerLoad) + 1;
    if (currentLoads >= maxLoads) {
      setHasLoadedAll(true);
      return;
    }

    const handleScroll = () => {
      if (hasLoadedAll || isLoadingRef.current || !containerRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;
      const isScrollingDown = scrollDelta > 0;

      lastScrollYRef.current = currentScrollY;

      if (!isScrollingDown || scrollDelta < 50) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      if (isInView) {
        isLoadingRef.current = true;

        setTimeout(() => {
          setVisibleCarouselCount((prev) => {
            const next = Math.min(prev + carouselsPerLoad, totalCarousels);
            const nextLoads = Math.floor((next - 2) / carouselsPerLoad) + 1;
            if (nextLoads >= maxLoads) {
              setHasLoadedAll(true);
            }
            isLoadingRef.current = false;
            return next;
          });
        }, 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleCarouselCount, hasLoadedAll]);

const carouselData = carouselDataFake
  const visibleCarousels = carouselData.slice(0, visibleCarouselCount);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div
        ref={containerRef}
        className="space-y-12 px-6 py-8 mx-auto"
      >
        {visibleCarousels.map((data, index) => (
          <MovieCarousel
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            movies={data.movies}
          />
        ))}
      </div>
    </main>
  );
};



export default MovieAnalysis;

'use client';

import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Heart,
  Flame,
} from 'lucide-react';
import { useRef } from 'react';
import TopCommentCard from './comment-comp/top-comment-card';
import TrendingSection from './comment-comp/trending-section';
import NewCommentsSection from './comment-comp/new-comments-section';
import { topCommentsData } from '@/data/movies';
import MostLikeSections from './comment-comp/most-like-section';

const CommentAnalysis = () => {
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

  const topComments = topCommentsData;

  return (
    <div className="p-2 sm:p-4">
      <main className="min-h-screen bg-[#0f1419] text-white font-sans border border-gray-400 rounded-xl sm:rounded-2xl">
        {/* Header */}
        <header className="border-b border-[#1f2937] px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
          <h1 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6b9d]" />
            TOP BÌNH LUẬN
          </h1>
        </header>

        {/* Top Comments Carousel */}
        <section className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 border-b border-[#1f2937]">
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {topComments.map((comment) => (
                <TopCommentCard key={comment.id} {...comment} />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-[#1f2937] hover:bg-[#2d3748] p-1.5 sm:p-2 rounded-full transition z-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-[#1f2937] hover:bg-[#2d3748] p-1.5 sm:p-2 rounded-full transition z-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Trending */}
            <TrendingSection />

            {/* Most Liked */}
            <MostLikeSections/>

            {/* New Comments Section */}
            <NewCommentsSection />
          </div>
        </section>
      </main>
    </div>
  );
};
export default CommentAnalysis;

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
    <div className="p-4">
      <main className="min-h-screen bg-[#0f1419] text-white font-sans border border-gray-400 rounded-2xl">
        {/* Header */}
        <header className="border-b border-[#1f2937] px-8 py-6">
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <Flame className="w-6 h-6 text-[#ff6b9d]" />
            TOP BÌNH LUẬN
          </h1>
        </header>

        {/* Top Comments Carousel */}
        <section className="px-8 py-8 border-b border-[#1f2937]">
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {topComments.map((comment) => (
                <TopCommentCard key={comment.id} {...comment} />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#1f2937] hover:bg-[#2d3748] p-2 rounded-full transition z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#1f2937] hover:bg-[#2d3748] p-2 rounded-full transition z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Trending */}
            <TrendingSection />

            {/* Most Liked */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 text-lg font-bold mb-6">
                <Heart className="w-5 h-5 text-[#ff6b9d]" />
                YÊU THÍCH NHẤT
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Diễn Thoại Den 2', icon: '📺' },
                  { title: 'Nắm Ngọn Tay Điều Kỳ', icon: '🎬' },
                  { title: '"Lột Hổ" Gã Khó Lý', icon: '🎭' },
                  { title: 'Thiên Địa Kiếm Tâm', icon: '⚔️' },
                  { title: 'Diễn Thoại Den', icon: '📺' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-[#1f2937] rounded-lg hover:bg-[#2d3748] transition group cursor-pointer"
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate group-hover:text-[#ff6b9d] transition">
                        {item.title}
                      </p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                  </div>
                ))}
                <p className="text-xs text-[#6b7280] mt-4 cursor-pointer hover:text-white transition">
                  Xem thêm
                </p>
              </div>
            </div>

            {/* New Comments Section */}
            <NewCommentsSection />
          </div>
        </section>
      </main>
    </div>
  );
};
export default CommentAnalysis;

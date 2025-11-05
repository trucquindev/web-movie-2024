'use client';

import { useState } from 'react';
import Header from '@/components/header/Header';
import FeaturedMovie from '@/components/banner_movie/featured-movie';
import MovieSelector from '@/components/banner_movie/movie-selector';
import CategorySection from '@/components/banner_movie/category-section';
// import PopularFilm from '@/components/sections/ListPopular';
import PopularFilm from '@/components/sections/ListPopular';
import CommentAnalysis from '@/components/home/comment';
import MovieAnalysis from '@/components/home/movie';
import Footer from '@/components/footer/Footer';

const MOVIES = [
  {
    id: 1,
    title: 'The Ugly',
    vietnameseTitle: 'Những Kẻ Xấu Xa',
    image: '/dark-thriller-movie-the-ugly.jpg',
    rating: 7.1,
    ageRating: 'T16',
    year: 2025,
    duration: '1h 42m',
    genres: ['Chính Kịch', 'Chiếu Rạp', 'Gay Cấn', 'Bí Ẩn', 'Tâm Lý'],
    description:
      'Im Dong-hwan, chàng trai chưa từng biết mặt mẹ mình, bằng hoàng khi cảnh sát thông báo đã tìm thấy hai cót của bà – người mất tích suốt 40 năm – với nghi ngờ...',
  },
  {
    id: 2,
    title: 'Midnight Run',
    vietnameseTitle: 'Cuộc Chạy Nửa Đêm',
    image: '/action-movie-night-car-chase.jpg',
    rating: 7.8,
    ageRating: 'T13',
    year: 2024,
    duration: '2h 15m',
    genres: ['Hành Động', 'Phiêu Lưu', 'Hài Hước'],
    description:
      'Một cuộc truy đuổi tốc độ cao qua đêm đen với những twist không ngờ đến...',
  },
  {
    id: 3,
    title: 'Dreamscape',
    vietnameseTitle: 'Cảnh Giới Mộng',
    image: '/sci-fi-dreamscape-surreal.jpg',
    rating: 8.2,
    ageRating: 'T13',
    year: 2025,
    duration: '2h 8m',
    genres: ['Khoa Học Viễn Tưởng', 'Chính Kịch', 'Bí Ẩn'],
    description:
      'Một nhà khoa học khám phá khả năng lặn vào giấc mơ của con người...',
  },
  {
    id: 4,
    title: 'Neon Hearts',
    vietnameseTitle: 'Tim Neon',
    image: '/cyberpunk-neon-romance.jpg',
    rating: 7.5,
    ageRating: 'T16',
    year: 2024,
    duration: '1h 58m',
    genres: ['Lãng Mạn', 'Khoa Học Viễn Tưởng', 'Chính Kịch'],
    description:
      'Tình yêu nảy nở giữa hai người sống trong một thành phố cyberpunk...',
  },
  {
    id: 5,
    title: 'The Last Echo',
    vietnameseTitle: 'Tiếng Vọng Cuối Cùng',
    image: '/mystery-thriller-forest-dark.jpg',
    rating: 7.9,
    ageRating: 'T16',
    year: 2025,
    duration: '2h 3m',
    genres: ['Giật Gân', 'Bí Ẩn', 'Chính Kịch'],
    description:
      'Một cô gái phát hiện ra giọng nói của người chị đã mất xuất hiện từ trong rừng...',
  },
];

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(MOVIES[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 w-screen">
     
        <Header />

      <main>
        {/* Featured Movie with overlay selector */}
        <div className="relative w-full">
          <FeaturedMovie movie={selectedMovie} />

          {/* Overlay selector */}

          <div className="absolute right-16 bottom-1/3">
            <MovieSelector
              movies={MOVIES}
              selectedMovie={selectedMovie}
              onSelectMovie={setSelectedMovie}
              variant="overlay"
            />
          </div>
        </div>

        {/* Category Section */}
        <CategorySection />
        <PopularFilm />
        <CommentAnalysis />
        <MovieAnalysis />
        <Footer />
      </main>
    </div>
  );
}

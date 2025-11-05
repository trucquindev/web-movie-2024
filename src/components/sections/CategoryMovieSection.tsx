import React from 'react';
import { ListFilm } from '@/interface/ListFilm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import { ChevronRight } from 'lucide-react';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

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
  return (
    <div className="w-full mb-8 px-6 md:px-10">
      {/* Title and View All Link */}
      <div className="flex flex-col mb-4">
        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-2`}>
          {title}
        </h2>
        {viewAllLink && (
          <a
            href={viewAllLink}
            className="text-white text-sm hover:text-gray-300 transition-colors flex items-center gap-1 w-fit"
          >
            Xem toàn bộ
            <ChevronRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          responsive={responsive}
          className="flex items-center w-full"
          arrows={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
        >
          {movies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className="px-2">
              <MovieCard movie={movie} setId={setId} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryMovieSection;

import { Play, Heart, Info } from 'lucide-react';

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

interface FeaturedMovieProps {
  movie: Movie;
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
  return (
    <div className="flex-1 relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative rounded-lg overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
        <img
          src={movie.image || '/placeholder.svg'}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 top-1/4 sm:top-1/3 -translate-y-1/4 sm:-translate-y-1/2">
        {/* Title */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight text-balance">
            {movie.vietnameseTitle}
          </h2>
          <p className="text-amber-400 font-semibold text-sm sm:text-base">{movie.title}</p>
        </div>

        {/* Info Badges */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-800/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-slate-700">
            <span className="text-xs text-slate-300">IMDb</span>
            <span className="font-bold text-white text-xs sm:text-sm">{movie.rating}</span>
          </div>
          <div className="bg-slate-800/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-slate-700 text-xs sm:text-sm font-semibold text-white">
            {movie.ageRating}
          </div>
          <div className="bg-slate-800/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-slate-700 text-xs sm:text-sm font-semibold text-white">
            {movie.year}
          </div>
          <div className="bg-slate-800/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-slate-700 text-xs sm:text-sm font-semibold text-white">
            {movie.duration}
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
          {movie.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="text-xs bg-slate-700/50 text-slate-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 md:mb-8 line-clamp-2 sm:line-clamp-3 max-w-md">
          {movie.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-400 hover:bg-amber-500 flex items-center justify-center transition-colors shadow-lg">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-950 fill-slate-950" />
          </button>
          <button className="p-2 sm:p-2.5 md:p-3 rounded-full border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white transition-colors">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button className="p-2 sm:p-2.5 md:p-3 rounded-full border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white transition-colors">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

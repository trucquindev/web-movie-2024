'use client';

interface Movie {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  rating: string;
  label?: string;
}

interface MovieCardProps {
  movie: Movie;
  isHovered: boolean;
  hasHoveredCard: boolean;
  onHover: (isHovering: boolean) => void;
}

export default function MovieCard({
  movie,
  isHovered,
  hasHoveredCard,
  onHover,
}: MovieCardProps) {
  const shouldDim = hasHoveredCard && !isHovered;

  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="w-36 sm:w-40 md:w-48 lg:w-52 cursor-pointer transition-all duration-300"
    >
      <div
        className={`relative overflow-hidden rounded-xl aspect-[2/3] bg-slate-800 mb-3 shadow-lg transition-all duration-300 ${
          isHovered
            ? 'shadow-2xl scale-105 brightness-110 z-10'
            : shouldDim
            ? 'brightness-50 opacity-60'
            : 'brightness-75 hover:brightness-90'
        }`}
      >
        <img
          src={movie.image || '/placeholder.svg'}
          alt={movie.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : ''
          }`}
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Rating Badge */}
        <div
          className={`absolute bottom-3 left-3 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-lg transition-all duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}
        >
          {movie.rating}
        </div>

        {/* Label Badge (if exists) */}
        {movie.label && (
          <div
            className={`absolute top-3 right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-lg transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            }`}
          >
            {movie.label}
          </div>
        )}

        {/* Hover overlay effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Title and Subtitle */}
      <div className="space-y-1.5 px-1">
        <h3
          className={`text-sm md:text-base font-semibold line-clamp-2 transition-colors duration-300 ${
            isHovered
              ? 'text-amber-400'
              : shouldDim
              ? 'text-white/40'
              : 'text-white/70'
          }`}
        >
          {movie.title}
        </h3>
        <p
          className={`text-xs md:text-sm line-clamp-1 transition-colors duration-300 ${
            isHovered
              ? 'text-slate-300'
              : shouldDim
              ? 'text-slate-600'
              : 'text-slate-500'
          }`}
        >
          {movie.subtitle}
        </p>
      </div>
    </div>
  );
}

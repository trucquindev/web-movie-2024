import { Play, Heart, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OverviewHeader({ movie }: { movie: any }) {
  const navigate = useNavigate();
  return (
    <div className="flex-1 relative w-full h-screen">
      <div className="relative rounded-lg overflow-hidden h-[500px] md:h-[800px]">
        <img
          src={movie.image || '/placeholder.svg'}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="flex gap-1 w-full absolute inset-0 justify-end top-[60%] -translate-y-1/2">
        {/* Content Overlay */}
        <div className="inset-0 w-1/2 flex flex-col p-10 md:p-10 -translate-y-1/2 ml-2">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight text-balance">
              {movie.vietnameseTitle}
            </h2>
            <p className="text-amber-400 font-semibold">{movie.title}</p>
          </div>

          {/* Info Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
              <span className="text-xs text-slate-300">IMDb</span>
              <span className="font-bold text-white">{movie.rating}</span>
            </div>
            <div className="bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700 text-sm font-semibold text-white">
              {movie.ageRating}
            </div>
            <div className="bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700 text-sm font-semibold text-white">
              {movie.year}
            </div>
            <div className="bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700 text-sm font-semibold text-white">
              {movie.duration}
            </div>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre: any) => (
              <span
                key={genre}
                className="text-xs bg-slate-700/50 text-slate-200 px-2.5 py-1 rounded"
              >
                {genre}
              </span>
            ))}
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
              className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-500 flex items-center justify-center transition-colors shadow-lg"
            >
              <Play className="w-7 h-7 text-slate-950 fill-slate-950" />
            </button>
            <button className="p-3 rounded-full border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white transition-colors">
              <Info className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className=" rounded-lg w-[60%] h-[500px] -translate-y-32 flex justify-between bg-gray-900 p-4 border-4 border-red-400 blink-border mr-10">
          <img
            src={movie.image || '/placeholder.svg'}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" /> */}
        </div>
      </div>
    </div>
  );
}

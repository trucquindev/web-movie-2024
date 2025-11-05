import React, { useState } from 'react';
import { ITrending } from '@/interface/ListFilm';
import { IComming } from '@/interface/ListFilm';
import { ITopRate } from '@/interface/ListFilm';
import { apiTrending } from '@/apis/apiTrending';
import { apiComingSoon } from '@/apis/apiComingSoon';
import { apiTopRate } from '@/apis/apiTopRate';
import { useNavigate } from 'react-router-dom';
import { path } from '../untils/constrains/path';
import { Star } from 'lucide-react';
interface TopMovie {
  rank: number;
  title: string;
  views: string;
  rating: number;
  image: string;
}

const RightBar: React.FC = () => {
  const [moviesTrending, setMoviesTrending] = useState<ITrending[]>([]);
  const [moviesComing, setMoviesComing] = useState<IComming[]>([]);
  const [moviesTopRate, setMoviesTopRate] = useState<ITopRate[]>([]);
  const navigate = useNavigate();
  apiTrending({ setMoviesTrending });
  apiComingSoon({ setMoviesComing });
  apiTopRate({ setMoviesTopRate });
const topMovies: TopMovie[] = [
  { rank: 1, title: 'Kẻ Dĩ Thuật', views: '24.9M', rating: 8.6, image: '🎬' },
  { rank: 2, title: 'Sứ Mạng Kị Sĩ', views: '18.2M', rating: 8.9, image: '🎬' },
  { rank: 3, title: 'Thập Nhị Sinh', views: '15.7M', rating: 8.4, image: '🎬' },
  {
    rank: 4,
    title: 'Giải Cứu Hôn Lễ',
    views: '12.3M',
    rating: 8.2,
    image: '🎬',
  },
  {
    rank: 5,
    title: 'Câu Lạc Bộ Sư Tử',
    views: '11.8M',
    rating: 8.7,
    image: '🎬',
  },
];
  return (
    <div className="text-white w-full">
      {/* //Trending */}
      <div className="w-80">
        <div className="bg-gray-900 rounded-lg p-4 sticky top-10 mt-6 rounded-xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            🔥 Top phim tuần này
          </h3>
          <div className="space-y-3">
            {topMovies.map((movie) => (
              <div
                key={movie.rank}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div
                  className={`text-2xl font-bold ${
                    movie.rank <= 3 ? 'text-orange-500' : 'text-gray-600'
                  }`}
                >
                  {movie.rank}
                </div>
                <div className="w-12 h-16 bg-gray-800 rounded flex items-center justify-center text-2xl group-hover:scale-105 transition">
                  {movie.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm group-hover:text-orange-500 transition">
                    {movie.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{movie.views} lượt xem</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
                      {movie.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* sapchieu */}
      <div className="px-4">
        <h1 className="text-orange-500 text-2xl uppercase p-4 border-b border-dashed border-red-400">
          Sắp Chiếu
        </h1>
        <div className="w-full flex flex-wrap items-center justify-between gap-2">
          {moviesComing &&
            moviesComing?.slice(0, 5)?.map((movie, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-2 flex gap-3 cursor-pointer hover:text-orange-400"
                >
                  <img
                    src={`${'https://image.tmdb.org/t/p/w500'}${
                      movie.poster_path
                    }`}
                    alt="poster"
                    className="w-20 h-24 object-cover"
                  />
                  <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
                    <h6 className="text-sm">{movie.title}</h6>
                    <p className="text-xs">Sắp chiếu vietsub</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/*  bangxephang */}
      <div className="px-4">
        <h1 className="text-orange-500 text-2xl uppercase p-4 border-b border-dashed border-red-400">
          bảng xếp hạng
        </h1>
        <div className="w-full flex flex-wrap items-center justify-between gap-2">
          {moviesTopRate &&
            moviesTopRate?.slice(0, 6)?.map((movie, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/${path.OVERVIEW}${movie.id}`);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  className="w-full p-2 flex gap-2 cursor-pointer hover:text-orange-400"
                >
                  <img
                    src={`${'https://image.tmdb.org/t/p/w500'}${
                      movie.poster_path
                    }`}
                    alt="poster"
                    className="w-20 h-24 object-cover"
                  />
                  <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
                    <h6 className="text-sm">{movie?.title}</h6>
                    <p className="text-xs">{movie?.release_date}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RightBar;

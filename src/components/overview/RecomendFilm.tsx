import React, { useState } from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { ITopRate } from '@/interface/ListFilm';
import { apiTopRate } from '@/apis/apiTopRate';
import { useNavigate } from 'react-router-dom';
import { path } from '../../untils/constrains/path';
const RecomendFilm: React.FC = () => {
  const navigate = useNavigate();
  const [moviesTopRate, setMoviesTopRate] = useState<ITopRate[]>([]);
  apiTopRate({ setMoviesTopRate });
  return (
    <div className="text-white w-full mt-4 sm:mt-8 px-2 sm:p-2">
      <h2 className="text-orange-400 font-bold uppercase text-base sm:text-xl px-2">
        Có thể bạn sẽ thích
      </h2>
      <div className="border-b border-[2px] border-orange-400 w-1/4 sm:w-1/6 mx-2" />
      <div className="mx-0 sm:mx-2 my-3 sm:my-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2">
          {moviesTopRate &&
            moviesTopRate?.slice(0, 16)?.map((movie) => {
              return (
                <div
                  key={movie.id}
                  onClick={() => {
                    navigate(`/${path.OVERVIEW}${movie.id}`);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  className="w-full h-48 sm:h-56 transition-transform duration-500 ease-in-out hover:scale-105 active:scale-95 cursor-pointer rounded-xl sm:rounded-2xl relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 hover:opacity-0 rounded-xl sm:rounded-2xl z-10 transition-opacity duration-300" />
                  <img
                    src={`${'https://image.tmdb.org/t/p/w500'}${
                      movie.poster_path
                    }`}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                  <div className="w-full flex justify-center absolute bottom-1 sm:bottom-2 left-0 right-0 px-1 z-20">
                    <p className="uppercase text-xs sm:text-sm md:text-md font-semibold text-center line-clamp-2 drop-shadow-lg">
                      {movie.title}
                    </p>
                  </div>
                  <div
                    className="w-full h-full absolute top-0 left-0
              flex items-center justify-center backdrop-blur-sm
              opacity-0 group-hover:opacity-60 transition-opacity
              duration-500 ease-linear cursor-pointer z-30"
                  >
                    <FaRegCirclePlay color="white" size={28} className="sm:w-8 sm:h-8" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RecomendFilm;

import React, { useState } from 'react';
import posterMain from '../assets/posterMain.png';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { ITopRate } from '@/interface/ListFilm';
import { apiTopRate } from '@/apis/apiTopRate';
const RecomendFilm: React.FC = () => {
  const [moviesTopRate, setMoviesTopRate] = useState<ITopRate[]>([]);
  apiTopRate({ setMoviesTopRate });
  console.log('🚀 ~ moviesTopRate:', moviesTopRate);
  return (
    <div className="text-white w-full mt-8 p-2">
      <h2 className="text-orange-400 font-bold uppercase text-xl">
        Có thể bạn sẽ thích
      </h2>
      <div className="border-b border-[2px] border-orange-400 w-1/6" />
      <div className="mx-2 my-4">
        <div className=" grid grid-cols-4 gap-2">
          {moviesTopRate &&
            moviesTopRate?.slice(0, 16)?.map((movie) => {
              return (
                <div
                  // onClick={() => navigate(`/movie/${movie.id}`)}
                  className="w-full h-56 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer rounded-2xl relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 hover:opacity-0 rounded-2xl" />
                  <img
                    src={`${'https://image.tmdb.org/t/p/w500'}${
                      movie.poster_path
                    }`}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="w-full flex justify-center absolute bottom-2 ">
                    <p className="uppercase text-md">{movie.original_title}</p>
                  </div>
                  <div
                    className="w-full h-full absolute top-0 left-0
              flex items-center justify-center backdrop-blur-sm
              opacity-0 group-hover:opacity-60 transition-opacity
              duration-500 ease-linear cursor-pointer"
                  >
                    <FaRegCirclePlay color="white" size={34} className="" />
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

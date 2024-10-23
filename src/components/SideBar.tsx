import React, { useState } from 'react';
import { ITrending } from '@/interface/ListFilm';
import { IComming } from '@/interface/ListFilm';
import { ITopRate } from '@/interface/ListFilm';
import { apiTrending } from '@/apis/apiTrending';
import { apiComingSoon } from '@/apis/apiComingSoon';
import { apiTopRate } from '@/apis/apiTopRate';
const isActive =
  'w-1/3 font-bold h-9 border flex items-center justify-center bg-gray-500';
const notActive =
  'w-1/3 font-bold h-9 border flex items-center justify-center bg-black';
const RightBar: React.FC = () => {
  const [activeDay, setActiveDay] = useState<boolean>(false);
  const [activeWeek, setActiveWeek] = useState<boolean>(false);
  const [activeMonth, setActiveMonth] = useState<boolean>(false);
  const [moviesTrending, setMoviesTrending] = useState<ITrending[]>([]);
  const [moviesComing, setMoviesComing] = useState<IComming[]>([]);
  const [moviesTopRate, setMoviesTopRate] = useState<ITopRate[]>([]);
  apiTrending({ setMoviesTrending });
  apiComingSoon({ setMoviesComing });
  apiTopRate({ setMoviesTopRate });

  return (
    <div className="text-white w-full">
      {/* //Trending */}
      <div className="px-4">
        <h1 className="text-orange-500 text-2xl uppercase p-4 border-b border-dashed border-red-400">
          Trending
        </h1>
        <nav className="w-full flex items-center justify-between mt-2 p-2">
          <h1
            onClick={() => {
              setActiveDay(!activeDay);
              if (activeMonth == true) {
                setActiveMonth(false);
              }
              if (activeWeek == true) {
                setActiveWeek(false);
              }
            }}
            className={activeDay ? notActive : isActive}
          >
            Ngày
          </h1>
          <h1
            onClick={() => {
              setActiveWeek(!activeWeek);
              if (activeDay == false) {
                setActiveDay(true);
              }
              if (activeMonth == true) {
                setActiveMonth(false);
              }
            }}
            className={activeWeek ? isActive : notActive}
          >
            Tuần
          </h1>
          <h1
            onClick={() => {
              setActiveMonth(!activeMonth);
              if (activeDay == false) {
                setActiveDay(true);
              }
              if (activeWeek == true) {
                setActiveWeek(false);
              }
            }}
            className={activeMonth ? isActive : notActive}
          >
            Tháng
          </h1>
        </nav>
        <div className="w-full flex flex-col items-center justify-center">
          {moviesTrending &&
            moviesTrending?.slice(0, 9)?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-[90%] px-4 py-2 flex items-center gap-2 ${
                    (index + 1) % 2 === 0 ? 'bg-gray-800' : ''
                  } cursor-pointer`}
                >
                  <p className="w-6 h-6 bg-orange-400 rounded-full text-sm flex justify-center items-center">
                    {index + 1}
                  </p>
                  <div className="flex flex-col text-sm">
                    <h6 className="hover:text-orange-400">
                      {item.original_title}
                    </h6>
                    <p className="text-xs"> {`${item.popularity} Views`}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* sapchieu */}
      <div className="px-4">
        <h1 className="text-orange-500 text-2xl uppercase p-4 border-b border-dashed border-red-400">
          Sắp Chiếu
        </h1>
        <div className="w-full flex flex-wrap items-center justify-between gap-2">
          {moviesComing &&
            moviesComing?.slice(0, 5)?.map((movie) => {
              return (
                <div className="w-full p-2 flex gap-3 cursor-pointer hover:text-orange-400">
                  <img
                    src={`${'https://image.tmdb.org/t/p/w500'}${
                      movie.poster_path
                    }`}
                    alt="poster"
                    className="w-20 h-24 object-cover"
                  />
                  <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
                    <h6 className="text-sm">{movie.original_title}</h6>
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
            moviesTopRate?.slice(0, 6)?.map((movie) => {
              return (
                <div className="w-full p-2 flex gap-2 cursor-pointer hover:text-orange-400">
                  <img
                    src={`${'https://image.tmdb.org/t/p/w500'}${
                      movie.poster_path
                    }`}
                    alt="poster"
                    className="w-20 h-24 object-cover"
                  />
                  <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
                    <h6 className="text-sm">{movie?.original_title}</h6>
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

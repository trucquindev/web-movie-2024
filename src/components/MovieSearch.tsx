import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { apiSearch } from '@/apis/apiSearch';
import { ListFilm } from '@/interface/ListFilm';
import { path } from '../untils/constrains/path';
const MovieSearch: React.FC = () => {
  const [movies, setMovies] = useState<ListFilm[]>([]);
  const [searchParams] = useSearchParams();
  const params = [];
  const navigate = useNavigate();
  for (let param of searchParams.entries()) {
    params.push({ value: param[1] });
  }
  const title = params[0].value.trim().replace(' ', '%20');
  apiSearch({ title, setMovies });
  return (
    <div className="text-white p-10 mb-4">
      <h2 className="uppercase text-2xl font-bold mb-4">Kết quả tìm kiếm</h2>
      <div className=" grid grid-cols-6 gap-4">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(`/${path.OVERVIEW}${movie.id}`)}
              className="w-full h-72 relative transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer rounded-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 hover:opacity-0 rounded-2xl" />
              <img
                src={`${'https://image.tmdb.org/t/p/w500'}${movie.poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="w-full flex justify-center absolute bottom-2 ">
                <p className="uppercase text-md">
                  {movie.title || movie.original_title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSearch;

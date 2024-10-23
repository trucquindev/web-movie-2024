import React from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Button } from './ui/button';
import RecomendFilm from './RecomendFilm';
import { IOverview } from '@/interface/ListFilm';
import { useNavigate } from 'react-router-dom';
interface Props {
  movie: IOverview;
}
const OverviewDetail: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full rounded-xl mt-6 flex items-center flex-col">
      <div className="w-[70%] flex justify-between rounded-lg bg-gray-900 p-2">
        <div
          className="w-1/2 h-[500px] relative group"
          onClick={() => {
            navigate(`/movie/${movie.id}`);
          }}
        >
          <img
            src={`${'https://image.tmdb.org/t/p/w500'}${movie.poster_path}`}
            alt="poster"
            className="w-full h-full object-cover"
          />
          <div
            className="w-full h-full absolute top-0 left-0
              flex items-center justify-center backdrop-blur-sm
              opacity-0 group-hover:opacity-60 transition-opacity
              duration-500 ease-linear cursor-pointer"
          >
            <FaRegCirclePlay color="white" size={54} className="" />
          </div>
          <div>
            <Button className="bg-red-500 absolute bottom-0 w-full hover:bg-red-500">
              Xem phim
            </Button>
          </div>
        </div>
        <div className="p-3 w-1/2">
          <h1 className="text-orange-400 uppercase text-2xl font-bold">
            {movie?.title}
          </h1>
          <p className="text-gray-500 text-lg">
            {Array.isArray(movie.genres) && movie.genres.length > 0
              ? movie.genres[0].name
              : undefined}
          </p>
          <div className=" flex flex-col text-gray-500 text-sm bg-gray-700 p-2">
            <p>{movie?.title}</p>
            <p>Trạng thái: Full Vietsub</p>
            <p>Số tập</p>
            <p>{`Tình trạng: ${movie.status}`}</p>
            <p>{`Thể loại: ${
              Array.isArray(movie.genres) && movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(', ')
                : undefined
            }`}</p>
            <p>{`Đạo diễn: ${movie.production_companies}`}</p>
            {/* <p>
              Diễn viên: Odette Annable, Cam Gigandet, Gary Oldman, Idris Elba,
              James Remar, Ethan Cutkosky, Meagan Good, Jane Alexander, Carla
              Gugino, Atticus Shaffer
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-5 w-[70%]">
        <p className="text-orange-400 uppercase text-xl">Nội dung chi tiết</p>
        <div className="w-1/12 border-b border-orange-500" />
        <p className="text-3xl text-gray-400 py-3">{movie?.title}</p>
        <p className="text-lg text-gray-400">{movie?.overview}</p>
        <div className=" mt-2 flex gap-2">
          <p className="text-sm text-gray-400 border border-gray-500  w-[34%] flex justify-center font-bold">
            {movie?.original_title}
          </p>
          <p className="text-sm text-gray-400 border border-gray-500  w-[16 %] flex justify-center font-bold px-2">
            {Array.isArray(movie.genres) && movie.genres.length > 0
              ? movie.genres[0].name
              : undefined}
          </p>
        </div>
      </div>
      <div className="w-[70%]">
        <RecomendFilm />
      </div>
    </div>
  );
};

export default OverviewDetail;

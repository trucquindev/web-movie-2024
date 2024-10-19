import React from 'react';
import ic_facebook from '../assets/ic_facebook.png';
import ic_instagram from '../assets/ic_instagram.png';
import ic_twitter from '../assets/ic_twitter.png';
import avt_luffy from '../assets/avt_luffy.png';
import { IDetailFilm } from '@/interface/ListFilm';
interface Props {
  movie: IDetailFilm;
}
const MovieVideoDetail: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      {/* title  */}
      <h1 className="text-white font-semibold text-2xl py-2">{movie?.title}</h1>
      {/* video film  */}
      <div className="w-[100%]">
        {/* <video
          controls
          className="w-full h-[400px] object-cover p-2"
          src={nhabanu}
        /> */}
        <div className="flex flex-col justify-center items-center py-2 border-b border-gray-400">
          <h3 className="text-white font-semibold text-lg mb-2">
            Đổi server nếu lag
          </h3>
          <div className="flex gap-4">
            <h4 className="text-sm text-white border rounded-xl px-2 py-2 bg-slate-900 ">
              Server 1
            </h4>
            <h4 className="text-sm text-white border rounded-xl px-2 py-2 bg-slate-700">
              Server 2
            </h4>
            <h4 className="text-sm text-white border rounded-xl px-2 py-2 bg-slate-700">
              Server 3
            </h4>
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <h2 className="uppercase text-white font-semibold text-xl py-2">
          {movie?.title}
        </h2>
        <h6 className="text-white text-lg">{movie?.tagline}</h6>
        <p className="">Tập Full</p>
      </div>
      <div className="p-3 bg-slate-800 flex justify-center items-center mb-4">
        <p className="text-white">
          {movie?.overview?.length > 400
            ? `${movie?.overview?.slice(0, 400)}...`
            : movie?.overview}
        </p>
      </div>
      {/* shar */}
      <div className="flex gap-2 items-center mb-4  ">
        <p className="text-sm text-gray-500 font-bold">Chia sẻ</p>
        <div className="flex gap-2 items-center">
          <img
            src={ic_facebook}
            alt=""
            className="w-6 h-6 bg-white rounded-full"
          />
          <img
            src={ic_instagram}
            alt=""
            className="w-6 h-6 bg-white rounded-full"
          />
          <img
            src={ic_twitter}
            alt=""
            className="w-6 h-6 bg-white rounded-full"
          />
        </div>
      </div>
      {/* bình luận */}
      <div className="border border-gray-600 p-4 bg-slate-900">
        <div className="border-b border-gray-400">
          <h6 className="text-white text-lg">Bình luận</h6>
          <p className="text-white">
            Vui lòng <span className="text-orange-500">đăng nhập</span> để đăng
            bình luận
          </p>
        </div>
        <div className="mt-2 p-4 bg-gray-800 flex gap-3 flex-col">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <img
                src={avt_luffy}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-white font-semibold">Quỳnh Nguyễn</p>
            </div>
            <p className="text-gray-400 text-sm">Một tháng trước</p>
          </div>
          <p className="text-white">Phim hay lắm các bạn ơi!</p>
        </div>
      </div>
    </div>
  );
};

export default MovieVideoDetail;

import React from 'react';
import ic_facebook from '../../assets/ic_facebook.png';
import ic_instagram from '../../assets/ic_instagram.png';
import ic_twitter from '../../assets/ic_twitter.png';
import avt_luffy from '../../assets/avt_luffy.png';
import { IDetailFilm } from '@/interface/ListFilm';
interface Props {
  movie: IDetailFilm;
}
const MovieVideoDetail: React.FC<Props> = ({ movie }) => {
  return (
    <div className="px-2 sm:px-4 md:px-0">
      {/* title  */}
      <h1 className="text-white font-semibold text-lg sm:text-xl md:text-2xl py-2">
        {movie?.title}
      </h1>
      {/* video film  */}
      <div className="w-full">
        <iframe
          src="https://drive.google.com/file/d/1-48goMr8BMir0ZaE9Y996xq2R68018Vt/preview"
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover p-1 sm:p-2"
          allow="autoplay"
        />
        <div className="flex flex-col justify-center items-center py-2 border-b border-gray-400 px-2">
          <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-2">
            Đổi server nếu lag
          </h3>
          <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
            <h4 className="text-xs sm:text-sm text-white border rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-900 cursor-pointer hover:bg-slate-800 transition">
              Server 1
            </h4>
            <h4 className="text-xs sm:text-sm text-white border rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 cursor-pointer hover:bg-slate-600 transition">
              Server 2
            </h4>
            <h4 className="text-xs sm:text-sm text-white border rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 cursor-pointer hover:bg-slate-600 transition">
              Server 3
            </h4>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="px-2 sm:px-0">
        <h2 className="uppercase text-white font-semibold text-lg sm:text-xl py-2">
          {movie?.title}
        </h2>
        <h6 className="text-white text-sm sm:text-base md:text-lg">
          {movie?.tagline}
        </h6>
        <p className="text-sm sm:text-base">Tập Full</p>
      </div>
      <div className="p-3 sm:p-4 bg-slate-800 flex justify-center items-center mb-4 rounded-lg">
        <p className="text-white text-sm sm:text-base">
          {movie?.overview?.length > 400
            ? `${movie?.overview?.slice(0, 400)}...`
            : movie?.overview}
        </p>
      </div>
      <div className="flex gap-2 items-center mb-4 px-2 sm:px-0">
        <p className="text-xs sm:text-sm text-gray-500 font-bold">Chia sẻ</p>
        <div className="flex gap-2 items-center">
          <img
            src={ic_facebook}
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full cursor-pointer hover:opacity-80 transition"
          />
          <img
            src={ic_instagram}
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full cursor-pointer hover:opacity-80 transition"
          />
          <img
            src={ic_twitter}
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full cursor-pointer hover:opacity-80 transition"
          />
        </div>
      </div>
      {/* bình luận */}
      <div className="border border-gray-600 p-3 sm:p-4 bg-slate-900 rounded-lg">
        <div className="border-b border-gray-400 pb-2 sm:pb-3">
          <h6 className="text-white text-base sm:text-lg">Bình luận</h6>
          <p className="text-white text-xs sm:text-sm">
            Vui lòng <span className="text-orange-500">đăng nhập</span> để đăng
            bình luận
          </p>
        </div>
        <div className="mt-2 p-3 sm:p-4 bg-gray-800 flex gap-3 flex-col rounded-lg">
          <div className="flex gap-3 sm:gap-6 items-center flex-wrap">
            <div className="flex items-center gap-2">
              <img
                src={avt_luffy}
                alt="avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
              />
              <p className="text-white font-semibold text-sm sm:text-base">
                Quỳnh Nguyễn
              </p>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">Một tháng trước</p>
          </div>
          <p className="text-white text-sm sm:text-base">
            Phim hay lắm các bạn ơi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieVideoDetail;

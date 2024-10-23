import React from 'react';
import posterMain from '../assets/posterMain.png';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Button } from './ui/button';
const OverviewDetail: React.FC = () => {
  return (
    <div className="w-full rounded-xl mt-6 flex justify-center">
      <div className="w-[70%] flex justify-between rounded-lg bg-gray-900 p-2">
        <div className="w-1/2 h-[500px] relative group">
          <img
            src={posterMain}
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
            Tái Sinh (Đứa Trẻ Chưa Sinh)
          </h1>
          <p className="text-gray-500 text-lg">The Unborn</p>
          <div className=" flex flex-col text-gray-500 text-sm bg-gray-700 p-2">
            <p>Tái Sinh (Đứa Trẻ Chưa Sinh) - The Unborn (2009)</p>
            <p>Trạng thái: Full Vietsub</p>
            <p>Thời lượng: 87 Phút</p>
            <p>Số tập</p>
            <p>Tình trạng: Hoàn thành</p>
            <p>Thể loại: Kinh Dị, Bí Ẩn</p>
            <p>Đạo diễn: David S. Goyer</p>
            <p>
              Diễn viên: Odette Annable, Cam Gigandet, Gary Oldman, Idris Elba,
              James Remar, Ethan Cutkosky, Meagan Good, Jane Alexander, Carla
              Gugino, Atticus Shaffer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetail;

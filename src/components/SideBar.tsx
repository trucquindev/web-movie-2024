import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const isActive =
  'w-1/3 font-bold h-9 border flex items-center justify-center bg-gray-500';
const notActive =
  'w-1/3 font-bold h-9 border flex items-center justify-center bg-black';
const RightBar: React.FC = () => {
  const [activeDay, setActiveDay] = useState<boolean>(false);
  const [activeWeek, setActiveWeek] = useState<boolean>(false);
  const [activeMonth, setActiveMonth] = useState<boolean>(false);
  return (
    <div className="text-white w-full">
      {/* //Trending */}
      <div>
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
          <div className="w-[90%] px-4 py-2 flex items-center gap-2 border border-red-400">
            <p className="w-6 h-6 bg-orange-400 rounded-full text-sm flex justify-center items-center">
              1
            </p>
            <div className="flex flex-col text-sm">
              <h6>Chắc chắn phải là cô ấy</h6>
              <p>52494 Views</p>
            </div>
          </div>
          <div className="w-[90%] px-4 py-2 flex items-center gap-2 border border-red-400">
            <p className="w-6 h-6 bg-orange-400 rounded-full text-sm flex justify-center items-center">
              1
            </p>
            <div className="flex flex-col text-sm">
              <h6>Chắc chắn phải là cô ấy</h6>
              <p>52494 Views</p>
            </div>
          </div>
          <div className="w-[90%] px-4 py-2 flex items-center gap-2 border border-red-400">
            <p className="w-6 h-6 bg-orange-400 rounded-full text-sm flex justify-center items-center">
              1
            </p>
            <div className="flex flex-col text-sm">
              <h6>Chắc chắn phải là cô ấy</h6>
              <p>52494 Views</p>
            </div>
          </div>
        </div>
      </div>
      {/* sapchieu */}
      <div>
        <h1 className="text-orange-500 text-2xl uppercase p-4 border-b border-dashed border-red-400">
          Sắp Chiếu
        </h1>
        <div className="w-full flex flex-wrap items-center justify-between gap-2">
          <div className="w-full p-2 flex gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="poster"
              className="w-20 h-24 object-cover"
            />
            <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
              <h6 className="text-sm">Chắc chắn phải là cô ấy - Bản full</h6>
              <p className="text-xs">Sắp chiếu vietsub</p>
            </div>
          </div>
          <div className="w-full p-2 flex gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="poster"
              className="w-20 h-24 object-cover"
            />
            <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
              <h6 className="text-sm">Chắc chắn phải là cô ấy - Bản full</h6>
              <p className="text-xs">Sắp chiếu vietsub</p>
            </div>
          </div>
          <div className="w-full p-2 flex gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="poster"
              className="w-20 h-24 object-cover"
            />
            <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
              <h6 className="text-sm">Chắc chắn phải là cô ấy - Bản full</h6>
              <p className="text-xs">Sắp chiếu vietsub</p>
            </div>
          </div>
        </div>
      </div>

      {/*  bangxephang */}
      <div>
        <h1 className="text-orange-500 text-2xl uppercase p-4 border-b border-dashed border-red-400">
          bảng xếp hạng
        </h1>
        <div className="w-full flex flex-wrap items-center justify-between gap-2">
          <div className="w-full p-2 flex gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="poster"
              className="w-20 h-24 object-cover"
            />
            <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
              <h6 className="text-sm">Chắc chắn phải là cô ấy - Bản full</h6>
              <p className="text-xs">Sắp chiếu vietsub</p>
            </div>
          </div>
          <div className="w-full p-2 flex gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="poster"
              className="w-20 h-24 object-cover"
            />
            <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
              <h6 className="text-sm">Chắc chắn phải là cô ấy - Bản full</h6>
              <p className="text-xs">Sắp chiếu vietsub</p>
            </div>
          </div>
          <div className="w-full p-2 flex gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="poster"
              className="w-20 h-24 object-cover"
            />
            <div className="w-full text-sm mt-2 flex flex-col justify-center gap-5 py-2">
              <h6 className="text-sm">Chắc chắn phải là cô ấy - Bản full</h6>
              <p className="text-xs">Sắp chiếu vietsub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

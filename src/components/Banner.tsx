import React from 'react';
import star from '../assets/ic_star.png';
import star2 from '../assets/ic_star2.png';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Button } from './ui/button';
import posterMain from '../assets/posterMain.png';
const Banner: React.FC = () => {
  return (
    <div className="w-full h-full bg-banner bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4">
        <div className="w-[50%] flex flex-col space-y-5 items-baseline">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-100 py-2 text-lg px-3 relative z-20 rounded-xl">
            TV SHOW
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold text-white">Nghề siêu dễ</h2>
            <div className="flex items-center space-x-3">
              <img src={star} alt="rating" className="w-8 h-8" />
              <img src={star} alt="rating" className="w-8 h-8" />
              <img src={star} alt="rating" className="w-8 h-8" />
              <img src={star} alt="rating" className="w-8 h-8" />
              <img src={star2} alt="rating" className="w-8 h-8" />
            </div>
          </div>
          <div>
            <p className="text-white py-2">
              Sau thành công của Mắt Biếc, tác phẩm do nhà văn Nguyễn Nhật Ánh
              chấp bút tiếp tục được chuyển thể lên màn ảnh rộng – đó là Ngày
              Xưa Có Một Chuyện Tình. Đây là một trong những tác phẩm bán chạy
              hàng đầu của nhà văn Nguyễn Nhật Ánh, lên tới hơn 100.000 bản và
              đã tái bản đến lần thứ 15. Được đạo diễn bởi Trịnh Đình Lê Minh
              cùng dàn nhân vật chính chia làm hai giai đoạn 12 và 17 tuổi. Năm
              1987 - 12 tuổi là Thanh Tú (Vinh), Bảo Tiên (Miền) và Hạo Khang
              (Phúc). Năm 1992 - 17 tuổi là Avin Lu (Vinh), Ngọc Xuân (Miền) và
              Nhật Hoàng (Phúc).
            </p>
            <div className="flex items-center space-x-4">
              <Button className="p-3 text-white bg-black font-bold text-sm">
                Chi tiết
              </Button>
              <Button className="p-3 text-white bg-red-500 font-bold text-sm">
                Xem phim
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[500px] relative group">
            <img
              src={posterMain}
              alt="poster"
              className="w-full h-full object-cover"
            />
            <div
              className="w-full h-full absolute top-0 left-0
              flex items-center justify-center backdrop-blur-sm
              opacity-0 group-hover:opacity-90 transition-opacity
              duration-500 ease-linear cursor-pointer"
            >
              <FaRegCirclePlay color="white" size={54} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import posterMain from '../assets/posterMain.png';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Button } from './ui/button';
import RecomendFilm from './RecomendFilm';
const OverviewDetail: React.FC = () => {
  return (
    <div className="w-full rounded-xl mt-6 flex items-center flex-col">
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
      <div className="mt-5 w-[70%]">
        <p className="text-orange-400 uppercase text-xl">Nội dung chi tiết</p>
        <div className="w-1/12 border-b border-orange-500" />
        <p className="text-3xl text-gray-400 py-3">
          Tái Sinh (Đứa Trẻ Chưa Sinh)
        </p>
        <p className="text-lg text-gray-400">
          Bộ phim Tái Sinh (The Unborn) là một bộ phim kinh dị do David S. Goyer
          đạo diễn, với sự tham gia của các diễn viên nổi tiếng như Odette
          Annable, Cam Gigandet và Gary Oldman. Câu chuyện xoay quanh một phụ nữ
          trẻ tên là Casey Beldon (do Odette Annable thủ vai), người đang bắt
          đầu trải qua những hiện tượng siêu nhiên kỳ lạ và cảm thấy bị ám ảnh
          bởi một linh hồn đang dần chiếm hữu cô. Trong quá trình khám phá về
          quá khứ của mình, Casey phát hiện ra rằng cô có mối liên kết với một
          linh hồn ác độc từ quá khứ và cần phải tìm cách giải thoát cho bản
          thân. Trong hành trình này, Casey được giúp đỡ bởi cha Marcus (do Gary
          Oldman thủ vai), một linh mục giàu kiến thức về ma thuật và linh hồn.
          Với sự kết hợp giữa yếu tố kinh dị, huyền bí và tâm lý, Tái Sinh đã
          thu hút sự chú ý của khán giả yêu thích thể loại phim này. Odette
          Annable, Cam Gigandet và Gary Oldman đã tái hiện thành công những nhân
          vật đầy sức sống trong bộ phim này, mang lại những cảm xúc mãnh liệt
          cho người xem. Keywords:
        </p>
        <div className=" mt-2 flex gap-2">
          <p className="text-sm text-gray-400 border border-gray-500  w-[34%] flex justify-center font-bold">
            Tái Sinh (Đứa Trẻ Chưa Sinh)
          </p>
          <p className="text-sm text-gray-400 border border-gray-500  w-[16 %] flex justify-center font-bold px-2">
            The Unborn
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

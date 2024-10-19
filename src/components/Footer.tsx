import React from 'react';
import logo from '../assets/logo.png';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="w-[94%] text-white border border-gray-700 p-4 mt-2">
      <div className=" bg-blue-500 p-4 grid grid-cols-2 border border-gray-400">
        <div>
          <p className="text-white">
            <span className="text-orange-500 hover:text-blue-600 cursor-pointer">
              Phimhay
            </span>{' '}
            - Trang web xem phim trực tuyến miễn phí chất lượng cao với giao
            diện trực quan, tốc độ tải trang nhanh, cùng kho phim với hơn
            10.000+ phim mới, phim hay, luôn cập nhật phim nhanh, hứa hẹn sẽ đem
            lại phút giây thư giãn cho bạn.
          </p>
        </div>
        <div className="text-white flex items-center justify-center gap-10">
          <div>
            <h5 className="text-lg font-bold">Điều khoản</h5>
            <ul className="list-none text-sm">
              <li className="hover:text-blue-800 cursor-pointer">DMCA</li>
              <li className="hover:text-blue-800 cursor-pointer">Liên Hệ</li>
              <li className="hover:text-blue-800 cursor-pointer">Privacy</li>
              <li className="hover:text-blue-800 cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
          <img src={logo} alt="" className="w-24 h-24" />
        </div>
      </div>
      <div className="border border-gray-400 flex items-center justify-center py-3 relative">
        <p className="text-white">© 2024 Phimhay. All rights reserved.</p>
        <div
          onClick={scrollToTop}
          className="absolute right-2 bottom-2 bg-slate-400 w-9 h-8 flex items-center justify-center hover:bg-slate-600 cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

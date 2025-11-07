import React from 'react';
import logo from '../../assets/logo.png';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="w-full text-white mt-8 sm:mt-12">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 sm:p-8 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left Section - Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                <span className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">
                  Phimhay
                </span>
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Trang web xem phim trực tuyến miễn phí chất lượng cao với giao
                diện trực quan, tốc độ tải trang nhanh, cùng kho phim với hơn
                10.000+ phim mới, phim hay, luôn cập nhật phim nhanh, hứa hẹn sẽ đem
                lại phút giây thư giãn cho bạn.
              </p>
            </div>
          </div>

          {/* Right Section - Terms & Logo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end gap-6 sm:gap-8 md:gap-12">
            <div>
              <h5 className="text-base sm:text-lg font-bold mb-3 text-white">
                Điều khoản
              </h5>
              <ul className="list-none space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block hover:translate-x-1 transition-transform"
                  >
                    DMCA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block hover:translate-x-1 transition-transform"
                  >
                    Liên Hệ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block hover:translate-x-1 transition-transform"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block hover:translate-x-1 transition-transform"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Phimhay Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800 flex items-center justify-center py-3 sm:py-4 relative px-4">
        <p className="text-white/70 text-xs sm:text-sm md:text-base">
          © 2024 Phimhay. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="absolute right-4 sm:right-6 bottom-3 sm:bottom-4 bg-amber-400 hover:bg-amber-500 text-slate-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer group"
          aria-label="Scroll to top"
        >
          <MdOutlineKeyboardDoubleArrowUp
            size={24}
            className="sm:w-[28px] sm:h-[28px] group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

import { useAuth } from '@/context/AuthContext';
import { Search, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nagivate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { setShowAuthModal } = useAuth();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={
        `fixed top-0 z-50 w-screen border-b border-slate-800/50 transition-colors duration-300 ` +
        (scrolled
          ? 'bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60'
          : 'bg-gradient-to-b from-slate-950 to-transparent')
      }
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4 gap-6">
        {/* Logo */}
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={() => nagivate('/')}
        >
          <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
            <span className="text-slate-950 font-bold text-lg">▶</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none">
              RoPhim
            </h1>
            <p className="text-xs text-slate-400">Phim hay có tô</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Tìm kiếm phim, diễn viên"
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/50"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Phim Lẻ
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Phim Bộ
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Thể loại
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Quốc gia
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Xem Chung
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Thêm
          </a>
          <span className="bg-amber-400 text-slate-950 px-2 py-1 rounded text-xs font-bold">
            Rô Bóng
          </span>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-300">
            <Bell className="w-5 h-5" />
            <span>Tải ứng dụng</span>
            <span className="text-xs">RoPhim</span>
          </div>
          <button
            className="px-4 py-2 bg-slate-100 text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors"
            onClick={() => setShowAuthModal(true)}
          >
            Thành viên
          </button>
        </div>
      </div>
    </header>
  );
}

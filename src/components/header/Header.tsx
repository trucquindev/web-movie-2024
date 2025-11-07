import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../search/searchBar';
import { Bell, Menu, X } from 'lucide-react';

export default function Header() {
  const nagivate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 gap-3 md:gap-6">
        {/* Logo */}
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={() => nagivate('/')}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-400 flex items-center justify-center">
            <span className="text-slate-950 font-bold text-sm md:text-lg">▶</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-base md:text-lg leading-none">
              RoPhim
            </h1>
            <p className="text-xs text-slate-400">Phim hay cả rổ</p>
          </div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <SearchBar/>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Phim Lẻ
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Phim Bộ
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Thể loại
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Quốc gia
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Xem Chung
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Thêm
          </a>
          <span className="bg-amber-400 text-slate-950 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
            Rô Bóng
          </span>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-300">
            <Bell className="w-5 h-5" />
            <span className="hidden lg:inline">Tải ứng dụng</span>
            <span className="text-xs hidden xl:inline">RoPhim</span>
          </div>
          <button
            className="hidden sm:block px-3 md:px-4 py-1.5 md:py-2 bg-slate-100 text-slate-950 rounded-full font-medium text-xs md:text-sm hover:bg-slate-200 transition-colors"
            onClick={() => setShowAuthModal(true)}
          >
            Thành viên
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/50 bg-black/95 backdrop-blur">
          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-slate-800/50">
            <SearchBar/>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="px-4 py-4 space-y-3">
            <a
              href="#"
              className="block text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Phim Lẻ
            </a>
            <a
              href="#"
              className="block text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Phim Bộ
            </a>
            <a
              href="#"
              className="block text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Thể loại
            </a>
            <a
              href="#"
              className="block text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quốc gia
            </a>
            <a
              href="#"
              className="block text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Xem Chung
            </a>
            <a
              href="#"
              className="block text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Thêm
            </a>
            <div className="pt-2 border-t border-slate-800/50">
              <button
                className="w-full px-4 py-2 bg-slate-100 text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors"
                onClick={() => {
                  setShowAuthModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                Thành viên
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

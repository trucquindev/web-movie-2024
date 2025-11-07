import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Film } from 'lucide-react';
import Header from '@/components/header/Header';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                404
              </h1>
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute -top-4 -right-4"
              >
                <Film className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 opacity-50" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Trang không tồn tại
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-2">
              Xin lỗi! Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di
              chuyển.
            </p>
            <p className="text-base sm:text-lg text-slate-400">
              Nhưng đừng lo lắng, bạn có thể quay lại trang chủ để tiếp tục xem
              phim!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-semibold rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/30 flex items-center gap-2 w-full sm:w-auto"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors duration-300 border border-slate-700 flex items-center gap-2 w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              Quay lại
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate('/');
                // Focus search bar after navigation
                setTimeout(() => {
                  const searchInput = document.querySelector(
                    'input[placeholder*="Tìm kiếm"]'
                  ) as HTMLInputElement;
                  searchInput?.focus();
                }, 100);
              }}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors duration-300 border border-slate-700 flex items-center gap-2 w-full sm:w-auto"
            >
              <Search className="w-5 h-5" />
              Tìm kiếm phim
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-slate-600 text-sm"
          >
            <p>🎬 Có thể bạn đang tìm kiếm một bộ phim cụ thể?</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

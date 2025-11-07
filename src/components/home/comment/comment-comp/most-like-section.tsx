import { Heart, TrendingUp } from 'lucide-react';

const MostLikeSections = () => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-4 sm:mb-6">
        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6b9d]" />
        YÊU THÍCH NHẤT
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {[
          { title: 'Diễn Thoại Den 2', icon: '📺' },
          { title: 'Nắm Ngọn Tay Điều Kỳ', icon: '🎬' },
          { title: '"Lột Hổ" Gã Khó Lý', icon: '🎭' },
          { title: 'Thiên Địa Kiếm Tâm', icon: '⚔️' },
          { title: 'Diễn Thoại Den', icon: '📺' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#1f2937] rounded-lg hover:bg-[#2d3748] transition group cursor-pointer"
          >
            <span className="text-lg sm:text-xl flex-shrink-0">
              {item.icon}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm truncate group-hover:text-[#ff6b9d] transition">
                {item.title}
              </p>
            </div>
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
          </div>
        ))}
        <p className="text-xs text-[#6b7280] mt-3 sm:mt-4 cursor-pointer hover:text-white transition">
          Xem thêm
        </p>
      </div>
    </div>
  );
};

export default MostLikeSections;

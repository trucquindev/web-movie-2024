import { trendingItemData } from '@/data/movies';
import { TrendingUp } from 'lucide-react';

export default function TrendingSection() {
  const trendingItems = trendingItemData;

  return (
    <div className="space-y-4">
      <h2 className="flex items-center gap-2 text-lg font-bold mb-6">
        <TrendingUp className="w-5 h-5 text-green-400" />
        SỐI NỔI NHẤT
      </h2>
      <div className="space-y-3">
        {trendingItems.map((item) => (
          <div
            key={item.rank}
            className="flex items-center gap-3 p-3 bg-[#1f2937] rounded-lg hover:bg-[#2d3748] transition group cursor-pointer"
          >
            <span className="text-xs font-bold text-[#ff6b9d] flex-shrink-0 w-5">
              {item.rank}.
            </span>
            <span className="text-lg flex-shrink-0">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate group-hover:text-[#ff6b9d] transition">
                {item.title}
              </p>
            </div>
            <div
              className={`flex-shrink-0 ${
                item.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              <TrendingUp
                className={`w-4 h-4 ${
                  item.trend === 'down' ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        ))}
        <p className="text-xs text-[#6b7280] mt-4 cursor-pointer hover:text-white transition">
          Xem thêm
        </p>
      </div>
    </div>
  );
}

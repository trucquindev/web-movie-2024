import React, { useState } from 'react';
import { Star, ThumbsUp, ChevronDown } from 'lucide-react';
import RecomendFilm from './RecomendFilm';
import { IOverview } from '@/interface/ListFilm';
import { castData, reviewsData } from '@/data/movies';

interface Props {
  movie: IOverview;
}

const OverviewDetail: React.FC<Props> = ({ movie }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const cast = castData;
  const reviews = reviewsData;
  return (
    <div className="w-full mt-4 sm:mt-6 flex justify-center">
      <div className="w-full max-w-5xl px-2 sm:px-4">
        {/* Tabs Section */}
        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg">
          {/* Tabs Navigation */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 border-b border-gray-700 mb-4 sm:mb-6 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('intro')}
              className={`pb-2 sm:pb-3 px-1 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'intro'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Giới thiệu
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 sm:pb-3 px-1 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Bình luận
            </button>
            <button
              onClick={() => setActiveTab('related')}
              className={`pb-2 sm:pb-3 px-1 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'related'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Các bản chiếu
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'intro' && (
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
                  Giới thiệu
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Một câu chuyện cảm động về tình mẫu tử và sự hy sinh của người
                  mẹ. Phim kể về hành trình của một người mẹ đơn thân nuôi con
                  trong hoàn cảnh khó khăn, với những thử thách và gian nan
                  trong cuộc sống. Đây là tác phẩm chạm đến trái tim người
                  xem...
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
                  Diễn viên
                </h3>
                <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2">
                  {cast.map((actor, index) => (
                    <div key={index} className="text-center flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full mb-2 sm:mb-3 flex items-center justify-center text-2xl sm:text-3xl hover:bg-gray-700 transition-colors">
                        👤
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-white">
                        {actor.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{actor.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Bình luận (224)
                </h3>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-800 rounded-full">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-500 text-orange-500" />
                  <span className="text-xs sm:text-sm font-semibold text-white">9.1</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {(showAllReviews ? reviews : reviews.slice(0, 3)).map(
                  (review) => (
                    <div
                      key={review.id}
                      className="bg-gray-800 rounded-xl p-3 sm:p-4 md:p-5 hover:bg-gray-750 transition-colors"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                          {review.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                            <span className="font-medium text-white text-sm sm:text-base">
                              {review.username}
                            </span>
                            <span className="text-gray-400 text-xs">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex gap-1 mb-2 sm:mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                  i < review.rating
                                    ? 'fill-orange-500 text-orange-500'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                            {review.content}
                          </p>
                          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                            <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-orange-500 transition-colors">
                              <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{review.likes}</span>
                            </button>
                            <button className="text-gray-400 hover:text-orange-500 transition-colors">
                              Trả lời
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {!showAllReviews && reviews.length > 3 && (
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="w-full mt-4 sm:mt-6 py-2 sm:py-3 bg-gray-800 rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-300"
                >
                  Xem thêm bình luận
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
          )}

          {activeTab === 'related' && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
                Các bản chiếu khác
              </h3>
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <p className="text-gray-400 text-sm sm:text-base">
                  Phòng Vấn Sản Nhân chỉ có một phiên bản
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Movie Details Section */}
        <div className="mt-6 sm:mt-8 bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <h2 className="text-orange-500 uppercase text-base sm:text-lg font-semibold tracking-wide">
              Nội dung chi tiết
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500 to-transparent" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">{movie?.title}</h3>
          <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            {movie?.overview}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs sm:text-sm text-gray-300 font-medium">
              {movie?.original_title}
            </span>
            {Array.isArray(movie?.genres) && movie.genres.length > 0 && (
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 border border-orange-500/30 rounded-lg text-xs sm:text-sm text-orange-400 font-medium">
                {movie.genres[0].name}
              </span>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8">
          <RecomendFilm />
        </div>
      </div>
    </div>
  );
};

export default OverviewDetail;

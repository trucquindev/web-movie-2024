import React, { useEffect } from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import RightBar from '@/components/SideBar';
import OverviewDetail from '@/components/overview/OverviewDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { apiOverview } from '@/apis/apiOverview';
import { IOverview } from '@/interface/ListFilm';
import OverviewHeader from '@/components/overview/overivew-header';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

const Overview: React.FC = () => {
  const { idFilm } = useParams();
  const navigate = useNavigate();
  const idFilmNumber = idFilm ? parseInt(idFilm, 10) : undefined;
  const idF: number | undefined = idFilmNumber;
  const [movieOverview, setMovieOverview] = React.useState<IOverview>(
    {} as IOverview
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (idF) {
      apiOverview({ idF, setMovie: setMovieOverview, setIsLoading, setError });
    } else {
      setError('ID phim không hợp lệ');
      setIsLoading(false);
    }
  }, [idF]);

  const handleRetry = () => {
    if (idF) {
      apiOverview({ idF, setMovie: setMovieOverview, setIsLoading, setError });
    }
  };

  const movie = {
    id: idF || 1,
    title: 'The Ugly',
    vietnameseTitle: movieOverview.title || 'Đang tải...',
    image: movieOverview.poster_path
      ? `https://image.tmdb.org/t/p/w500${movieOverview.poster_path}`
      : '',
    rating: 7.1,
    ageRating: 'T16',
    year: movieOverview.release_date
      ? new Date(movieOverview.release_date).getFullYear()
      : 2025,
    duration: '1h 42m',
    genres:
      movieOverview.genres?.map((g) => g.name) ||
      ['Chính Kịch', 'Chiếu Rạp', 'Gay Cấn', 'Bí Ẩn', 'Tâm Lý'],
    description:
      movieOverview.overview ||
      'Im Dong-hwan, chàng trai chưa từng biết mặt mẹ mình, bằng hoàng khi cảnh sát thông báo đã tìm thấy hai cót của bà – người mất tích suốt 40 năm – với nghi ngờ...',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 w-screen">
      <Header />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <Loader2 className="w-12 h-12 text-amber-400 animate-spin" />
          <p className="text-white/70 text-lg">Đang tải thông tin phim...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 max-w-md">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Không thể tải phim
            </h2>
            <p className="text-white/70 mb-6">{error}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleRetry}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Thử lại
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors"
              >
                Về trang chủ
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <OverviewHeader movie={movie} />
          <div className="w-full sm:w-[95%] md:w-[90%] flex flex-col lg:flex-row justify-center px-4 sm:px-6 md:px-0 gap-6 lg:gap-8">
            <div className="w-full lg:w-[70%]">
              <OverviewDetail movie={movieOverview} />
            </div>
            {/* Detail film */}
            <div className="w-full lg:w-[30%]">
              <RightBar />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Overview;

import React, { useEffect } from 'react';
import Header from '@/components/header/Header';
import DetailFilmLeft from '@/components/DetailFilmLeft';
import RightBar from '@/components/SideBar';
import Footer from '@/components/footer/Footer';
import { IDetailFilm } from '@/interface/ListFilm';
import { apiDetailFilm } from '@/apis/apiDetailFilm';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

const DetailFilm: React.FC = () => {
  const { idFilm } = useParams();
  const navigate = useNavigate();
  const idFilmNumber = idFilm ? parseInt(idFilm, 10) : undefined;
  const idF: number | undefined = idFilmNumber;
  const [movie, setMovie] = React.useState<IDetailFilm>({} as IDetailFilm);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (idF) {
      apiDetailFilm({ idF, setMovie, setIsLoading, setError });
    } else {
      setError('ID phim không hợp lệ');
      setIsLoading(false);
    }
  }, [idF]);

  const handleRetry = () => {
    if (idF) {
      apiDetailFilm({ idF, setMovie, setIsLoading, setError });
    }
  };

  return (
    <div className="flex w-full bg-black flex-col justify-center items-center min-h-screen">
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
        <div className="w-full sm:w-[95%] md:w-[90%] flex flex-col lg:flex-row justify-center mt-16 sm:mt-20 px-4 sm:px-6 md:px-0 gap-6 lg:gap-8">
          <div className="w-full lg:w-[70%]">
            <DetailFilmLeft movie={movie} />
          </div>
          {/* Detail film */}
          <div className="w-full lg:w-[30%]">
            <RightBar />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DetailFilm;

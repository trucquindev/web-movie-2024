import React from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import RightBar from '@/components/SideBar';
import OverviewDetail from '@/components/overview/OverviewDetail';
import { useParams } from 'react-router-dom';
import { apiOverview } from '@/apis/apiOverview';
import { IOverview } from '@/interface/ListFilm';
import OverviewHeader from '@/components/overview/overivew-header';
const Overview: React.FC = () => {
  const { idFilm } = useParams();
  const idFilmNumber = idFilm ? parseInt(idFilm, 10) : undefined;
  const idF: number | undefined = idFilmNumber;
  const [movieOverview, setMovieOverview] = React.useState<IOverview>(
    {} as IOverview
  );
  apiOverview({ idF, setMovie: setMovieOverview });
  console.log('🚀 ~ Overview ~ movieOverview:', movieOverview);

  const movie = {
    id: 1,
    title: 'The Ugly',
    vietnameseTitle: movieOverview.title,
    image: `${'https://image.tmdb.org/t/p/w500'}${movieOverview.poster_path}`,
    rating: 7.1,
    ageRating: 'T16',
    year: 2025,
    duration: '1h 42m',
    genres: ['Chính Kịch', 'Chiếu Rạp', 'Gay Cấn', 'Bí Ẩn', 'Tâm Lý'],
    description:
      'Im Dong-hwan, chàng trai chưa từng biết mặt mẹ mình, bằng hoàng khi cảnh sát thông báo đã tìm thấy hai cót của bà – người mất tích suốt 40 năm – với nghi ngờ...',
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 w-screen">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Overview;

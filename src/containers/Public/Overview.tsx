import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RightBar from '@/components/SideBar';
import OverviewDetail from '@/components/OverviewDetail';
import { useParams } from 'react-router-dom';
import { apiOverview } from '@/apis/apiOverview';
import { IOverview } from '@/interface/ListFilm';
interface Props {
  id: number | undefined;
}
const Overview: React.FC<Props> = ({ id }) => {
  const { idFilm } = useParams();
  const idFilmNumber = idFilm ? parseInt(idFilm, 10) : undefined;
  const idF: number | undefined = id || idFilmNumber;
  const [movieOverview, setMovieOverview] = React.useState<IOverview>(
    {} as IOverview
  );
  apiOverview({ idF, setMovie: setMovieOverview });
  return (
    <div className="flex w-full bg-black flex-col justify-center items-center">
      <Header />
      <div className="w-[90%]  flex justify-center">
        <div className="w-[70%]">
          <OverviewDetail movie={movieOverview} />
        </div>
        {/* Detail film */}
        <div className="w-[30%]">
          <RightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;

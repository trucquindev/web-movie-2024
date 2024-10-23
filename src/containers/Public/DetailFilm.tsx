import React from 'react';
import Header from '@/components/Header';
import DetailFilmLeft from '@/components/DetailFilmLeft';
import RightBar from '@/components/SideBar';
import Footer from '@/components/Footer';
import { IDetailFilm } from '@/interface/ListFilm';
import { apiDetailFilm } from '@/apis/apiDetailFilm';
import { useParams } from 'react-router-dom';
interface Props {
  id: number | undefined;
}
const DetailFilm: React.FC<Props> = ({ id }) => {
  const { idFilm } = useParams();
  const idFilmNumber = idFilm ? parseInt(idFilm, 10) : undefined;
  const idF: number | undefined = id || idFilmNumber;
  const [movie, setMovie] = React.useState<IDetailFilm>({} as IDetailFilm);
  apiDetailFilm({ idF, setMovie });
  return (
    <div className="flex w-full bg-black flex-col justify-center items-center">
      <Header />
      <div className="w-[90%]  flex justify-center">
        <div className="w-[70%]">
          <DetailFilmLeft movie={movie} />
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

export default DetailFilm;

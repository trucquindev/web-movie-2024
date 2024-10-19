import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PolularFim from '../../components/ListPopular';
import ListTopRate from '../../components/ListTopRate';
interface Props {
  setId?: React.Dispatch<React.SetStateAction<number | undefined>>;
}
import Footer from '@/components/Footer';
const Home: React.FC<Props> = ({ setId }) => {
  return (
    <div className="bg-black pb-10">
      <Header />
      <Banner />
      <PolularFim setId={setId} />
      <ListTopRate />
      <div className="w-full flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

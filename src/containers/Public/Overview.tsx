import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RightBar from '@/components/SideBar';
import OverviewDetail from '@/components/OverviewDetail';
const Overview: React.FC = () => {
  return (
    <div className="flex w-full bg-black flex-col justify-center items-center">
      <Header />
      <div className="w-[90%]  flex justify-center">
        <div className="w-[70%]">
          <OverviewDetail />
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

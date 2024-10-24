import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const DMCA: React.FC = () => {
  return (
    <div className="flex w-full h-screen bg-black flex-col items-center">
      <Header />
      <div className="w-[60%] bg-slate-800 h-full flex flex-col p-10 justify-center gap-6">
        <h1 className="text-gray-400 font-bold">Bản quyền</h1>
        <div>
          <h6 className="text-gray-400 font-semibold">
            1. Trách nhiệm nội dung
          </h6>
          <p className="text-gray-500">
            Chúng tôi không lưu trữ và upload phim lên hệ thống, không có ngoại
            lệ cho bất cứ danh mục nào.
          </p>
        </div>
        <div>
          <h6 className="text-gray-400 font-semibold">2. Bản quyền</h6>
          <p className="text-gray-500">
            Phimhay sẽ không chịu trách nhiệm về các bản quyền của nội dung được
            chia sẻ và phát qua link như Youtube, Dailymotion, Ok.ru, Abyss…,
            nếu có bất cứ vi phạm nào về bản quyền mà bạn là người sở hữu bản
            quyền đó, hãy liên hệ ngay với chúng tôi qua email. Sau khi xác minh
            tính xác thực của thông tin mà bạn cung cấp, chúng tôi sẽ gỡ bỏ nội
            dung vi phạm khỏi website trong vòng 24h.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DMCA;

import { Routes, Route } from 'react-router-dom';
import Home from './containers/Public/Home';
import DetailFilm from './containers/Public/DetailFilm';
import Overview from './containers/Public/Overview';
import NotFound from './containers/Public/NotFound';
import { path } from './untils/constrains/path';
import { useAuth } from './context/AuthContext';
import AuthModal from './components/auth/ModalAuth';

function App() {
  const { showAuthModal, setShowAuthModal } = useAuth();

  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Routes */}
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.MOVIE} element={<DetailFilm />} />
        <Route path={path.OVERVIEW_ID} element={<Overview />} />
        <Route path={path.NOT_FOUND} element={<NotFound />} />
      </Routes>

      {/* Auth Modal Global */}
      {showAuthModal && <AuthModal setShowAuthModal={setShowAuthModal} />}
    </div>
  );
}

export default App;

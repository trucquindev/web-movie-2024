import { Routes, Route } from 'react-router-dom';
import Home from './containers/Public/Home';
import SearchFilm from './containers/Public/SearchFilm';
import { path } from './untils/constrains/path';
import DetailFilm from './containers/Public/DetailFilm';
import Overview from './containers/Public/Overview';
import NotFound from './containers/Public/NotFound';
import DMCA from './containers/Public/DMCA';
function App() {
  return (
    <div className="w-screen">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.SEARCH} element={<SearchFilm />} />
        <Route path={path.MOVIE} element={<DetailFilm />} />
        <Route path={path.OVERVIEW_ID} element={<Overview />} />
        <Route path={path.NOT_FOUND} element={<NotFound />} />
        <Route path={path.DMCA} element={<DMCA />} />
      </Routes>
    </div>
  );
}

export default App;

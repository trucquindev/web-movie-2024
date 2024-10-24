import { Routes, Route } from 'react-router-dom';
import Home from './containers/Public/Home';
import SearchFilm from './containers/Public/SearchFilm';
import { path } from './untils/constrains/path';
import DetailFilm from './containers/Public/DetailFilm';
import Overview from './containers/Public/Overview';
import NotFound from './containers/Public/NotFound';
import { useState } from 'react';
function App() {
  const [id, setId] = useState<number>();
  return (
    <div className="w-screen">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.SEARCH} element={<SearchFilm />} />
        <Route path={path.MOVIE} element={<DetailFilm id={id} />} />
        <Route path={path.OVERVIEW_ID} element={<Overview id={id} />} />
        <Route path={path.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

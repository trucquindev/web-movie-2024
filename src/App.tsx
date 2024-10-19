import { Routes, Route } from 'react-router-dom';
import Home from './containers/Public/Home';
import SearchFilm from './containers/Public/SearchFilm';
import { path } from './untils/constrains/path';
import DetailFilm from './containers/Public/DetailFilm';
import { useState } from 'react';
function App() {
  const [id, setId] = useState<number>();
  return (
    <div className="w-screen">
      <Routes>
        <Route path={path.HOME} element={<Home setId={setId} />} />
        <Route path={path.SEARCH} element={<SearchFilm />} />
        <Route path={path.MOVIE} element={<DetailFilm id={id} />} />
      </Routes>
    </div>
  );
}

export default App;

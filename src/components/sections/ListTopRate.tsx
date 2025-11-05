import React, { useEffect, useState } from 'react';
import { ListFilm } from '@/interface/ListFilm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { path } from '@/untils/constrains/path';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};
interface Props {
  setId?: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const ListTopRate: React.FC<Props> = ({ setId }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<ListFilm[]>([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url =
        'https://api.themoviedb.org/3/movie/top_rated?language=vi-VN&page=1';
      const response = await fetch(url, options);
      const data = await response.json();
      data.results.forEach((p: any) => {
        const { id, title, original_title, poster_path } = p;
        setMovies((prevMovies) => [
          ...prevMovies,
          { id, title, original_title, poster_path },
        ]);
      });
    };
    fetchAPI();
  }, []);
  return (
    <div className="text-white p-10 mb-4">
      <h2 className="uppercase text-2xl font-bold mb-4">
        Phim đang thịnh hành
      </h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                // handleTrailer({ id: movie.id, setModelIsOpen, setKeyTrailer });
                navigate(`${path.OVERVIEW}${movie.id}`);
                setId && setId(movie.id);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              className="w-[200px] h-72 relative transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 hover:opacity-0" />
              <img
                src={`${'https://image.tmdb.org/t/p/w500'}${movie.poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="w-full flex justify-center absolute bottom-2 ">
                <p className="uppercase text-md">
                  {movie.title || movie.original_title}
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ListTopRate;

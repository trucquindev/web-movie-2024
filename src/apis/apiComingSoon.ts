import { useEffect } from 'react';
import { IComming } from '@/interface/ListFilm';
interface Props {
  setMoviesComing: React.Dispatch<React.SetStateAction<IComming[]>>;
}
export const apiComingSoon = async ({ setMoviesComing }: Props) => {
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
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
      const response = await fetch(url, options);
      const data = await response.json();
      data.results.forEach((p: any) => {
        const { title, poster_path } = p;
        setMoviesComing((prevMovies) => [
          ...prevMovies,
          { title, poster_path },
        ]);
      });
    };
    fetchAPI();
  }, []);
};

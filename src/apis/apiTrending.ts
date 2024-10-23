import { useEffect } from 'react';
import { ITrending } from '@/interface/ListFilm';
interface Props {
  setMoviesTrending: React.Dispatch<React.SetStateAction<ITrending[]>>;
}
export const apiTrending = async ({ setMoviesTrending }: Props) => {
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
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      const response = await fetch(url, options);
      const data = await response.json();
      data.results.forEach((p: any) => {
        const { original_title, popularity } = p;
        setMoviesTrending((prevMovies) => [
          ...prevMovies,
          { original_title, popularity },
        ]);
      });
    };
    fetchAPI();
  }, []);
};

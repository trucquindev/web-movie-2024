import { useEffect } from 'react';
import { ITopRate } from '@/interface/ListFilm';
interface Props {
  setMoviesTopRate: React.Dispatch<React.SetStateAction<ITopRate[]>>;
}
export const apiTopRate = async ({ setMoviesTopRate }: Props) => {
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
        const { original_title, poster_path, release_date, id } = p;
        setMoviesTopRate((prevMovies) => [
          ...prevMovies,
          { original_title, poster_path, release_date, id },
        ]);
      });
    };
    fetchAPI();
  }, []);
};

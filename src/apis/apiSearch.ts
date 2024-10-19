import { ListFilm } from '@/interface/ListFilm';
import { useEffect } from 'react';
interface Props {
  title: string;
  setMovies: React.Dispatch<React.SetStateAction<ListFilm[]>>;
}
export const apiSearch = async ({ title, setMovies }: Props) => {
  useEffect(() => {
    setMovies([]);
    const fetchAPI = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
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
  }, [title]);
};

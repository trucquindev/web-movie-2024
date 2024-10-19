import { IDetailFilm } from '@/interface/ListFilm';
import { useEffect } from 'react';
interface Props {
  idF: number | undefined;
  setMovie: React.Dispatch<React.SetStateAction<IDetailFilm>>;
}
export const apiDetailFilm = async ({ idF, setMovie }: Props) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url = `https://api.themoviedb.org/3/movie/${idF}?language=en-US`;
      const response = await fetch(url, options);
      const data: any = await response.json();
      setMovie({
        id: idF,
        title: data.title,
        original_title: data.original_title,
        overview: data.overview,
        tagline: data.tagline,
      });
    };
    fetchAPI();
  }, [idF]);
};

import { IOverview } from '@/interface/ListFilm';
import { useEffect } from 'react';
interface Props {
  idF: number | undefined;
  setMovie: React.Dispatch<React.SetStateAction<IOverview>>;
}
export const apiOverview = async ({ idF, setMovie }: Props) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url = `https://api.themoviedb.org/3/movie/${idF}?language=vi-VN`;
      const response = await fetch(url, options);
      const data: any = await response.json();
      setMovie({
        id: idF,
        poster_path: data.poster_path,
        title: data.title,
        production_companies: data.production_companies[0].name,
        original_title: data.original_title,
        release_date: data.release_date,
        status: data.status,
        genres: data.genres.map((genre: { name: string }) => ({
          name: genre.name,
        })),
        spoken_languages: data.spoken_languages.name,
        overview: data.overview,
      });
    };
    fetchAPI();
  }, [idF]);
};

import { ListFilm } from '@/interface/ListFilm';

interface Props {
  title: string;
  setMovies: React.Dispatch<React.SetStateAction<ListFilm[]>>;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const apiSearch = async ({
  title,
  setMovies,
  setIsLoading,
  setError,
}: Props) => {
  if (!title || title.trim().length === 0) {
    setMovies([]);
    return;
  }

  setIsLoading?.(true);
  setError?.(null);
  setMovies([]);

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    const encodedTitle = encodeURIComponent(title.trim());
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedTitle}&include_adult=false&language=vi-VN&page=1`;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Không thể tìm kiếm phim. Mã lỗi: ${response.status}`
      );
    }

    const data = await response.json();
    const movies: ListFilm[] =
      data.results?.map((p: any) => ({
        id: p.id,
        title: p.title || p.original_title || 'Không có tiêu đề',
        original_title: p.original_title || '',
        poster_path: p.poster_path || '',
      })) || [];

    setMovies(movies);
  } catch (error: any) {
    console.error('Error searching movies:', error);
    setError?.(
      error.message ||
        'Đã xảy ra lỗi khi tìm kiếm. Vui lòng thử lại sau.'
    );
    setMovies([]);
  } finally {
    setIsLoading?.(false);
  }
};

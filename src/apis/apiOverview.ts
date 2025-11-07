import { IOverview } from '@/interface/ListFilm';

interface Props {
  idF: number | undefined;
  setMovie: React.Dispatch<React.SetStateAction<IOverview>>;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const apiOverview = async ({
  idF,
  setMovie,
  setIsLoading,
  setError,
}: Props) => {
  if (!idF) {
    setError?.('ID phim không hợp lệ');
    return;
  }

  setIsLoading?.(true);
  setError?.(null);

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    const url = `https://api.themoviedb.org/3/movie/${idF}?language=vi-VN`;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Không thể tải thông tin phim. Mã lỗi: ${response.status}`
      );
    }

    const data: any = await response.json();
    setMovie({
      id: idF,
      poster_path: data.poster_path || '',
      title: data.title || 'Không có tiêu đề',
      production_companies:
        data.production_companies?.[0]?.name || 'Không xác định',
      original_title: data.original_title || '',
      release_date: data.release_date || '',
      status: data.status || 'Unknown',
      genres:
        data.genres?.map((genre: { name: string }) => ({
          name: genre.name,
        })) || [],
      spoken_languages:
        data.spoken_languages?.[0]?.name || 'Không xác định',
      overview: data.overview || 'Không có mô tả',
    });
  } catch (error: any) {
    console.error('Error fetching movie overview:', error);
    setError?.(
      error.message ||
        'Đã xảy ra lỗi khi tải thông tin phim. Vui lòng thử lại sau.'
    );
  } finally {
    setIsLoading?.(false);
  }
};

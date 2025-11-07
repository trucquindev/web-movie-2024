import React, { useEffect, useState } from 'react';
import { ListFilm } from '@/interface/ListFilm';
import CategoryMovieSection from './CategoryMovieSection';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  setId?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PopularFilm: React.FC<Props> = ({ setId }) => {
  const [popularMovies, setPopularMovies] = useState<ListFilm[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<ListFilm[]>([]);
  const [isLoadingPopular, setIsLoadingPopular] = useState(true);
  const [isLoadingTopRated, setIsLoadingTopRated] = useState(true);
  const [errorPopular, setErrorPopular] = useState<string | null>(null);
  const [errorTopRated, setErrorTopRated] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoadingPopular(true);
      setErrorPopular(null);
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url =
          'https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1';
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(
            `Không thể tải phim phổ biến. Mã lỗi: ${response.status}`
          );
        }

        const data = await response.json();
        setPopularMovies(data.results || []);
      } catch (error: any) {
        console.error('Error fetching popular movies:', error);
        setErrorPopular(
          error.message || 'Đã xảy ra lỗi khi tải phim phổ biến.'
        );
      } finally {
        setIsLoadingPopular(false);
      }
    };

    const fetchTopRatedMovies = async () => {
      setIsLoadingTopRated(true);
      setErrorTopRated(null);
      try {
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

        if (!response.ok) {
          throw new Error(
            `Không thể tải phim đánh giá cao. Mã lỗi: ${response.status}`
          );
        }

        const data = await response.json();
        setTopRatedMovies(data.results || []);
      } catch (error: any) {
        console.error('Error fetching top rated movies:', error);
        setErrorTopRated(
          error.message || 'Đã xảy ra lỗi khi tải phim đánh giá cao.'
        );
      } finally {
        setIsLoadingTopRated(false);
      }
    };

    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  const renderSection = (
    title: string,
    titleColor: string,
    movies: ListFilm[],
    isLoading: boolean,
    error: string | null,
    viewAllLink: string,
    onRetry: () => void
  ) => {
    if (isLoading) {
      return (
        <div className="space-y-4 sm:space-y-6">
          <div className="px-2 sm:px-4">
            <div className="h-8 sm:h-10 bg-slate-700/50 rounded-lg w-48 animate-pulse"></div>
          </div>
          <div className="flex gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
              >
                <div className="h-52 sm:h-60 md:h-64 lg:h-72 bg-slate-700/50 rounded-xl sm:rounded-2xl animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="space-y-4 sm:space-y-6">
          <div className="px-2 sm:px-4">
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${titleColor}`}
            >
              {title}
            </h2>
          </div>
          <div className="px-2 sm:px-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
              <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <p className="text-red-400 text-sm mb-4">{error}</p>
              <button
                onClick={onRetry}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold rounded-lg transition-colors flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                Thử lại
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (movies.length === 0) {
      return (
        <div className="space-y-4 sm:space-y-6">
          <div className="px-2 sm:px-4">
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${titleColor}`}
            >
              {title}
            </h2>
          </div>
          <div className="px-2 sm:px-4">
            <div className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-8 text-center">
              <p className="text-slate-400">Không có phim nào để hiển thị.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <CategoryMovieSection
        title={title}
        titleColor={titleColor}
        movies={movies}
        setId={setId}
        viewAllLink={viewAllLink}
      />
    );
  };

  return (
    <div className="w-full bg-[#282b3a] pt-10 sm:pt-12 md:pt-12 lg:pt-20 pb-8 sm:pb-10 md:pb-12">
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {renderSection(
          'Phim Phổ Biến',
          'text-purple-400',
          popularMovies,
          isLoadingPopular,
          errorPopular,
          '/popular',
          () => {
            setIsLoadingPopular(true);
            setErrorPopular(null);
            fetch(
              'https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1',
              {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
              }
            )
              .then((res) => {
                if (!res.ok) throw new Error(`Mã lỗi: ${res.status}`);
                return res.json();
              })
              .then((data) => {
                setPopularMovies(data.results || []);
                setIsLoadingPopular(false);
              })
              .catch((error) => {
                setErrorPopular(error.message);
                setIsLoadingPopular(false);
              });
          }
        )}

        {renderSection(
          'Phim Đánh Giá Cao',
          'text-yellow-400',
          topRatedMovies,
          isLoadingTopRated,
          errorTopRated,
          '/top-rated',
          () => {
            setIsLoadingTopRated(true);
            setErrorTopRated(null);
            fetch(
              'https://api.themoviedb.org/3/movie/top_rated?language=vi-VN&page=1',
              {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
              }
            )
              .then((res) => {
                if (!res.ok) throw new Error(`Mã lỗi: ${res.status}`);
                return res.json();
              })
              .then((data) => {
                setTopRatedMovies(data.results || []);
                setIsLoadingTopRated(false);
              })
              .catch((error) => {
                setErrorTopRated(error.message);
                setIsLoadingTopRated(false);
              });
          }
        )}
      </div>
    </div>
  );
};

export default PopularFilm;

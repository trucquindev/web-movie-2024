import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2, Film, AlertCircle } from 'lucide-react';
import { apiSearch } from '@/apis/apiSearch';
import { ListFilm } from '@/interface/ListFilm';
import { useNavigate } from 'react-router-dom';
import { path } from '@/untils/constrains/path';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<ListFilm[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        apiSearch({
          title: searchQuery,
          setMovies: setResults,
          setIsLoading,
          setError,
        });
        setShowResults(true);
        setSelectedIndex(-1);
      } else {
        setResults([]);
        setShowResults(false);
        setIsLoading(false);
      }
    }, 300); // Debounce 300ms

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSelectMovie = (movie: ListFilm) => {
    navigate(`/${path.OVERVIEW}${movie.id}`);
    setSearchQuery('');
    setResults([]);
    setShowResults(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelectMovie(results[selectedIndex]);
        } else if (results.length > 0) {
          handleSelectMovie(results[0]);
        }
        break;
      case 'Escape':
        setShowResults(false);
        inputRef.current?.blur();
        break;
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setResults([]);
    setShowResults(false);
    setError(null);
    inputRef.current?.focus();
  };

  return (
    <div className="flex-1 max-w-md w-full" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-500 z-10" />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0 || searchQuery.length >= 2) {
              setShowResults(true);
            }
          }}
          placeholder="Tìm kiếm phim, diễn viên"
          className="w-full pl-9 md:pl-10 pr-10 md:pr-12 py-1.5 md:py-2 bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/50 rounded-xl md:rounded-2xl text-sm md:text-base transition-colors"
        />
        <AnimatePresence>
          {(isLoading || searchQuery) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-amber-400 animate-spin" />
              ) : (
                searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700/50 rounded-full"
                    aria-label="Xóa tìm kiếm"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Results Dropdown */}
        <AnimatePresence>
          {showResults && (results.length > 0 || error || isLoading) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50"
            >
              {isLoading ? (
                <div className="p-4 text-center">
                  <Loader2 className="w-6 h-6 text-amber-400 animate-spin mx-auto" />
                  <p className="text-slate-400 text-sm mt-2">Đang tìm kiếm...</p>
                </div>
              ) : error ? (
                <div className="p-4 text-center">
                  <AlertCircle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              ) : results.length > 0 ? (
                <div className="py-2">
                  {results.map((movie, index) => (
                    <button
                      key={movie.id}
                      onClick={() => handleSelectMovie(movie)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-700/50 transition-colors text-left ${
                        selectedIndex === index ? 'bg-slate-700/50' : ''
                      }`}
                    >
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                          alt={movie.title}
                          className="w-12 h-16 object-cover rounded-md flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="92" height="138"%3E%3Crect fill="%23334155" width="92" height="138"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-size="24"%3E%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="w-12 h-16 bg-slate-700 rounded-md flex items-center justify-center flex-shrink-0">
                          <Film className="w-6 h-6 text-slate-500" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm truncate">
                          {movie.title}
                        </p>
                        {movie.original_title &&
                          movie.original_title !== movie.title && (
                            <p className="text-slate-400 text-xs truncate">
                              {movie.original_title}
                            </p>
                          )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center">
                  <p className="text-slate-400 text-sm">
                    Không tìm thấy kết quả nào
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;

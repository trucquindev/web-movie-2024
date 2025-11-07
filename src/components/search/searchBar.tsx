import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex-1 max-w-md w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Tìm kiếm phim, diễn viên"
          className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/50 rounded-xl md:rounded-2xl text-sm md:text-base"
        />
      </div>
    </div>
  );
};

export default SearchBar;

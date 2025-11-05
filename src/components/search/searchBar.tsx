import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex-1 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Tìm kiếm phim, diễn viên"
          className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/50 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default SearchBar;

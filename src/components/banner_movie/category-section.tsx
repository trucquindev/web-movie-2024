export default function CategorySection() {
  const categories = [
    {
      name: 'Marvel',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      icon: '🦸',
    },
    {
      name: '4K',
      color: 'bg-gradient-to-br from-violet-600 to-violet-800',
      icon: '📺',
    },
    {
      name: 'Sitcom',
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
      icon: '😄',
    },
    {
      name: 'Lồng Tiếng Cực Mạnh',
      color: 'bg-gradient-to-br from-purple-600 to-pink-800',
      icon: '🎤',
    },
    {
      name: 'Xuyên Không',
      color: 'bg-gradient-to-br from-orange-600 to-red-800',
      icon: '⏰',
    },
    {
      name: 'Cổ Trang',
      color: 'bg-gradient-to-br from-rose-600 to-red-800',
      icon: '👑',
    },
  ];

  return (
    <section className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
          Bạn đang quan tâm?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`${category.color} rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-white hover:shadow-xl hover:shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer group`}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-bold text-xs sm:text-sm md:text-base text-pretty">
                {category.name}
              </h3>
              <p className="text-xs mt-2 sm:mt-3 opacity-80 group-hover:opacity-100 hidden sm:block">
                Xem chủ đề &gt;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


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
    <section className="absolute top-[590px] left-0 right-0 px-6 md:px-10 py-12 bg-inherit">
      <h2 className="text-3xl font-bold text-white mb-8">Bạn đang quan tâm?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${category.color} rounded-3xl p-6 text-white hover:shadow-xl transition-all hover:scale-105 cursor-pointer group`}
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="font-bold text-sm md:text-base text-pretty">
              {category.name}
            </h3>
            <p className="text-xs mt-3 opacity-80 group-hover:opacity-100">
              Xem chủ đề &gt;
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

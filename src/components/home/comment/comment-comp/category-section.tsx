export default function CategorySection() {
  const categories = [
    { name: 'Chính Kích', color: 'bg-red-600' },
    { name: 'Tình Cảm', color: 'bg-blue-600' },
    { name: 'Hài', color: 'bg-purple-600' },
    { name: 'Lắng Man', color: 'bg-green-600' },
    { name: 'Tâm Lý', color: 'bg-orange-600' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="flex items-center gap-2 text-lg font-bold mb-6">
        <span>📁</span>
        THỂ LOẠI HOT
      </h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${category.color} hover:opacity-80 transition text-white font-semibold py-2 px-4 rounded-full text-sm inline-block`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

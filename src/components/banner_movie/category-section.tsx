import { categoriesData } from "@/data/movies";

export default function CategorySection() {
 const categories = categoriesData;

  return (
    <section className="absolute top-[620px] left-0 right-0 px-6 md:px-10 py-12 bg-inherit">
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

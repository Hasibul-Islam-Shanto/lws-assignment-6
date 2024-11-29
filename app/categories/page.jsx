import categories from "@/data/categories";
import Category from "../components/categories/Category";

export default function Categories() {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}

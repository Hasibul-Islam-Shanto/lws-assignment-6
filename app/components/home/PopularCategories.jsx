import { combinationOfCategoriesAndRecipes } from "@/data/combineData";
import Image from "next/image";
import Link from "next/link";

export default function PopularCategories() {
  return (
    <>
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/categories" className="text-orange-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {combinationOfCategoriesAndRecipes
            .sort((a, b) => b.recipesCount - a.recipesCount)
            .slice(0, 6)
            .map((item) => (
              <Link
                href={`/categories/${item.id}`}
                key={item.id}
                className="cursor-pointer text-center group"
              >
                <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="transition-transform duration-300 group-hover:scale-105">
                  {item.name}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

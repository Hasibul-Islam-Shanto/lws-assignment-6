import Image from "next/image";
import recipes from "@/data/recipes";
import { categoryWithRecipes } from "@/data/combineData";
import Link from "next/link";

export default function HandPicked() {
  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
          Hand-Picked Collections
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {categoryWithRecipes.slice(6, 8).map((item) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
            >
              <Image
                src={`/thumbs/${item.thumbnail}`}
                height={500}
                width={500}
                alt={item.title}
                className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <Link
                  href={`/${item.category_id}/${item.id}`}
                  className="text-orange-300 hover:underline"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

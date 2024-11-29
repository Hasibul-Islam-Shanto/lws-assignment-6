import Image from "next/image";
import { categoryWithRecipes } from "@/data/combineData";
import Link from "next/link";

export default function LatestRecipes() {
  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {categoryWithRecipes
            .sort(
              (a, b) => new Date(b.published_date) - new Date(a.published_date)
            )
            .slice(0, 4)
            .map((item) => (
              <Link href={`/${item.category_id}/${item.id}`} key={item.title}>
                <Image
                  src={`/thumbs/${item.thumbnail}`}
                  height={500}
                  width={500}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.name}</p>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

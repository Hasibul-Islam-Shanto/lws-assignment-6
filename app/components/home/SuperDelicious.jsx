import recipes from "@/data/recipes";
import StarRating from "../ui/StarRating";
import Image from "next/image";

export default function SuperDelicious() {
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {recipes &&
          recipes
            .sort((a, b) => b?.rating?.rating_count - a?.rating?.rating_count)
            .slice(0, 3)
            .map((item) => (
              <div key={item.title}>
                <Image
                  src={`/thumbs/${item.thumbnail}`}
                  height={500}
                  width={500}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  <StarRating
                    rating={item.rating.average_rating}
                    maxRating={5}
                  />
                </div>
                <p className="text-gray-600">{item.cooking_time}</p>
              </div>
            ))}
      </div>
    </section>
  );
}

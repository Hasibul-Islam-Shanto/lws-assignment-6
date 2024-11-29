import Image from "next/image";
import recipes from "@/data/recipes";
import Link from "next/link";

export default function Hero() {
  const singleRecipeForDisplay = recipes.find((recipe) => recipe.id === 2);
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/thumbs/${singleRecipeForDisplay?.thumbnail}`}
            height={500}
            width={500}
            alt="Mighty Super Cheesecake"
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {singleRecipeForDisplay.title}
          </h1>
          <p className="text-gray-600 mb-4">
            {singleRecipeForDisplay.description}
          </p>
          <Link
            href={`/${singleRecipeForDisplay.category_id}/${singleRecipeForDisplay.id}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}

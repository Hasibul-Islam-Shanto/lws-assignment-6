import RecipesCard from "@/app/components/categories/RecipesCard";
import { combinationOfCategoriesAndRecipes } from "@/data/combineData";

export default function Category({ params }) {
  const { id } = params;
  const categoryDetails = combinationOfCategoriesAndRecipes.find(
    (item) => item.id === id
  );
  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {categoryDetails.name}
              <span className="text-gray-500 text-2xl font-normal">
                ({categoryDetails.recipesCount})
              </span>
            </h1>
            <p className="text-gray-600">{categoryDetails.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryDetails.recipes.map((recipe) => (
            <RecipesCard
              key={recipe.id}
              recipe={recipe}
              categoryDetails={categoryDetails}
            />
          ))}
        </div>
      </main>
    </>
  );
}

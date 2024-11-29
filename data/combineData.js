import categories from "./categories";
import recipes from "./recipes";

const randomNumber = () => Math.floor(Math.random() * 100000 + 1);

const recipesCount = recipes.reduce((acc, curr) => {
  acc[curr.category_id] = (acc[curr.category_id] || 0) + 1;
  return acc;
}, {});

export const combinationOfCategoriesAndRecipes = categories.map((category) => {
  const relatedRecipes = recipes.filter((r) => {
    return (
      r.category_id === category.id && {
        ...r,
        rcipeId: randomNumber(),
      }
    );
  });
  return {
    recipesCount: recipesCount[category.id],
    ...category,
    recipes: relatedRecipes,
  };
});

export const categoryWithRecipes = categories.map((category) => {
  const recipe = recipes.find((r) => r.category_id === category.id);
  return {
    ...category,
    ...recipe,
  };
});

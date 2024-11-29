import Link from "next/link";
import React from "react";

export default function RecipesCard({ recipe, categoryDetails }) {
  return (
    <>
      <Link
        href={`/${categoryDetails.id}/${recipe.id}`}
        className="bg-white rounded-lg overflow-hidden shadow-md"
      >
        <img
          src={`/thumbs/${recipe.thumbnail}`}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
        </div>
      </Link>
    </>
  );
}

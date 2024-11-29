import React from "react";
import Category from "../components/categories/Category";
import { categoryWithRecipes } from "@/data/combineData";
import Link from "next/link";
import Image from "next/image";

export default function LatestRecipies() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <h1 className="text-5xl font-bold mb-12">Latest Recipes</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {categoryWithRecipes
            .sort(
              (a, b) => new Date(b.published_date) - new Date(a.published_date)
            )
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
      </main>
    </>
  );
}

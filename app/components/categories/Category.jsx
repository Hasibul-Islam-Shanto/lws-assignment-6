import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ category }) {
  return (
    <>
      <Link
        href={`/categories/${category.id}`}
        key={category.id}
        className="text-center"
      >
        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <Image
            src={`${category.image}`}
            height={50}
            width={50}
            alt={category.name}
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-semibold">{category.name}</h2>
      </Link>
    </>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ title, link }) {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={link}
        className={`hover:text-orange-500 ${
          pathName === link && "text-orange-500"
        }`}
      >
        {title}
      </Link>
    </>
  );
}

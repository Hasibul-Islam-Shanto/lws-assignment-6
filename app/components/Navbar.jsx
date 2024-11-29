import logo from "../../assets/lws-kitchen.png";
import Image from "next/image";
import Link from "next/link";
import NavbarLink from "./ui/NavbarLink";

export default function Navbar() {
  return (
    <div className="bg-white w-full flex justify-center items-center">
      <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            <Image src={logo} height={100} width={100} alt="logo" />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavbarLink title="Home" link="/" />
            </li>
            <li>
              <NavbarLink title="Categories" link="/categories" />
            </li>
            <li>
              <NavbarLink title="Latest Recipes" link="/latest-recipes" />
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

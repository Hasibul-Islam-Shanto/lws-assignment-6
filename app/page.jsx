import HandPicked from "./components/home/HandPicked";
import Hero from "./components/home/Hero";
import JoinWithEmail from "./components/home/JoinWithEmail";
import LatestRecipes from "./components/home/LatestRecipes";
import PopularCategories from "./components/home/PopularCategories";
import SuperDelicious from "./components/home/SuperDelicious";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 mt-[100px]">
        <Hero />
        <SuperDelicious />
        <PopularCategories />
        <JoinWithEmail />
        <HandPicked />
        <LatestRecipes />
      </main>
    </>
  );
}

import Categories from "./Categories";
import Download from "./Download";
import Hero from "./Hero";
import ProductTab from "./ProductTab";
import Restaurants from "./Restaurants";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductTab />
      <Categories />
      <Restaurants />
      <Download />
    </>
  );
}

import { Link } from "react-router-dom";

const restaurants = [
  {
    title: "McDonald’s London ",
    image: "/restaurants/res-1.png",
  },
  {
    title: "Papa Johns",
    image: "/restaurants/res-2.png",
  },
  {
    title: "KFC West London",
    image: "/restaurants/res-3.png",
  },
  {
    title: "Texas Chicken",
    image: "/restaurants/res-4.png",
  },
  {
    title: "Burger King",
    image: "/restaurants/res-5.png",
  },
  {
    title: "Shaurma 1",
    image: "/restaurants/res-6.png",
  },
];

export default function Restaurants() {
  return (
    <section className="max-w-[1200px] mx-auto py-5">
      <h2 className="text-2xl font-semibold">Popular Restaurants</h2>
      <div className="flex -mx-2 mt-5">
        {restaurants.map((item, index) => (
          <div key={index} className="px-2 w-[calc(100%/6)]">
            <div className="bg-[#F5F5F5] rounded-lg">
              <Link to={"#"}>
                <img src={item.image} alt="" />
                <div className="p-3 bg-(--primary-color) text-white rounded-b-lg text-center">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

const categories = [
  {
    title: "Burgers & Fast food",
    count: 21,
    image: "/categories/1.png",
  },
  {
    title: "Salads",
    count: 32,
    image: "/categories/2.png",
  },
  {
    title: "Pasta & Casuals",
    count: 4,
    image: "/categories/3.png",
  },
  {
    title: "Pizza",
    count: 32,
    image: "/categories/4.png",
  },
  {
    title: "Breakfast",
    count: 4,
    image: "/categories/5.png",
  },
  {
    title: "Soups",
    count: 32,
    image: "/categories/6.png",
  },
];
export default function Categories() {
  return (
    <section className="max-w-[1200px] mx-auto py-5">
      <h2 className="text-2xl font-semibold">Order.uk Popular Categories 🤩</h2>
      <div className="flex -mx-2 mt-5">
        {categories.map((category, index) => (
          <div key={index} className="px-2 w-[calc(100%/6)]">
            <div className="bg-[#F5F5F5] rounded-lg">
              <Link to={"#"}>
                <img src={category.image} alt="" />
                <div className="p-3">
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-(--primary-color) text-xs">
                    {category.count} Restaurants
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

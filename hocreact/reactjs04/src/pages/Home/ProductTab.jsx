import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
const tabList = [
  {
    value: "vegan",
    label: "Vegan",
    content: [
      {
        title: "Sản phẩm 1",
        category: "Chuyên mục 1",
        image: "/images/product-1.png",
        discount: "40%",
      },
      {
        title: "Sản phẩm 2",
        category: "Chuyên mục 2",
        image: "/images/product-2.png",
        discount: "20%",
      },
      {
        title: "Sản phẩm 3",
        category: "Chuyên mục 3",
        image: "/images/product-3.png",
        discount: "17%",
      },
    ],
  },
  {
    value: "sushi",
    label: "Sushi",
    content: [
      {
        title: "Sản phẩm 4",
        category: "Chuyên mục 4",
        image: "/images/product-1.png",
        discount: "40%",
      },
      {
        title: "Sản phẩm 5",
        category: "Chuyên mục 5",
        image: "/images/product-2.png",
        discount: "20%",
      },
      {
        title: "Sản phẩm 6",
        category: "Chuyên mục 6",
        image: "/images/product-3.png",
        discount: "17%",
      },
    ],
  },
  {
    value: "pizza",
    label: "Pizza & Fast food",
    content: [
      {
        title: "Sản phẩm 7",
        category: "Chuyên mục 7",
        image: "/images/product-1.png",
        discount: "40%",
      },
      {
        title: "Sản phẩm 8",
        category: "Chuyên mục 8",
        image: "/images/product-2.png",
        discount: "20%",
      },
      {
        title: "Sản phẩm 9",
        category: "Chuyên mục 9",
        image: "/images/product-3.png",
        discount: "17%",
      },
    ],
  },
];
export default function ProductTab() {
  return (
    <section className="max-w-[1200px] mx-auto py-5">
      <Tabs defaultValue={tabList[0].value}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">
            Up to -40% 🎊 Order.uk exclusive deals
          </h2>
          <TabsList className="bg-white">
            {tabList.map((tab, index) => (
              <TabsTrigger
                className="data-[state=active]:text-(--primary-color) data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-(--primary-color) data-[state=active]:rounded-full py-5 px-8"
                key={index}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {tabList.map((tab, index) => (
          <TabsContent value={tab.value} key={index}>
            <div className="flex mt-5 -mx-3">
              {tab.content.map((item, index) => (
                <div key={index} className="w-[calc(100%/3)]">
                  <div className="px-3">
                    <div className="relative">
                      <Link to={"/chi-tiet"}>
                        <img src={item.image} className="relative" />

                        <img
                          src="/images/product-overlay.png"
                          className="absolute inset-0"
                        />
                      </Link>
                      <div className="absolute bottom-4 left-3 text-white">
                        <h4 className="text-(--primary-color) font-medium text-sm">
                          {item.category}
                        </h4>
                        <h3 className="font-semibold text-md">{item.title}</h3>
                      </div>
                      <div className="bg-black text-white w-10 h-10 absolute top-0 right-5 flex items-center justify-center text-sm rounded-b-md">
                        {item.discount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

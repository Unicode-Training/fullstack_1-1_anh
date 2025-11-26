import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto bg-[#FBFBFB] border border-[#cdcccc] min-h-[450px] bg-[url(/images/banner.png)] bg-size-[auto_90%] bg-no-repeat bg-bottom-right flex items-center p-8 rounded-br-lg">
      <div className="w-[35%]">
        <p>Order Restaurant food, takeaway and groceries.</p>
        <h1 className="text-4xl font-semibold py-4 leading-[1.2]">
          Feast Your Senses, <br />
          <span className="text-(--primary-color)">Fast and Fresh</span>
        </h1>
        <p>Enter a postcode to see what we deliver</p>
        <form className="flex border border-[#ddd] my-3 rounded-full">
          <Input
            placeholder="Search..."
            className="border-r-0 focus-visible:ring-0 border-0 py-5.5 shadow-none"
          />
          <Button
            size={null}
            className="rounded-full px-10 bg-(--primary-color) cursor-pointer"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}

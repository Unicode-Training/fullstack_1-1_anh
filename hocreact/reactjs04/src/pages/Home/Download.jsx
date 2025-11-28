import { Link } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
export default function Download() {
  return (
    <section className="pb-5 pt-10 mx-auto max-w-[1200px]">
      <div className="flex bg-linear-to-b from-[#EEEEEE] to-[#E0E1DC]">
        <div className="w-[60%]">
          <img src="/images/download-img.png" className="-mt-10 relative" />
        </div>
        <div className="w-[40%] flex justify-center items-end flex-col mr-15">
          <h1 className="flex items-end font-bold text-[42px] text-[#03081F] leading-none font-[Poppins]">
            <img src="/images/logo.png" className="h-[49px]" />
            ing is more
          </h1>
          <div className="bg-black text-white my-3 py-5 px-10 rounded-full text-4xl w-[150%] text-right font-semibold">
            <span className="text-(--primary-color)">Personalised</span> &
            Instant
          </div>
          <p className="py-5 text-center w-full">
            Download the Order.uk app for faster ordering
          </p>
          <div className="flex w-full justify-center">
            <Link to={"#"}>
              <img src="/images/ios.png" className="h-[61px]" />
            </Link>
            <Link to={"#"}>
              <img src="/images/android.png" className="h-[61px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

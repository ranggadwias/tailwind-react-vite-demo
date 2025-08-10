import heroImage from "../../assets/image/hero-image.png";
import { BsCircleFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center bg-slate-100 px-12 md:px-20 py-16 md:gap-10">
        <div className="flex flex-col gap-5 flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Fresh Collection
            <br />
            Built for Streets
          </h1>
          <p className="text-xs lg:text-sm max-w-lg md:max-w-xs lg:max-w-lg text-justify text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae
            aliquam numquam optio magni maxime aspernatur porro saepe eveniet
            delectus.
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-black text-white text-[10px] md:text-xs font-medium rounded px-3 md:px-6 lg:px-8 py-2 cursor-pointer hover:scale-105 transition duration-200">
              Shop Now
            </button>
            <button className="bg-white text-black border border-gray-300 text-[10px] md:text-xs font-medium rounded px-3 md:px-5 lg:px-7 py-2 cursor-pointer hover:scale-105 transition duration-200">
              View Catalog
            </button>
          </div>
          <div className="flex gap-6 md:gap-8 lg:gap-12">
            <div className="flex items-center gap-2">
              <BsCircleFill className="text-green-500 text-[5px] md:text-[6px]" />
              <span className="text-slate-500 text-[8px] md:text-xs">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCircleFill className="text-blue-500 text-[5px] md:text-[6px]" />
              <span className="text-slate-500 text-[8px] md:text-xs">30-Day Returns</span>
            </div>
          </div>
        </div>
        <div className={`flex-1 flex justify-end relative overflow-hidden mt-10 lg:mt-0 mr-auto`}>
          <img
            src={heroImage}
            alt=""
            className="overflow-hidden w-[500px] rounded-xl max-w-full opacity-85"
          />
          <div className="absolute bg-black text-white text-[12px] max-h-max rounded-full px-4 py-2 bottom-3 right-3">15% Off</div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

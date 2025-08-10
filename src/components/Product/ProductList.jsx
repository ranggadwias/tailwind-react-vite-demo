import { FiChevronDown } from "react-icons/fi";
import ProductCard from "./ProductCard";
import { products } from "./products";

const ProductList = () => {
  return (
    <>
      <div className="w-full bg-white px-12 md:px-20 py-12 border-b-[0.5px] border-gray-300">
        <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-between">
          <div>
            <span className="text-lg font-medium">Our Product</span>
            <p className="text-xs text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="flex mt-5 gap-2 flex-wrap">
              <span className="bg-black text-white text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                All
              </span>
              <span className="bg-slate-200 text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                T-shirts
              </span>
              <span className="bg-slate-200 text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                Hoodies
              </span>
              <span className="bg-slate-200 text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                Jackets
              </span>
              <span className="bg-slate-200 text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                Sneakers
              </span>
              <span className="bg-slate-200 text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                Pants
              </span>
              <span className="bg-slate-200 text-[10px] rounded-md px-3 py-[6px] cursor-pointer">
                Bags
              </span>
            </div>
          </div>
          <div className="relative">
            <select className="bg-slate-100 text-xs px-4 min-w-40 py-2 rounded-md appearance-none outline-0 cursor-pointer">
              <option value="name">Name</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
            <FiChevronDown className="absolute left-34 md:right-3 top-3 -translate-y-0.5 pointer-events-none text-gray-500 text-sm" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {products.map((product) => (
            <ProductCard products={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

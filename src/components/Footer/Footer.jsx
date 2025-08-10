import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-100 px-12 md:px-20 py-10">
        <div className="flex flex-wrap border-b-[1.5px] border-gray-300 pb-6 gap-x-14 gap-y-6 lg:gap-y-0 min-w-[150px] md:w-auto">
          <div className="flex flex-col flex-1 gap-y-2 w-full">
            <span className="text-sm font-medium">VibeWear</span>
            <p className="text-[10px] text-slate-500 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              iure, velit eos ut ipsam dolor.
            </p>
            <div className="flex gap-6 text-xs mt-1 text-slate-500">
              <FaFacebook className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaLinkedin className="cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-full min-w-[150px] md:w-auto">
            <span className="text-xs font-medium">Shop</span>
            <div className="flex flex-col gap-y-1">
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                New Arrivals
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Men's Collection
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Women's Collection
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Kids Collection
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Sale Items
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Accessories
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-full min-w-[150px] md:w-auto">
            <span className="text-xs font-medium">Customer Service</span>
            <div className="flex flex-col gap-y-1">
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Size Guide
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Shipping Info
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Returns & Exchanges
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/"
                className="text-[10px] text-slate-500 hover:font-medium"
              >
                Track Your Order
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-full min-w-[150px] md:w-auto">
            <span className="text-xs font-medium">Stay Updated</span>
            <p className="text-[10px] text-slate-500">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <div className="flex gap-x-2 justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-slate-200 text-[10px] px-3 py-1 rounded w-full"
              />
              <button className="bg-black text-white text-[10px] px-2 rounded cursor-pointer">
                Subscribe
              </button>
            </div>
            <div className="flex flex-col gap-y-2 text-slate-500 text-xs mt-1">
              <div className="flex items-center gap-x-1">
                <HiMail />
                <span className="text-[10px]">info@vibewear.com</span>
              </div>
              <div className="flex items-center gap-x-1">
                <HiPhone />
                <span className="text-[10px]">123-456-789</span>
              </div>
              <div className="flex items-center gap-x-1">
                <HiLocationMarker />
                <span className="text-[10px]">
                  Shibuya Fashion District, Tokyo, Japan
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-y-6 md:gap-y-0 md:justify-between pt-6">
          <p className="text-slate-500 text-[10px]">
            &copy; 2025 VibeWear. All rights reserved.
          </p>
          <div className="flex gap-x-10 md:gap-x-6">
            <Link
              to="/"
              className="text-[10px] text-slate-500 hover:font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-[10px] text-slate-500 hover:font-medium"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className="text-[10px] text-slate-500 hover:font-medium"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { navLinks } from "./navLinks";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div
          className={`w-full flex items-center justify-between px-12 md:px-20 py-4 border-b-[0.5px] border-gray-300 transition-opacity duration-400 ${
            isMenuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          <div className="text-lg md:text-xl lg:text-2xl font-semibold">
            <p>VibeWear</p>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-6 text-xs md:text-sm">
              {navLinks.map((menu) => {
                return (
                  <li key={menu.id}>
                    <Link to={menu.link} className="hover:font-semibold">
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex gap-6 text-sm md:text-lg hover:font-semibold">
            <MdFavoriteBorder className="cursor-pointer" />
            <LuShoppingBag className="cursor-pointer" />
            <FiMenu
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer md:hidden"
            />
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md text-white flex flex-col justify-center items-center transform transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto z-50"
            : "translate-x-full opacity-0 transform-y-95 pointer-events-none"
        }`}
      >
        <FiX
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-11 text-lg cursor-pointer"
        />
        <ul className="flex flex-col gap-10 text-sm items-center">
          {navLinks.map((menu) => {
            return (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="active:font-semibold transition-all duration-200"
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

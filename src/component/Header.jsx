import { useState } from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-zinc-400 text-white font-bold flex justify-between items-center px-10 py-2">
        {/* Logo */}
        <h1 className="text-xl text-blue-500 text-shadow-lg/50">
          <a href="/" className="flex items-center justify-center gap-1">
            <RiShoppingBag3Fill className="shadow-lg/70" /> ShoppyGlobe
          </a>
        </h1>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={` absolute md:relative top-11 md:top-0
          right-0 w-28 md:right-25 bg-zinc-400 md:bg-transparent transition-all
           duration-300 md:flex md:items-center md:gap-10 
           ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:gap-10 py-1 px-4">
            <li className="hover:text-blue-700">
              <a href="/">ProductList</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="cart" className="flex justify-center items-center gap-1">
                <FaCartPlus /> Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

import { useState } from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="fixed w-full top-0 z-10 bg-zinc-400 text-white font-bold flex justify-between items-center px-10 py-2">
        {/* Logo */}
        <h1 className="text-xl text-blue-500 text-shadow-lg/50">
          <Link href="/" className="flex items-center justify-center gap-1">
            <RiShoppingBag3Fill className="shadow-lg/70" /> ShoppyGlobe
          </Link>
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
              <Link to="/">ProductList</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link to="/cart" className="flex justify-center items-center gap-1">
                <sup>{itemCount}</sup>
                <FaCartPlus /> Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

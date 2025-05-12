import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { ShopContext } from "../../Context/context";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowSearch, cartItem } = useContext(ShopContext);
  return (
    <header className="flex items-center justify-between py-2">
      <NavLink to="/">
        <img
          className="w-30 sm:w-40 cursor-pointer bg-white "
          src={logo}
          alt="book bazaar"
        />
      </NavLink>
      <ul className="hidden sm:flex gap-4 sm:gap-6 md:gap-8 uppercase font-medium text-xs md:text-[15px]">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="w-[50%] mx-auto border-t-2 border-gray-400 hidden" />
        </NavLink>
        <NavLink to="/store">
          <li className="py-1">Store</li>
          <hr className="w-[50%] mx-auto border-t-2 border-gray-400 hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="w-[50%] mx-auto border-t-2 border-gray-400 hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="w-[50%] mx-auto border-t-2 border-gray-400 hidden" />
        </NavLink>
        <NavLink to="/login">
          <li>
            <button className="bg-indigo-600 px-2 py-1 rounded border-none cursor-pointer text-white">
              Login
            </button>
          </li>
          <hr className="w-[50%] mx-auto border-t-2 mt-2 border-gray-400 hidden" />
        </NavLink>
      </ul>
      <div className="flex gap-4 sm:gap-4 md:gap-6 lg:gap-8">
        <Link to="/store">
          <IoSearchOutline
            onClick={() => setShowSearch(true)}
            className="text-3xl sm:text-3xl"
          />
        </Link>
        <Link className="hidden sm:block" to="/profile">
          <CiUser className="text-3xl sm:text-3xl" />
        </Link>
        <Link className="hidden sm:block relative" to="/cart">
          <IoCartOutline className="text-3xl sm:text-3xl" />
          <div className="absolute bottom-1 right-0 bg-black rounded-full px-1">
            <p className="text-white text-[10px]">{cartItem.length}</p>
          </div>
        </Link>
        <div className="cursor-pointer">
          <RiMenu3Fill
            onClick={() => setShowMenu(true)}
            className="sm:hidden text-3xl"
          />
        </div>
      </div>
      {/* iss slide bar me nhi lag rha hay */}

      <div
        className={`absolute top-0 right-0 left-0 bottom-0 bg-white transition-all overflow-hidden text-gray-600 z-100 ${
          showMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col items-end ">
          <div
            onClick={() => setShowMenu(false)}
            className="flex items-center gap-2 py-4 px-4"
          >
            <p className="cursor-pointer">Back</p>
            <p className="mt-[0.5px]">
              <IoIosArrowDropdown className="rotate-270" />
            </p>
          </div>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="uppercase px-4.5 w-full text-end border-t py-4"
            to="/"
          >
            home
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="uppercase pr-4.5 w-full text-end border-t py-4"
            to="/profile"
          >
            My Profile
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="uppercase pr-4.5 w-full text-end border-t py-4"
            to="/store"
          >
            Store
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="uppercase pr-4.5 w-full text-end border-t py-4"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="uppercase pr-4.5 w-full text-end border-t py-4"
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="uppercase pr-4.5 w-full text-end border-b border-t py-4"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

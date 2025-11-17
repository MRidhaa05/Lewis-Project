import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.LewisStore_Logo}
          className="w-32"
          alt="Lewis Store Logo"
        />
      </Link>

      {/* Nav Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/Collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img src={assets.user_icon} className="w-5 cursor-pointer" alt="" />

          <div className="hidden group-hover:block absolute right-0 pt-4 dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black"> My Profile</p>
              <p className="cursor-pointer hover:text-black"> Orders</p>
              <p className="cursor-pointer hover:text-black"> Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            3
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* sidebar menu for a smaller screen (mobile) */}
      {/* hide navbar on small device when menu open*/}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"} `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-90" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setvisible(false)}
            className={"py-3 pl-6 border"}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className={"py-3 pl-6 border"}
            to="/Collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className={"py-3 pl-6 border"}
            to="/About"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className={"py-3 pl-6 border"}
            to="/Contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

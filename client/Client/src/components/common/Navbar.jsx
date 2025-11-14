import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">

      {/* Logo */}
      <img
        src={assets.LewisStore_Logo}
        className="w-36"
        alt="Lewis Store Logo"
      />

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
        <img 
          src={assets.cart_icon} 
          className="w-5 cursor-pointer" 
          alt="Cart" 
        />
      </div>

    </div>
  );
};

export default Navbar;

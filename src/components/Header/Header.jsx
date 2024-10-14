import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../../assets/logo.png";

const menuData = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Properties", href: "/properties" },
  { label: "Agents", href: "/agents" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Create a navigate function

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to /login
    setMenuOpen(false); // Close the menu if it's open
  };

  return (
    <header className=" text-black py-4 px-8 flex justify-between items-center sm:px-1 text-black">
      {/* Logo */}
      <div className="flex items-center sm:gap-0">
        <img
          src={Logo}
          alt="Fraction Hive Logo"
          className="h-10 w-auto mr-4 sm:h-8 w-8"
        />
        <span className="text-xl font-bold sm:text-sm">Fraction Hive</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 sm:space-x-2.5">
        {menuData.map((menu) => (
          <Link
            key={menu.label}
            to={menu.href}
            className="hover:text-gray-300 transition duration-300"
          >
            {menu.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden  flex items-center" style={{zIndex:'10000'}}>
        <button onClick={toggleMenu} className="">
          {menuOpen ? (
            <CloseIcon size={24} style={{ color: "white" }} />
          ) : (
            <MenuIcon size={24}  />
          )}
        </button>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <button onClick={handleLoginClick} 
 className="bg-[#3E54EB] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center z-10 md:hidden">
          {menuData.map((menu) => (
            <Link
              key={menu.label}
              to={menu.href}
              className="text-white text-xl py-2 hover:text-gray-300 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {menu.label}
            </Link>
          ))}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mt-4"
            onClick={handleLoginClick} 
            // Close menu on login click
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import logo from "../../assets/images/logo.png"; // Example logo path
import "../../Styles/header.css"; // Add necessary styles
import Container from "../container/Container"; // Assuming this is a custom component
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Kitchen Combos", slug: "/emoji-kitchen-combinations" },
    { name: "About Us", slug: "/about" },
    { name: "Contact Us", slug: "/contact" },
    { name: "Blog", slug: "/blogs" },
  ];

  return (
    <header className="w-full bg-white relative">
      <Container className={`${isMenuOpen ? "flex-col" : ""}`}>
        <nav className="flex w-full justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <img
                loading="lazy"
                src={logo}
                alt="Emoji Kitchen Logo"
                className="w-20"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className="text-lg font-bold text-[#2c2c54] hover:bg-[#d1e8ff] hover:text-[#0000ff] p-2 rounded-lg"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-2xl focus:outline-none"
            >
              <span>&#9776; {/* Hamburger icon */}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full h-auto absolute top-0 right-0 z-10 md:hidden flex flex-col items-center space-y-4 py-4 bg-white transition-all duration-300">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl focus:outline-none self-end mr-[20px]"
            >
              <span>&#10005;</span>
            </button>

            {navItems.map((item) => (
              <div key={item.name} className="w-full text-center">
                <Link
                  to={item.slug}
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking an option
                  className="block text-lg font-bold text-[#2c2c54] hover:bg-[#d1e8ff] hover:text-[#0000ff] py-2 px-4 rounded-lg"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;

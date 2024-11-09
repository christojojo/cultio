import React, { useState } from "react";
import Logo from "../../Utilis/Logo";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const NavItems = ["Home", "About", "Services", "Contact"];

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="bg-white text-black px-[18px] py-5 flex justify-between items-center h-[90px]">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/assets/logopng.png"
          alt="cultio logo"
          width={90}
          height={90}
          className="object-fit"
        />
        <a
          href="#home"
          className="text-2xl font-bold leading-none text-green-700"
        >
          Cultio Agritech
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
          className="text-2xl flex items-center"
        >
          {isMobile ? (
            <span class="material-symbols-outlined">close</span>
          ) : (
            <span class="material-symbols-outlined">menu</span>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMobile ? "block" : "hidden"
        } md:flex gap-6 absolute md:static top-[90px] left-0 w-full md:w-auto bg-white md:bg-transparent md:p-0 p-6 md:top-auto transition-transform transform ${
          isMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:transform-none z-10`}
      >
        <ul className="flex flex-col md:flex-row gap-6 xl:gap-10 items-center">
          {NavItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[16px] font-medium leading-[31px] transition-all ease-in-out duration-300 whitespace-nowrap pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:ease-in-out after:duration-500 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button className="border border-green-600 px-4 py-2 text-[16px] font-medium leading-tight transition-all text-green-600 rounded-sm hover:text-green-500 hover:border-green-500">
              Enquire now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

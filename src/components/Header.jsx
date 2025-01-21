import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="  sticky left-auto z-20 w-full bg-white text-black top-0">
        <div className="max-w-7xl mx-auto flex justify-between py-4 text-xs px-5 ">
        <div className="font-semibold text-xl md:text-2xl">
          <p to="/">Dr. Monica Jain</p>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </div>
          {/* <div>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Services
            </NavLink>
          </div> */}
          <div>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Gallery
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/book-an-appointment"
              className={({ isActive }) =>
                isActive
                  ? "bg-black px-5 py-2 text-white font-bold"
                  : "bg-black px-5 py-2 text-white"
              }
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
        <div
          className="text-xl md:text-2xl cursor-pointer lg:hidden"
          onClick={toggleNav}
        >
          <CgMenuRight />
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-white text-black z-30 duration-700 ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex justify-between mx-6 my-3 md:my-5 md:mx-10">
          <div className="font-semibold text-lg md:text-2xl">
            Dr. Monica Jain
          </div>
          <div
            className="text-xl md:text-2xl cursor-pointer mt-1.5 font-semibold"
            onClick={toggleNav}
          >
            <RxCross1 />
          </div>
        </div>

        <div className="flex ml-12 justify-evenly flex-col gap-8 text-lg font-medium mt-10">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
              onClick={toggleNav}
            >
              Home
            </NavLink>
          </div>
          {/* <div>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
              onClick={toggleNav}
            >
              Services
            </NavLink>
          </div> */}
          <div>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
              onClick={toggleNav}
            >
              Gallery
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
              onClick={toggleNav}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              }
              onClick={toggleNav}
            >
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/book-an-appointment"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white uppercase text-xs px-4 py-2 font-bold"
                  : "bg-black text-white uppercase text-xs px-4 py-2"
              }
              onClick={toggleNav}
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

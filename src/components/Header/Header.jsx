import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow  z-50 top-0">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center text-white font-extrabold text-2xl tracking-wide hover:text-orange-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Weularity
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/getstarted"
              className="text-white bg-purple-600 shadow-xl hover:bg-purple-700 hover:scale-105 transition-all duration-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <div className="relative group">
                  {/* Main NavLink */}
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-400" : "text-gray-700"
                      } hover:text-orange-700 lg:p-0`
                    }
                  >
                    Work
                  </NavLink>

                  {/* Dropdown Container */}
                  <div className="absolute hidden group-hover:flex flex-col bg-black shadow-lg rounded-md py-2 px-4 gap-2 min-w-max left-1/2 transform -translate-x-1/2 top-full z-10">
                    <NavLink
                      to="/work/option1"
                      className="block text-gray-700 hover:text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-left"
                    >
                      Option 1 to explore about the website
                    </NavLink>
                    <NavLink
                      to="/work/option2"
                      className="block text-gray-700 hover:text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-left"
                    >
                      Option 2 to expore about the website
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative group">
                  {/* Main NavLink */}
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-400" : "text-gray-700"
                      } hover:text-orange-700 lg:p-0`
                    }
                  >
                    Agency
                  </NavLink>

                  {/* Dropdown Container */}
                  <div className="absolute hidden group-hover:flex flex-col bg-black shadow-lg rounded-md py-2 px-4 gap-2 min-w-max left-1/2 transform -translate-x-1/2 top-full z-10">
                    <NavLink
                      to="/work/option1"
                      className="block text-gray-700 hover:text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-left"
                    >
                      Option 1 to explore about the website
                    </NavLink>
                    <NavLink
                      to="/work/option2"
                      className="block text-gray-700 hover:text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-left"
                    >
                      Option 2 to expore about the website
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center justify-center  flex-grow relative bg-pink-300">
      {/* Navigation Links */}
      <ul className="flex space-x-8 bg-green-400 items-center  justify-center">
        {/* Services Dropdown */}
        <li className="group relative">
          <Link
            to="/services"
            className="text-white hover:text-orange-500 transition-all relative"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* Dropdown */}
          <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 text-gray-700">
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/web-design">Web Design</Link>
            </li>
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/seo">SEO Optimization</Link>
            </li>
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/ui-ux">UI/UX Design</Link>
            </li>
          </ul>
        </li>

        {/* Work Dropdown */}
        <li className="group relative">
          <Link
            to="/work"
            className="text-white hover:text-orange-500 transition-all relative"
          >
            Work
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* Dropdown */}
          <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 text-gray-700">
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/portfolio">Portfolio Showcase</Link>
            </li>
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/case-studies">Case Studies</Link>
            </li>
          </ul>
        </li>

        {/* Agency Dropdown */}
        <li className="group relative">
          <Link
            to="/agency"
            className="text-white hover:text-orange-500 transition-all relative"
          >
            Agency
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* Dropdown */}
          <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 text-gray-700">
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:bg-gray-100 hover:underline transition-all px-2 py-1 rounded">
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Get Started Button */}
      <Link
        to="/getstarted"
        className="ml-auto text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl hover:scale-105 transition-all duration-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
      >
        Get started
      </Link>
    </div>
  );
}

// code here
<div className="hidden lg:flex lg:order-1">
  <NavigationMenu>
    <NavigationMenuList className="flex space-x-8">
      {/* Services */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white bg-transparent hover:text-orange-500 transition-all">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute z-50 mt-2 rounded-lg shadow-lg p-4 h-[200px]">
          <ul className="flex space-x-44 border-b-2 border-black pb-4 ">
            <li className="hover:text-orange-500 transition-all ">
              <Link
                to="/webflow"
                className="text-lg font-semibold relative group"
              >
                Web Design
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="hover:text-orange-500 transition-all">
              <Link
                to="/webflow"
                className="text-lg font-semibold relative group"
              >
                SEO Optimization
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="hover:text-orange-500 transition-all">
              <Link
                to="/webflow"
                className="text-lg font-semibold relative group"
              >
                UI/UX Design
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Work */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white bg-transparent hover:text-orange-500 transition-all">
          Work
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute z-50 mt-2 rounded-lg shadow-lg p-4  h-[200px]">
          <ul className="flex space-x-56 border-b-2 border-black pb-4">
            <li className="hover:text-orange-500 transition-all">
              <Link
                to="/previouswork"
                className="text-lg font-semibold relative group"
              >
                Portfolio Showcase
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="hover:text-orange-500 transition-all">
              <Link
                to="/previouswork"
                className="text-lg font-semibold relative group"
              >
                Case Studies
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Agency */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white bg-transparent hover:text-orange-500 transition-all">
          Agency
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute z-50 mt-2 rounded-lg shadow-lg p-4 h-[200px]">
          <ul className="flex space-x-56 border-b-2 border-black pb-4">
            <li className="hover:text-orange-500 transition-all">
              <Link
                to="/about"
                className="text-lg font-semibold relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="hover:text-orange-500 transition-all">
              <Link
                to="/contact"
                className="text-lg font-semibold relative group"
              >
                Our Team
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</div>;

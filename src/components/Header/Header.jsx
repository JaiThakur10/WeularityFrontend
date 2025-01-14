import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the active dropdown
  const location = useLocation();

  // Handle Navbar Scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current page is the /getstarted page
  const isOnGetStartedPage = location.pathname === "/getstarted";

  // Toggle Dropdown for Mobile Menu
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 relative">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center text-white font-extrabold text-2xl tracking-wide hover:text-orange-500 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Weularity
            </Link>

            {/* Get Started Button or Hamburger for Mobile */}
            <div className="flex items-center lg:order-2">
              {!isOnGetStartedPage && (
                <>
                  {/* Hamburger for mobile screens */}
                  <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>

                  {/* Get Started button for larger screens */}
                  <Link
                    to="/getstarted"
                    className="hidden lg:inline-block text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl hover:scale-105 transition-all duration-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Get started
                  </Link>
                </>
              )}
            </div>

            {/* desktop view */}
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
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black text-white transition-transform transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col w-full h-screen">
            {/* Close Button */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
              <h1 className="text-3xl font-extrabold tracking-wide">
                Weularity
              </h1>
              <button
                className="text-3xl font-bold focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X />
              </button>
            </div>

            {/* Drawer Content */}
            <ul className="mt-10 space-y-8 px-5 text-lg font-medium">
              {/* Services */}
              <li>
                <div
                  onClick={() => toggleDropdown("services")}
                  className="cursor-pointer flex justify-between items-center group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="group-hover:text-orange-300 transition">
                      Services
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeDropdown === "services" && (
                  <ul className="mt-3 ml-6 space-y-3 text-white/80">
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/webflow"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Web Design
                      </Link>
                    </li>
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/seo"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        SEO Optimization
                      </Link>
                    </li>
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/uiux"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        UI/UX Design
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Repeat similar structure for "Work" and "Agency" sections */}
              <li>
                <div
                  onClick={() => toggleDropdown("work")}
                  className="cursor-pointer flex justify-between items-center group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="group-hover:text-orange-300 transition">
                      Work
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform ${
                      activeDropdown === "work" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeDropdown === "work" && (
                  <ul className="mt-3 ml-6 space-y-3 text-white/80">
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/previouswork"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Portfolio Showcase
                      </Link>
                    </li>
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/casestudies"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Case Studies
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Repeat similar structure for "Agency" */}
              <li>
                <div
                  onClick={() => toggleDropdown("agency")}
                  className="cursor-pointer flex justify-between items-center group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="group-hover:text-orange-300 transition">
                      Agency
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform ${
                      activeDropdown === "agency" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeDropdown === "agency" && (
                  <ul className="mt-3 ml-6 space-y-3 text-white/80">
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/portfolio"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="hover:text-orange-300 transition">
                      <Link
                        to="/casestudies"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Get Started Button */}
            <div className="mt-auto pb-10 px-5">
              <Link
                to="/getstarted"
                className="block text-center bg-gradient-to-r from-purple-500 to-pink-500   text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

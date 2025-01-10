import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
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

          {/* Get Started Button */}
          <div className="flex items-center lg:order-2">
            <Link
              to="/getstarted"
              className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl hover:scale-105 transition-all duration-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex lg:order-1">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-transparent hover:text-orange-500 transition-all">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute z-50 mt-2 rounded-lg shadow-lg p-4 h-[200px] w-auto">
                    <ul className="flex space-x-8">
                      <li className="hover:text-orange-500 transition-all">
                        <Link
                          to="/web-design"
                          className="text-lg  font-semibold relative group"
                        >
                          Web Design
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                        </Link>
                      </li>
                      <li className="hover:text-orange-500 transition-all">
                        <Link
                          to="/seo"
                          className="text-lg  font-semibold relative group"
                        >
                          SEO Optimization
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                        </Link>
                      </li>
                      <li className="hover:text-orange-500 transition-all">
                        <Link
                          to="/ui-ux"
                          className="text-lg  font-semibold relative group"
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
                  <NavigationMenuContent className="absolute z-50 mt-2  rounded-lg shadow-lg p-4 w-auto">
                    <ul className="flex space-x-8">
                      <li className="hover:text-orange-500 transition-all">
                        <Link
                          to="/portfolio"
                          className="text-lg font-semibold relative group"
                        >
                          Portfolio Showcase
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                        </Link>
                      </li>
                      <li className="hover:text-orange-500 transition-all">
                        <Link
                          to="/case-studies"
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
                  <NavigationMenuContent className="absolute z-50 mt-2 rounded-lg shadow-lg p-4 w-auto">
                    <ul className="flex space-x-8">
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
                          to="/team"
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
  );
}

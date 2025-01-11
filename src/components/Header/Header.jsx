import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

            {/* Get Started Button (hidden on /getstarted page and replaced with hamburger on mobile) */}
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
                            className="text-lg font-semibold relative group"
                          >
                            Web Design
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="hover:text-orange-500 transition-all">
                          <Link
                            to="/seo"
                            className="text-lg font-semibold relative group"
                          >
                            SEO Optimization
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li className="hover:text-orange-500 transition-all">
                          <Link
                            to="/ui-ux"
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
                    <NavigationMenuContent className="absolute z-50 mt-2 rounded-lg shadow-lg p-4 w-auto">
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

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="text-center text-white space-y-4">
            <li>
              <Link
                to="/services"
                className="text-xl font-medium hover:text-orange-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="text-xl font-medium hover:text-orange-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/agency"
                className="text-xl font-medium hover:text-orange-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agency
              </Link>
            </li>
          </ul>
          <Link
            to="/getstarted"
            className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl hover:scale-105 transition-all duration-300 font-medium rounded-lg text-sm px-6 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Logo from "./Logo";
// import DesktopMenu from "./DesktopMenu";
// import MobileMenu from "./MobileMenu";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isOnGetStartedPage = location.pathname === "/getstarted";

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all ${
//         isScrolled ? "bg-black shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <nav className="border-gray-200 bg-yellow-300 px-4 lg:px-6 py-2.5 relative">
//         <div className="flex justify-between items-center mx-auto max-w-screen-xl">
//           <Logo />
//           {!isOnGetStartedPage && (
//             <>
//               <button
//                 className="lg:hidden text-white focus:outline-none"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               </button>
//               <DesktopMenu />
//             </>
//           )}
//         </div>
//       </nav>
//       {isMobileMenuOpen && (
//         <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
//       )}
//     </header>
//   );
// }

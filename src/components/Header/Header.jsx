import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Header() {
  return (
    <header className="shadow-lg z-50 top-0">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 relative">
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
                  <NavigationMenuTrigger className="text-white bg-black hover:text-orange-500 transition-all">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 bg-black shadow-lg rounded-lg p-6 w-[500px]">
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>Web Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Build stunning websites that captivate users.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="hover:bg-pink-400 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>SEO Optimization</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Rank higher and attract more traffic.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>UI/UX Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Enhance user experience with beautiful designs.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>Digital Marketing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Drive growth with strategic campaigns.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Work */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-black hover:text-orange-500 transition-all">
                    Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 bg-black shadow-lg rounded-lg p-6 w-[500px]">
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>Portfolio Showcase</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Explore our top-tier work samples.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>Case Studies</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Learn how we solved real-world problems.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Agency */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-black hover:text-orange-500 transition-all">
                    Agency
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 bg-black shadow-lg rounded-lg p-6 w-[500px]">
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>About Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Learn more about our vision and team.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="hover:bg-gray-50 transition duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle>Careers</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Join our talented team of professionals.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
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

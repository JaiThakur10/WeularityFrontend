import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-500 to-yellow-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-bold text-[#CC4EC5]">Weularity</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              We build digital experiences that drive engagement and growth. Our
              expertise in design, development, and marketing will bring your
              vision to life.
            </p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500  hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105">
              Let's Work Together
            </button>
          </motion.div>

          {/* Quick Links Section */}
          {[
            {
              title: "Services",
              items: [
                "Web Design",
                "Digital Marketing",
                "SEO Optimization",
                "UI/UX Design",
              ],
            },
            {
              title: "Explore",
              items: ["Portfolio", "Case Studies", "Testimonials", "Blog"],
            },
            {
              title: "Company",
              items: ["About Us", "Careers", "Contact"],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-[#CC4EC5]">
                {section.title}
              </h4>
              <ul className="space-y-3 text-gray-300">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#CC4EC5] transition duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Partition Line */}
        <div className="mt-16 border-t border-gray-700"></div>

        {/* Newsletter and Socials */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full lg:w-1/2"
          >
            <h4 className="text-xl font-semibold text-[#CC4EC5]">
              Stay Connected
            </h4>
            <p className="text-gray-400 mt-2">
              Subscribe to our newsletter to stay updated on our latest
              offerings.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500  hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg transform hover:scale-105 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 text-2xl"
          >
            {[
              { icon: "fab fa-facebook-f", link: "#" },
              { icon: "fab fa-twitter", link: "#" },
              { icon: "fab fa-instagram", link: "#" },
              { icon: "fab fa-linkedin-in", link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-[#CC4EC5] transition duration-300"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Weularity. Crafted with ❤️. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="font-sans scroll-smooth px-8 bg-black ">
      {/* hero */}
      <div className="h-[630px] w-full flex flex-col md:flex-row items-center relative overflow-hidden bg-black">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[120%] h-[120%] bg-gradient-radial from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-[80%] h-[80%] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white bg-opacity-40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
              }}
            ></motion.div>
          ))}
        </div>

        {/* Left Section */}
        <motion.div
          className="flex flex-col h-auto md:h-[400px] w-full md:w-1/2 px-6 md:px-12 relative z-10 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl  md:text-center text-white font-extrabold drop-shadow-lg py-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Stunning Websites & Digital Experiences
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg md:ml-4 text-white mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We design, build, and grow websites that captivate your audience and
            drive results. From sleek designs to powerful functionality, we
            deliver tailor-made solutions for your business.
          </motion.p>
          <motion.div
            className="w-full flex items-center justify-center md:justify-center mt-8"
            whileHover={{ scale: 1.1 }}
          >
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="h-auto md:h-[400px] w-full md:w-1/2 flex items-center justify-center px-6 relative z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./img/hero10.png"
            alt="Hero Section Graphic"
            className="rounded-lg shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-500 max-w-full h-auto"
          />
        </motion.div>
      </div>

      {/* aboutus */}
      <AboutUs />

      {/* Services */}
      <Services />

      {/* portfolio */}
      <Portfolio />

      {/* testimonial */}
      <Testimonial />

      {/* whychooseus */}
      <WhyChooseUs />

      {/* Contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}

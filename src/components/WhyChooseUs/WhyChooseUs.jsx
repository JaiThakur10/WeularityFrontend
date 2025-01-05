import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Award, ShieldCheck, Smile } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-20">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Why <span className="text-purple-500">Choose</span> Us?
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8">
            We are not just a service provider; we are your partner in crafting
            exceptional digital solutions. Our unique approach ensures your
            goals are met with precision and innovation.
          </p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./img/whychooseus.webp"
            alt="Why Choose Us"
            className="w-full max-w-[500px] rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 py-12">
        {[
          {
            id: 1,
            title: "Proven Expertise",
            description:
              "Over a decade of experience delivering innovative solutions.",
            icon: CheckCircle,
          },
          {
            id: 2,
            title: "Client-Centric Approach",
            description:
              "We prioritize your needs and ensure seamless collaboration.",
            icon: Smile,
          },
          {
            id: 3,
            title: "Cutting-Edge Technology",
            description:
              "Leveraging the latest tools to keep you ahead of the curve.",
            icon: Star,
          },
          {
            id: 4,
            title: "Unwavering Integrity",
            description:
              "Transparency and trust are at the heart of what we do.",
            icon: ShieldCheck,
          },
          {
            id: 5,
            title: "Award-Winning Solutions",
            description:
              "Recognized globally for excellence in design and development.",
            icon: Award,
          },
          {
            id: 6,
            title: "24/7 Support",
            description:
              "Dedicated support to assist you whenever you need us.",
            icon: CheckCircle,
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.id}
            className="relative bg-gradient-to-b from-black via-gray-900 to-purple-900 bg-opacity-90 rounded-2xl p-6 flex flex-col items-start shadow-lg transform transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-purple-700 text-white rounded-full mb-4">
              <feature.icon className="w-8 h-8" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>

            {/* Description */}
            <p className="text-sm text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="w-full flex flex-col items-center py-16 bg-black bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to <span className="text-purple-500">Transform</span> Your
          Digital Presence?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Partner with us to create exceptional digital solutions tailored to
          your business needs.
        </p>
        <motion.button
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

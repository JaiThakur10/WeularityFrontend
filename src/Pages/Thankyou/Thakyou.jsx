import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt, FaFileAlt, FaRocket } from "react-icons/fa";

const Thankyou = () => {
  const steps = [
    {
      number: 1,
      text: "Our team will take a look at your inquiry and contact you in a day or two.",
      icon: <FaCheckCircle className="text-white text-6xl" />, // Icon for Step 1
    },
    {
      number: 2,
      text: "We’ll invite you to a call to learn more about you, your business, your audience, and project.",
      icon: <FaPhoneAlt className="text-white text-6xl" />, // Icon for Step 2
    },
    {
      number: 3,
      text: "Based on your requirements, we’ll put together a proposal and talk through any details.",
      icon: <FaFileAlt className="text-white text-6xl" />, // Icon for Step 3
    },
    {
      number: 4,
      text: "Once the project scope is agreed and you’re happy, we’ll start your project!",
      icon: <FaRocket className="text-white text-6xl" />, // Icon for Step 4
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex">
      <motion.div
        className="sm:block sm:w-full justify-center h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Thank You Section */}
        <motion.div
          className="h-[300px] mt-[20px] sm:mt-[100px] sm:w-[40%] py-4 sm:px-16 px-8"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-[40px] font-bold md:text-7xl bg-clip-text text-transparent">
            Thank You!
          </span>
          <p className="mt-4 text-lg">
            This is your first step to becoming fresh! Fill out the following
            questions as best as you can, we’ll take a closer look then be in
            touch to get things started.
          </p>
        </motion.div>
      </motion.div>

      {/* What happens next Section */}
      <motion.div
        className="mt-4 w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl text-white px-8 sm:ml-[70px] sm:px-0">
          What happens next?
        </h1>
      </motion.div>

      {/* Steps Section */}
      <motion.div
        className="sm:h-[400px] space-y-8 sm:space-x-8 sm:justify-center mt-8 items-center flex flex-col sm:flex-row sm:mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            className="h-[200px] sm:h-[300px] w-[320px] border-2 border-white rounded-xl mt-8 flex flex-col items-center justify-center"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="flex items-center justify-center h-1/2">
              {step.icon}
            </div>
            <div className="p-4 flex items-center h-1/2 text-center">
              <p>{step.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Thankyou;

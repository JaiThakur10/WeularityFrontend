// import React from "react";
// import { motion } from "framer-motion";

// function Hit() {
//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       {/* Blob 1 */}
//       <motion.div
//         className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-100 rounded-full"
//         animate={{
//           y: [0, -50, 0],
//           x: [0, 50, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       {/* Blob 2 */}
//       <motion.div
//         className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500 to-teal-500 opacity-100 rounded-full"
//         animate={{
//           y: [0, 50, 0],
//           x: [0, -50, 0],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>
//     </div>
//   );
// }

// export default Hit;

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Hit() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Gradient Blobs */}
        <motion.div
          className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full blur-2xl"
          animate={{
            y: [0, -50, 0], // Vertical movement
            x: [0, 50, 0], // Horizontal movement
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500 to-teal-500 opacity-30 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0], // Vertical movement
            x: [0, -50, 0], // Horizontal movement
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div> */}

        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-500 to-red-500 opacity-20 rounded-full blur-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        {/* Starry Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-80"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative text-center py-20 px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold tracking-tight drop-shadow-md"
        >
          Your Dream Website, Delivered
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto"
        >
          Transform your ideas into reality with our cutting-edge design and
          development expertise. Let’s create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500">
            Get Started Now
          </Button>
          <Button
            variant="outline"
            className="px-6 py-3 text-lg font-medium text-white"
          >
            Learn More
          </Button>
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mt-4">
          Gradient Text
        </h1>
      </header>

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white">
            Let’s Build Your Vision
          </h2>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
            Take the first step toward a stunning and effective online presence.
            Contact us now, and let’s make your project a reality!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
            <Input
              placeholder="Your Email Address"
              type="email"
              required
              className="flex-grow px-4 py-3"
            />
            <Button className="px-6 py-3 bg-white text-purple-600 font-medium">
              Request a Project
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

export default Hit;

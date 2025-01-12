import React from "react";
import { motion } from "framer-motion";

function HeroAbout() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-4xl font-bold drop-shadow-lg">
          Your{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Digital
          </span>{" "}
          Growth Partner
        </h2>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          At Weularity, we’re a team of passionate designers, skilled
          developers, and strategic marketers committed to helping businesses
          thrive online. From concept to execution, we craft solutions that
          stand out in the digital landscape.
        </p>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {[
           {
            title: "Proven Track Record",
            content: "We have a history of delivering exceptional results for our clients. The feedback given by them says it all."
          },
          {
            title: "Tailor-Made Solutions",
            content: "Our solutions are customized to meet your unique needs and goals. Whatever your expectations are we meet with efficiency."
          },
          {
            title: "Dedicated Team",
            content: "Our team is committed to providing you with the best service possible. Client satisfaction is our motto."
          }
        ].map(
          (item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-lg p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <h3 className="font-semibold text-xl text-white drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default HeroAbout;
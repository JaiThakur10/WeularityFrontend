import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-16 "
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-6xl font-bold drop-shadow-lg">
          Get{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            to
          </span>{" "}
          Know Us
        </h2>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          At Weularity, we’re a team of passionate designers, skilled
          developers, and strategic marketers committed to helping businesses
          thrive online. From concept to execution, we craft solutions that
          stand out in the digital landscape.
        </p>
      </motion.div>




      <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 mt-10 lg:py-52 px-6 text-white"
      >

        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="italic">Why Weularity?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Top Rated</h3>
            <p>We left a good impression on our past and current clients. They’ve given us five star ratings, and we plan to continue to dazzle!</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Recognized for Our Work</h3>
            <p>Always Fresh has been acknowledged for the work we’ve done. You can check out our awards below!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Sell Online
            </h3>
            <p>Always Fresh creates eCommerce websites for businesses. Webflow’s platform allows online stores to run 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Expert Strategists
            </h3>
            <p>We believe in having a purpose behind everything we do. Each Webflow website is carefully thought and planned for success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Speedy Websites</h3>
            <p>A quick-loading website is key for user experience and SEO purposes. Webflow allows for fast and consistent websites.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Customizable</h3>
            <p>Beauty is in the customization. Webflow makes it easy to design and build a website exactly how you want it.</p>
          </div>
        </div>

      </motion.div>

      <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r bg-black lg:py-52 px-6 text-white"
      >

        <h2 className="text-6xl font-bold drop-shadow-lg mb-12">
          We can't be stopped, striving to be the world’s {" "}
          #1 Website Development Agency by
          {" "}
          providing the best services out there.
        </h2>

        <br />

        <h2 className="text-6xl font-bold drop-shadow-lg mt-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Prepare to be delighted by the quality and {" "} results of each project we deliver. We’re {" "}
            making a name not only for us, but for the brands we work with.
          </span></h2>



      </motion.div>

      <div className="w-full flex flex-col bg-black lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-20">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            <span className="text-white text-7xl ">Ready?</span> <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-7xl font-semibold">Let's go!</span>
          </h1>

        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="lg:w-1/2 flex justify-end mt-12 items-center  lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="mt-6 px-9 py-3 bg-gradient-to-r from-purple-500 to-pink-500  hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg shadow-lg transition transform hover:scale-105">
              Hire Weularity <span className="text-2xl font-bold">&rarr;</span> 
            </button>
        </motion.div>
      </div>


    </section>
  );
}

export default AboutUs;

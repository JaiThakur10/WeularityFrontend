import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {motion} from "framer-motion";

const WebFlow = () => {
  return (
<div className="min-h-screen flex flex-col items-center bg-black text-white">

    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-16 lg:py-20">
      <motion.div  className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
      <h1 className="text-5xl lg:text-4xl font-extrabold leading-tight mb-6"><span className="text-[#CC4EC5]">Web</span> Development </h1>
      </motion.div>

      <motion.div 
      className="lg:w-1/2 justify-center mt-0 lg:mt-0 "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}>
      <p className="text-lg text-center text-white leading-relaxed mb-6">
        At our award-winning Webflow agency, we pride ourselves on pushing the
        boundaries of web development to create highly functional websites. Our
        team of talented developers brings innovative ideas to life, leveraging
        the power of Webflow's intuitive platform. With Always Fresh, you get
        Webflow Development at its finest.
      </p>
      {/* Awards Section */}
      <div className="text-center text-sm text-gray-500 mb-10">
        <span>Reviewed on </span>
        <strong className="text-gray-800">Clutch</strong> ⭐⭐⭐⭐⭐ (10 Reviews)
        &nbsp;|&nbsp;
        <strong className="text-gray-800">Professional Partner</strong>
        &nbsp;|&nbsp;
        <strong className="text-gray-800">Awwwards</strong>
        &nbsp;|&nbsp;
        <strong className="text-gray-800">CSSDesignAwards</strong>
      </div>
      </motion.div>
      </div>
     
      {/* Carousel Section */}
      <div className="relative ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full "
        >
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61d6f9612ec356c5aa06718b/655c8b451d7272cee269dfad_always-fresh-grace-fishers-webflow-website-p-500.jpg"
              alt="Project 1"
              className=" rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61d6f9612ec356c5aa06718b/655c89b65586ac2c6a485dcf_always-fresh-mwod-webflow-website-p-500.jpg"
              alt="Project 2"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61d6f9612ec356c5aa06718b/655c8a267d31d6cddea99f2f_always-fresh-mermarche-webflow-website-p-500.jpg"
              alt="Project 3"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61d6f9612ec356c5aa06718b/655c866b0a2f3ea4738df27a_always-fresh-hutcherson-homes-webflow-website-p-500.jpg"
              alt="Project 4"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>



    </div>
    {/* webflow Section */}
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 lg:py-52 px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Hold up! <span className="italic">What is Webflow?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Top Website Platform</h3>
            <p>Webflow is a web development platform that allows developers to create responsive websites quickly without code.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">No Code</h3>
            <p>It's unique because sites are built with no code. This means users can edit the website visually without coding knowledge.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
            <p>With user-friendly features, your grandma could learn how to use it. We train our clients on how to use their new website.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">The Future</h3>
            <p>You heard it here first. It’s increasingly growing in popularity. Big brands are using it because it's fast, reliable, and scalable.</p>
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
      </div>
    </div>
  );
};

export default WebFlow;

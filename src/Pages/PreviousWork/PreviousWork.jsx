import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const projects = [
  {
    title: "YPGoldSpices",
    description:
      "A fully functional online spices store with features like bulking order, navigation to online stores and whatsapp integration",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    link: "https://www.ypgoldspices.com/",
    image: "./img/ypgold.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Crafted a bespoke portfolio showcasing our client's unique skills and achievements—designed to leave a lasting impression.",
    technologies: ["Next.js", "Framer Motion", "ShadCN"],
    link: "https://gportfolio-92jl.vercel.app/",
    image: "./img/gayatri_portfolio.png",
  },
  {
    title: "Dental Clinic Website",
    description:
      "A sleek and modern technical site showcasing creative work and accomplishments in creating a Dental Clinic site",
    technologies: ["Vue.js", "Firebase", "CSS Modules"],
    link: "#",
    image: "./img/Dental.png",
  },
  {
    title: "Lion Fitness Gym",
    description:
      "A cross-platform gym web application with modern feed features.",
    technologies: ["React Native", "Redux", "Expo"],
    link: "#",
    image:
      "https://blog.tubikstudio.com/wp-content/uploads/2019/06/health_blog_webdesign_tubik-1024x768.png",
  },
  {
    title: "Portfolio",
    description:
      "A fully functional online store with advanced features like product filtering, cart, and payment integration.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    link: "#",
    image:
      "https://design4users.com/wp-content/uploads/2021/01/photo_service_landing_page_design_tubik.png",
  },
];

function PreviousWork() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="min-h-screen flex flex-col items-center bg-black text-white">
        <div className="max-w-full mx-auto px-4 py-8 font-sans">
          {/* Header Section */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-16 lg:py-20">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl lg:text-4xl font-extrabold leading-tight mb-6">
                <span className="text-[#CC4EC5]">Previous</span> Work{" "}
              </h1>
            </motion.div>

            <motion.div
              className="lg:w-1/2 justify-center mt-0 lg:mt-0 "
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-lg text-center text-white leading-relaxed mb-6">
                At our edge tech web service company, we pride ourselves on
                pushing the boundaries of web development to create highly
                functional websites. Our team of talented developers brings
                innovative ideas to life, leveraging the power of Weularity
                intuitive platform. With Weularity, you get Website Development
                at its finest.
              </p>
              {/* Awards Section */}
              <div className="text-center text-sm text-gray-500 mb-10">
                <span>Reviewed on </span>
                <strong className="text-gray-800">Google</strong> ⭐⭐⭐⭐⭐ (10
                Reviews) &nbsp;|&nbsp;
                <strong className="text-gray-800">Professional Clients</strong>
                &nbsp;|&nbsp;
                <strong className="text-gray-800">Partners</strong>
                &nbsp;|&nbsp;
                <strong className="text-gray-800">Innovative Design</strong>
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
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold drop-shadow-md">
          Our Amazing Projects
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Discover the projects we've built with passion and precision.
        </p>
      </motion.div>

      <div className="mt-12 space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Project Text */}
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className="bg-purple-700 text-white hover:bg-purple-600 transition"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 mt-4 text-indigo-400 hover:text-indigo-300 transition"
              >
                View Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project Image */}
            <div className="lg:w-1/2">
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PreviousWork;

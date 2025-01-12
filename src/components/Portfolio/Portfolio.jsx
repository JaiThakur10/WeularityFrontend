import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "YP Gold Spices",
    description:
    "A fully functional online spices store with features like bulking order, navigation to online stores and whatsapp integration",
  technologies: ["React", "Node.js", "Tailwind CSS"],
  link: "https://www.ypgoldspices.com/",
  image:
"./img/ypgold.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Crafted a bespoke portfolio showcasing our client's unique skills and achievements—designed to leave a lasting impression.",
    technologies: ["Next.js", "Framer Motion", "ShadCN"],
    link: "https://gportfolio-92jl.vercel.app/",
    image:
      "./img/gayatri_portfolio.png",
  },
  {
    title: "Dental Clinic Website",
    description:
      "A sleek and modern technical site showcasing creative work and accomplishments in creating a Dental Clinic site",
    technologies: ["Vue.js", "Firebase", "CSS Modules"],
    link: "#",
    image:
      "./img/Dental.png",
  },
  
];

function Portfolio() {
  return (
    <section className="bg-black text-white py-16 px-6">
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

export default Portfolio;

// components/ServicesGrid.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaMobileAlt, FaSearch, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Web Development",
    description: "Building robust and scalable web solutions.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Mobile Development",
    description: "Crafting seamless mobile experiences for your customers.",
  },
  {
    icon: <FaSearch size={40} />,
    title: "SEO Optimization",
    description: "Helping you rank higher on search engines.",
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Solutions",
    description: "Scalable cloud solutions for modern businesses.",
  },
];

const ServicesGrid = () => {
  return (
    <div id="services" className="  px-4 bg-green-200">
      <div className="relative top-0 bg-pink-400">
        <h1
          className="text-7xl md:text-[12rem] font-bold uppercase leading-none text-transparent bg-clip-text bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1481370371/photo/portrait-of-enthusiastic-hispanic-young-woman-working-on-computer-in-a-modern-bright-office.jpg?s=612x612&w=0&k=20&c=8kNce9Ruc9F2KXvnwf0stWQXCwwQTBCrW8efrqhUIa4=')", // Replace with your image URL
          }}
        >
          Services
        </h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;

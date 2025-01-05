import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const sections = [
    {
      id: 1,
      heading: "Web Design",
      description:
        "We create captivating and high-converting websites tailored to your business goals.",
      image: "./img/webdes.jpg",
      related: ["Responsive Design", "Custom Themes", "E-commerce Platforms"],
    },
    {
      id: 2,
      heading: "UI/UX Design",
      description:
        "Optimize your website to drive traffic, improve visibility, and increase conversions.",
      image: "./img/seo.jpg",
      related: ["Keyword Research", "On-Page SEO", "Backlink Strategies"],
    },
    {
      id: 3,
      heading: "Digital Market",
      description:
        "Strategic campaigns that maximize reach and engagement for your brand.",
      image: "./img/design.jpg",
      related: ["Social Media Ads", "PPC Campaigns", "Content Marketing"],
    },
  ];

  return (
    <div className="min-h-screen  text-white">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col lg:flex-row items-center gap-12 py-16 px-6 lg:px-24 ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Rotated Heading */}
          <motion.h1
            className="text-[4rem] md:w-[500px] md:text-center lg:text-[7rem] font-extrabold uppercase text-white rotate-90 origin-left lg:origin-center whitespace-nowrap lg:mr-12" // Added margin to the right
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {section.heading.split(" ").map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </motion.h1>

          {/* Image and Description */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-12">
            {" "}
            {/* Adjusted gap */}
            <motion.img
              src={section.image}
              alt={section.heading}
              className="rounded-xl shadow-lg w-full max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-xl text-white text-center lg:text-left max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {section.description}
            </motion.p>
            {/* Related Services */}
            <motion.ul
              className="text-white text-2xl pl-6 space-y-4 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              {section.related.map((item, i) => (
                <li
                  key={i}
                  className="text-base flex items-center gap-4 relative"
                >
                  <span className="absolute left-[-30px] w-5 h-5 bg-white rounded-full flex items-center justify-center text-pink-300">
                    {/* Replace this with your icon */}
                    🌟
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     id: 1,
//     title: "Web Design",
//     description:
//       "We create captivating and high-converting websites tailored to your business goals.",
//     subServices: ["Responsive Design", "Custom Themes", "E-commerce Platforms"],
//     image: "./img/webdes.jpg", // Replace with actual image paths
//   },
//   {
//     id: 2,
//     title: "SEO",
//     description:
//       "Optimize your site to rank higher on search engines and drive organic traffic.",
//     subServices: ["Keyword Optimization", "Content Strategy", "Technical SEO"],
//     image: "/path/to/image2.jpg",
//   },
//   // Add more services as needed
// ];

// export default function Services() {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-12">
//       {services.map((service, index) => (
//         <div
//           key={service.id}
//           className={`flex flex-col md:flex-row ${
//             index % 2 !== 0 ? "md:flex-row-reverse" : ""
//           } items-center mb-16`}
//         >
//           {/* Rotated Title */}
//           <motion.div
//             className="relative md:w-1/2 w-full flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: index * 0.3 }}
//           >
//             <h1 className="text-7xl md:text-[10rem] font-bold text-white uppercase transform -rotate-90 whitespace-nowrap">
//               {service.title}
//             </h1>
//           </motion.div>

//           {/* Content */}
//           <div className="md:w-1/2 w-full flex flex-col items-start text-left space-y-6">
//             {/* Image */}
//             <motion.img
//               src={service.image}
//               alt={service.title}
//               className="w-full max-w-md rounded-lg shadow-lg"
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//             />
//             {/* Description */}
//             <p className="text-lg md:text-xl">{service.description}</p>

//             {/* Sub-Services */}
//             <div className="space-y-2">
//               {service.subServices.map((sub, subIndex) => (
//                 <motion.div
//                   key={subIndex}
//                   className="text-sm md:text-base bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-transform"
//                   whileHover={{ x: 10 }}
//                   transition={{ type: "spring", stiffness: 100 }}
//                 >
//                   {sub}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

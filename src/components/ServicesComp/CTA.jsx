// components/CTA.jsx
import React from "react";

const CTA = () => {
  return (
    <div className="bg-indigo-600 text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready to Get Started?
      </h2>
      <p className="text-lg md:text-xl font-light mb-8">
        Contact us today to discuss how we can help you achieve your goals.
      </p>
      <a
        href="/contact"
        className="bg-white text-indigo-600 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Contact Us
      </a>
    </div>
  );
};

export default CTA;

// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

import React from "react";
import { Link } from "react-router-dom";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
      <button
        className="absolute top-5 right-5 text-white text-2xl"
        onClick={onClose}
      >
        &times;
      </button>
      <ul className="text-center text-white space-y-4">
        <li>
          <Link
            to="/services"
            className="text-xl font-medium"
            onClick={onClose}
          >
            Services
          </Link>
        </li>
        <li>
          <Link to="/work" className="text-xl font-medium" onClick={onClose}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/agency" className="text-xl font-medium" onClick={onClose}>
            Agency
          </Link>
        </li>
      </ul>
      <Link
        to="/getstarted"
        className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl font-medium rounded-lg text-sm px-6 py-3"
        onClick={onClose}
      >
        Get Started
      </Link>
    </div>
  );
}

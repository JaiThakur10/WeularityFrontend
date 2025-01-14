import React from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeButton = () => {
  const handleSubscribe = () => {
    toast.success(
      <div>
        🎉 <strong>Thanks for subscribing!</strong>
        <p>We appreciate your interest. Stay tuned for updates!</p>
      </div>,
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", // Use a colored theme
        transition: Slide, // Add slide animation
        icon: "🚀", // Custom icon
        progressStyle: { background: "#FF5733" }, // Custom progress bar color (Orange)
        style: { backgroundColor: "#E749A0", color: "#fff" }, // Custom toast background and text color
      }
    );
  };

  return (
    <div>
      <button
        type="button"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg transform hover:scale-105 transition duration-300 shadow-lg"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default SubscribeButton;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useScrollTop from "@/Hooks/UseScrollTop/UseScrollTop";

const UserForm = () => {
  useScrollTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [],
    newOrRebuild: "",
    websiteNeeds: "",
    budget: [],
  });

  const axiosInstance = axios.create({
    timeout: 10000, // Set a 10-second timeout
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const servicesOptions = [
    "Web Design / UI/UX Design",
    "Webflow Development",
    "Brand/website strategy",
    "Marketing Services",
    "Bit of everything",
  ];

  const newOrRebuildOptions = [
    "Brand new website",
    "Rebuild of existing website",
    "Updates to existing website",
  ];

  const websiteNeedsOptions = [
    "Blog",
    "Ecommerce",
    "Memberships",
    "Portfolio",
    "Not sure yet",
  ];

  const budgetOptions = [
    "Less than 20,000 (small project)",
    "Upto 50,000 (medium project)",
    "Over 50,000 (large project)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);
    setError(null);

    try {
      const response = await axiosInstance.post(
        "https://welurality.kesartechnologies.software/api/v1/user/form",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setResponseMessage(
        response.data.message || "Form submitted successfully!"
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        services: [],
        newOrRebuild: "",
        websiteNeeds: "",
        budget: [],
      });
      navigate("/thankyou");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit the form.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const sections = [
    {
      title: "What's this for?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "20px",
    },
    {
      title: "What if I’m not sure?",
      content:
        "We can help you figure this out! Do you need us to only design you a website or build your new website as well? Plus do you need help with strategy and marketing?",
      mt: "80px",
    },
    {
      title: "Why does this matter?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "110px",
    },
    {
      title: "Yeah, I’m not sure?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "200px",
    },
    {
      title: "Ah the money question…",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "80px",
    },
    {
      title: "What do you mean?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "220px",
    },
    {
      title: "What info do you need?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "110px",
    },
    {
      title: "What do you mean?",
      content:
        "This just helps us get an idea for the type of project you’re looking for. Are you looking to sell your services or sell stuff online? We can help you figure this out if you’re not sure!",
      mt: "100px",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">
      <div className="hidden sm:block sm:w-[40%] h-full">
        <div className="h-[300px] mt-[100px] py-4 px-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-[40px] font-bold md:text-7xl bg-clip-text text-transparent">
            Get Started!
          </span>
          <p className="mt-4 text-lg">
            This is your first step to your digital presence! Fill out the
            following questions as best as you can, we’ll take a closer look
            then be in touch to get things started.
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`h-[400px] mt-[${section.mt}] py-4 px-16 `}
          >
            <h1 className="text-3xl text-white mt-2">{section.title}</h1>
            <p className="mt-4 text-lg">{section.content}</p>
          </div>
        ))}
      </div>

      {/* right div */}
      <div className="w-full sm:w-[60%] h-[full] flex">
        <div className="w-[6%] sm:mt-[445px]  mt-[380px] ">
          <h1 className="text-[#60A5FA] flex justify-center text-xs">1/8</h1>
          <h1 className="text-[#60A5FA] flex justify-center mt-[430px] text-xs">
            2/8
          </h1>
          <h1 className="text-[#60A5FA] flex justify-center mt-[520px] text-xs">
            3/8
          </h1>
          <h1 className="text-[#60A5FA] flex justify-center mt-[430px] text-xs">
            4/8
          </h1>
          <h1 className="text-[#60A5FA] flex justify-center mt-[530px] text-xs">
            5/8
          </h1>
        </div>

        <div className="w-[80%]">
          {/* hidden in large screen only visible in mobile */}
          <div className="h-[300px] mt-[20px] py-4 px-2 border-b-[1px] border-white sm:hidden">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-[40px] font-bold md:text-7xl bg-clip-text text-transparent">
              Get Started!
            </span>
            <p className="mt-4 text-lg">
              This is your first step to your digital presence! Fill out the
              following questions as best as you can, we’ll take a closer look
              then be in touch to get things started.
            </p>
          </div>
          {/* Form structure */}
          <div className="sm:mt-[445px] mt-[55px]  px-4 border-b-2  border-white">
            <h1 className="text-white flex text-5xl">About you</h1>
            <p className="text-white mt-4">
              Alright let’s start with the basics!
            </p>

            <form className="space-y-10 mt-12 mb-20" onSubmit={handleSubmit}>
              {/* name */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2  border-white mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20 ">
                  <input
                    type="text"
                    name="name"
                    placeholder="What's your name?*"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                    required
                  />
                  {/* email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="What's your email?*"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                    required
                  />

                  {/* company */}
                  <input
                    type="text"
                    name="company"
                    placeholder="What company are you from?"
                    value={formData.company}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* services */}

              <div className="sm:mt-[70px] mt-[10px] px-4 border-b-2 border-white">
                <h1 className="text-white flex text-5xl">
                  What services do you need?
                </h1>
                <p className="text-white mt-4">
                  Not sure? Take a guess, we can help you define what you need
                  later!
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {servicesOptions.map((service) => (
                    <div className="flex items-center" key={service}>
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={(e) => {
                          const selectedService = e.target.value;
                          setFormData((prev) => {
                            const isSelected =
                              prev.services.includes(selectedService);
                            return {
                              ...prev,
                              services: isSelected
                                ? prev.services.filter(
                                    (s) => s !== selectedService
                                  )
                                : [...prev.services, selectedService],
                            };
                          });
                        }}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA] bg-black border-[#60A5FA] border-2 focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={service.toLowerCase().replace(/ /g, "-")}
                        className="ml-3 text-white"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* new or rebuild */}

              <div className="sm:mt-[70px] mt-[10px] px-4 border-b-2 border-white">
                <h1 className="text-white flex text-5xl">
                  Is this a new website or a rebuild?
                </h1>
                <p className="text-white mt-4">
                  Looking for something brand new? Or to upgrade your existing
                  site?
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {newOrRebuildOptions.map((option) => (
                    <div className="flex items-center mt-10" key={option}>
                      <input
                        type="radio"
                        name="newOrRebuild"
                        value={option}
                        checked={formData.newOrRebuild === option}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA] bg-black border-[#60A5FA] border-2 focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={option.toLowerCase().replace(/ /g, "-")}
                        className="ml-3 text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* type */}

              <div className="sm:mt-[70px] mt-[10px] px-4 border-b-2 border-white">
                <h1 className="text-white flex text-5xl">
                  What does your website need?
                </h1>
                <p className="text-white mt-4">
                  Looking for a blog, ecommerce site, or something else? Let us
                  know!
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {websiteNeedsOptions.map((type) => (
                    <div className="flex items-center mt-10" key={type}>
                      <input
                        type="radio"
                        name="websiteNeeds"
                        value={type}
                        checked={formData.websiteNeeds === type}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA] bg-black border-[#60A5FA] border-2 focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={type.toLowerCase().replace(/ /g, "-")}
                        className="ml-3 text-white"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* budget */}

              <div className="sm:mt-[70px] mt-[10px] px-4 border-b-2 border-white">
                <h1 className="text-white flex text-5xl mt-12">
                  What’s your monthly budget?
                </h1>
                <p className="text-white mt-4">
                  This is just so we can understand the scale of your project.
                  Think about how much revenue you want your site to generate
                  and find a budget that’s proportional to that goal.
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {budgetOptions.map((option) => (
                    <div className="flex items-center mt-10" key={option}>
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget.includes(option)}
                        onChange={(e) => {
                          const selectedOption = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            budget: prev.budget.includes(selectedOption)
                              ? prev.budget.filter(
                                  (item) => item !== selectedOption
                                ) // Remove if already selected
                              : [selectedOption], // Replace with new single selection
                          }));
                        }}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA] bg-black border-[#60A5FA] border-2 focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={option.toLowerCase().replace(/ /g, "-")}
                        className="ml-3 text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#60A5FA] text-black mt-20 w-full h-16 rounded-full text-3xl hover:bg-black hover:border-[#60A5FA] hover:text-white font-bold hover:border-2 disabled={isSubmitting}"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {responseMessage && (
                <p style={{ color: "green" }}>{responseMessage}</p>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

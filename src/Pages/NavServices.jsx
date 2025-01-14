// pages/Services.jsx
import React from "react";
import ServicesGrid from "@/components/ServicesComp/ServicesGrid";
import CTA from "@/components/ServicesComp/CTA";
import ServicesHero from "@/components/ServicesComp/ServicesHero";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
      <CTA />
    </div>
  );
};

export default Services;

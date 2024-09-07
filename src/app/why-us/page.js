import ClientLogos from "@/components/Global/ClientLogos";
import FirstSec from "@/components/Pages/WhyUs/FirstSec";
import Hero from "@/components/Pages/WhyUs/Hero";
import React from "react";

function page() {
  return (
    <div>
      <div className="container-fluid inner-pages-hero">
        <div className="container">
          <Hero />
        </div>
      </div>
      <div className="container">
        <ClientLogos />
        <FirstSec />
      </div>
    </div>
  );
}

export default page;

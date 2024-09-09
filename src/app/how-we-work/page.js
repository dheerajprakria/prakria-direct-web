import ClientLogos from "@/components/Global/ClientLogos";
import FirstSec from "@/components/Pages/WhyUs/FirstSec";
import Hero from "@/components/Pages/WhyUs/Hero";
import React from "react";

function page() {
  return (
    <div>
      <div
        className="container-fluid inner-pages-hero"
        style={{
          background:
            "url(https://cdn.sanity.io/images/k0dlbavy/production/f53b77fcae7f5c0fb20699d4075860a0fb66a099-6206x2974.png/?auto=format&fit=max&h=950)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Hero />
        </div>
      </div>
      <div className="container">
        <FirstSec />
      </div>
    </div>
  );
}

export default page;

import PricingFaq from "@/components/Pages/PricingPlan/PricingFaq";
import PricingTable from "@/components/Pages/PricingPlan/PricingTable";
import React from "react";

function page() {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          height: "60vh",
        }}
      >
        <div className="container">
          <div className="w-50 m-auto why-us text-center">
            <h1>One subscription for your creative needs</h1>
            <p className="py-3">
              Select the number of monthly credits based on your upcoming
              creative needs. Do not worry, unused credits roll over so no
              dollar is wasted.
            </p>
          </div>
        </div>
      </div>

      <PricingTable />
      <PricingFaq />
    </>
  );
}

export default page;

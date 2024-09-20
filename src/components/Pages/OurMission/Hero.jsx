import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid inner-pages-hero hero"
      style={{
        background:
          "url(https://cdn.sanity.io/images/k0dlbavy/production/f53b77fcae7f5c0fb20699d4075860a0fb66a099-6206x2974.png/?auto=format&fit=max&h=950)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row why-us">
          <div className="col-lg-6 m-auto text-center">
            <h1>Our mission is to be better & Greater</h1>
            <p className="py-3">
              Our astronomical design teams have helped some of the world’s top
              brands leverage a full range of conceptual and production
              expertise to execute sensational campaigns and scale at the speed
              of light.
            </p>
            <button class="button-37" role="button">
              <span class="text">Book A Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

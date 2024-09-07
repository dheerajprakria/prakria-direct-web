import React from "react";

function Hero() {
  return (
    <>
      <div className="row inner-page-hero why-us">
        <div className="col-lg-6 m-auto">
          <h1>Creative at Scale for Ambitious Brands</h1>
          <p className="py-3">
            Smart tools, the best of creative talent, and transparency in
            workflow are some of the key ingredients in our recipe for great
            work. Working with us is like having an in-house creative team at
            your fingertips.
          </p>
          <button class="button-37" role="button">
            <span class="text">Book A Demo</span>
          </button>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://prakriadirect-website.vercel.app/images/landing/createEditRecieve.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;

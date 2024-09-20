import Image from "next/image";
import React from "react";
import "./MarqueeSlider.css";

function Featured() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <h2>Featured Work</h2>
      </div>
      <div className="slider-container ">
        {/* First Row - Left to Right */}
        <div className="marquee-row left-to-right">
          <div className="marquee-content">
            {/* Duplicating the images for a seamless loop */}
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                {[...Array(10)].map((_, index) => (
                  <div className="image-wrapper" key={index}>
                    <Image
                      src="/images/portfolio/featured/1.jpg"
                      alt={`Image ${index + 1}`}
                      width={200}
                      height={200}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="marquee-row right-to-left">
          <div className="marquee-content">
            {/* Duplicating the images for a seamless loop */}
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                {[...Array(10)].map((_, index) => (
                  <div className="image-wrapper" key={index}>
                    <Image
                      src="/images/portfolio/featured/1.jpg"
                      alt={`Image ${index + 1}`}
                      width={200}
                      height={200}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css"

function Testimonials() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">What Our Clients Say</h2>
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Testimonial 1 */}
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="testimonial-card p-4">
                  <p className="testimonial-text">
                    Working with this team has been a game-changer for us.
                    Their creativity and dedication helped us elevate our
                    brand!
                  </p>
                  <h5 className="mt-4">- John Doe, CEO of XYZ Corp</h5>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="testimonial-card p-4">
                  <p className="testimonial-text">
                    Their approach is professional, and the results speak for
                    themselves. We saw a huge increase in engagement!
                  </p>
                  <h5 className="mt-4">- Jane Smith, Marketing Director</h5>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="testimonial-card p-4">
                  <p className="testimonial-text">
                    They helped us streamline our digital strategy, and we
                    couldn’t be more satisfied with the results!
                  </p>
                  <h5 className="mt-4">- Michael Lee, Founder of Startup X</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;

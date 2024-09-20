import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="container-fluid hero"
        style={{
          backgroundImage: "linear-gradient(45deg, #57111175, #ffffff38);",
        }}
      >
        <div className="row">
          <div className="col-lg-4 m-auto">
            <img
              width="400px"
              className="img-fluid"
              src="/images/left.png"
              alt=""
            />
          </div>
          <div className="col-lg-4 m-auto">
            <div>
              <h1 className="text-white">
                Unlimited<span className="text-red fw-bold"> High.</span>{" "}
                <br></br>
                Quality <span className="text-red fw-bold">Designs.</span>{" "}
                <br></br>
                Zero <span className="text-red fw-bold">Hassle.</span>
              </h1>
              <p className="text-white py-3">
                Get creative that performs. Plug into world-class design talent
                powered by AI to make your team faster, more efficient, and
                scalable.
              </p>
              <div>
                <button class="button-85" role="button">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-auto">
            <img
              width="400px"
              className="img-fluid"
              src="/images/right.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

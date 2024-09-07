import React from "react";

function page() {
  return (
    <div>
      <div className="container-fluid book-a-demo">
        <div className="container text-center py-5">
          <div className="py-5">
            <h1>Book a call with us!</h1>
            <p>
              Book a short 20-min demo and discover a new way to get quality
              <br></br>
              design work done reliably and affordably.
            </p>
          </div>

          <div className="row form-bg rounded">
            <div className="col-lg-6 p-5">
              <img
                className="img-fluid"
                src="https://prakriadirect-website.vercel.app/images/landing/binacular.png"
                alt=""
              />
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

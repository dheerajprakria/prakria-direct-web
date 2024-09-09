import React from "react";

function FirstSec() {
  return (
    <div>
      <div className="container firstSec">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h2>
              The{" "}
              <span className="text-danger fw-bold">
                Best Creative partner{" "}
              </span>
              you will ever have
            </h2>
            <p className="mt-3">
              PRAKRIA DIRECT is a creative subscription service, trusted by the
              worlds top brands to get exceptional design faster, more reliably
              and at scale.
            </p>
            <p>
              Work with a global team of strategists and designers, trained on
              the latest AI tools, without the cost and hassle of working with
              traditional agencies and freelancers.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/images/fir.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSec;

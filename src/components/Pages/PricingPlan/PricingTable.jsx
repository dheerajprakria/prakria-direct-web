import React from "react";
import "./Pricing.css";

function PricingTable() {
  return (
    <>
      <div className="container pricing-plan">
        <div className="row">
          {/* Basic Plan */}
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-header">
                <h3 className="text-white px-4">Basic</h3>
              </div>
              <div className="card-body text-white">
                <h2>
                  $19.99 <span style={{ fontSize: "18px" }}>/ month</span>
                </h2>
                <p className="mb-4">
                  For Startups & SMB looking for a creative extension of their
                  team.
                </p>
                <div className="d-grid gap-2 mx-auto mb-4">
                  <button className="btn btn-danger btn-lg" type="button">
                    Book A Call
                  </button>
                </div>
                <h5>Creative talents</h5>
                <ul className="list-unstyled">
                  <li>✔️ 10 Projects</li>
                  <li>✔️ Basic Support</li>
                  <li>✔️ 5GB Storage</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100" style={{border:"2px solid red"}}>
              <div className="card-header">
                <h3 className="text-white px-4">Pro</h3>
              </div>
              <div className="card-body text-white">
                <h2>
                  $19.99 <span style={{ fontSize: "18px" }}>/ month</span>
                </h2>
                <p className="mb-4">
                  For Startups & SMB looking for a creative extension of their
                  team.
                </p>
                <div className="d-grid gap-2 mx-auto mb-4">
                  <button className="btn btn-danger btn-lg" type="button">
                    Book A Call
                  </button>
                </div>
                <h5>Creative talents</h5>
                <ul className="list-unstyled">
                  <li>✔️ 10 Projects</li>
                  <li>✔️ Basic Support</li>
                  <li>✔️ 5GB Storage</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-header">
                <h3 className="text-white px-4">Enterprice</h3>
              </div>
              <div className="card-body text-white">
                <h2>
                  $19.99 <span style={{ fontSize: "18px" }}>/ month</span>
                </h2>
                <p className="mb-4">
                  For Startups & SMB looking for a creative extension of their
                  team.
                </p>
                <div className="d-grid gap-2 mx-auto mb-4">
                  <button className="btn btn-danger btn-lg" type="button">
                    Book A Call
                  </button>
                </div>
                <h5>Creative talents</h5>
                <ul className="list-unstyled">
                  <li>✔️ 10 Projects</li>
                  <li>✔️ Basic Support</li>
                  <li>✔️ 5GB Storage</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                  <li>✔️ Community Access</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingTable;

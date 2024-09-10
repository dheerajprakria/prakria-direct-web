import Link from "next/link";
import React from "react";

function CustomPlan() {
  return (
    <>
      <div className="container text-center">
        <p>Need Custom Plan?</p>
        <h2 className="my-3">Send us a message</h2>
        <div className="btn-group">
          <Link href="/book-a-demo">
            <button className="button-37" role="button">
              <span className="text">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CustomPlan;

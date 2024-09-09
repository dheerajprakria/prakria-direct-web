import React from "react";

function ServicesHero({
  title,
  description,
  imageUrl,
  buttonText = "Book A Demo",
}) {
  return (
    <>
      <div className="container">
        <div className="row inner-page-hero why-us">
          <div className="col-lg-6 m-auto">
            <h1>{title}</h1>
            <p className="py-3">{description}</p>
            <button className="button-37" role="button">
              <span className="text">{buttonText}</span>
            </button>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHero;
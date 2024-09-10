"use client";
import React, { useState } from "react";
import "./ServicePages.css";
import Image from "next/image";
import "../Pages/PricingPlan/Pricing.css";

function ServicePage({ title, description, imageUrl }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();
    const xVal = e.clientX - left;
    const yVal = e.clientY - top;

    // Calculate the rotation based on mouse position
    const rotateX = ((yVal - height / 2) / height) * 10; // X-axis tilt
    const rotateY = ((xVal - width / 2) / width) * 10; // Y-axis tilt

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)" });
  };
  return (
    <>
      <div className="container-fluid services-pages">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <h1>{title}</h1>
              <p className="mb-5 mt-3">{description}</p>
              <button className="button-40" role="button">
                <span className="text">Get Started</span>
              </button>
            </div>
            <div className="col-lg-6">
              <img src={imageUrl} alt={title} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid firstsec bg-black my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex">
                <img
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_124.svg"
                  alt=""
                />
                <div>
                  <h4>Expertise and Innovation</h4>
                  <p>
                    With years of experience in web design, we blend creativity
                    and technical expertise to deliver innovative solutions that
                    set you apart.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <img
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_124.svg"
                  alt=""
                />
                <div>
                  <h4>Expertise and Innovation</h4>
                  <p>
                    With years of experience in web design, we blend creativity
                    and technical expertise to deliver innovative solutions that
                    set you apart.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <img
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_124.svg"
                  alt=""
                />
                <div>
                  <h4>Expertise and Innovation</h4>
                  <p>
                    With years of experience in web design, we blend creativity
                    and technical expertise to deliver innovative solutions that
                    set you apart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container secondsec py-5 my-5">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h2>Get streamlined web design that converts</h2>
            <p>
              More than visually appealing web design, Superside delivers the
              strategic, user-centric solutions you need to drive growth,
              improve user engagement and solidify your online presence.
            </p>
            <p>
              From initial concept to final launch, our veteran web designers
              will work closely with you to craft captivating, user-friendly
              online experiences. The result? Web designs that align with your
              business objectives and help you crush your goals.
            </p>
          </div>
          <div className="col-lg-6 m-auto">
            <img
              className="img-fluid"
              src="/images/web-design/2.png"
              alt=""
              style={style}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>

      <div
        className="container-fluid portfoliosec"
        style={{ padding: "80px 0 300px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Our Work</p>
              <h2>Website design for leading brands</h2>
            </div>
            <div className="col-lg-6 text-end m-auto">
              <button className="btn-lg btn btn-light">See More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="marqueeContainer" style={{ marginTop: "-280px" }}>
        <div className="marqueeContent">
          {/* Repeat the same set of images to create an infinite loop effect */}
          <div className="imageRow">
            <img
              src="/images/web-design/1.png"
              alt="Slide 1"
              width={400}
              height="100%"
            />
            <img
              src="/images/web-design/1.png"
              alt="Slide 2"
              width={400}
              height="100%"
            />
            <img
              src="/images/web-design/1.png"
              alt="Slide 3"
              width={400}
              height="100%"
            />
            <img
              src="/images/web-design/1.png"
              alt="Slide 4"
              width={400}
              height="100%"
            />
            {/* Repeat images */}
            <img
              src="/images/web-design/1.png"
              alt="Slide 1"
              width={400}
              height="100%"
            />
            <img
              src="/images/web-design/1.png"
              alt="Slide 2"
              width={400}
              height="100%"
            />
            <img
              src="/images/web-design/1.png"
              alt="Slide 3"
              width={400}
              height="100%"
            />
            <img
              src="/images/web-design/1.png"
              alt="Slide 4"
              width={400}
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="container secondsec py-5 my-5">
        <div className="row">
          <div className="col-lg-6 text-start m-auto">
            <img
              className="img-fluid"
              src="/images/web-design/2.webp"
              alt=""
              style={style}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="col-lg-6 m-auto">
            <h2>Get streamlined web design that converts</h2>
            <p>
              More than visually appealing web design, Superside delivers the
              strategic, user-centric solutions you need to drive growth,
              improve user engagement and solidify your online presence.
            </p>
            <p>
              From initial concept to final launch, our veteran web designers
              will work closely with you to craft captivating, user-friendly
              online experiences. The result? Web designs that align with your
              business objectives and help you crush your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="container thirdsec my-5 py-5">
        <div className="text-center">
          <h2 className="mb-5">Full-stack web design services</h2>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-card">
              <img
                className="mb-3"
                width="260px"
                src="/images/web-design/3.png"
                alt=""
              />
              <h5>Website Strategy</h5>
              <p>
                Our marketing consulting team can help you craft channel and
                campaign plans that drive traffic to your website.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="btn-group">
            <a href="/book-a-demo">
              <button className="button-37" role="button">
                <span className="text">Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row my-4">
          <div className="col-lg-6 m-auto">
            <p>FAQ</p>
            <h2>Answers to frequently asked questions</h2>
            <img
              className="img-fluid"
              src="https://prakriadirect-website.vercel.app/images/landing/fastTurn.png"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="m-auto">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Where are PRAKRIA Direct&apos;s designers located?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How quick is PRAKRIA Direct&apos;s turnaround time?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How many hours a month will my designer work?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How many hours a month will my designer work?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What happens if I do not like my design?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage;

import Link from "next/link";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="container-fluid header-bg py-2">
        <div className="container py-2">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="logo">
                <Link href="/">
                  <img width="100px" src="/images/logo/logo-white.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="d-flex">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav gap-3">
                        {/* Services with Mega Menu */}
                        <li className="nav-item dropdown mega-dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                          >
                            SERVICES
                          </a>
                          <div className="dropdown-menu mega-menu">
                            <div className="container d-flex">
                              <div className="box d-flex align-items-center">
                                <div className=" py-5 px-4">
                                  <h5 className="fw-bold text-white">
                                    Our Services
                                  </h5>
                                  <h6 className="text-white">
                                    Want to know how we work
                                  </h6>
                                  <small className="text-white">
                                    Book a quick demo and let us answer all your
                                    questions!
                                  </small>
                                  <br></br>
                                  <Link href="">
                                    <h6 className="hover-underline-animation text-white pt-5">
                                      SEE ALL SERVICES ➝
                                    </h6>
                                  </Link>
                                </div>
                              </div>
                              <div className="w-100 p-4">
                                <div className="row align-items-center p-3">
                                  <div className="col-md-4">
                                    <ul>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/print-design"
                                          >
                                            Print Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Custom Creative Print Solutions
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/packaging-design"
                                          >
                                            Packaging Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Innovative Packaging Concepts
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/brand-identity-design"
                                          >
                                            Brand Identity Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Unique Branding That Stands Out
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/digital-marketing"
                                          >
                                            Digital Marketing
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Effective Online Marketing
                                            Strategies
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/presentation-design"
                                          >
                                            Presentation Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Impactful Slides for Storytelling
                                          </small>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <ul>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/photo-video-production"
                                          >
                                            Photo & Video Production
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Engaging Visual Content Creation
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/illustrations"
                                          >
                                            Illustrations
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Creative Illustrations for Any
                                            Medium
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/web-design-development"
                                          >
                                            Web Design & Development
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Modern Websites Built to Perform
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/3d-cgi-design"
                                          >
                                            3D CGI Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            High-Quality 3D Visual Creations
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/ar-vr-design"
                                          >
                                            AR VR Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Immersive and Virtual Reality
                                          </small>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <ul>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/social-media"
                                          >
                                            Social Media
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Strategic Content for Engagement
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/film-animation-vfx"
                                          >
                                            Film, Animation & VFX
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Dynamic Video and Animations
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/ai-powered-design"
                                          >
                                            AI Powered Design
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Smart Design Solutions Using AI
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/consultancy"
                                          >
                                            Consultancy
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Expert Advice for Digital Growth
                                          </small>
                                        </div>
                                      </li>
                                      <li className="d-flex">
                                        <img
                                          src="https://cdn.sanity.io/images/k0dlbavy/production/724c59f61a5d276fb8f348a28d4d935f911eb6da-24x24.svg"
                                          alt=""
                                        />
                                        <div>
                                          <Link
                                            className="hover-underline-animation"
                                            href="/mobile-apps"
                                          >
                                            Mobile Apps
                                          </Link>
                                          <br></br>
                                          <small className="text-dark">
                                            Innovative Mobile Experiences
                                          </small>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="nav-item">
                          <Link href="/how-we-work" className="nav-link">
                            HOW WE WORK
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/our-mission">
                            OUR MISSION
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/our-work" className="nav-link">
                            OUR WORK
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/pricing">
                            PRICING
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-end text-end">
              <div className="btn-group">
                <Link href="/book-a-demo">
                  <button className="button-37" role="button">
                    <span className="text">Book A Demo</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

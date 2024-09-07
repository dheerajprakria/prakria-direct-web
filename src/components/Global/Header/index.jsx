import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <div className="container-fluid header-bg py-2">
        <div className="container  py-2">
          <div className="row">
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
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            SERVICES
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/why-us"
                            className="nav-link"
                            aria-current="page"
                          >
                            WHY US?
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            OUR MISSION
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            OUR WORK
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            PRICING
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
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
                  <button class="button-37" role="button">
                    <span class="text">Book A Demo</span>
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

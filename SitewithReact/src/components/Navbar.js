import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <div className="row">
        <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <div className="containter">
            <h1 id="welcome" style={{ background: "#e18cf16e" }}>
              Welcome to ARbros Official
            </h1>
            <marquee bgcolor="">
              <b>Join our all telegram channels and enjoy....</b>
            </marquee>
          </div>
        </div>
      </div>

      {/* fixed-top for fixed nav bar */}
      <nav
        className={`navbar sticky-top navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>ARbros | Home</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/youtube"
                >
                  YouTube
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/request">
                  Request Section
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Channel Links
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ background: props.mode === "dark" ? "black" : "" }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/arbrosofficial"
                      style={{
                        color: props.mode === "dark" ? "#13b6d7" : "black",
                      }}
                    >
                      ARbros Official
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/arbroshub"
                      style={{
                        color: props.mode === "dark" ? "#13b6d7" : "black",
                      }}
                    >
                      ARbrosHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/armovieshub"
                      style={{
                        color: props.mode === "dark" ? "#13b6d7" : "black",
                      }}
                    >
                      AR Movies Hub 1.3
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="arwebserieshub"
                      style={{
                        color: props.mode === "dark" ? "#13b6d7" : "black",
                      }}
                    >
                      AR WebSeries Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/unratedseries"
                      style={{
                        color: props.mode === "dark" ? "#13b6d7" : "black",
                      }}
                    >
                      Unrated Series
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://t.me/ARbrosHelp"
                      style={{
                        color: props.mode === "dark" ? "#13b6d7" : "black",
                      }}
                    >
                      Need ARbros Help
                    </a>
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <br />
      </nav>
    </>
  );
}

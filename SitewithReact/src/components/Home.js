import React from "react";
import arbros from "../pics/arbros.png";
import armh from "../pics/armh.png";
import arwh from "../pics/arwh.png";
import arus from "../pics/arus.png";
import arh from "../pics/arh.png";
import arsg from "../pics/arsg.png";
import homeh1 from "../pics/homeh1.png";
import homeh2 from "../pics/homeh2.png";

import ARbrosLogo from "../pics/ARbrosLogo.png";

import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="container-fluid">
        <div className={`text-${props.mode === "dark" ? "light" : ""}`}>
          <center>
            <h2>
              <img src={homeh2} class="img-fluid" alt="ARbros Team" />
              Coming Together is a beginning.
              <br /> Keeping Together is Progress.
              <br />
              Working Together is Success.
              <br />
              #ARbros: Developed by Ravi Priy
              <br />
              
              <img src={ARbrosLogo} height="90" width="300" alt="ARbros Logo" />
              <img src={homeh1} class="img-fluid" alt="ARbros Team" />
            </h2>
          </center>
        </div>
      </div>
      <center>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-4 my-1">
              <div className="card bg-transparent" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={arbros}
                  alt="ARbros Official"
                  height="250px"
                />
                <center></center>
                <div className="card-body ">
                  <h5
                    id="cardtext"
                    className="card-title"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    ARbros Main Channel
                  </h5>
                  <hr
                    id="borderradius"
                    style={{ color: props.mode === "dark" ? "cyan" : "black" }}
                  />
                  <p
                    className="card-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Official Telegram Channel for ARbros. Stay join here in case
                    of copyrights infregments.
                  </p>
                  <Link
                    to="/arbrosofficial"
                    className="btn btn-primary"
                    style={{
                      color: props.mode === "dark" ? "white" : "cyan",
                      background: props.mode === "dark" ? "black" : "",
                    }}
                  >
                    ARbros Official
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-1">
              <div className="card bg-transparent" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={arsg}
                  alt=""
                  height="250px"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    AR Support Group
                  </h5>
                  <hr
                    id="borderradius"
                    style={{ color: props.mode === "dark" ? "cyan" : "black" }}
                  />

                  <p
                    className="card-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Are you facing any issue or problem in joining please feel
                    free to message in our group.
                  </p>
                  <Link
                    to="/joingroup"
                    className="btn btn-primary"
                    style={{
                      color: props.mode === "dark" ? "white" : "cyan",
                      background: props.mode === "dark" ? "black" : "",
                    }}
                  >
                    Join Our Group
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-1">
              <div className="card bg-transparent" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={armh}
                  alt=""
                  height="250px"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    AR Movies Hub
                  </h5>
                  <hr
                    id="borderradius"
                    style={{ color: props.mode === "dark" ? "cyan" : "black" }}
                  />

                  <p
                    className="card-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    All types of Movies Upload here. We upload Hindi, English,
                    Tamil, Telugu, etc movies.
                  </p>
                  <Link
                    to="/armovieshub"
                    className="btn btn-primary"
                    style={{
                      color: props.mode === "dark" ? "white" : "cyan",
                      background: props.mode === "dark" ? "black" : "",
                    }}
                  >
                    Join Movies Hub
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 my-1">
              <div className="card bg-transparent" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={arwh}
                  alt="ARbros Official"
                  height="250px"
                />
                <div className="card-body ">
                  <h5
                    id="cardtext"
                    className="card-title"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    AR Webseries Hub
                  </h5>
                  <hr
                    id="borderradius"
                    style={{ color: props.mode === "dark" ? "cyan" : "black" }}
                  />
                  <p
                    className="card-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Join if you are a series lover .A Great Collection of
                    Webseries.
                  </p>
                  <Link
                    to="/arwebserieshub"
                    className="btn btn-primary"
                    style={{
                      color: props.mode === "dark" ? "white" : "cyan",
                      background: props.mode === "dark" ? "black" : "",
                    }}
                  >
                    AR WebSeries Hub
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-1">
              <div className="card bg-transparent" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={arus}
                  alt=""
                  height="250px"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Unrated Series
                  </h5>
                  <hr
                    id="borderradius"
                    style={{ color: props.mode === "dark" ? "cyan" : "black" }}
                  />

                  <p
                    className="card-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Join for AR Unrated Series (mr18zone)
                  </p>
                  <Link
                    to="/unratedseries"
                    className="btn btn-primary"
                    style={{
                      color: props.mode === "dark" ? "white" : "cyan",
                      background: props.mode === "dark" ? "black" : "",
                    }}
                  >
                    Unrated Series
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-1">
              <div className="card bg-transparent" style={{ width: "18rem" }}>
                <img className="card-img-top" src={arh} alt="" height="250px" />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    ARbros Hub
                  </h5>
                  <hr
                    id="borderradius"
                    style={{ color: props.mode === "dark" ? "cyan" : "black" }}
                  />

                  <p
                    className="card-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Individual Telegram channel links of series due to
                    copyrights
                  </p>
                  <Link
                    to="/arbroshub"
                    className="btn btn-primary"
                    style={{
                      color: props.mode === "dark" ? "white" : "cyan",
                      background: props.mode === "dark" ? "black" : "",
                    }}
                  >
                    ARbros Hub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Home;

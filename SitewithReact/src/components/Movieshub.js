import React from "react";
import homeh1 from "../pics/homeh1.png";
import homeh2 from "../pics/homeh2.png";
import arlogo from "../pics/arlogo.png";
function Movieshub(props) {
  return (
    <>
       <div
        className={`container-fluid text-${
          props.mode === "dark" ? "light" : ""
        }`}
      >
        <div>
          <center>
            <img src={homeh2} className="img-fluid" alt="ARbros Team" />
            <div className="row">
              <div className="col-md-4">
                <center></center>
              </div>
              <div className="col-md-4">
                <center>
                  <div className="" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={arlogo}
                      alt="ARbros Official"
                      height="250px"
                    />
                  </div>
                </center>
              </div>
              <div className="col-md-4">
                <center></center>
              </div>
            </div>
            <h1>AR Movies Hub</h1>{" "}
            <h6>
            We decided to go out to the movies tonight.<br/>Join Our Movies Hub For Unlimited Fun<br/>
              A great collection of movies.<br/>
              Action|Adventure|Comedy|Drama|Horror|Romance|Science Fiction|Fantasy|Historical|Crime
            {" "}
              <br />
             This is private channel so you have to send request for join.
             <br/>This Channel may be deleted in future. So Always Stay Connected to us.
            </h6>
            {/* <img src={ARbrosLogo} height="90" width="300" alt="ARbros Logo"/> */}
            <img src={homeh1} className="img-fluid" alt="ARbros Team" />
          </center>
        </div>
        <br />
        <h1>Direct Link</h1>
        <p>Just Copy Link and Paste it to Telegram Saved Message</p>

        <div className="row">
          <div className="col">
            <center>
              <h4>
                <p class="user-select-all">https://t.me/+1Jg73pvr07E0ZmJl</p>
                <p>https://t.me/+1Jg73pvr07E0ZmJl</p>
              </h4>
            </center>
          </div>
          <div className="col"><br/>
            <a
              href="https://t.me/+1Jg73pvr07E0ZmJl"
              className="btn btn-primary"
              style={{
                color: props.mode === "dark" ? "white" : "cyan",
                background: props.mode === "dark" ? "black" : "",
              }}
            >
              Join Channel
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movieshub;

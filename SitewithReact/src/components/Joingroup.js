import React from "react";
import homeh1 from "../pics/homeh1.png";
import homeh2 from "../pics/homeh2.png";
import arlogos from "../pics/arlogos.png";
function Joingroup(props) {
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
                      src={arlogos}
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
            <h1>AR Support Group</h1>{" "}
            <h6>
            We are here to help you.<br/>Please feel to message in Group, <br/>
If you don't like public group then you can also message in private chat
{" "}
              
              <br />
              This channel have direct link of respective movies and series
              
            </h6>
            {/* <img src={ARbrosLogo} height="90" width="300" alt="ARbros Logo"/> */}
            <img src={homeh1} className="img-fluid" alt="ARbros Team" />
          </center>
        </div>
        <br />
        <h1>Direct Link</h1>
        <p>Just Copy Link and Paste it to Telegram Saved Message</p>
        <center>
        <div className="row">
          <div className="col">
            <center>
              <h4>
                <p class="user-select-all">https://t.me/request2AR</p>
                <p>https://t.me/request2AR</p>
                
              </h4>
            </center>
          </div>
          <div className="col">
            <a
              href="http://t.me/request2AR"
              className="btn btn-primary"
              style={{
                color: props.mode === "dark" ? "white" : "cyan",
                background: props.mode === "dark" ? "black" : "",
              }}
            >
              Open in Telegram
            </a>{" "}
            <a
              href="http://t.me/ARbrosHelp"
              className="btn btn-primary  my-1"
              style={{
                color: props.mode === "dark" ? "white" : "cyan",
                background: props.mode === "dark" ? "black" : "",
              }}
            >
              Private Chat
            </a>{" "}
          </div>
        </div>

        <h4>
        <p>Search UserName: | <a href="https://t.me/ARbrosHelp">@ARbrosHelp</a> | For Private Chat or Use Button</p>
        </h4>
        </center>
      </div>
    </>
  );
}

export default Joingroup;

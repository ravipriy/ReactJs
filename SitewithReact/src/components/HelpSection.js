import React from "react";

function HelpSection(props) {
  return (
    <>
      <div
        className={`container-fluid text-${
          props.mode === "dark" ? "light" : ""
        }`}
      >
        <br />
        <center>
          <h1>
            I am Under Maintance
            <br /> ☺☺☺
          </h1>
        </center>
      </div>
    </>
  );
}

export default HelpSection;

import React from "react";

function NewEvent(props) {
  return (
    <>
      <div className="row mx-2 my-1">
        <div className="col-5">
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label mx-1"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>{" "} */}
        </div>
      </div>
    </>
  );
}

export default NewEvent;

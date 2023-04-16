import React from "react";
import aboutusdp from "../pics/aboutusdp.jpg";

import hrabout from "../pics/hrabout.png";
import hraboutinvert from "../pics/hraboutinvert.png";

function About(props) {
  return (
    <>
      <div
        className={`container-fluid text-${
          props.mode === "dark" ? "light" : ""
        }`}
      >
        <div className="row">
          <div className="col-md-6">
            <center>
              <img src={aboutusdp} class="img-fluid" alt="ARbros Team" />
            </center>
          </div>
          <div className="col-md-6">
            <h5>Our Introduction</h5>
            <center>
              <p class="lead">
                ARbros is a team built in the love of friendship. We deliver
                free content via telegram which is already available on all over
                the internet. We do not provide any copyrighted materials.
              </p>
            </center>
            <h5>What We Need </h5>
            <center>
              <p class="lead">
                Dear Members We only want your support.Just show you love to
                ARbros. You can support us by subscribing to our{" "}
                <a href="https://youtube.com/c/ARbrosofficial" target="_blank">
                  YouTube channel
                </a>{" "}
                and sharing with your friends
              </p>
            </center>
            <br />
          </div>
        </div>
        <center>
          <img src={hrabout} class="img-fluid" alt="ARbros Team" />
        </center>

        <div className="row">
          <div className="col-md-6">
            <center>
              <h3>Our Team</h3>
            </center>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div
                className="accordion-item p-100 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <h2 className="accordion-header " id="flush-headingOne">
                  <button
                    style={{
                      backgroundColor:
                        props.mode === "dark" ? "#042743" : "#d2b2f3",
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <b>Ritu Raj</b>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    My responsibility is to complete Movies/Series request from
                    Youtube comments.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item p-100 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    style={{
                      backgroundColor:
                        props.mode === "dark" ? "#042743" : "#d2b2f3",
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <b>Rudra Pratap</b>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    I manages groups messages and also upload contents.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item p-100 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    style={{
                      backgroundColor:
                        props.mode === "dark" ? "#042743" : "#d2b2f3",
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <b>Rajesh Ranjan</b>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Uploading new movies and series is my responsibility.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item p-100 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    style={{
                      backgroundColor:
                        props.mode === "dark" ? "#042743" : "#d2b2f3",
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <b>Arav Aryan</b>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    My responsibility is to complete Movies/Series request from
                    Youtube comments and reply every message in AR Support
                    Group.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <center>
              <h3>Our Group Admins</h3>
            </center>
            <ol>
              <li>Aman Mittal</li>
              <li>Harsh Deep</li>
              <li>Wasim</li>
              <li>Gogol</li>
              <li>Invisible</li>
              <li>Abhishek Bhosale</li>
              <li>Sneha Kumari</li>
              <li>Suraj Kumar</li>
              <li>Rudra Pratap</li>
              <li>Ritu Raj</li>
              <li>Rajesh Ranjan</li>
              <li>Arav Aryan</li>
            </ol>
          </div>
        </div>

        <center>
          <img src={hraboutinvert} class="img-fluid" alt="ARbros Team" />
        </center>
        <br />
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>
              <b>" </b>To the world you may be just <b>one person,</b>but to one
              person you <b>may be the world.</b>
              <b> "</b>
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            DR SEUSS <cite title="Source Title">| Source Internet</cite>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default About;

import React from "react";
import Facebook from "../pics/LogoSM/Facebook.png";
import Instagram from "../pics/LogoSM/Instagram.png";
import SnapChat from "../pics/LogoSM/SnapChat.png";
import YouTube from "../pics/LogoSM/YouTube.png";
import Telegram from "../pics/LogoSM/Telegram.png";
import footerlogo from "../pics/footer.png";

function Footer(props) {
  return (
    <>
    <br/><br/>
      <footer className={`text-${props.mode === "dark" ? "light" : ""}`}>
        <div className="container ">
          <center>
            <img src={footerlogo} class="img-fluid" alt="ARbros Team" />

            <div id="banner">
              <div class="inline-block mx-1" style={{ width: "3rem" }}>
                <a href="https://www.facebook.com/imtheARbros">
                  <img src={Facebook} class="img-fluid" alt="ARbros Team" />
                </a>
              </div>

              <div class="inline-block mx-1" style={{ width: "3rem" }}>
                <a href="https://www.instagram.com/imtheARbros">
                  <img src={Instagram} class="img-fluid" alt="ARbros Team" />
                </a>
              </div>

              <div class="inline-block mx-1" style={{ width: "3rem" }}>
                <a href="https://www.snapchat.com/add/aryan-arav">
                  <img src={SnapChat} class="img-fluid" alt="ARbros Team" />
                </a>
              </div>

              <div class="inline-block mx-1" style={{ width: "3rem" }}>
                <a href="https://www.youtube.com/c/ARBrosofficial">
                  <img src={YouTube} class="img-fluid" alt="ARbros Team" />
                </a>
              </div>
              <div class="inline-block mx-1" style={{ width: "3rem" }}>
                <a href="https://t.me/ARBros">
                  <img src={Telegram} class="img-fluid" alt="ARbros Team" />
                </a>
              </div>
            </div>
          </center>
        </div>

        {
          <div className="text-center ">
            © 2022 Copyright:
            <a className="" href="/">
              {" "}
              ARbros
            </a>
          </div>
        }
      </footer>
      <br /><br/><br/>
    </>
  );
}

export default Footer;

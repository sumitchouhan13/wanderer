import React from "react";
import TravelSvg from "./TravelSvg";
import { TypeAnimation } from "react-type-animation";

function MainLandingPage() {
  return (
    <div id="home" className="main-landing-page-container">
      <div className="main-landing-page-left-content">
        <TypeAnimation
          sequence={["Who we are", 1000, "Who We Are and What We Do", 1000]}
          speed={50}
          style={{ fontSize: "32px", fontWeight: "bold" }}
          repeat={Infinity}
          cursor={false}
        />
        {/* <h1>Who we are ?</h1> */}
        <div className="main-landing-page-left-content-p-div">
          <p>Adventurous globetrotters </p>
          <p>
            seeking fellow travel enthusiasts to journey with. Let's explore the
            world together!
          </p>
        </div>
      </div>
      <div className="main-landing-page-right-content">
        <TravelSvg />
      </div>
    </div>
  );
}

export default MainLandingPage;

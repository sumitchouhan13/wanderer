import React from "react";
import TravelSvg from "./TravelSvg";

function MainLandingPage() {
  return (
    <div className="main-landing-page-container">
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Main Landing Page
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TravelSvg />
      </div>
    </div>
  );
}

export default MainLandingPage;

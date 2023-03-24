import React from "react";
import TravelSvg from "./TravelSvg";

function MainLandingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "50%" }}>Main Landing Page</div>
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

import React from "react";
import Logo from "../images/Travel.gif";

function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="Logo" />
    </div>
  );
}

export default LandingPage;

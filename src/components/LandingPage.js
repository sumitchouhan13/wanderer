import React from "react";
import Logo from "../images/Travel.gif";

function LandingPage() {
  return (
    <div className="landingPageDiv">
      <img src={Logo} alt="Logo" className="landingPageLogo" />
    </div>
  );
}

export default LandingPage;

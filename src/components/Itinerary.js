import React, { useEffect } from "react";
import ItineraryCards from "./ItineraryCards";
import itineraryData from "../data/itineraryData";

function Itinerary() {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      const cart = new Array(20);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);
  return (
    <div className="itinerary-main-container">
      <div className="contact-main-container-heading">Plan Your Adventure</div>
      <div className="itinerary-inner-container">
        {itineraryData.map(({ id, imageUrl, heading, content }) => (
          <ItineraryCards
            key={id}
            imageUrl={imageUrl}
            heading={heading}
            content={content}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Itinerary;

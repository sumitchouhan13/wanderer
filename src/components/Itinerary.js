import React from "react";
import ItineraryCards from "./ItineraryCards";
import itineraryData from "../data/itineraryData";

function Itinerary() {
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
          />
        ))}
      </div>
    </div>
  );
}

export default Itinerary;

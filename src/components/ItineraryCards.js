import React from "react";

function ItineraryCards({ id, imageUrl, heading, content }) {
  return (
    <div className="itinerary-cards-main-container" key={id}>
      <div className="itinerary-cards-container">
        <div className="itinerary-cards-image-container">
          <div className="itinerary-cards-image-inner-container">
            <img
              src={imageUrl}
              alt="card-img"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div style={{ height: "40%" }}>
          <div className="itinerary-cards-content-heading-container">
            {heading}
          </div>
          <div style={{ paddingTop: "10px" }}>{content}</div>
        </div>
        <div>
          <button className="add-to-itinerary-button">Add to Itinerary</button>
        </div>
      </div>
    </div>
  );
}

export default ItineraryCards;

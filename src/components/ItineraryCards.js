import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";

function ItineraryCards({ id, imageUrl, heading, content }) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = (id, heading, event) => {
    let cartContent = localStorage.getItem("cart");
    cartContent = cartContent ? JSON.parse(cartContent) : [];

    if (event.target.innerText === "Add to Itinerary") {
      const itemIndex = cartContent[id];
      if (itemIndex === null) {
        cartContent[id - 1] = Object.assign({ id, heading });
      }
      localStorage.setItem("cart", JSON.stringify(cartContent));
      dispatch(addItem({ id, heading }));
      return;
    }
    cartContent[id - 1] = null;
    localStorage.setItem("cart", JSON.stringify(cartContent));
    dispatch(removeItem(id));
  };
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
          <button
            className={
              cartItems[id - 1] === null
                ? "add-to-itinerary-button"
                : "remove-from-itinerary-button"
            }
            onClick={(event) => handleClick(id, heading, event)}
          >
            {cartItems[id - 1] !== null
              ? "Remove from Itinerary"
              : "Add to Itinerary"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItineraryCards;

import React from "react";
import { useSelector } from "react-redux";

function ItineraryCart() {
  const { total, cartItems } = useSelector((state) => state.cart);
  return (
    <div className="itinerary-cart-container">
      <div className="itinerary-cart-container-left-container">
        <p>Check out your </p>
        <p>Curated Itinerary !!</p>
      </div>
      <div className="itinerary-cart-container-right-container">
        <div className="itinerary-cart-container-right-container-main-div">
          <div className="itinerary-cart-container-right-container-main-div-heading-div">
            <p>Cart</p>
            <p>( {total} )</p>
          </div>
          <div className="itinerary-cart-container-right-container-main-div-content-div">
            {cartItems.map(
              (cartItem, index) =>
                cartItem !== null && <div key={index}>{cartItem.heading}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryCart;

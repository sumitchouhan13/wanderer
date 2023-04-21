import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

function ItineraryCart() {
  const { total, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const cartItemsString = JSON.stringify(
    cartItems.filter((item) => item !== null).map((item) => item.heading)
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() !== "") {
      dispatch(clearCart());
      event.target.submit();
    }
  };

  return (
    <div className="itinerary-cart-container">
      <div className="itinerary-cart-container-left-container">
        <p>Check out your </p>
        <p>Curated Itinerary !!</p>
      </div>
      <div className="itinerary-cart-container-right-container">
        <div className="itinerary-cart-container-right-container-main-div">
          <div className="itinerary-cart-container-right-container-main-div-heading-div">
            <p>Itinerary</p>
            <p>( {total} )</p>
          </div>
          <div className="itinerary-cart-container-right-container-main-div-content-div">
            {cartItems.map(
              (cartItem, index) =>
                cartItem !== null && <div key={index}>{cartItem.heading}</div>
            )}
          </div>
          <div className="itinerary-cart-container-right-container-main-div-form-div">
            <form
              onSubmit={handleSubmit}
              method="POST"
              action="https://getform.io/f/329d821e-f6bd-4c32-972c-bb22fbefea02"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "80%",
              }}
            >
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input name="message" type="hidden" value={cartItemsString} />
              <button className="form-submit-button" type="submit">
                Get Quotation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryCart;

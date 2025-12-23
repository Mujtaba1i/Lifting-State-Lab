import "./cart.css";
import { useState } from "react";

function CartSummary({cartCount, checkout}) {

  return (
    <div className="cart-summary">
      <div>
        <p className="cart-label">Your Cart</p>
        <p className="cart-count">
          {cartCount} items
        </p>
      </div>

      <button onClick={checkout} className="checkout-btn">Checkout →</button>
    </div>
  );
}

export default CartSummary;

import "./cart.css";
import { useState } from "react";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  const products = ["Burger", "Pizza", "Fries"];

  return (
    <div className="product-list">
      <h2 className="section-title">Popular Items</h2>

      <ul>
        {products.map(product => (
          <li key={product} className="product-item">
            <span style={{color: 'grey'}}>{product}</span>
            <button
              className="add-btn"
              onClick={() => setCartCount(cart + 1)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
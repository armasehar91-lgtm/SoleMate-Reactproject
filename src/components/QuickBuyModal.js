
import React, { useState } from "react";

function QuickBuyModal({ product, close, addToCart }) {
  const [size, setSize] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={close}>X</button>

        <h2>Quick Buy</h2>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Rs. {product.price}</p>

        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          {product.sizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <button
          disabled={!size}
          onClick={() => addToCart(product, size)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default QuickBuyModal;

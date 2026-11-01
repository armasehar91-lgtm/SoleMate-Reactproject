
import React, { useState } from "react";

function ProductDetails({ product, close, addToCart }) {
  const [size, setSize] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={close}>X</button>

        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Rs. {product.price}</p>

        <label>Select Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Choose size</option>
          {product.sizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <button
          disabled={!size}
          onClick={() => addToCart(product, size)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

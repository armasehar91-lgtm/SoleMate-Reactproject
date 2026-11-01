
import React from "react";

function ProductCard({ product, onView, onQuickBuy }) {
  return (
    <article className="product-card">

      <div className="product-image">
        <span className="sale-tag">SPECIAL PRICE</span>

        <img src={product.image} alt={product.name} />

        <button
          className="quick-view-button"
          onClick={onView}
        >
          Quick View
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <div className="product-price">
          <strong>Rs. {product.price.toLocaleString("en-PK")}</strong>
          <del>Rs. {product.oldPrice.toLocaleString("en-PK")}</del>
        </div>

        <button
          className="add-to-bag"
          onClick={onQuickBuy}
        >
          ADD TO BAG +
        </button>
      </div>

    </article>
  );
}

export default ProductCard;

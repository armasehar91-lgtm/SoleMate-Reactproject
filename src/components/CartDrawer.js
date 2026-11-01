
import React from "react";

function CartDrawer({ cart, close, removeFromCart, updateQuantity, checkout }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={close}>Close</button>
        <h2>Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.cartId}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <p>Rs. {item.price}</p>

                <button onClick={() => updateQuantity(item.cartId, -1)}>-</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => updateQuantity(item.cartId, 1)}>+</button>

                <button onClick={() => removeFromCart(item.cartId)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <h3>Total: Rs. {total}</h3>

        <button disabled={cart.length === 0} onClick={checkout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartDrawer;

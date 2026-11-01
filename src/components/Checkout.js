
import React from "react";

function Checkout({ cart, close, completeOrder }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={close}>Close</button>
        <h2>Checkout</h2>

        <p>Items: {cart.length}</p>
        <h3>Total: Rs. {total}</h3>

        <form onSubmit={(e) => {
          e.preventDefault();
          completeOrder();
        }}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Delivery Address" required />
          <input type="tel" placeholder="Phone Number" required />

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

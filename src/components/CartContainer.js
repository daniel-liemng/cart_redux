import React from "react";

import CartItem from "./CartItem";

const CartContainer = ({ cart = [] }) => {
  // check cart empty
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bar</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;

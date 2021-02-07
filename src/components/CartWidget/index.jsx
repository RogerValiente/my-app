import React from "react";
import cart from "./cart.png";

function CartWidget() {
  return (
    <a href="/">
      <img src={cart} alt="..." width="60" height="60" />
    </a>
  );
}

export default CartWidget;

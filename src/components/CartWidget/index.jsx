import React from "react";
import cart from "../../imagen/cart.png";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/carrito">
      <img src={cart} alt="..." width="60" height="60" />
    </Link>
  );
}

export default CartWidget;

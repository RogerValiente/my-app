import React from "react";
import listaProductos from "../../data/dataProductos";

const Cart = () => {
  return (
    <div>
      los productos seleccionados son
      {console.log(listaProductos)}
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CTX } from "../../Store/Store";

const Cart = () => {
  const [state, dispatch] = useContext(CTX);
  const { carrito } = state;
  const vaciarCarrito = () => {
    dispatch({
      type: "ELIMINAR_TODO",
    });
  };

  const eliminarProducto = (id) => {
    const prop = carrito.filter((c) => c.item && c.item.id !== id);
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: prop,
    });
  };

  return (
    <div className="container">
      <h2> Los productos seleccionados son:</h2>
      <table className="table bg-info">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        {carrito &&
          carrito.map((d) => (
            <tr>
              <th>
                {" "}
                <img
                  src={d.item && d.item.imagen}
                  alt=""
                  width="150"
                  height="120"
                />
              </th>
              <th>
                <strong>{d.item && d.item.categoria}</strong>
              </th>
              <th>{d.item && d.item.nombre}</th>
              <th>{d.cantidad}</th>
              <th>{d.item.precio}</th>
              <th>
                <button
                  className="btn btn-dark"
                  onClick={() => eliminarProducto(d.item && d.item.id)}
                >
                  Eliminar
                </button>
              </th>
            </tr>
          ))}
      </table>
      <br />
      <button className="btn btn-success " onClick={() => vaciarCarrito()}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;

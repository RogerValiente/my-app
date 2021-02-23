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
    const prop = carrito.filter((c) => c.item && c.item.id != id);
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: prop,
    });
  };

  return (
    <div className="container">
      los productos seleccionados son
      <table className="table">
        {carrito &&
          carrito.map((d) => (
            <tr>
              <td>
                <p>
                  <strong>{d.item && d.item.categoria}</strong>
                  {d.item && d.item.nombre} {d.cantidad}
                </p>{" "}
                <img src={d.item && d.item.imagen} alt="" />
                <button onClick={() => eliminarProducto(d.item && d.item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </table>
      <br />
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import { Link } from "react-router-dom";

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
      {carrito && carrito.length > 0 ? (
        <>
          <h2> Productos seleccionados son:</h2>
          <table className="table bg-info">
            <thead>
              <tr className="text-center">
                <th>Imagen</th>
                <th>Categoria</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            {carrito &&
              carrito.map((d) => (
                <tr className="text-center">
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
                  <th>{d.item.precio * d.cantidad}</th>
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
            <tfoot>
              <tr className="text-white bg-dark">
                <td colSpan="7" className="text-right">
                  Precio Total:{" "}
                  {carrito.reduce((acumulador, actual) => {
                    return acumulador + actual.item.precio * actual.cantidad;
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
          <button className="btn btn-success " onClick={() => vaciarCarrito()}>
            Vaciar Carrito
          </button>
          <br />
        </>
      ) : (
        <>
          <div className="container mb-5 pt-5 btnVolver">
            <Link to="/catalog" className=" btn btn-dark position-fixed">
              Ver Productos
            </Link>
          </div>
          <h1 className="text-center display-3">No hay productos</h1>
        </>
      )}
    </div>
  );
};

export default Cart;

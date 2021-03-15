import React, { useContext, useRef, useState } from "react";
import cart from "./cart.png";
import { Link } from "react-router-dom";
import { CTX } from "../../Store/Store";
import Overlay from "react-bootstrap/Overlay";
import "./styles.css";

function CartWidget() {
  const [state, dispatch] = useContext(CTX);
  const { carrito } = state;
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const eliminarProducto = (id) => {
    const prop = carrito.filter((c) => c.item && c.item.id !== id);
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: prop,
    });
  };

  return (
    <>
      <img
        src={cart}
        alt="..."
        width="60"
        height="60"
        ref={target}
        onClick={() => setShow(!show)}
      />
      <span className="text-white">
        {carrito.reduce((acumulador, actual) => {
          return acumulador + actual.cantidad;
        }, 0)}
      </span>

      <Overlay target={target.current} show={show} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div id="carrito" {...props}>
            {""}
            {carrito && carrito.length > 0 ? (
              <>
                <table className="table bg-white">
                  <thead>
                    <tr className="text-center">
                      <th>Imagen</th>
                      <th>Categoria</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
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
                            width="100"
                            height="80"
                          />
                        </th>
                        <th>
                          <strong>{d.item && d.item.categoria}</strong>
                        </th>
                        <th>{d.item && d.item.nombre}</th>
                        <th>{d.cantidad}</th>
                        <th>{d.item.precio * d.cantidad}</th>
                        <th>
                          <button
                            className="btn btn-dark"
                            onClick={() =>
                              eliminarProducto(d.item && d.item.id)
                            }
                          >
                            X
                          </button>
                        </th>
                      </tr>
                    ))}
                  <tfoot>
                    <tr>
                      <td>
                        <Link to="/carrito" className="btn btn-dark">
                          Ir al carrito
                        </Link>
                      </td>
                      <td
                        colSpan="6"
                        className="text-right text-black font-weight-bold"
                      >
                        Precio Total:{" "}
                        {carrito.reduce((acumulador, actual) => {
                          return (
                            acumulador + actual.item.precio * actual.cantidad
                          );
                        }, 0)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <br />
              </>
            ) : (
              <div className="bg-warning">
                <span className="btn btn-red font-weight-bold col-7">
                  No hay productos
                </span>
                <Link to="/catalog" className="btn btn-dark ">
                  Ir al Catalogo
                </Link>
              </div>
            )}
          </div>
        )}
      </Overlay>
    </>
  );
}

export default CartWidget;

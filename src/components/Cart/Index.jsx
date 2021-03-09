import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import { Link } from "react-router-dom";
import { getFirestore } from "../../data/productos";

const Cart = () => {
  const [state, dispatch] = useContext(CTX);
  const { carrito } = state;

  const vaciarCarrito = () => {
    dispatch({
      type: "ELIMINAR_TODO",
    });
  };

  const eliminarProducto = (id) => {
    console.log(carrito);
    const prop = carrito.filter((c) => c.item && c.item.id !== id);
    console.log(prop);
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: prop,
    });
  };

  const finalizarCompra = () => {
    let name = prompt("Ingresa tu Nombre y Apellido ?");
    let email = prompt("Ingresa tu email ?");
    let telefono = prompt("Ingresa tu telefono ?");
    let newOrden = {
      buyer: {
        name,
        email,
        telefono,
      },
      items: [...carrito],
      total: carrito.reduce((acumulador, actual) => {
        return acumulador + actual.item.precio * actual.cantidad;
      }, 0),
      date: new Date(),
    };
    console.log(newOrden);
    const fsDB = getFirestore();
    const ordenesCollection = fsDB.collection("ordenes");
    ordenesCollection.add(newOrden).then((value) => {
      console.log(value.id);
      alert(`compra exitosa, el id de su compra es  ${value.id}`);
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
                <th></th>
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
                  <th>{d.cantidad} </th>
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
          <button
            className="btn btn-success ml-3"
            onClick={() => {
              finalizarCompra();
            }}
          >
            Finalizar Compra
          </button>
          <Link to="/catalog" className=" btn btn-primary position-fixed ml-3">
            Seguir Comprando
          </Link>
          <br />
        </>
      ) : (
        <>
          <div className="container mb-5 pt-5 btnVolver">
            <Link to="/catalog" className=" btn btn-dark position-fixed">
              Ver Catalogo
            </Link>
          </div>
          <h1 className="text-center display-3">No hay productos</h1>
        </>
      )}
    </div>
  );
};

export default Cart;

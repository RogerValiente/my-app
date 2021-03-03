import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import ItemCount from "../ItemCount/index";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemDetail = ({ product }) => {
  const [state, dispatch] = useContext(CTX);
  const { carrito, productos } = state;

  const onAdd = (cantidad, id) => {
    let productoActual = carrito.filter((c) => c.item && c.item.id === id);
    if (productoActual.length > 0) {
      productoActual[0].cantidad = cantidad;

      let idx = carrito.findIndex((a) => a.id === id);
      carrito.splice(idx, 1, ...productoActual);
      dispatch({
        type: "CARGAR_CARRITO",
        payload: carrito,
      });
    } else {
      let productoActual = productos.filter((c) => c.item.id === id);
      dispatch({
        type: "CARGAR_CARRITO",
        payload: [...carrito, { item: productoActual[0], cantidad: cantidad }],
      });
    }
  };

  const {
    id,
    nombre,
    imagen,
    ingredientes,
    descripcion,
    receta,
    precio,
    stock,
    detalle,
  } = product;
  return (
    <>
      <div className="container mb-5 pt-5 btnVolver">
        <Link to="/catalog" className=" btn btn-dark position-fixed">
          volver
        </Link>
      </div>

      <h1>{nombre}</h1>

      <div className="container mb-5" key={id}>
        <div className="card  bg-danger">
          <div className="card-body">
            <img
              className="card-img-top "
              style={{ borderRadius: "7px", objectFit: "contain" }}
              src={imagen}
              width="220"
              height="300"
              alt="Pasteleria"
            />

            <h3 className="card-title text-center text-white">{nombre}</h3>
            <p className="card-text text-white">{descripcion}</p>
            <p className="card-text text-white">Ingredientes: {ingredientes}</p>
            <h3 className="card-title text-center text-white">{receta}</h3>
            <p className="font-weight-bold text-white">Precio: {precio}</p>
            <p className="font-weight-bold text-white">Stock: {stock}</p>

            <div>
              <h3 className="card-title text-center text-white">
                CAJA MAS DETALLE
              </h3>
              <img
                className="card-img-top"
                style={{ borderRadius: "7px", objectFit: "contain" }}
                src={detalle}
                width="220"
                height="300"
                alt="Pasteleria"
              />
            </div>
            <div className="card-body">
              <ItemCount
                label="comprar"
                stock={5}
                initial={1}
                onAdd={onAdd}
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

import React from "react";
import ItemCount from "../ItemCount/index";
import { Link } from "react-router-dom";
import listaProductos from "../../data/dataProductos";

import "./styles.css";

const Item = ({ producto }) => {
  // const [data, setData] = useState(producto);

  const onAdd = (num) => {
    let itemIndx = listaProductos.findIndex((a) => a.id === producto.id);
    let prod = listaProductos.filter((p) => p.id === producto.id)[0];
    prod.cantidadSolicitada = num;
    listaProductos.splice(itemIndx, 1, prod);
    alert("Se agregó al carrito");
  };

  return (
    <div className="card cardProducto" style={{ width: "18rem" }}>
      <div className="card-body">
        <a href="../../App.jsx">
          <img
            src={producto.imagen}
            width="240"
            height="200"
            alt="Pasteleria"
          />
        </a>
        <h3 className="card-title text-center">{producto.nombre}</h3>
        <p className="card-text">{producto.descripcion}</p>
        <p className="font-weight-bold">Precio: {producto.precio}</p>

        <Link
          to={`/producto/${producto.id}`}
          className="botonProd btn btn-dark"
        >
          Ver mas
        </Link>

        <ItemCount
          stock={5}
          initial={1}
          onAdd={onAdd}
          mostrarTerminarCompra={false}
        />
      </div>
    </div>
  );
};

export default Item;

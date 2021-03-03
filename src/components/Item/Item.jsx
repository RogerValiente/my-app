import { Link } from "react-router-dom";
import "./styles.css";

const Item = ({ producto }) => {
  return (
    <div id="cardProducto" className=" card pb-5" style={{ width: "18rem" }}>
      <div className="card-body ">
        <img src={producto.imagen} width="240" height="200" alt="Pasteleria" />
        <h3 className="card-title text-center">{producto.nombre}</h3>
        <p className="card-text">{producto.descripcion}</p>
        <p className="font-weight-bold">Precio: {producto.precio}</p>

        <Link
          to={`/producto/${producto.categoria}/${producto.id}`}
          className="btn btn-dark btn-lg"
        >
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;

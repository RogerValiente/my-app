import ItemCount from "../ItemCount/index";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const onAdd = (num) => {
    alert(`Se compraran ${num} productos`);
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
      <div className="container mb-5 pt-5">
        <Link to="/catalog" className=" btn btn-dark">
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
              <ItemCount label="comprar" stock={5} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

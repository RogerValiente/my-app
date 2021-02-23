import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemCount = ({ stock, initial, onAdd, label = "Agregar al carrito" }) => {
  const [count, setCount] = useState(initial);
  const [mostrarBotonComprar, setMostrarBotonComprar] = useState(false);
  const restarProd = (num) => {
    if (count <= 1) {
      alert("No se puede menos de esta cantidad");
      return;
    }
    setCount(num);
  };

  const sumarProd = (num) => {
    if (count === stock) {
      alert("No se puede superar esta cantidad");
      return;
    }
    setCount(num);
  };

  const onBuy = () => {
    onAdd(count);
    setMostrarBotonComprar(true);
  };

  return (
    <div>
      {!mostrarBotonComprar ? (
        <>
          <button
            className={`btn btn-dark ${count === 1 ? "disabled" : ""}`}
            onClick={() => restarProd(count - 1)}
          >
            -
          </button>
          <p className="d-inline-flex p-3">{count}</p>
          <button
            className={`btn btn-dark ${count === stock ? "disabled" : ""}`}
            onClick={() => sumarProd(count + 1)}
          >
            +
          </button>
          <button className="ml-5 btn btn-dark" onClick={() => onBuy()}>
            {label}
          </button>
        </>
      ) : (
        <Link to="/carrito" className="btn btn-dark">
          ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemCount;

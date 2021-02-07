import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
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

  return (
    <div>
      <button
        className={`btn btn-primary ${count === 1 ? "disabled" : ""}`}
        onClick={() => restarProd(count - 1)}
      >
        -
      </button>
      <p className="d-inline-flex p-3">{count}</p>
      <button
        className={`btn btn-primary ${count === stock ? "disabled" : ""}`}
        onClick={() => sumarProd(count + 1)}
      >
        +
      </button>
      <button className="boton btn btn-primary" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

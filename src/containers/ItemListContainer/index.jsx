import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import listaProductos from "../../data/dataProductos";
import ItemList from "../../components/itemList/index";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  const myPromise = () => {
    let prods = [];
    if (categoria) {
      prods = listaProductos.filter((p) => p.categoria === categoria);
    } else {
      prods = listaProductos;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(prods), 1000);
    });
  };

  useEffect(() => {
    myPromise().then((resultado) => setProductos(resultado));
  }, [categoria]);

  return (
    <>
      <h1>Nuestros Productos</h1>
      <div className="container card-columns">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;

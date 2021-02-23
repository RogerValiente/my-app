import React, { useState, useEffect } from "react";
import listaProductos from "../../data/dataProductos";
import ItemList from "../../components/itemList/index";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(listaProductos), 1000);
    });

    myPromise.then((resultado) => setProductos(resultado));
  }, []);

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

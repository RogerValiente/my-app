import React, { useEffect, useContext } from "react";
import { getFirestore } from "../../data/productos";
import { CTX } from "../../Store/Store";

import { useParams } from "react-router-dom";
// import listaProductos from "../../data/dataProductos";
import ItemList from "../../components/itemList/index";

const ItemListContainer = () => {
  const [state, dispatch] = useContext(CTX);
  const { productos } = state;
  const { categoria } = useParams();

  useEffect(() => {
    //Crear la conexion de la base de datos
    const baseDatos = getFirestore();
    // Guardamos la refecencia de la coleccion que queremos tomar
    const itemCollection = baseDatos.collection("Items");

    // Tomando los datos
    itemCollection.get().then((value) => {
      let aux = value.docs.map((element) => {
        return element.data();
      });
      console.log(aux);
      if (categoria) {
        aux = aux.filter((p) => p.categoria === categoria);
      }

      dispatch({
        type: "CARGAR_PRODUCTOS",
        payload: aux,
      });
    });
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

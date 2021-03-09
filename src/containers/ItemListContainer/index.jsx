import React, { useEffect, useContext } from "react";
import { getFirestore } from "../../data/productos";
import { CTX } from "../../Store/Store";
import { useParams } from "react-router-dom";
// import listaProductos from "../../data/dataProductos";
import Item from "../../components/Item/Item";

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
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;

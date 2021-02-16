import React from "react";
import listaProductos from "../../data/dataProductos";
import ItemDetail from "../../components/ItemDetail/index";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <>
      {listaProductos
        .filter((p) => p.id === id)
        .map((p) => (
          <ItemDetail key={p.id} product={p} />
        ))}
    </>
  );
};

export default ItemDetailContainer;

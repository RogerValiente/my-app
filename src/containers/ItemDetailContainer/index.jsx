import React, { useContext } from "react";
import ItemDetail from "../../components/ItemDetail/index";
import { useParams } from "react-router-dom";
import { CTX } from "../../Store/Store";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [state, dispatch] = useContext(CTX);
  const { productos } = state;

  return (
    <>
      {productos
        .filter((p) => p.id === id)
        .map((p) => (
          <ItemDetail key={p.id} product={p} />
        ))}
    </>
  );
};

export default ItemDetailContainer;

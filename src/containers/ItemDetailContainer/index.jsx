import React from "react";
import listaProductos from "../../data/dataProductos";
import ItemDetail from "../../components/ItemDetail/index";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   listaProductos.then((resp) => {
  //     setProduct(resp.find((p) => p.id === id));
  //   });
  // }, [id]);
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

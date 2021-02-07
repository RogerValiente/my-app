import ItemCount from "../../components/ItemCount/index";

const ItemListContainer = ({ titulo, descripcion, precio, imagen }) => {
  const onAdd = () => alert("Se agrego el producto al carrito");

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <a href="/">
            <img src={imagen} width="240" height="200" alt="Pasteleria" />
          </a>
          <h3 className="card-title text-center">{titulo}</h3>
          <p>{descripcion}</p>
          <p className="font-weight-bold">Precio: {precio}</p>
          <ItemCount stock={12} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

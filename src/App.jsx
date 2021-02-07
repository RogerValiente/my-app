import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
import torta from "./imagen/torta.jpg";

function App() {
  const data = {
    imagen: torta,
    titulo: "Torta De la Casa",
    descripcion:
      " Una delicia de la casa con sabor a limon, decoracion con frutas y chocolate.",
    precio: "25000",
  };
  return (
    <div>
      <NavbarComponent />
      <ItemListContainer
        imagen={data.imagen}
        titulo={data.titulo}
        descripcion={data.descripcion}
        precio={data.precio}
      />
    </div>
  );
}

export default App;

import torta from "../imagen/Tortas/torta.jpg";
import tortaDeshidratada from "../imagen/Tortas/tortaDeshidratada.jpg";
import TortaFrutos from "../imagen/Tortas/TortaFrutos.jpg";
import charlotte from "../imagen/Postres/charlotte.jpg";
import cupcakes from "../imagen/Postres/cupcakes.jpg";
import pavlova from "../imagen/Postres/pavlova.jpg";
import detalles from "../imagen/Detalles/detalles.jpg";
import galletasPolvorosas from "../imagen/Detalles/galletasPolvorosas.jpg";
import galletasTemáticas from "../imagen/Detalles/galletasTemáticas.jpg";
import caja1 from "../imagen/Cajas/caja1.jpg";
import caja2 from "../imagen/Cajas/caja2.jpg";
import caja3 from "../imagen/Cajas/caja3.jpg";

const listaProductos = [
  {
    id: "1",
    imagen: torta,
    detalle: caja1,
    nombre: "Torta De la Casa",
    descripcion: " Una delicia de la casa.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",

    precio: "20000",
    stock: "5",
  },

  {
    id: "2",
    imagen: tortaDeshidratada,
    detalle: caja2,
    nombre: "Torta Rellena",
    descripcion: " Torta rellena de arequipe.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "25000",
    stock: "5",
  },

  {
    id: "3",
    imagen: TortaFrutos,
    detalle: caja3,
    nombre: "Torta Frutos",
    descripcion: " Torta rellena de sabores.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "25000",
    stock: "5",
  },

  {
    id: "4",
    imagen: charlotte,
    detalle: caja1,
    nombre: "Charlotte",
    descripcion: " Torta fria con frutos rojos.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "15000",
    stock: "5",
  },

  {
    id: "5",
    imagen: cupcakes,
    detalle: caja2,
    nombre: "Cupcakes",
    descripcion: " Una delicia de la casa.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "12000",
    stock: "5",
  },

  {
    id: "6",
    imagen: pavlova,
    detalle: caja3,
    nombre: "Pavlova",
    descripcion: " Especial para cada ocasión.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "10000",
    stock: "5",
  },

  {
    id: "7",
    imagen: detalles,
    detalle: caja1,
    nombre: "Detalles para Ellos",
    descripcion: " Especial para cada ocasión.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "15000",
    stock: "5",
  },

  {
    id: "8",
    imagen: galletasPolvorosas,
    detalle: caja2,
    nombre: "Galleta Polvorosa",
    descripcion: " Especial para cada ocasión.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "10000",
    stock: "5",
  },

  {
    id: "9",
    imagen: galletasTemáticas,
    detalle: caja3,
    nombre: "Galletas Temáticas",
    descripcion: " Se adaptan para tus eventos.",
    ingredientes:
      "Para la torta / tarta, 226 gramos (1 taza) de mantequilla sin sal, 400 gramos (2 tazas) de azúcar, 4 huevos etc.",
    precio: "30000",
    stock: "5",
  },
];

export default listaProductos;

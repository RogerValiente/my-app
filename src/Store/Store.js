import React, { useReducer, createContext } from "react";

export const CTX = createContext();

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "CARGAR_CARRITO":
      localStorage.setItem("carrito", JSON.stringify(payload));
      return {
        ...state,
        carrito: payload,
      };

    case "ELIMINAR_PRODUCTO":
      localStorage.setItem("carrito", JSON.stringify(payload));
      return {
        ...state,
        carrito: payload,
      };

    case "ELIMINAR_TODO":
      localStorage.removeItem("carrito");

      return {
        ...state,
        carrito: [],
      };

    case "CARGAR_PRODUCTOS":
      localStorage.setItem("productos", JSON.stringify(payload));
      return {
        ...state,
        productos: payload,
      };

    case "MODIFICAR_CANTIDAD":
      localStorage.setItem("carrito", JSON.stringify(payload));
      return {
        ...state,
        carrito: payload,
      };

    case "FINALIZAR_COMPRA":
      localStorage.removeItem("carrito");

      return {
        ...state,
        carrito: [],
      };

    default:
      return Error("reducer error");
  }
}
let data = JSON.parse(window.localStorage.getItem("carrito"));
let dataProductos = JSON.parse(window.localStorage.getItem("productos"));
const initialState = {
  carrito: data ? data : [],
  productos: dataProductos ? dataProductos : [],
};

export default function Store(props) {
  const stateHook = useReducer(reducer, initialState);
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}

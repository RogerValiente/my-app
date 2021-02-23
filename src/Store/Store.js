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

    default:
      return Error("reducer error");
  }
}
let data = JSON.parse(window.localStorage.getItem("carrito"));
const initialState = {
  carrito: data ? data : [],
};

export default function Store(props) {
  const stateHook = useReducer(reducer, initialState);
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}

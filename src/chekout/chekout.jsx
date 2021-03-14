import { useState, useContext } from "react";
import { CTX } from "../Store/Store";
import { getFirestore } from "../data/productos";
import firebase from "firebase/app";
import procesarCompra from "./procesarCompra";
import ResumenCompra from "./resumenCompra";

const Checkout = () => {
  const db = getFirestore();
  const [idCompra, setIdCompra] = useState();
  const [data, setData] = useContext(CTX);
  const [verificar, setVerificar] = useState(true);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    tarjeta: "",
    nombreTarjeta: "",
    vencimiento: "",
    cvv: "",
  });

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const compra = {
    usuario: formData,
    items: data.items,
    precioTotal: data.precioTotal,
    fecha: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const handleSubmitForm = (e) => {
    setVerificar(false);
    e.preventDefault();
    db.collection("ventas")
      .add(compra)
      .then(({ id }) => {
        setIdCompra(id);
      })
      .catch((e) => console.log(e));

    setData({
      items: [],
      cantidadTotal: 0,
      envio: 0,
      precioTotal: 0,
    });
  };

  return (
    <>
      {verificar ? (
        <div className="container checkout">
          <div className="form-group shadow-sm rounded-lg">
            <div className="card-header">
              <h5 className="pl-4 ">Resumen de la Compra</h5>
            </div>

            {data.items.map((item) => (
              <ResumenCompra key={item.nombre} compra={item} />
            ))}
            <div className="d-flex justify-content-around">
              <strong>Envio: ${data.envio}</strong>
              <strong>Total: ${data.precioTotal}</strong>
            </div>
          </div>
          <form onSubmit={handleSubmitForm} className="">
            <div className="form-group shadow-sm rounded-lg">
              <div className="card-header">
                <h5 className="pl-4 ">Información del Comprador</h5>
              </div>
              <div className="form-row">
                <div className="col-md-6 col-sm-12 form-group px-4 pt-4">
                  <input
                    type="text"
                    value={FormData.nombre}
                    onChange={handleChangeInput}
                    className="form-control "
                    placeholder="Nombre"
                    name="nombre"
                  />
                </div>
                <div className="col-md-6 col-sm-12 form-group px-4 pt-4">
                  <input
                    type="text"
                    value={FormData.apellido}
                    onChange={handleChangeInput}
                    className="form-control "
                    placeholder="Apellido"
                    name="apellido"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 col-sm-12 form-group px-4 ">
                  <input
                    type="text"
                    value={FormData.email}
                    onChange={handleChangeInput}
                    className="form-control "
                    placeholder="E-mail"
                    name="email"
                  />
                </div>
                <div className="col-md-6 col-sm-12 form-group px-4 ">
                  <input
                    type="text"
                    value={FormData.telefono}
                    onChange={handleChangeInput}
                    className="form-control "
                    placeholder="Teléfono"
                    name="telefono"
                  />
                </div>
              </div>
              <div className="form-row pb-2">
                <div className="col-12 form-group px-4 ">
                  <input
                    type="text"
                    value={FormData.direccion}
                    onChange={handleChangeInput}
                    className="form-control"
                    placeholder="Dirección"
                    name="direccion"
                  />
                </div>
              </div>
            </div>

            <div className="form-group shadow-sm rounded-lg">
              <div className="card-header">
                <h5 className="pl-3">Datos de la tarjeta</h5>
              </div>
              <div className="form-row pt-3">
                <div className="col-md-6 col-sm-12 form-group px-4">
                  <label htmlFor="">Nombre del titular</label>
                  <input
                    type="text"
                    value={FormData.nombreTarjeta}
                    onChange={handleChangeInput}
                    className="form-control"
                    placeholder="Como aparece en la tarjeta"
                    name="nombreTarjeta"
                  />
                </div>
                <div className="col-md-6 col-sm-12 form-group px-4">
                  <label htmlFor="">Número de tarjeta</label>
                  <input
                    type="number"
                    value={FormData.tarjeta}
                    onChange={handleChangeInput}
                    className="form-control"
                    name="tarjeta"
                  />
                </div>
              </div>
              <div className="form-row pb-3">
                <div className="col-md-6 col-sm-12 form-group px-4">
                  <label htmlFor="">Fecha de vencimiento</label>
                  <input
                    type="text"
                    value={FormData.vencimiento}
                    onChange={handleChangeInput}
                    className="form-control"
                    placeholder="MM/AA"
                    name="vencimiento"
                  />
                </div>
                <div className="col-md-6 col-sm-12 form-group px-4">
                  <label htmlFor="">Código de seguridad</label>
                  <input
                    type="number"
                    value={FormData.cvv}
                    onChange={handleChangeInput}
                    className="form-control"
                    placeholder="CVV"
                    name="cvv"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-lg btn-block btn-success text-uppercase shadow-sm rounded-pill m-2"
              disabled={data.precioTotal === 0 ? "disabled" : null}
            >
              Pagar
            </button>
          </form>
        </div>
      ) : (
        <procesarCompra idCompra={idCompra} />
      )}
    </>
  );
};

export default Checkout;

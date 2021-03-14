import React, { useContext, useState } from "react";
import { CTX } from "../../Store/Store";
import { getFirestore } from "../../data/productos";
import { Modal, Button } from "react-bootstrap";
import CompraProcesada from "../Formulario/CompraProcesada";

const Formulario = () => {
  const [state, dispatch] = useContext(CTX);
  const { carrito } = state;
  const [verificar, setVerificar] = useState(true);
  const [idCompra, setIdCompra] = useState();
  console.log(carrito);
  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Fromulario
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    phone: "",
    direccion: "",
    tarjeta: "",
    nombreTarjeta: "",
    vencimiento: "",
    cvv: "",
  });

  const datosInput = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    setVerificar(false);
    event.preventDefault();

    if (datos.nombre === "" || datos.apellido === "") {
      alert("Por favor llenar todo los campos");
      return;
    }
    if (datos.email === "" || datos.phone === "") {
      alert("Por favor llenar todo los campos");
      return;
    }

    let newOrden = {
      buyer: {
        nombre: datos.nombre,
        apellido: datos.apellido,
        email: datos.email,
        telefono: datos.phone,
        direccion: datos.direccion,
      },

      items: [...carrito],
      total: carrito.reduce((acumulador, actual) => {
        return acumulador + actual.item.precio * actual.cantidad;
      }, 0),
      date: new Date(),
    };

    const fsDB = getFirestore();
    const ordenesCollection = fsDB.collection("ordenes");
    ordenesCollection.add(newOrden).then(({ id }) => {
      setIdCompra(id);
    });
    dispatch({
      item: [],
      cantidad: 0,
    });
  };

  const vaciarCarrito = () => {
    dispatch({
      type: "FINALIZAR_COMPRA",
    });
  };

  return (
    <>
      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Procesar Compra
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title className="text-center">Datos del cliente</Modal.Title>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <form className="form-inline" onSubmit={enviarDatos}>
                  <div className="form-group p-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Nombre"
                      name="nombre"
                      onChange={datosInput}
                    />
                  </div>
                  <div className="form-group ml-2 p-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Apellido"
                      name="apellido"
                      onChange={datosInput}
                    />
                  </div>
                  <div className="form-group p-1">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      onChange={datosInput}
                    />
                  </div>
                  <div className="form-group ml-2 p-1">
                    <input
                      name="phone"
                      type="number"
                      placeholder="Phone"
                      className="form-control"
                      onChange={datosInput}
                    />
                  </div>
                  <div className="form-group p-1">
                    <input
                      type="text"
                      className="form-control"
                      name="direccion"
                      placeholder="Dirección"
                      onChange={datosInput}
                    />
                  </div>
                  <div className="form-group p-1">
                    <label for="state_id" className="control-label ml-3">
                      Barrio
                    </label>
                    <select className="form-control ml-2" id="state_id">
                      <option>Seleccionar</option>
                      <option>Medellin</option>
                      <option>Bello</option>
                      <option>Centro</option>
                      <option>Evigado</option>
                      <option>Itagui</option>
                      <option>Guayabal</option>
                      <option>Sabaneta</option>
                    </select>
                  </div>

                  <div className="card-header col">
                    <h5 className="text-center">Datos de la tarjeta</h5>
                  </div>
                  <div className="form-row pt-3">
                    <div className="col-md-6 col-sm-12 form-group px-2">
                      <label htmlFor="">Nombre del titular</label>
                      <input
                        type="text"
                        value={FormData.nombreTarjeta}
                        onChange={datosInput}
                        className="form-control"
                        placeholder="Como aparece en la tarjeta"
                        name="nombreTarjeta"
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 form-group px-2">
                      <label htmlFor="">Número de tarjeta</label>
                      <input
                        type="number"
                        value={FormData.tarjeta}
                        onChange={datosInput}
                        className="form-control"
                        name="tarjeta"
                      />
                    </div>
                  </div>
                  <div className="form-row pb-3">
                    <div className="col-md-6 col-sm-12 form-group px-2">
                      <label htmlFor="">Fecha de vencimiento</label>
                      <input
                        type="text"
                        value={FormData.vencimiento}
                        onChange={datosInput}
                        className="form-control"
                        placeholder="MM/AA"
                        name="vencimiento"
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 form-group px-2">
                      <label htmlFor="">Código de seguridad</label>
                      <input
                        type="number"
                        value={FormData.cvv}
                        onChange={datosInput}
                        className="form-control"
                        placeholder="CVV"
                        name="cvv"
                      />
                    </div>
                  </div>

                  <br />

                  <h4 className="text-center col">
                    Pago total:{" "}
                    {carrito.reduce((acumulador, actual) => {
                      return acumulador + actual.item.precio * actual.cantidad;
                    }, 0)}
                  </h4>
                  {verificar ? (
                    <div className="col-med-3" id="pagar">
                      <button
                        className="btn btn-danger"
                        type="submit"
                        disabled={datos.nombre === "" ? "disabled" : null}
                      >
                        Pagar
                      </button>
                    </div>
                  ) : (
                    <div>
                      <CompraProcesada idCompra={idCompra} />
                      <Modal.Footer>
                        <Button variant="secondary" onClick={vaciarCarrito}>
                          Finalizar
                        </Button>
                      </Modal.Footer>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Formulario;

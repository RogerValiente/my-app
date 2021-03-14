const ResumenCompra = ({ compra }) => {
  return (
    <>
      <div className="row border-bottom d-flex align-items-center py-2 mx-1 rounded-lg shadow-sm">
        <div className="col-3">
          <img
            src={compra.imagen}
            alt={compra.descripcion}
            className=" img-pdto-checkout img-fluid"
          />
        </div>
        <div className="col-7 d-flex justify-content-around flex-wrap">
          <div className="col-sm descripcion-pdto-encarrito">
            {compra.nombre}
          </div>
          <div className="col-sm">
            <div className="row d-flex justify-content-around">
              <div>{compra.cantidadUsuario} u</div>
              <div>$ {compra.cantidadUsuario * compra.precio}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumenCompra;

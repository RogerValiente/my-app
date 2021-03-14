const CompraProcesada = ({ idCompra }) => {
  return (
    <>
      <div className="container checkout text-center">
        <h3>Gracias por tu compra!</h3>
        {/* <img src={} alt="Compra procesada" className="compra" /> */}
        <h5 className="py-4">Tu compra fue procesada con éxito.</h5>
        <div className="btn btn-outline-dark">
          Tu código de compra es: <strong>{idCompra}</strong>
        </div>
      </div>
    </>
  );
};

export default CompraProcesada;

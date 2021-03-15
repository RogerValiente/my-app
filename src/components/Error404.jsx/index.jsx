import { Link } from "react-router-dom";
import error404 from "../../img/error404.jpg";

const Error404 = () => {
  return (
    <>
      <h1 className="error d-flex justify-content-center">
        Oh no! No deberías estar aquí...
      </h1>
      <div className="container d-flex justify-content-center">
        <img
          src={error404}
          alt="error 404: Page not found"
          className="errorImg"
        />
      </div>
      <div className="pt-5 d-flex justify-content-center ">
        <Link to="/catalog" className="btn btn-primary">
          Volver
        </Link>
      </div>
    </>
  );
};

export default Error404;

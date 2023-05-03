import React from "react";
import { Link, useRouteError } from "react-router-dom";
import logo from "../../assets/error.jpg";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="container mx-auto">
        <img className="w-100 h-75" src={logo} alt="" />
      </div>
      <div>
        <h2 className="mb-4 fw-extrabold fs-1 text-info text-center">
          <span className="sr-only">Error</span> {status || 404}
        </h2>
        <p className="fs-3 fw-semibold mb-4 text-warning text-center">{error?.message}</p>
      
      </div>
      <Link
          to="/home"
          className="px-4 py-3 fw-semibold rounded bg-danger text-white"
        >
          Back to home
        </Link>
    </div>
  );
};

export default ErrorPage;

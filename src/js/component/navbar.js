import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid">
        <div className="ms-auto d-flex justify-content-end">
          <Link to="/demo" className="btn btn-success"> {/* Cambia a "/demo" */}
            Agregar un nuevo contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};
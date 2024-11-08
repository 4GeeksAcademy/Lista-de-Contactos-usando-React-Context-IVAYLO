import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid">
        <div className="ms-auto d-flex justify-content-end">
          <Link to="/demo">
            <button className="btn btn-primary me-5">Agregar un nuevo contacto</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
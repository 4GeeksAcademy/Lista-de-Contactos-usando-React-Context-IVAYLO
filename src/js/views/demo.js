import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


import "../../styles/demo.css";

const Demo = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = () => {
        console.log("Contact saved:", formData);
        navigate("/"); 
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="text-center mt-5">
            <h2>Agregar un nuevo contacto</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre completo"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Correo electronico</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electronico"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Telefono de contacto</label>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Telefono de contacto"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={handleSave}>
                    Save
                </button>
            </form>
            <p>
                <a href="#" onClick={handleBack}>Página principal</a>
            </p>
        </div>
    );
};

export default Demo;
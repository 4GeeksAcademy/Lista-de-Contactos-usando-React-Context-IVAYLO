import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../../styles/home.css";
import { Modal, Button } from "react-bootstrap";

export const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // Crea el navegador

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    // Redirige a /demo
    const handleEditClick = () => {
        navigate("/demo");
    };

    return (
        <div className="text-center mt-5">
            <ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
                onEdit={handleEditClick} // Pasa handleEditClick a ContactCard
            />
            <ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
                onEdit={handleEditClick} // Pasa handleEditClick a ContactCard
            />
            <ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
                onEdit={handleEditClick} // Pasa handleEditClick a ContactCard
            />
            <ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
                onEdit={handleEditClick} // Pasa handleEditClick a ContactCard
            />
            {/* Repite lo mismo para las demás ContactCard */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>¿Estás seguro que quieres borrarlo?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¡Si borras esta información se perderá todo!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sí
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

const ContactCard = ({ name, address, phone, email, image, onDelete, onEdit }) => (
    <div className="contact-card">
        <img src={image} alt="profile" className="profile-img" />
        <div className="contact-details">
            <h4>{name}</h4>
            <p><i className="fas fa-map-marker-alt"></i> {address}</p>
            <p><i className="fas fa-phone"></i> {phone}</p>
            <p><i className="fas fa-envelope"></i> {email}</p>
        </div>
        <div className="contact-actions">
            <i className="fas fa-pen" onClick={onEdit}></i> {/* Redirige con onEdit */}
            <i className="fas fa-trash" onClick={onDelete}></i>
        </div>
    </div>
);
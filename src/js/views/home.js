import React, { useState } from "react";
import "../../styles/home.css";
import { Modal, Button } from "react-bootstrap";

export const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
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
            />
			<ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
            />
			<ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
            />
			<ContactCard
                name="Rosana Garcia Perez"
                address="0062 Plaza españa"
                phone="123654789"
                email="rosa@perez.com"
                image="https://img.freepik.com/fotos-premium/curriculum-vitae-caracter-vector-icon-ilustracion-cv-personal-icon-concepto-estilo-dibujos-animados-plano-aislado-blanco-adecuado-pagina-aterrizaje-web-banner-sticker-fondo_839035-1770790.jpg"
                onDelete={handleDeleteClick}
            />
            {/* Agrega el modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Estas seguro que quieres borrarlo?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Si borras esta información se perdera todo!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No!!
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Si!!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

const ContactCard = ({ name, address, phone, email, image, onDelete }) => (
    <div className="contact-card">
        <img src={image} alt="profile" className="profile-img" />
        <div className="contact-details">
            <h4>{name}</h4>
            <p><i className="fas fa-map-marker-alt"></i> {address}</p>
            <p><i className="fas fa-phone"></i> {phone}</p>
            <p><i className="fas fa-envelope"></i> {email}</p>
        </div>
        <div className="contact-actions">
            <i className="fas fa-pen"></i>
            <i className="fas fa-trash" onClick={onDelete}></i>
        </div>
    </div>
);
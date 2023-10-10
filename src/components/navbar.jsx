import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { Cart } from "../pages/cart/Cart";
export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const nav = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <button onClick={openModal}>Cart</button>
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
        ></Modal>
      </div>
    </div>
  );
};

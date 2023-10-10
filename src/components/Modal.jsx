import React, { useState } from "react";
import "./Modal.css";
import { Cart } from "../pages/cart/Cart";
const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <Cart></Cart>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

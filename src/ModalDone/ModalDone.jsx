import React from "react";
import Modal from "react-modal";
import Done from "../assets/DoneBooking.svg";
import "./ModalDone.css";
Modal.setAppElement("#root"); // This is important for accessibility

const ThankYouModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Thank You Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          padding: "2rem",
          borderRadius: "10px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <h5 className="text-black-50">
        Thank you for using Foods We are always here
      </h5>
      <p></p>
      <div>
        <img
          src={Done}
          alt="Waiting"
          style={{ width: "100%", margin: "1rem 0" }}
        />
      </div>
      <button
        onClick={onRequestClose}
        className="btnModal w-75 rounded-pill mt-5"
        type="button"
      >
        Done
      </button>
    </Modal>
  );
};

export default ThankYouModal;

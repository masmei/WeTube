import React from "react";

export default function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Sorry, We can't find what you are looking for &#128532;.</h2>
        <h3>Try something else...</h3>
        <button onClick={() => closeModal(false)}> Close </button>
      </div>
    </div>
  );
}

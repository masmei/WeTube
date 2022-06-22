import React from "react";

export default function Modal({ closeModal, submit, setSubmit, setInput }) {
  
    const handleClick = (e) => {
    e.preventDefault();
    closeModal(false)
    submit ? setSubmit(false) : setSubmit(true);
    setInput("");
    
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Sorry, We can't find what you are looking for &#128532;.</h2>
        <h3>Try something else...</h3>
        <button onClick={handleClick}> Close </button>
      </div>
    </div>
  );
}

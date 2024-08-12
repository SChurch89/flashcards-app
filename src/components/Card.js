import React from 'react';
import './Card.css'; // Make sure to import the CSS file

function Card({ id, onClick, content, flipped, matched }) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''} ${matched ? 'matched' : ''}`} onClick={() => onClick(id)}>
      <div className="card-content">
        <span className="card-back"></span> 
      </div>
      <div className="card-text"><span className="card-text">{content}</span></div>
    </div>
  );
}

export default Card;

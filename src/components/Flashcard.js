import React, { useState } from 'react';
import './Flashcard.css'; 
import pencilImage from '../images/pencil.jpg'
import deleteImage from '../images/delete.jpg';  
import axios from 'axios';

function Flashcard({ card, onEdit, onDelete }) {
  const [flipped, setFlipped] = useState(false); 

  const handleDelete = async (e) => {
    e.stopPropagation(); 
    try {
      console.log(`Attempting to delete flashcard with ID: ${card.id}`);
      await axios.delete(`http://localhost:3000/flashcard/${card.id}`); 
      console.log(`Flashcard with ID: ${card.id} deleted successfully`);
      onDelete(card.id); 
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-front">
        <h3>{card.problem}</h3>
        <button onClick={(e) => {
          e.stopPropagation(); 
          onEdit(card);
        }} className="edit-btn">
          <img src={pencilImage} alt="Edit" />
        </button>
        <button onClick={handleDelete} className="delete-btn">
            <img src={deleteImage} alt="Delete" />
          </button>
      </div>
      <div className="card-back">
        <p>{card.solution}</p>
      </div>
    </div>
  );
}

export default Flashcard;

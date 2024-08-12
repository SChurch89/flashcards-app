import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  
import NotificationContext from './NotificationContext';
import './EditFlashcard.css'; 

function EditFlashcard() {
    const { id } = useParams();
    const navigate = useNavigate();  
    const { showNotification } = useContext(NotificationContext);
    const [card, setCard] = useState({ problem: '', solution: '', difficulty: '', deck: '' });
  
    useEffect(() => {
      axios.get(`http://localhost:3000/flashcard/${id}`)
        .then(response => setCard(response.data))
        .catch(error => console.error('Error fetching card details:', error));
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCard(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the updated card data to the server
        axios.put(`http://localhost:3000/flashcard/${id}`, card)
          .then(() => {
            showNotification('Card Updated'); // Show the notification
            navigate('/flashcard');  // Navigate back to the home screen after saving
          })
          .catch(error => {
            console.error('Failed to update flashcard:', error);
          });
      };
      const handleCancel = () => {
        navigate('/flashcard');  // Navigate back without saving changes
      };
  
    return (
<div className="form-container">
        <h2>Edit Flashcard</h2>
        <form onSubmit={handleSubmit}>
          <label>Problem:</label>
          <input type="text" name="problem" value={card.problem} onChange={handleChange} />

          <label>Solution:</label>
          <textarea name="solution" value={card.solution} onChange={handleChange} />

          <label>Difficulty:</label>
          <input type="number" name="difficulty" value={card.difficulty} onChange={handleChange} />

          <label>Deck:</label>
          <input type="text" name="deck" value={card.deck} onChange={handleChange} />

          <div className="buttons">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
}
  
  export default EditFlashcard;
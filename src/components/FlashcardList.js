import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';
import './FlashcardList.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);
  const [deckFilter, setDeckFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Function to handle the edit button click, navigates to edit page
  const handleEdit = (card) => {
    navigate(`/edit/${card.id}`); // Use navigate with the new API
  };

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  useEffect(() => {
    axios.get('http://localhost:3000/flashcard')
      .then(response => {
        setFlashcards(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch flashcards', error);
      });
  }, []);

  return (
    <div>
      <div className="filters">
        <select value={deckFilter} onChange={e => setDeckFilter(e.target.value)}>
          <option value="All">All Decks</option>
          {/* Dynamically generate deck options based on available decks */}
          {[...new Set(flashcards.map(card => card.deck))].map(deck => (
            <option key={deck} value={deck}>{deck}</option>
          ))}
        </select>
        <select className="filtersdif" value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}>
          <option value="All">All Difficulties</option>
          {/* Dynamically generate difficulty options based on available difficulties */}
          {[...new Set(flashcards.map(card => card.difficulty))].map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>
      <div className="flashcard-grid">
        {flashcards
          .filter(card => (deckFilter === 'All' || card.deck === deckFilter))
          .filter(card => (difficultyFilter === 'All' || card.difficulty === difficultyFilter))
          .map(card => (
            <Flashcard key={card.id} card={card} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
}

export default FlashcardList;

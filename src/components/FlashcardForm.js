import React, { useState } from 'react';
import axios from 'axios';
import './Flashcard.css'; // Ensure this file is correctly linked

function FlashcardForm({ addFlashcard }) {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [deck, setDeck] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = { problem, solution, difficulty, deck };
    try {
      const response = await axios.post('/flashcards', newCard);
      addFlashcard(response.data); // Assuming backend sends back the added flashcard
    } catch (error) {
      console.error('Failed to add flashcard', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Create Flashcard</h2>
        <input
          type="text"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Enter a problem"
          required
        />
        <textarea
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          placeholder="Enter the solution"
          required
        />
        <input
          type="number"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          placeholder="Difficulty rating"
          min="1" max="5"
          required
        />
        <input
          type="text"
          value={deck}
          onChange={(e) => setDeck(e.target.value)}
          placeholder="Enter Deck Name"
          required
        />
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
}

export default FlashcardForm;

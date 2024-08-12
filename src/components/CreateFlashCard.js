import React, { useState } from 'react';
import axios from 'axios';

function CreateFlashcard() {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [deck, setDeck] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/flashcard', {
        problem,
        solution,
        difficulty,
        deck
      });
      alert('Flashcard created successfully!');
      console.log(response.data);
      navigate('/flashcard'); 
    } catch (error) {
      console.error('Error creating flashcard:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Problem" value={problem} onChange={e => setProblem(e.target.value)} required />
      <input type="text" placeholder="Solution" value={solution} onChange={e => setSolution(e.target.value)} required />
      <input type="number" placeholder="Difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} required min="1" max="5" />
      <input type="text" placeholder="Deck Name" value={deck} onChange={e => setDeck(e.target.value)} required />
      <button type="submit">Create Flashcard</button>
    </form>
  );
}

export default CreateFlashcard;

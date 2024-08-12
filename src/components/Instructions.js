// src/Instructions.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Instructions.css'; // Create and use Instructions.css for styling if needed

function Instructions() {
  return (
    <div className="instructions-container">
      <h1>Instructions</h1>
      <section>
        <h2>Game Instructions</h2>
        <p>To play the memory matching game, start by selecting a deck of flashcards. Each card will initially be displayed face down. Click on a card to flip it over and see the problem or question. Try to find and remember the position of matching problem-solution pairs. Click on another card to attempt a match. If the cards match, they will remain face up; otherwise, they will flip back over. Continue until all cards have been correctly matched. The game tests your memory and understanding of the problems and their solutions.</p>
      </section>
      <section>
        <h2>Creating Flashcards</h2>
        <p>To create a new flashcard, navigate to the 'Create Flashcard' section via the navigation menu. Enter the problem or question in the 'Enter a problem' field, and provide the corresponding solution in the 'Enter the solution' field. You can also select a difficulty rating for the problem, which helps when sorting or filtering flashcards later. Optionally, assign the flashcard to a specific deck to keep your studies organized. Once all fields are filled, click 'Add Flashcard' to save the card to your collection.</p>
      </section>
    </div>
  );
}


export default Instructions;

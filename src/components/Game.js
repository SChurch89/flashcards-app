import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import axios from 'axios';

function Game() {
  const [cards, setCards] = useState([]);
  const [flippedIds, setFlippedIds] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('http://localhost:3000/flashcard'); // Replace 'http://your-api-url/flashcards' with your actual API URL
      return response.data; // assuming the response data is directly the array of flashcards
    } catch (error) {
      console.error('Error fetching flashcards:', error);
      return []; // Return an empty array in case of error
    }
  };

  const initializeGame = async () => {
    const flashcards = await fetchFlashcards();
    const initCards = flashcards.flatMap(card => [
      { id: card.id, content: card.problem, type: 'problem' },
      { id: card.id, content: card.solution, type: 'solution' }
    ]);
    setCards(shuffleCards(initCards));
    setFlippedIds([]);
    setMatchedIds([]);
    setMoves(0);
    setMatches(0);
    setTime(0);
    setTimerOn(false);
    toggleTimer();
  };

  const toggleTimer = () => {
    if (timerOn) {
      clearInterval(timerRef.current);
      setTimerOn(false);
    } else {
      setTimerOn(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const handleCardClick = id => {
    if (flippedIds.includes(id) || matchedIds.includes(id) || flippedIds.length === 2) return;
    const newFlippedIds = [...flippedIds, id];
    setFlippedIds(newFlippedIds);
    setMoves(moves => moves + 1);
  
    if (newFlippedIds.length === 2) {
      // Using requestAnimationFrame to queue a new frame before evaluating the match
      requestAnimationFrame(() => {
        setTimeout(() => {
          evaluateMatch(newFlippedIds);
        }, 500); // Consider reducing this timeout if the delay is too long
      });
    }
  };

  const evaluateMatch = (newFlippedIds) => {
    const firstCard = cards.find(card => card.id === newFlippedIds[0]);
    const secondCard = cards.find(card => card.id === newFlippedIds[1]);
    if (firstCard.id === secondCard.id && firstCard.type !== secondCard.type) {
      setMatchedIds(prev => [...prev, ...newFlippedIds]);
      setMatches(matches => matches + 1);
    }
    setFlippedIds([]);
  };

  return (
    <div className="game-container">
      <div className="sidebar">
        <button onClick={initializeGame}>Start New Game</button>
        <button onClick={toggleTimer}>{timerOn ? 'Pause' : 'Resume'}</button>
        <div className="moves">Moves: {moves}</div>
        <div className="timer">Time: {time} seconds</div>
        <div className="matches">Matches: {matches}</div>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            onClick={handleCardClick}
            content={card.content}
            flipped={flippedIds.includes(card.id) || matchedIds.includes(card.id)}
            matched={matchedIds.includes(card.id)}
            type={card.type}
          />
        ))}
      </div>
    </div>
  );
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Game;

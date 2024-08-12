import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you'll create a Home.css for styling

function Home() {
  return (
    <div className="home-container">
    <h1>Recall Rumble</h1>
      <h2>Are you ready to rumble?</h2>
      <div className="button-container">
        <Link to="/create-flashcard" className="button">Create Flashcard</Link>
        <Link to="/flashcard" className="button">View All Flash Cards</Link>
        <Link to="/game" className="button">Begin Game</Link>
        <Link to="/instructions" className="button">Instructions</Link>
        <Link to="/account" className="button">Account</Link>
      </div>
    </div>
  );
}

export default Home;

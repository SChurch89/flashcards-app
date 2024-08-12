import React, { useState } from 'react';
import './SidebarNav.css';
import { Link, useNavigate } from 'react-router-dom';


function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);  // State to toggle sidebar
  const navigate = useNavigate();  // Hook to enable programmatic navigation

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // Toggle the sidebar open/close
  };

  return (
    <div className={`sidebar-nav ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/Instructions" className="nav-link">Instructions</Link>
      <Link to="/account" className="nav-link">Account</Link>
      <Link to="/game" className="nav-link">Game</Link>
      <Link to="/flashcard" className="nav-link">Flashcards</Link>
      <Link to="/create-flashcard" className="nav-link">New Flashcard</Link>
      <Link to="/" className="nav-link">Sign Out</Link>
    </div>
  );
}

export default SidebarNav;

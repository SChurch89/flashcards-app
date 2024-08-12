import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';
import SidebarNav from './components/SidebarNav';
import Instructions from './components/Instructions';
import EditFlashcard from './components/EditFlashcard';
import LoginPage from './components/Login';
import Account from './components/Account';
import Game from './components/Game';
import { NotificationProvider } from './components/NotificationContext'; // Correctly import NotificationProvider
import Notification from './components/Notification';

function App() {
  return (
    <NotificationProvider>
    <Router>
      <div style={{ display: 'flex' }}>
        <SidebarNav />
        <div style={{ marginLeft: '200px', padding: '20px' }}>
            <Notification /> {/* Ensure Notification component is placed here to show notifications */}
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/create-flashcard" element={<FlashcardForm />} />
              <Route path="/flashcard" element={<FlashcardList />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/edit/:id" element={<EditFlashcard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/game" element={<Game />} />
              </Routes>
          </div>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;


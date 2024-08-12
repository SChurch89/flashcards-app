// Notification.js
import React, { useContext } from 'react';
import NotificationContext from './NotificationContext';
import './Notification.css'; 

const Notification = () => {
  const { notification } = useContext(NotificationContext);

  return (
    notification && <div className="notification">{notification}</div>
  );
};

export default Notification;

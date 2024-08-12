import React, { useState, useEffect } from 'react';
import "./Account.css";

function Account() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        lastLoggedIn: ''
    });

    useEffect(() => {
        // Simulate fetching user data from an API
        const fetchData = async () => {
            const userData = {
                username: 'johndoe',
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@example.com',
                lastLoggedIn: new Date().toLocaleString() // Mock last logged in as current time
            };
            setUserDetails(userData);
        };

        fetchData();
    }, []);

    return (
        <div className="account-container">
            <h1>Account Details</h1>
            <div><strong>Username:</strong> {userDetails.username}</div>
            <div><strong>First Name:</strong> {userDetails.firstName}</div>
            <div><strong>Last Name:</strong> {userDetails.lastName}</div>
            <div><strong>Email:</strong> {userDetails.email}</div>
            <div><strong>Last Logged In:</strong> {userDetails.lastLoggedIn}</div>
        </div>
    );
}

export default Account;

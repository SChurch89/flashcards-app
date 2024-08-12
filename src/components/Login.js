import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"; 

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // For demonstration, let's assume any non-empty credentials are valid
        if (username && password) {
            // Perform your login logic here, this example will just navigate
            navigate('/home');
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <div className="login-container">
            <h1>Recall Rumble</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;

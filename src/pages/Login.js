import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSignIn = (e) => {
        e.preventDefault(); // Prevents page refresh

        if (!emailRegex.test(email)) {
            setError('Invalid email format!');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 8 characters, include an uppercase letter, a number, and a special character.');
            return;
        }

        setError('');
        navigate('/'); // Redirect to home page after successful login
    };

    return (
        <div>
            <nav className="navbar">Welcome to WearTrend!</nav>
            <div className="container">
                <h2 className="title">Login</h2>
                <form>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="input-field" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input-field" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {error && <p className="error-text">{error}</p>}
                    <a href="/forgot-password" className="forgot-link">Forgot your password?</a>
                    <button className="submit-btn" onClick={handleSignIn}>Sign in</button>
                </form>
                <p className="register-text">Don't have an account? <a href="/register" className="register-link">Create account</a></p>
            </div>
        </div>
    );
};

export default Login;

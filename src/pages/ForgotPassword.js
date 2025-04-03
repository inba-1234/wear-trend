import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleResetPassword = (e) => {
        e.preventDefault(); // Prevents page refresh

        if (!emailRegex.test(email)) {
            setError('Invalid email format.');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 8 characters, contain an uppercase letter, a number, and a special character.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        alert('Password reset successful!'); // Replace with actual backend logic
    };

    return (
        <div>
            <nav className="navbar">Welcome to WearTrend!</nav>
            <div className="container">
                <h2 className="title">Forgot Password</h2>
                <form>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="input-field" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="New Password" 
                        className="input-field" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="input-field" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    {error && <p className="error-text">{error}</p>}
                    <button className="submit-btn" onClick={handleResetPassword}>Reset Password</button>
                </form>
                <p className="register-text">
                    Remembered your password?  
                    <Link to="/login" className="register-link"> Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;

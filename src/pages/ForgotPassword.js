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
        e.preventDefault();

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

        const userData = {
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        setError('');
        alert('Password reset successful!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <nav className="topbar">Welcome to WearTrend!</nav>
            <div className='page-container'>
            <div className="container">
                <h2 className="title">Forgot Password</h2>
                <form onSubmit={handleResetPassword}>
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
    {error && <p className="error-message">{error}</p>}

    <button type="submit" className="reset-btn">Reset Password</button>
</form>

                <Link to="/" className="link">Back to Login</Link>
            </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

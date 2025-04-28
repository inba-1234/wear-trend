import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const fullNameRegex = /^[A-Za-z\s]{3,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleRegister = (e) => {
        e.preventDefault();
    
        if (!fullNameRegex.test(fullName)) {
            setError('Full Name should be 3-50 characters and contain only letters & spaces.');
            return;
        }
    
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
            fullName: fullName,
            email: email,
            password: password
        };
    
        localStorage.setItem('userData', JSON.stringify(userData));
    
        setError('');
        alert('Registration Successful! Please Login.');
        
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };
    

    return (
        <div>
            <nav className="topbar">Welcome to WearTrend!</nav>
            <div className="page-container">
            <div className="container">
                <h2 className="title">Register</h2>
                <form>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="input-field" 
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} 
                    />
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
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="input-field" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    {error && <p className="error-text">{error}</p>}
                    <button className="submit-btn" onClick={handleRegister}>Register</button>
                </form>
                <p className="register-text">
                    Already have an account? 
                    <Link to="/login" className="register-link"> Login here</Link> 
                </p>
            </div>
            </div>
        </div>
    );
};

export default Register;

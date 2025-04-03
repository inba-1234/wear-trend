import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault(); // Prevents page refresh
        navigate('/landing-page.js'); // Redirects to the landing page
    };

    return (
        <div>
            <nav className="navbar">Welcome to WearTrend!</nav>
            <div className="container">
                <h2 className="title">Login</h2>
                <form>
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="password" placeholder="Password" className="input-field" />
                    <link href="forgot_password.js" className="forgot-link">Forgot your password?</link>
                    <button className="submit-btn" onClick={handleSignIn}>Sign in</button>
                </form>
                <p className="register-text">Don't have an account? <a href="/register" className="register-link">Create account</a></p>
            </div>
        </div>
    );
};

export default Login;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './landing-page';
import Login from './login';
import AllClothing from './AllClothing';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Cart from './Cart';
import Register from './register';
import ForgotPassword from './forgot-password';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/all-clothing" element={<AllClothing />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/regiter" element={<Register />} />
                <Route path="/forgot-password.js" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
}

export default App;
